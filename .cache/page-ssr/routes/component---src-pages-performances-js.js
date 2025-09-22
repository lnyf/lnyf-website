"use strict";
exports.id = 116;
exports.ids = [116];
exports.modules = {

/***/ 3018:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const convertImgDataToMap=imgData=>{return imgData.reduce(function(map,obj){map[obj.name]=obj;return map;},{});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (convertImgDataToMap);

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

/***/ 4760:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2224);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7131);
const fadeInUp=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.keyframes)(["from{opacity:0;transform:translateY(30px);}to{opacity:1;transform:translateY(0);}"]);const fadeInLeft=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.keyframes)(["from{opacity:0;transform:translateX(-30px);}to{opacity:1;transform:translateX(0);}"]);const fadeInRight=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.keyframes)(["from{opacity:0;transform:translateX(30px);}to{opacity:1;transform:translateX(0);}"]);const fadeIn=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.keyframes)(["from{opacity:0;}to{opacity:1;}"]);const AnimatedDiv=styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({displayName:"FadeInOnScroll__AnimatedDiv",componentId:"sc-9gk7oy-0"})(["opacity:0;transform:",";transition:all 0.8s ease-out;&.visible{opacity:1;transform:",";}&.fade-in{animation:"," 0.8s ease-out forwards;}&.fade-in-up{animation:"," 0.8s ease-out forwards;}&.fade-in-left{animation:"," 0.8s ease-out forwards;}&.fade-in-right{animation:"," 0.8s ease-out forwards;}"],({direction})=>{switch(direction){case'up':return'translateY(30px)';case'left':return'translateX(-30px)';case'right':return'translateX(30px)';default:return'none';}},({direction})=>{switch(direction){case'up':return'translateY(0)';case'left':return'translateX(0)';case'right':return'translateX(0)';default:return'none';}},fadeIn,fadeInUp,fadeInLeft,fadeInRight);const FadeInOnScroll=({children,direction='up',delay=0,threshold=0.1,className='',style={}})=>{const{0:isVisible,1:setIsVisible}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);const{0:hasAnimated,1:setHasAnimated}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);const ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{const observer=new IntersectionObserver(([entry])=>{if(entry.isIntersecting&&!hasAnimated){// Add delay if specified
setTimeout(()=>{setIsVisible(true);setHasAnimated(true);},delay);}},{threshold,rootMargin:'0px 0px -50px 0px'});if(ref.current){observer.observe(ref.current);}return()=>{if(ref.current){observer.unobserve(ref.current);}};},[delay,threshold,hasAnimated]);const getAnimationClass=()=>{if(!isVisible)return'';switch(direction){case'up':return'fade-in-up';case'left':return'fade-in-left';case'right':return'fade-in-right';case'fade':return'fade-in';default:return'fade-in-up';}};return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AnimatedDiv,{ref:ref,direction:direction,className:`${getAnimationClass()} ${className}`,style:style},children);};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FadeInOnScroll);

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

/***/ 9920:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4722);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2224);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7131);
/* harmony import */ var _components_InnerPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4566);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(654);
/* harmony import */ var _components_Seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5032);
/* harmony import */ var _components_StyledImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5597);
/* harmony import */ var _components_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3980);
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8733);
/* harmony import */ var _utils_convertImgArrToMap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3018);
/* harmony import */ var _components_FadeInOnScroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4760);
const StyledHeader=(0,styled_components__WEBPACK_IMPORTED_MODULE_8__["default"])(_components_Typography__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A).withConfig({displayName:"performances__StyledHeader",componentId:"sc-36dbyg-0"})(["margin-top:20px;margin-bottom:5px;"]);const ImageThumbnail=(0,styled_components__WEBPACK_IMPORTED_MODULE_8__["default"])(_components_StyledImage__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A).withConfig({displayName:"performances__ImageThumbnail",componentId:"sc-36dbyg-1"})(["height:0px;padding-bottom:60%;margin-bottom:10px;@media (min-width:600px){margin-right:20px;margin-bottom:0;}@media (min-width:800px){margin-right:0px;margin-bottom:10px;}@media (min-width:100px){margin-right:20px;margin-bottom:0;}"]);const ImageContainer=styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({displayName:"performances__ImageContainer",componentId:"sc-36dbyg-2"})(["flex-basis:0;flex-grow:1;"]);const PerformanceContent=styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({displayName:"performances__PerformanceContent",componentId:"sc-36dbyg-3"})(["flex-grow:1;flex-basis:0;"]);const PerformanceContainer=styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({displayName:"performances__PerformanceContainer",componentId:"sc-36dbyg-4"})(["display:flex;margin-bottom:20px;margin-right:100px;flex-direction:column;@media (min-width:600px){flex-direction:row;}@media (min-width:800px){flex-direction:column;}@media (min-width:1000px){flex-direction:row;}"]);const PerformancesPage=({data})=>{const{imgData}=data;const{nodes}=imgData;const imgDataMap=(0,_utils_convertImgArrToMap__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)(nodes);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Seo__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{title:"Performances"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_InnerPage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{title:"Performances"},_text__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.performances.map((p,i)=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_FadeInOnScroll__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A,{key:i,direction:"up",delay:i*15},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PerformanceContainer,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ImageContainer,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ImageThumbnail,{image:(0,gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_10__/* .getImage */ .Qp)(imgDataMap[p.image]),alt:p.title})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PerformanceContent,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledHeader,{variant:"h6"},p.title),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Typography__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,null,p.performers.map((performer,index)=>{const isChoreo=performer.includes("(choreo)");return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span",{key:index},isChoreo?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong",null,performer):performer,index<p.performers.length-1&&", ");}))))))));};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PerformancesPage);const query="1749416798";

/***/ })

};
;
//# sourceMappingURL=component---src-pages-performances-js.js.map