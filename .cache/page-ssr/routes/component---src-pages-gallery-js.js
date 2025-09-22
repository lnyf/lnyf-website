"use strict";
exports.id = 787;
exports.ids = [787];
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

/***/ 4370:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2224);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7131);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(529);
const Wrapper=styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({displayName:"ImageOverlay__Wrapper",componentId:"sc-1qqd64-0"})(["position:fixed;z-index:200;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.8);display:flex;flex-direction:column;padding:20px 20px;color:white;"]);const StyledButton=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_Button__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A).withConfig({displayName:"ImageOverlay__StyledButton",componentId:"sc-1qqd64-1"})(["align-self:flex-start;margin-bottom:20px;flex-shrink:0;"]);const ImageOverlay=({children,open,setOpen})=>{return open&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Wrapper,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledButton,{white:true,onClick:()=>setOpen(false)},"Close"),children);};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageOverlay);

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

/***/ 5085:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4722);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2224);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7131);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(529);
/* harmony import */ var _components_ButtonDropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3972);
/* harmony import */ var _components_ImageOverlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4370);
/* harmony import */ var _components_InnerPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4566);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(654);
/* harmony import */ var _components_Seo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5032);
/* harmony import */ var _components_StyledImage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5597);
/* harmony import */ var _components_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3980);
/* harmony import */ var _components_FadeInOnScroll__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4760);
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8733);
/* harmony import */ var _utils_convertImgArrToMap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3018);
const Grid=styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div.withConfig({displayName:"gallery__Grid",componentId:"sc-17rhu7t-0"})(["display:grid;grid-gap:20px;margin-bottom:20px;@media (min-width:500px){grid-template-columns:1fr 1fr;}@media (min-width:800px){grid-template-columns:1fr;}@media (min-width:1000px){grid-template-columns:1fr 1fr;}"]);const ImageContainer=styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div.withConfig({displayName:"gallery__ImageContainer",componentId:"sc-17rhu7t-1"})(["display:flex;flex-direction:column;align-items:center;text-align:center;"]);const OverlayImage=(0,styled_components__WEBPACK_IMPORTED_MODULE_11__["default"])(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_12__/* .GatsbyImage */ .mV).withConfig({displayName:"gallery__OverlayImage",componentId:"sc-17rhu7t-2"})(["align-self:center;margin-bottom:20px;"]);const ImageThumbnail=(0,styled_components__WEBPACK_IMPORTED_MODULE_11__["default"])(_components_StyledImage__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A).withConfig({displayName:"gallery__ImageThumbnail",componentId:"sc-17rhu7t-3"})(["height:0px;padding-bottom:75%;"]);const StyledLabel=(0,styled_components__WEBPACK_IMPORTED_MODULE_11__["default"])(_components_Typography__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A).withConfig({displayName:"gallery__StyledLabel",componentId:"sc-17rhu7t-4"})(["margin-bottom:10px;"]);const MediaLabel=(0,styled_components__WEBPACK_IMPORTED_MODULE_11__["default"])(StyledLabel).withConfig({displayName:"gallery__MediaLabel",componentId:"sc-17rhu7t-5"})(["margin-top:10px;"]);const StyledButton=(0,styled_components__WEBPACK_IMPORTED_MODULE_11__["default"])(_components_Button__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A).withConfig({displayName:"gallery__StyledButton",componentId:"sc-17rhu7t-6"})(["margin-right:10px;margin-bottom:5px;"]);const VideoContainer=styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div.withConfig({displayName:"gallery__VideoContainer",componentId:"sc-17rhu7t-7"})(["position:relative;box-sizing:border-box;width:100%;height:0;padding-bottom:60%;border:",";box-shadow:",";"],({theme})=>theme.decoration.border,({theme})=>theme.decoration.boxShadow);const Video=styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].iframe.withConfig({displayName:"gallery__Video",componentId:"sc-17rhu7t-8"})(["position:absolute;height:100%;width:100%;"]);const GalleryPage=({data})=>{const sortedYears=Object.keys(_text__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A.gallery).sort((a,b)=>b-a);const{imgData}=data;const{nodes}=imgData;const imgDataMap=(0,_utils_convertImgArrToMap__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A)(nodes);const{0:open,1:setOpen}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);const{0:year,1:setYear}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(sortedYears[0]);const hasPhotos="photos"in _text__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A.gallery[year];let initialMedia="photos";if(!hasPhotos){initialMedia="videos";}const{0:media,1:setMedia}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialMedia);const{0:pic,1:setPic}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined);const handleClick=pic=>{setPic(pic);setOpen(true);};return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Seo__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,{title:"Gallery"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_InnerPage__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,{title:"Gallery",buttons:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_FadeInOnScroll__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,{direction:"up",delay:0},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment),null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledLabel,{variant:"subtitle"},"Year"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ButtonDropdown__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{value:year,setValue:setYear,options:sortedYears.map(p=>({value:p,label:p})),active:true}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MediaLabel,{variant:"subtitle"},"Media"),"photos"in _text__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A.gallery[year]&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledButton,{white:true,onClick:()=>setMedia("photos"),active:media==="photos"},"Photo"),"videos"in _text__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A.gallery[year]&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Button__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{white:true,onClick:()=>setMedia("videos"),active:media==="videos"},"Video")))},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Grid,null,_text__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A.gallery[year][media].map((p,i)=>media==="photos"?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_FadeInOnScroll__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,{key:i,direction:"up",delay:i*10},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ImageContainer,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ImageThumbnail,{onClick:()=>handleClick(p),image:(0,gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_12__/* .getImage */ .Qp)(imgDataMap[p.image]),alt:p.caption,clickable:"true"}))):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_FadeInOnScroll__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,{key:i,direction:"up",delay:i*100},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(VideoContainer,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Video,{key:i,src:p.link,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:true})))))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ImageOverlay__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{open:open,setOpen:setOpen},pic&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment),null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(OverlayImage,{image:(0,gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_12__/* .getImage */ .Qp)(imgDataMap[pic.image]),alt:pic.caption,objectFit:"contain"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Typography__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,{variant:"p"},"Caption: ",pic.caption))));};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GalleryPage);const query="992183781";

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
//# sourceMappingURL=component---src-pages-gallery-js.js.map