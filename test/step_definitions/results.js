var resultsPage = require('../po/page/resultsPage');
var provider = require('../po/page/pageObjectProvider');

var ResultsSteps = function () {

    this.When(/^I open Search panel/, function () {
        return resultsPage.openSearch();
    });

    this.Then(/^I should see a search panel opened/, function () {
        return resultsPage.searchPanelOpened();
    });

    this.Then(/^I should search job/, function(){
        return resultsPage.performSearch();
    });

    this.Then(/^I should search job with dropdown/, function(){
        return resultsPage.performSearchWithDropdown();
    });

};

module.exports = ResultsSteps;

