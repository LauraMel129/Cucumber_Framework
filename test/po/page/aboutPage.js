var chai = require('chai');
var expect = chai.expect;

var BasePage = require('./basePage');

function AboutPage() {

    this.openAboutPage = function () {
        var self =this;
        return self.navigationBar.clickAbout();
    };  

    this.getTitle = function (done) {
        browser.get('https://www.epam.com/careers')
            .then(() => expect(browser.getTitle()).toEqual('About'))
            .finally(done);
    };

    this.sectionIsVisible = function (done) {
        browser.wait(EC.visibilityOf(section))
            .then(() => browser.wait(EC.visibilityOf(title)))
            .then(() => {
                expect(section.isDisplayed).toBeTruthy();
            })
            .finally(done);
    };

    this.aboutPageShouldBeFullyDisplayed = function () {
        var self = this;
        return self.youTubeVideo.isDisplayed().then(function (isDisplayed) {
            return expect(isDisplayed).to.be.true;

        })
    };

    this.methodOnlyForAboutPage = function () {
        return "method for about page"
    };

}

AboutPage.prototype = BasePage;
module.exports = new AboutPage();