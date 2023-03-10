import home from "../../pages/Home";

export default page => {
    if (page=="Home"){
        browser.url(home.url);
    }
    else{
        console.log(`Invalid page ${page}`);
        alert(`Invalid page ${page}`);
    }
};