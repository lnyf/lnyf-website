"use strict";
exports.id = 413;
exports.ids = [413];
exports.modules = {

/***/ 3018:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const convertImgDataToMap=imgData=>{return imgData.reduce(function(map,obj){map[obj.name]=obj;return map;},{});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (convertImgDataToMap);

/***/ }),

/***/ 3972:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2224);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7131);
const Button=styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button.withConfig({displayName:"ButtonDropdown__Button",componentId:"sc-jea1pv-0"})(["background-color:",";color:",";cursor:pointer;padding:0 20px;font-family:\"Oswald\",sans-serif;text-transform:uppercase;font-weight:500;font-size:16px;line-height:16px;border-radius:30px;align-items:center;height:40px;font-size:16px;line-height:16px;border:4px solid ",";box-sizing:border-box;&:hover{background:",";color:",";}> :last-child{margin-left:10px;}@media (min-width:800px){border:5px solid ",";line-height:20px;font-size:20px;}"],({theme})=>theme.palette.background,({theme})=>theme.palette.font,({theme})=>theme.palette.secondarybackground,({theme})=>theme.palette.secondarybackground,({theme})=>theme.palette.secondaryfont,({theme})=>theme.palette.secondarybackground);const Wrapper=styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({displayName:"ButtonDropdown__Wrapper",componentId:"sc-jea1pv-1"})(["position:relative;display:inline-flex;font-family:\"Oswald\",sans-serif;text-transform:uppercase;font-weight:500;font-size:16px;line-height:16px;@media (min-width:800px){line-height:20px;font-size:20px;}"]);const Dropdown=styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({displayName:"ButtonDropdown__Dropdown",componentId:"sc-jea1pv-2"})(["position:absolute;top:40px;left:0px;z-index:300;"]);const DropdownItem=styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({displayName:"ButtonDropdown__DropdownItem",componentId:"sc-jea1pv-3"})(["padding:10px 20px;border:5px solid ",";background-color:",";margin-bottom:-5px;cursor:pointer;color:",";&:hover{background:",";color:",";}"],({theme})=>theme.palette.secondarybackground,({theme})=>theme.palette.background,({theme})=>theme.palette.font,({theme})=>theme.palette.secondarybackground,({theme})=>theme.palette.secondaryfont);const ButtonDropdown=({value,setValue,options,active,...rest})=>{const{0:open,1:setOpen}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);const wrapperRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);const handleSelect=value=>{setValue(value);setOpen(false);};(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{document.addEventListener("click",handleClickOutside,false);return()=>{document.removeEventListener("click",handleClickOutside,false);};},[]);const handleClickOutside=event=>{if(wrapperRef.current&&!wrapperRef.current.contains(event.target)){setOpen(false);}};return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Wrapper,{ref:wrapperRef},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Button,Object.assign({active:active,onClick:()=>setOpen(prevOpen=>!prevOpen)},rest),value,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i",{className:"fas fa-angle-down"})),open&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Dropdown,null,options.map((o,i)=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DropdownItem,{onClick:()=>{handleSelect(o.value);},key:i},o.label))));};// {options.map((o) => (
//   <option value={o.value}>{o.label}</option>
// ))}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonDropdown);

/***/ }),

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

/***/ 5597:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4722);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7131);
const StyledImage=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_1__/* .GatsbyImage */ .mV).withConfig({displayName:"StyledImage",componentId:"sc-15cmxo8-0"})(["border:",";",""],({theme})=>theme.decoration.border,({clickable,theme})=>{return(clickable===true||clickable==="true")&&`
      cursor: pointer;
      transition: all .3s; 
      &:hover {
        border: ${theme.decoration.borderHover};
        transform: scale(1.03);
      }`;});/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StyledImage);

/***/ }),

/***/ 9473:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2224);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(654);
/* harmony import */ var _components_InnerPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4566);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(529);
/* harmony import */ var _components_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3980);
/* harmony import */ var _components_StyledImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5597);
/* harmony import */ var _components_Seo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5032);
/* harmony import */ var _utils_convertImgArrToMap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3018);
/* harmony import */ var _components_ButtonDropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3972);
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8733);
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4722);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7131);
const StyledCaption=(0,styled_components__WEBPACK_IMPORTED_MODULE_9__["default"])(_components_Typography__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A).withConfig({displayName:"philanthropy__StyledCaption",componentId:"sc-i27py4-0"})(["margin-bottom:20px;"]);const StyledHeader=(0,styled_components__WEBPACK_IMPORTED_MODULE_9__["default"])(_components_Typography__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A).withConfig({displayName:"philanthropy__StyledHeader",componentId:"sc-i27py4-1"})(["margin-top:40px;margin-bottom:10px;"]);const StyledLabel=(0,styled_components__WEBPACK_IMPORTED_MODULE_9__["default"])(_components_Typography__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A).withConfig({displayName:"philanthropy__StyledLabel",componentId:"sc-i27py4-2"})(["margin-bottom:10px;"]);const StyledAnchor=styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].a.withConfig({displayName:"philanthropy__StyledAnchor",componentId:"sc-i27py4-3"})(["margin-top:20px;margin-bottom:20px;display:block;"]);const VideoContainer=styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({displayName:"philanthropy__VideoContainer",componentId:"sc-i27py4-4"})(["position:relative;box-sizing:border-box;width:100%;height:0;padding-bottom:60%;border:",";box-shadow:",";"],({theme})=>theme.decoration.border,({theme})=>theme.decoration.boxShadow);const Video=styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].iframe.withConfig({displayName:"philanthropy__Video",componentId:"sc-i27py4-5"})(["position:absolute;height:100%;width:100%;"]);const PhilanthropyPage=({data})=>{const{imgData}=data;const{nodes}=imgData;const imgDataMap=(0,_utils_convertImgArrToMap__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A)(nodes);const{0:year,1:setYear}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(Object.keys(_text__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A.philanthropy).sort((a,b)=>b-a)[0]);const img=(0,gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_11__/* .getImage */ .Qp)(imgDataMap[_text__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A.philanthropy[year].image]);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Seo__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,{title:"Philanthropy"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_InnerPage__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{title:"Philanthropy",buttons:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment),null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledLabel,{variant:"subtitle"},"Year"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ButtonDropdown__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A,{value:year,setValue:setYear,options:Object.keys(_text__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A.philanthropy).sort((a,b)=>b-a).map(p=>({value:p,label:p})),active:true}))},_text__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A.philanthropy[year].image&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_StyledImage__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,{image:img,alt:_text__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A.philanthropy[year].title}),_text__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A.philanthropy[year].video&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(VideoContainer,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Video,{src:_text__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A.philanthropy[year].video,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:true})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledHeader,{variant:"h4"},_text__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A.philanthropy[year].title),_text__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A.philanthropy[year].money&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledCaption,{variant:"caption"},"Money Raised: ",_text__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A.philanthropy[year].money),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Typography__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,null,_text__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A.philanthropy[year].description),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledAnchor,{target:"_blank",href:_text__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A.philanthropy[year].link,rel:"noopener noreferrer"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{white:true},"See More"))));};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PhilanthropyPage);const query="2854820007";

/***/ })

};
;
//# sourceMappingURL=component---src-pages-philanthropy-js.js.map