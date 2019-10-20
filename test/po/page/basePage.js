var aboutPage = require('../common/aboutPage.js');
var navigationBar = require('../common/navigationBar.js');
var searchResults = require('../common/searchResults.js');

var BasePage = function () {

    this.url = 'http://www.epam.com/';
    this.backgroundVideo = element(by.css('video.background-video__container'));
    
    this.basePageShouldBeFullyDisplayed = function () {
        var self = this;
        return self.backgroundVideo.isDisplayed().then(function (isDisplayed) {
            return expect(isDisplayed).to.be.true;

        })
    };

    this.searchResults = searchResults;
    this.navigationBar = navigationBar;
    this.aboutPage = aboutPage;


    this.visit = function () {
        return browser.get(this.url);
    };

    this.checkPageTitle = function (pageTitle) {
        return browser.getTitle().then(function (title) {
            return title === pageTitle;
        });
    };


    this.methodCommonForAllPages = function () {
        return "method"
    };

    this.hitEnter = function () {
        return browser.actions().sendKeys(protractor.Key.ENTER).perform();
    };


};

module.exports = new BasePage();