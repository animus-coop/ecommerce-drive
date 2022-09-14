import  mongoose, { Schema, model,Document } from "mongoose";

interface Product {
  code: number;
  name: string;
  price: number;
  minimum: string;
  qty: number;
  total: number
};

export interface OrderI {
  email: string;
  products: Product[];
};

interface BaseOrderDocument extends OrderI,Document {}

const Order = new Schema<BaseOrderDocument>({
  email: { type: "string" },
  products: [{ code: "number", name: "string", price: "number", minimum: "string", qty: "number", total:"number" }]
});

Order.statics.createOrder = async function(order: OrderI) {
  await this.create(order);
};

Order.statics.getOrdersCount = async function() {
  const count = await this.countDocuments({});
  return count;
};

Order.statics.getUserOrder = async function(email: string) {
  const order = await this.find({email});
  return order;
};

Order.statics.getOrdersToPost = async function() {
  const allOrders = await this.find({});
  const formattedOrders = [];
  allOrders.map((order) => {
    order.products.map((product) => {
      const newOrder = {
        email: order.email,
        product: product.name,
        code: product.code,
        cantidad: product.qty
      }
      formattedOrders.push(newOrder);
    })
  });
  return formattedOrders;
}

Order.statics.deleteAllOrders = async function() {
  await this.deleteMany({});
}

if (!mongoose.models.Order){
  model<BaseOrderDocument>("Order", Order); 
}

export default mongoose.models.Order;
