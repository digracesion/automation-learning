import catalog from "../../pages/Catalog";
import assert from "assert";

export default keyword => {
    const products = catalog.products;
    products.forEach(product=>{
        const productText = product.getText().trim().toLowerCase();
        if (productText){
            console.log(productText)
            assert(
                productText.includes(keyword),
                `The product ${productText} does not contain ${keyword}`
            )
        }
    });
};