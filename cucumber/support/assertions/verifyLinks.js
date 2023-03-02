import SearchResultsPage, { searchResultsLinks } from "../../pages/SearchResults";

export default(keyword) => {
    SearchResultsPage.searchResultsLinks.forEach(link=>{
        const linkText = link.getText().toLowerCase();
        if (linkText){
            assert(
                linkText.includes(keyword),
                `Link text does not include ${keyword}`
            )
        }
    });
};