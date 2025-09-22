"use strict";
exports.id = 944;
exports.ids = [944];
exports.modules = {

/***/ 3018:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const convertImgDataToMap=imgData=>{return imgData.reduce(function(map,obj){map[obj.name]=obj;return map;},{});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (convertImgDataToMap);

/***/ }),

/***/ 3266:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ people)
});

// EXTERNAL MODULE: external "/Users/jp/Documents/lnyf-website/node_modules/react/index.js"
var index_js_ = __webpack_require__(2224);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./src/components/Layout.js + 3 modules
var Layout = __webpack_require__(654);
// EXTERNAL MODULE: ./src/components/InnerPage.js
var InnerPage = __webpack_require__(4566);
// EXTERNAL MODULE: ./src/text.js
var src_text = __webpack_require__(8733);
// EXTERNAL MODULE: ./src/utils/convertImgArrToMap.js
var convertImgArrToMap = __webpack_require__(3018);
// EXTERNAL MODULE: ./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js
var gatsby_image_module = __webpack_require__(4722);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.esm.js + 9 modules
var styled_components_esm = __webpack_require__(7131);
// EXTERNAL MODULE: ./src/components/Typography.js
var Typography = __webpack_require__(3980);
// EXTERNAL MODULE: ./src/components/StyledImage.js
var StyledImage = __webpack_require__(5597);
;// ./src/components/FlipCard.js
const CardContainer=styled_components_esm["default"].div.withConfig({displayName:"FlipCard__CardContainer",componentId:"sc-1lz3vf0-0"})(["height:0px;padding-bottom:125%;width:100%;position:relative;transform-style:preserve-3d;box-sizing:border-box;&.flipped{.front{transform:rotateY(180deg);}.back{transform:rotateY(0deg);}}"]);const Back=styled_components_esm["default"].div.withConfig({displayName:"FlipCard__Back",componentId:"sc-1lz3vf0-1"})(["height:100%;width:100%;box-sizing:border-box;background:$new-white;position:absolute !important;border-radius:10px;border:",";backface-visibility:hidden;transform-style:preserve-3d;transition:-webkit-transform ease 500ms;transition:transform ease 500ms;background:$new-white;transform:rotateY(-180deg);padding:5px;font-size:10vw;background-color:",";color:",";display:flex;flex-direction:column;justify-content:flex-start;",""],({theme})=>theme.decoration.borderHover,({theme})=>theme.palette.primarybackground,({theme})=>theme.palette.primaryfont,({clickable,theme})=>{return(clickable===true||clickable==="true")&&`
      cursor: pointer;
      
      &:hover {
        border: ${theme.decoration.borderHover};
      }`;});const ImageThumbnail=(0,styled_components_esm["default"])(StyledImage/* default */.A).withConfig({displayName:"FlipCard__ImageThumbnail",componentId:"sc-1lz3vf0-2"})(["height:0px;padding-bottom:125%;box-sizing:border-box;display:block !important;background:$new-white;position:absolute !important;border-radius:10px;backface-visibility:hidden;transform-style:preserve-3d;transition:-webkit-transform ease 500ms;transition:transform ease 500ms;z-index:2;transform:rotateY(0deg);"]);const SecTitle=(0,styled_components_esm["default"])(Typography/* default */.A).withConfig({displayName:"FlipCard__SecTitle",componentId:"sc-1lz3vf0-3"})(["padding-top:7%;padding-bottom:4%;"]);class FlipCard extends (index_js_default()).Component{constructor(props){super(props);this.flip=()=>{this.setState({flipped:!this.state.flipped});};this.state={flipped:false};this.flip=this.flip.bind(this);}render(){return/*#__PURE__*/index_js_default().createElement(CardContainer,{onClick:this.flip,className:"card-container"+(this.state.flipped?" flipped":"")},/*#__PURE__*/index_js_default().createElement(ImageThumbnail,{image:this.props.image,clickable:"true",alt:this.props.alt,className:"front"}),/*#__PURE__*/index_js_default().createElement(Back,{className:"back",clickable:"true"},/*#__PURE__*/index_js_default().createElement("div",null,/*#__PURE__*/index_js_default().createElement(SecTitle,{variant:"subtitle"},"Majors"),/*#__PURE__*/index_js_default().createElement(Typography/* default */.A,{variant:"caption"},this.props.major)),/*#__PURE__*/index_js_default().createElement("div",null,/*#__PURE__*/index_js_default().createElement(SecTitle,{variant:"subtitle"},"Zodiac"),/*#__PURE__*/index_js_default().createElement(Typography/* default */.A,{variant:"caption"},this.props.zodiac)),/*#__PURE__*/index_js_default().createElement("div",null,/*#__PURE__*/index_js_default().createElement(SecTitle,{variant:"subtitle"},"What LNYF means to me:"),/*#__PURE__*/index_js_default().createElement(Typography/* default */.A,{variant:"caption2"},this.props.facts))));}}/* harmony default export */ const components_FlipCard = (FlipCard);
// EXTERNAL MODULE: ./src/components/FadeInOnScroll.js
var FadeInOnScroll = __webpack_require__(4760);
// EXTERNAL MODULE: ./src/components/Seo.js
var Seo = __webpack_require__(5032);
;// ./src/pages/people.js
const Grid=styled_components_esm["default"].div.withConfig({displayName:"people__Grid",componentId:"sc-1e3fp0h-0"})(["display:grid;grid-gap:20px;margin-bottom:20px;@media (min-width:500px){grid-template-columns:1fr 1fr;}@media (min-width:900px){grid-template-columns:1fr 1fr;}@media (min-width:1140px){grid-template-columns:1fr 1fr 1fr;margin-bottom:70px;}"]);const StyledHeader=(0,styled_components_esm["default"])(Typography/* default */.A).withConfig({displayName:"people__StyledHeader",componentId:"sc-1e3fp0h-1"})(["margin-top:20px;margin-bottom:3px;"]);const ImageContainer=styled_components_esm["default"].div.withConfig({displayName:"people__ImageContainer",componentId:"sc-1e3fp0h-2"})(["display:flex;flex-direction:column;align-items:center;text-align:center;"]);const StyledTitle=(0,styled_components_esm["default"])(Typography/* default */.A).withConfig({displayName:"people__StyledTitle",componentId:"sc-1e3fp0h-3"})(["margin-bottom:40px;:not(:first-child){margin-top:80px;}"]);const PeoplePage=({data})=>{const{imgData}=data;const{nodes}=imgData;const imgDataMap=(0,convertImgArrToMap/* default */.A)(nodes);return/*#__PURE__*/index_js_default().createElement(Layout/* default */.A,null,/*#__PURE__*/index_js_default().createElement(Seo/* default */.A,{title:"People"}),/*#__PURE__*/index_js_default().createElement(InnerPage/* default */.A,{title:"People"},/*#__PURE__*/index_js_default().createElement(FadeInOnScroll/* default */.A,{direction:"up",delay:0},/*#__PURE__*/index_js_default().createElement(StyledTitle,{variant:"h4"},"Board of Directors")),/*#__PURE__*/index_js_default().createElement(Grid,null,src_text/* default */.A.people.bod.map((p,i)=>/*#__PURE__*/index_js_default().createElement(FadeInOnScroll/* default */.A,{key:i,direction:"up",delay:i*10},/*#__PURE__*/index_js_default().createElement(ImageContainer,null,/*#__PURE__*/index_js_default().createElement(components_FlipCard,{image:(0,gatsby_image_module/* getImage */.Qp)(imgDataMap[p.image]),alt:p.name+" portrait",major:p.major,zodiac:p.zodiac,facts:p.facts}),/*#__PURE__*/index_js_default().createElement(StyledHeader,{variant:"subtitle"},p.name),/*#__PURE__*/index_js_default().createElement(Typography/* default */.A,{variant:"caption"},p.position))))),/*#__PURE__*/index_js_default().createElement(FadeInOnScroll/* default */.A,{direction:"up",delay:0},/*#__PURE__*/index_js_default().createElement(StyledTitle,{variant:"h4"},"Communications Committee")),/*#__PURE__*/index_js_default().createElement(Grid,null,src_text/* default */.A.people.comm.map((p,i)=>/*#__PURE__*/index_js_default().createElement(FadeInOnScroll/* default */.A,{key:i,direction:"up",delay:i*100},/*#__PURE__*/index_js_default().createElement(ImageContainer,null,/*#__PURE__*/index_js_default().createElement(components_FlipCard,{image:(0,gatsby_image_module/* getImage */.Qp)(imgDataMap[p.image]),alt:p.name+" portrait",major:p.major,zodiac:p.zodiac,facts:p.facts}),/*#__PURE__*/index_js_default().createElement(StyledHeader,{variant:"subtitle"},p.name),/*#__PURE__*/index_js_default().createElement(Typography/* default */.A,{variant:"caption"},p.position))))),/*#__PURE__*/index_js_default().createElement(FadeInOnScroll/* default */.A,{direction:"up",delay:0},/*#__PURE__*/index_js_default().createElement(StyledTitle,{variant:"h4"},"Development Committee")),/*#__PURE__*/index_js_default().createElement(Grid,null,src_text/* default */.A.people.dev.map((p,i)=>/*#__PURE__*/index_js_default().createElement(FadeInOnScroll/* default */.A,{key:i,direction:"up",delay:i*100},/*#__PURE__*/index_js_default().createElement(ImageContainer,null,/*#__PURE__*/index_js_default().createElement(components_FlipCard,{image:(0,gatsby_image_module/* getImage */.Qp)(imgDataMap[p.image]),alt:p.name+" portrait",major:p.major,zodiac:p.zodiac,facts:p.facts}),/*#__PURE__*/index_js_default().createElement(StyledHeader,{variant:"subtitle"},p.name),/*#__PURE__*/index_js_default().createElement(Typography/* default */.A,{variant:"caption"},p.position))))),/*#__PURE__*/index_js_default().createElement(FadeInOnScroll/* default */.A,{direction:"up",delay:0},/*#__PURE__*/index_js_default().createElement(StyledTitle,{variant:"h4"},"Performance Committee")),/*#__PURE__*/index_js_default().createElement(Grid,null,src_text/* default */.A.people.perf.map((p,i)=>/*#__PURE__*/index_js_default().createElement(FadeInOnScroll/* default */.A,{key:i,direction:"up",delay:i*100},/*#__PURE__*/index_js_default().createElement(ImageContainer,null,/*#__PURE__*/index_js_default().createElement(components_FlipCard,{image:(0,gatsby_image_module/* getImage */.Qp)(imgDataMap[p.image]),alt:p.name+" portrait",major:p.major,zodiac:p.zodiac,facts:p.facts}),/*#__PURE__*/index_js_default().createElement(StyledHeader,{variant:"subtitle"},p.name),/*#__PURE__*/index_js_default().createElement(Typography/* default */.A,{variant:"caption"},p.position)))))));};/* harmony default export */ const people = (PeoplePage);const query="1466464121";

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

/***/ })

};
;
//# sourceMappingURL=component---src-pages-people-js.js.map