"use strict";
exports.id = 209;
exports.ids = [209];
exports.modules = {

/***/ 4289:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2224);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7131);
const Wrapper=styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({displayName:"TwoColumn__Wrapper",componentId:"sc-13tl2g8-0"})(["display:flex;flex-direction:column;margin-right:10px;margin-left:10px;> :first-child{margin-bottom:","px;}> :last-child{margin-top:","px;}@media (min-width:1000px){flex-direction:row;> :first-child{margin-bottom:0px;order:",";",";}> :last-child{order:",";}}"],({spacing})=>spacing+20,({spacing})=>spacing+40,({inverse})=>inverse?2:undefined,({inverse,spacing})=>inverse?`margin-left: ${spacing}px`:`margin-right: ${spacing}px`,({inverse})=>inverse?1:undefined);const TwoColumn=({children,inverse,spacing=0})=>{return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Wrapper,{inverse:inverse,spacing:spacing},children);};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TwoColumn);

/***/ }),

/***/ 4566:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2224);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5630);
/* harmony import */ var _components_TwoColumn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4289);
/* harmony import */ var _components_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3980);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7131);
/* harmony import */ var _components_Underline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5605);
const StyledContainer=(0,styled_components__WEBPACK_IMPORTED_MODULE_5__["default"])(_components_Container__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A).withConfig({displayName:"InnerPage__StyledContainer",componentId:"sc-6t1v6a-0"})(["margin-top:60px;padding-top:30px;"]);const FilterColumn=styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({displayName:"InnerPage__FilterColumn",componentId:"sc-6t1v6a-1"})(["@media (min-width:800px){flex-basis:250px;flex-shrink:0;}"]);const FilterContent=styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({displayName:"InnerPage__FilterContent",componentId:"sc-6t1v6a-2"})(["padding:20px 0;"]);const ContentColumn=styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({displayName:"InnerPage__ContentColumn",componentId:"sc-6t1v6a-3"})(["flex-grow:1;"]);const InnerPage=({title,buttons,children})=>{return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledContainer,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_TwoColumn__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{spacing:40},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FilterColumn,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Typography__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{variant:"h2"},title),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Underline__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FilterContent,null,buttons)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ContentColumn,null,children)));};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InnerPage);

/***/ }),

/***/ 5351:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2224);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(654);
/* harmony import */ var _components_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3980);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7131);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(529);
/* harmony import */ var _components_InnerPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4566);
/* harmony import */ var _components_Seo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5032);
const StyledButton=(0,styled_components__WEBPACK_IMPORTED_MODULE_6__["default"])(_components_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A).withConfig({displayName:"contact__StyledButton",componentId:"sc-u8q1e5-0"})(["align-self:flex-start;"]);const ContactForm=styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].form.withConfig({displayName:"contact__ContactForm",componentId:"sc-u8q1e5-1"})(["display:flex;flex-direction:column;"]);const ContactSubject=styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].input.withConfig({displayName:"contact__ContactSubject",componentId:"sc-u8q1e5-2"})(["box-shadow:",";border:",";padding:0 17.5px;font-size:14px;height:35px;margin:10px 0 20px;font-family:\"Open Sans\",sans-serif;@media (min-width:600px){padding:0 25px;font-size:18px;height:50px;}"],({theme})=>theme.decoration.boxShadow,({theme})=>theme.decoration.border);const ContactBody=styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].textarea.withConfig({displayName:"contact__ContactBody",componentId:"sc-u8q1e5-3"})(["resize:none;box-shadow:",";border:",";padding:17.5px 17.5px;font-size:14px;margin:10px 0 20px;font-family:\"Open Sans\",sans-serif;@media (min-width:600px){padding:25px 25px;font-size:18px;}"],({theme})=>theme.decoration.boxShadow,({theme})=>theme.decoration.border);const ContactPage=()=>{const{0:subject,1:setSubject}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");const{0:body,1:setBody}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");const sendEmail=()=>{window.location.href=`mailto:wu.lnyf@gmail.com?subject=${subject}&body=${body}`;};return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Seo__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,{title:"Contact"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_InnerPage__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,{title:"Contact"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ContactForm,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Typography__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{variant:"h6"},"Subject:"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ContactSubject,{value:subject,onChange:e=>{setSubject(e.target.value);},onKeyDown:e=>{if(e.keyCode===13){e.preventDefault();sendEmail();}}}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Typography__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{variant:"h6"},"Message:"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ContactBody,{rows:10,value:body,onChange:e=>{setBody(e.target.value);}}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledButton,{onClick:e=>{e.preventDefault();sendEmail();}},"Submit"))));};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactPage);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-contact-js.js.map