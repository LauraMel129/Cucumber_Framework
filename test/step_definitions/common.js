var page = require('../po/page/basePage');
var provider = require('../po/page/pageObjectProvider');

var CommonSteps = function () {

    this.Given(/^I am on "([^"]*)" page$/, function (pageName) {
        return provider.getPageObjects(pageName).visit();
    });

    this.When(/^I perform a search of "([^"]*)"$/, function (searchTerm) {
        return page.searchResults.performSearch(searchTerm);
    });

    this.When(/^I perform a search of "([^"]*)" with "([^"]*)" value$/, function (searchTerm, filterName) {
        return page.searchResults.performSearchWithDropdown(searchTerm, filterName);
    });

    this.When(/^I open About page$/, function () {
        return page.navigationBar.clickAbout();
    });

    this.When(/^I open careers page$/, function () {
        return page.navigationBar.clickCareers();
    });

    this.When(/^I open Search page$/, function () {
        return page.navigationBar.clickSearch();
    });

    this.When(/^I am using step for all pages$/, function () {
        return page.methodCommonForAllPages();
    });

};

module.exports = CommonSteps;

