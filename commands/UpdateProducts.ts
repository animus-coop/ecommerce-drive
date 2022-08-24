import "reflect-metadata";
import { container } from "tsyringe";
import ProductService from "../src/services/ProductService";
import CategoryService from "../src/services/CategoryService";
import GoogleSheetService from "../src/services/GoogleSheetService";
import { slugify } from "../helpers/slug";

type productType = {
  stock: boolean;
  code: number;
  name: string;
  minium: string;
  price: number;
  category: string;
  seller: string;
};


function serializingProducts(
  products: Array<Array<string>>
): Array<productType> {
  const serializeProducts = [];

  products.map((product, i) => {
    if (i !== 0) {
      serializeProducts.push({
        stock: product[0] == "1",
        code: parseInt(product[1]),
        name: product[2],
        minium: product[3],
        price: parseFloat(product[4]),
        category: slugify(product[5]),
        seller: product[6]
      });
    }
  });
  return serializeProducts;
}

async function saveProductsOnMongo(
  products: Array<productType>
): Promise<object> {
  try {
    const productService = container.resolve(ProductService);

    await productService.clearAll();

    await Promise.all(products.map(async (product) => {
      await productService.saveProduct(product)
    }));

    console.log("Products saved succesfully");
    return { success: true };
  } catch (e) {
    console.log(e);
    return { error: e };
  }
}

async function saveCategories(
  products: Array<productType>
): Promise<object> {
  try {
    const categoryService = container.resolve(CategoryService);

    const categories = [];

    await categoryService.clearAll();

    products.map((product) => {
      if (!categories.includes(product.category)) {
        categories.push(product.category);
      }
    });

    Promise.all(categories.map(async (category) => {
      await categoryService.saveCategory(category);
    }));

    console.log("Categories saved succesfully");
    return { success: true };
  } catch (e) {
    console.log(e);
    return { error: e };
  }
}

export async function updateProducts(): Promise<object> {
  try {
    const googleSheetInstance = new GoogleSheetService("products");
    const products: Array<Array<string>> = await googleSheetInstance.getGoogleSheetData();
    
    const productsFormated: Array<productType> = serializingProducts(products);

    await saveProductsOnMongo(productsFormated);
    await saveCategories(productsFormated);

    return { success: true };
  } catch (e) {
    console.log(e, "??");
    return { error: e };
  }
}

