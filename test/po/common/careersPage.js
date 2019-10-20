var careersPage = function (){

const epamLogo = element(by.css("img.header__logo"));
const jobForm = element.all(by.className("recruiting-search__form job-search__form")).get(0);
const jobID = element(by.id("new_form_job_search_1445745853_copy-keyword"));

const location = element(by.className("select2-selection__rendered"));
const locationList = element(by.css(".select2-results__options.open"));
const allLocations = element(by.css(".select2-results__option"));

const skills = element.all(by.css("div.selected-params")).get(0);
const skillsList = element(by.className("multi-select-dropdown"));
const skillQA = element(by.cssContainingText(".checkbox-custom-label", "Software Test Engineering"));

const findButton = element.all(by.className("recruiting-search__submit")).get(0);

};

module.exports = new careersPage();