import Swal from "sweetalert2";

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
