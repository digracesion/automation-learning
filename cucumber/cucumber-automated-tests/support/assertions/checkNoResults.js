import catalog from "../../pages/Catalog";
import assert from "assert";

export default ()=>{
    const noResultsErrorMessage = catalog.noResultsErrorMessage;

    assert(
        noResultsErrorMessage.getText().includes("No results were found for your search"),
        "No results were found for your search"
    );
}