var careersPage = require('../po/page/careersPage').default;

var SearchJob = function () {


    this.Then(/^Title should be displayed/, function () {
        return careersPage.getTitle();
    });

    this.Then(/^Careers page should be displayed/, function () {
        return careersPage.pageIsLoaded();
    });

    this.Then(/^I should be able to use Job search/, function () {
        return careersPage.allowSearchJob();
    });

};

module.exports = SearchJob;
