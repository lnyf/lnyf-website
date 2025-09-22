"use strict";
exports.id = "component---src-pages-404-js";
exports.ids = ["component---src-pages-404-js"];
exports.modules = {

/***/ "./public/page-data/sq/d/63159454.json":
/*!*********************************************!*\
  !*** ./public/page-data/sq/d/63159454.json ***!
  \*********************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"data":{"site":{"siteMetadata":{"title":"LNYF","description":"A website for the LNYF Festival at WashU","author":"Zachary Young, Harry Gao, Jane Liang, John Paul Pineda"}}}}');

/***/ }),

/***/ "./src/components/Button.js":
/*!**********************************!*\
  !*** ./src/components/Button.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");


const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button.withConfig({
  displayName: "Button__Wrapper"
})(["cursor:pointer;padding:0 40px;font-family:\"Oswald\",sans-serif;text-transform:uppercase;font-weight:400;color:", ";border-radius:30px;background:", ";align-items:center;height:40px;font-size:14px;line-height:14px;border:1px solid ", ";&:hover{background:", ";color:", ";border:1px solid ", ";}@media (min-width:800px){border:1px solid ", ";line-height:17px;font-size:17px;}"], ({
  active
}) => {
  if (active) {
    return ({
      theme
    }) => theme.palette.background;
  } else {
    return ({
      theme
    }) => theme.palette.font;
  }
}, ({
  active
}) => {
  if (active) {
    return ({
      theme
    }) => theme.palette.font;
  } else {
    return "transparent";
  }
}, ({
  theme
}) => theme.palette.secondary1, ({
  theme
}) => theme.palette.font, ({
  theme
}) => theme.palette.background, ({
  theme
}) => theme.palette.background, ({
  theme
}) => theme.palette.secondary1);
const Button = ({
  children,
  active,
  ...rest
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Wrapper, Object.assign({
    active: active
  }, rest), children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);

/***/ }),

/***/ "./src/components/Seo.js":
/*!*******************************!*\
  !*** ./src/components/Seo.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_63159454_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/63159454.json */ "./public/page-data/sq/d/63159454.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");



const Seo = ({
  description = ``,
  lang = `en`,
  meta = [],
  title
}) => {
  const {
    site
  } = _public_page_data_sq_d_63159454_json__WEBPACK_IMPORTED_MODULE_0__.data;
  const metaDescription = description || site.siteMetadata.description;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2__.Helmet, {
    htmlAttributes: {
      lang
    },
    title: title,
    titleTemplate: `%s | ${site.siteMetadata.title}`,
    meta: [{
      name: `description`,
      content: metaDescription
    }, {
      property: `og:title`,
      content: title
    }, {
      property: `og:description`,
      content: metaDescription
    }, {
      property: `og:type`,
      content: `website`
    }, {
      name: `twitter:card`,
      content: `summary`
    }, {
      name: `twitter:creator`,
      content: site.siteMetadata.author
    }, {
      name: `twitter:title`,
      content: title
    }, {
      name: `twitter:description`,
      content: metaDescription
    }].concat(meta)
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Seo);

/***/ }),

/***/ "./src/components/Typography.js":
/*!**************************************!*\
  !*** ./src/components/Typography.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");


const Header1 = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1.withConfig({
  displayName: "Typography__Header1"
})(["margin:0;line-height:56px;font-size:56px;font-weight:600;text-transform:uppercase;font-family:\"Oswald\",sans-serif;color:", ";@media (min-width:800px){margin:-10px 0 0 -5px;line-height:124px;font-size:124px;}"], ({
  color
}) => color);
const Header2 = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h2.withConfig({
  displayName: "Typography__Header2"
})(["margin:0;line-height:42px;font-size:42px;font-weight:400;text-transform:uppercase;font-family:\"Oswald\",sans-serif;color:", ";@media (min-width:800px){line-height:68px;font-size:68px;}"], ({
  color
}) => color);
const Header3 = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h3.withConfig({
  displayName: "Typography__Header3"
})(["margin:0;line-height:34px;font-size:34px;font-weight:700;text-transform:uppercase;font-family:\"Oswald\",sans-serif;color:", ";@media (min-width:800px){line-height:64px;font-size:64px;}"], ({
  color
}) => color);
const Header4 = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h4.withConfig({
  displayName: "Typography__Header4"
})(["margin:0;line-height:28px;font-size:28px;font-weight:400;text-transform:uppercase;font-family:\"Oswald\",sans-serif;color:", ";@media (min-width:800px){line-height:50px;font-size:50px;}"], ({
  color
}) => color);
const Header5 = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h5.withConfig({
  displayName: "Typography__Header5"
})(["margin:0;line-height:22px;font-size:22px;font-weight:300;text-transform:uppercase;font-family:\"Oswald\",sans-serif;color:", ";@media (min-width:800px){line-height:40px;font-size:40px;}"], ({
  color
}) => color);
const Header6 = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h6.withConfig({
  displayName: "Typography__Header6"
})(["margin:0;line-height:24px;font-size:24px;font-weight:400;text-transform:uppercase;font-family:\"Oswald\",sans-serif;color:", ";@media (min-width:800px){line-height:30px;font-size:30px;}"], ({
  color
}) => color);
const LinkFont = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "Typography__LinkFont"
})(["margin:0;line-height:20px;font-size:20px;font-weight:400;text-transform:uppercase;font-family:\"Oswald\",sans-serif;"]);
const FloatingButtonFont = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "Typography__FloatingButtonFont"
})(["margin:0;line-height:17px;font-size:17px;font-weight:500;text-transform:uppercase;font-family:\"Oswald\",sans-serif;"]);
const Subtitle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "Typography__Subtitle"
})(["line-height:20px;font-size:20px;margin:0;font-family:\"Oswald\",sans-serif;text-transform:uppercase;color:", ";@media (min-width:800px){line-height:24px;font-size:24px;}"], ({
  color
}) => color);
const Caption = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "Typography__Caption"
})(["line-height:16px;font-size:16px;font-weight:300;margin:0;font-family:\"Oswald\",sans-serif;text-transform:uppercase;color:", ";@media (min-width:800px){line-height:20px;font-size:20px;}"], ({
  color
}) => color);
const Caption2 = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "Typography__Caption2"
})(["line-height:12px;font-size:12px;font-weight:300;margin:0;font-family:\"Oswald\",sans-serif;text-transform:none;color:", ";@media (min-width:800px){line-height:17px;font-size:17px;}"], ({
  color
}) => color);
const Paragraph = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "Typography__Paragraph"
})(["font-size:16px;margin:0;@media (min-width:800px){font-size:20px;}"]);
const FooterTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "Typography__FooterTitle"
})(["font-size:15px;margin:0;font-family:\"Oswald\",sans-serif;text-transform:uppercase;color:", ";font-weight:300;@media (min-width:800px){font-size:14px;}"], ({
  theme
}) => theme.palette.accent3);
const FooterLink = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "Typography__FooterLink"
})(["font-size:10px;margin:0;font-weight:300;font-family:\"Oswald\",sans-serif;text-transform:uppercase;@media (min-width:800px){font-size:14px;}"]);
const CreditFont = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "Typography__CreditFont"
})(["font-size:10px;margin:0;color:", ";font-weight:200;font-family:\"Oswald\",sans-serif;text-align:center;margin-top:15px;"], ({
  theme
}) => theme.palette.accent3);
const Typography = ({
  variant,
  color,
  children,
  ...rest
}) => {
  switch (variant) {
    case "h1":
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Header1, Object.assign({
        color: color
      }, rest), children);
    case "h2":
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Header2, Object.assign({
        color: color
      }, rest), children);
    case "h3":
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Header3, Object.assign({
        color: color
      }, rest), children);
    case "h4":
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Header4, Object.assign({
        color: color
      }, rest), children);
    case "h5":
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Header5, Object.assign({
        color: color
      }, rest), children);
    case "h6":
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Header6, Object.assign({
        color: color
      }, rest), children);
    case "linkfont":
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(LinkFont, Object.assign({
        color: color
      }, rest), children);
    case "floatingbuttonfont":
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(FloatingButtonFont, Object.assign({
        color: color
      }, rest), children);
    case "subtitle":
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Subtitle, Object.assign({
        color: color
      }, rest), children);
    case "caption":
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Caption, Object.assign({
        color: color
      }, rest), children);
    case "caption2":
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Caption2, Object.assign({
        color: color
      }, rest), children);
    case "footertitle":
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(FooterTitle, Object.assign({
        color: color
      }, rest), children);
    case "footerlink":
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(FooterLink, Object.assign({
        color: color
      }, rest), children);
    case "creditfont":
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(CreditFont, Object.assign({
        color: color
      }, rest), children);
    default:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Paragraph, Object.assign({
        color: color
      }, rest), children);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Typography);

/***/ }),

/***/ "./src/pages/404.js?export=default":
/*!*****************************************!*\
  !*** ./src/pages/404.js?export=default ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _components_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Typography */ "./src/components/Typography.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Button */ "./src/components/Button.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _components_Seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Seo */ "./src/components/Seo.js");






const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].main.withConfig({
  displayName: "sc-404__Wrapper"
})(["display:flex;flex-direction:column;align-items:flex-start;padding:100px 50px;"]);
const NotFoundPage = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Wrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Seo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "404"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "h3"
  }, "Page not found"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], null, "Sorry, we couldn't find the page you're looking for."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_3__["default"], null, "GO BACK")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFoundPage);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-404-js.js.map