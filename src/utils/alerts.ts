import Swal from "sweetalert2";
import {CartProduct} from "../global/types";

export function noStockAlert(currentStock: number, unsavedQty: number, redirectToCart: () => void) {
    return Swal.fire({
        showCancelButton: unsavedQty > 0,
        confirmButtonText: "Ok",
        confirmButtonColor: "#db8704",
        cancelButtonText: "Ver mi pedido",
        icon: 'warning',
        title: 'No hay suficiente stock para agregar esa cantidad a tu carrito',
        html : `
        ${unsavedQty > 0 && unsavedQty <= currentStock ? 
            `<b>Recordá que tenes ${unsavedQty} unidad${unsavedQty > 1 ? "es" : ""} de este producto en tu carrito sin guardar</b>` : ""
        }
        ${unsavedQty > 0 && unsavedQty > currentStock ?
            `
            Tenés ${unsavedQty} unidad${unsavedQty > 1 ? "es" : ""} de este producto sin guardar en tu carrito, que por falta de stock ya no están disponibles.
            Recordá guardar tu orden después de agregar los productos que necesites
            ` : ""
        }`,
        footer: `${unsavedQty > currentStock ? "Esto puede deberse a que otro usuario guardó el producto en su carrito que vos. Sentimos las molestias" : ""}`
    }).then((result) => {
        if (result.isDismissed) {
            redirectToCart();
        }
    });
}

export function multipleProductsNoStockAlert(products: Array<{name: string, stock: number, unsavedQty: number}>) {
    return Swal.fire({
        confirmButtonText: "Ok",
        confirmButtonColor: "#db8704",
        icon: 'warning',
        title: 'Algunos de los productos que habías agregado a tu carrito ya no tienen stock. Revisá su cantidad',
        html : `
        <ul>
            ${products.map(product => {
                return `<li>${product.name}: Quedan ${product.stock} disponibles y tenés ${product.unsavedQty} sin guardar</li>`
            }).join("")}
        `
    })
}

export function confirmProductDeletionAlert(product: CartProduct, onConfirm: () => void) {
    return Swal.fire({
        html: `¿Estás seguro que querés eliminar todas las unidades de "${product.name}" de tu carrito?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: "#db8704",
        cancelButtonColor: "#d33",
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar',
        footer: 'Recordá que para hacer efectivos los cambios tenés que guardar tu pedido nuevamente'
    }).then((result) => {
        if (result.isConfirmed) {
            onConfirm();
        }
    })
}

export function confirmOrderDeletionAlert(onConfirm: () => void) {
    return Swal.fire({
        title: `¿Estás seguro que querés cancelar tu pedido?`,
        html: `Si lo hacés, vas a perder todos los productos que agregaste a tu carrito`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: "#db8704",
        cancelButtonColor: "#d33",
        confirmButtonText: 'Sí, cancelar',
        cancelButtonText: 'No, volver',
    }).then((result) => {
        if (result.isConfirmed) {
            onConfirm();
        }
    })
}
