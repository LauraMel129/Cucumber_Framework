var helper = require('../../support/helper');

var EC = protractor.ExpectedConditions;

var SearchResults = function () {
    const search = element(by.id("new_form_search"));
    const searchDropdown = element.all(by.cssContainingText("frequent-searches__item","Blockchain"))
    const SearchResults = element(by.css("search-results__counter"))
    const searchButton = element(by.css("button.header-search__submit"))
    const SearchPanel = element(by.css('header-search__panel opened'))

};

module.exports = new SearchResults();