var navigationBar = function () {

    //Footer elements and methods
    this.navigationContainer = element(by.className('header__content'));
    this.Insights = element(by.cssContainingText('top-navigation__item-link', 'Insights'));
    this.About = element(by.cssContainingText('top-navigation__item-link', 'About'));
    this.whatWeDo = element(by.cssContainingText('top-navigation__item-link', 'What We Do'));
    this.howWeDoIt = element(by.cssContainingText('top-navigation__item-link', 'How We Do It'));
    this.Search = element(by.className('header-search__button header__icon'));
    this.Careers = element(by.className('top-navigation__item-link','Careers'));
};

module.exports = new navigationBar();