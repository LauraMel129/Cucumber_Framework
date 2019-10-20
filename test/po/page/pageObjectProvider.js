var PAGE_OBJECT_MAP = {
    "about": "./aboutPage",
    "careers": "./careersPage"

};

module.exports.getPageObjects = function (pageName) {
    return require(PAGE_OBJECT_MAP[pageName]);

};
