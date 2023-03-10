import catalog from "../../pages/Catalog";
import assert from "assert";

export default toBeFound => {
    const products = catalog.products;
    if (toBeFound){
        assert(products.length > 0, "No products were found");
    }
    else{
        assert(products.length === 0, "Products were found");
    }
};