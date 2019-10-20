var HelperSteps = function () {

    this.setValueInDropdown = function (text) {
        return element(by.cssContainingText('aria-label', text)).click();
    }
};

module.exports = new HelperSteps();