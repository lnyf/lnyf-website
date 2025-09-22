"use strict";
exports.id = 6;
exports.ids = [6];
exports.modules = {

/***/ 1422:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2224);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7131);
/* harmony import */ var _components_InnerPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4566);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(654);
/* harmony import */ var _components_Seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5032);
/* harmony import */ var _components_TwoColumn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4289);
/* harmony import */ var _components_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3980);
/* harmony import */ var _components_FadeInOnScroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4760);
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8733);
const EventContainer=styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({displayName:"events__EventContainer",componentId:"sc-2kykha-0"})(["box-shadow:",";border:",";margin-bottom:20px;min-height:120px;overflow:hidden;@media (min-width:600px){min-height:150px;}@media (max-width:599px){margin-bottom:15px;}",""],({theme})=>theme.decoration.boxShadow,({theme})=>theme.decoration.border,({clickable})=>clickable&&`
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px ${({theme})=>theme.palette.background}26;
    }
  `);const EventCaption=(0,styled_components__WEBPACK_IMPORTED_MODULE_8__["default"])(_components_Typography__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A).withConfig({displayName:"events__EventCaption",componentId:"sc-2kykha-1"})(["margin-top:5px;"]);const DateContainer=styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({displayName:"events__DateContainer",componentId:"sc-2kykha-2"})(["display:flex;flex-direction:column;align-items:center;justify-content:center;padding:15px 10px;min-width:120px;flex-shrink:0;@media (min-width:600px){min-width:150px;padding:20px 15px;}@media (min-width:1000px){min-width:170px;padding:20px 20px;}"]);const EventContent=styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({displayName:"events__EventContent",componentId:"sc-2kykha-3"})(["margin-top:0px;padding:5px 15px;flex:1;min-width:0;@media (min-width:600px){padding:5px 20px;}"]);const Description=styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({displayName:"events__Description",componentId:"sc-2kykha-4"})(["margin:10px 0;"]);const EventsPage=()=>{const theme=(0,styled_components__WEBPACK_IMPORTED_MODULE_8__.useTheme)();const handleEventClick=event=>{if(event.link){window.open(event.link,'_blank','noopener,noreferrer');}};return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Seo__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{title:"Events"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_InnerPage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{title:"Events"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_FadeInOnScroll__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,{direction:"up",delay:0},_text__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.events.map((e,i)=>{const isClickable=!!e.link;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_FadeInOnScroll__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,{key:i,direction:"up",delay:i*20},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(EventContainer,{clickable:isClickable,onClick:()=>isClickable&&handleEventClick(e)},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_TwoColumn__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DateContainer,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Typography__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,{variant:"h6"},e.month),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Typography__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,{variant:"h2"},e.day)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(EventContent,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Typography__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,{variant:"h6"},e.title),e.caption&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(EventCaption,{variant:"caption"},e.caption),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Description,null,e.description),isClickable&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Typography__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,{variant:"caption",style:{color:'#0000EE',marginTop:'8px',fontSize:'0.85rem',display:'block',fontWeight:450}},"Click to apply \u2192")))));}))));};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventsPage);

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

/***/ })

};
;
//# sourceMappingURL=component---src-pages-events-js.js.map