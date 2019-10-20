var aboutPage = require('../po/page/aboutPage');


var AboutPageOpen = function () {

    this.When(/^I open About page/, function () {
        return aboutPage.openAboutPage();
    });

    this.Then(/^About title should be displayed/, function () {
        return careersPage.getTitle();
    });
};

module.exports = AboutPageOpen;

