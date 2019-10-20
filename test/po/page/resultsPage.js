var chai = require('chai');
var expect = chai.expect;

var BasePage = require('./basePage');

function ResultsPage() {

    this.openSearch=function (){
        var self = this;
        return self.search.click();
    };
    this.searchPanelOpened = function () {
        browser.wait(EC.visibilityOf(searchPanel))
    };

    this.performSearch = function () {
        var self = this;
        return self.search.sendKeys("job")
            .then(function () {
                return self.searchButton.click();
            }).then(function () {
                return require('../page/resultsPage');
            });
    };

    this.performSearchWithDropdown = function (searchTerm, filterName) {
        var self = this;
        return self.setValueFromDropdown(filterName)
            .then(function () {
                return self.searchInput.click();
            })
            .then(function () {
                return self.searchDropdown.click();
            })
            .then(function(){
                return self.searchButton.click();
            }).then(function () {
                return require('../page/resultsPage');
            });
    };

};

ResultsPage.prototype = BasePage;
module.exports = new ResultsPage();





