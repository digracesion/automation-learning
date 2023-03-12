import assert from "assert";

export default title => {
    assert(
        browser.getTitle() === title,
        `Title, ${browser.getTitle()} is not equal to ${title}`
    );
};