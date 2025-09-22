"use strict";
exports.id = 293;
exports.ids = [293];
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

/***/ 9895:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: external "/Users/jp/Documents/lnyf-website/node_modules/react/index.js"
var index_js_ = __webpack_require__(2224);
// EXTERNAL MODULE: ./src/components/Layout.js + 3 modules
var Layout = __webpack_require__(654);
// EXTERNAL MODULE: ./src/components/Container.js
var Container = __webpack_require__(5630);
// EXTERNAL MODULE: ./src/components/Button.js
var Button = __webpack_require__(529);
// EXTERNAL MODULE: ./src/components/Typography.js
var Typography = __webpack_require__(3980);
// EXTERNAL MODULE: ./src/components/TwoColumn.js
var TwoColumn = __webpack_require__(4289);
// EXTERNAL MODULE: ./src/components/Underline.js
var Underline = __webpack_require__(5605);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.esm.js + 9 modules
var styled_components_esm = __webpack_require__(7131);
// EXTERNAL MODULE: ./src/components/Seo.js
var Seo = __webpack_require__(5032);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 11 modules
var gatsby_browser_entry = __webpack_require__(123);
// EXTERNAL MODULE: ./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js
var gatsby_image_module = __webpack_require__(4722);
// EXTERNAL MODULE: ./src/text.js
var src_text = __webpack_require__(8733);
// EXTERNAL MODULE: ./src/theme.js
var theme = __webpack_require__(7065);
;// ./src/images/misc/theme.png
/* harmony default export */ const misc_theme = ("/static/theme-f65052276ab74de46be997070e21fe9a.png");
;// ./src/pages/index.js
//final theme
//import transitionGIF from '../images/misc/blurred-theme.png' //transition to final theme
const JumbotronContainer=(0,styled_components_esm["default"])(Container/* default */.A).withConfig({displayName:"pages__JumbotronContainer",componentId:"sc-19ihi1-0"})(["display:flex;align-items:center;flex-direction:column;text-align:right;padding-top:25vh;justify-content:flex-start;height:100vh;@media (max-width:500px){padding-top:0vh;justify-content:flex-end;}"]);const JumbotronButton=styled_components_esm["default"].div.withConfig({displayName:"pages__JumbotronButton",componentId:"sc-19ihi1-1"})(["margin-top:20px;"]);const ContentContainer=(0,styled_components_esm["default"])(Container/* default */.A).withConfig({displayName:"pages__ContentContainer",componentId:"sc-19ihi1-2"})(["padding:75px 0;z-index:1;position:relative;max-width:100%;@media (min-width:1000px){.events{padding:75px 10px 75px 13vw;}}"]);const ContentColumn=styled_components_esm["default"].div.withConfig({displayName:"pages__ContentColumn",componentId:"sc-19ihi1-3"})(["flex-basis:0px;flex-grow:3;z-index:1;"]);const ImageColumn=styled_components_esm["default"].div.withConfig({displayName:"pages__ImageColumn",componentId:"sc-19ihi1-4"})(["display:flex;align-items:center;flex-basis:0px;flex-grow:2;"]);const EmptyColumn=styled_components_esm["default"].div.withConfig({displayName:"pages__EmptyColumn",componentId:"sc-19ihi1-5"})(["display:flex;width:0%;flex-grow:0.8;"]);const TextContainer=styled_components_esm["default"].div.withConfig({displayName:"pages__TextContainer",componentId:"sc-19ihi1-6"})(["margin:25px 25px 25px 0px;z-index:1;> *{margin:20px 0;}"]);const TitleContainer=styled_components_esm["default"].div.withConfig({displayName:"pages__TitleContainer",componentId:"sc-19ihi1-7"})(["margin-bottom:5vh;width:95vw;z-index:1;"]);const StyledIcon=(0,styled_components_esm["default"])(gatsby_image_module/* GatsbyImage */.mV).withConfig({displayName:"pages__StyledIcon",componentId:"sc-19ihi1-8"})(["margin-right:10px;width:35px;@media (min-width:1000px){width:50px;margin-right:20px;}"]);const StyledBackgroundImage=(0,styled_components_esm["default"])(gatsby_image_module/* GatsbyImage */.mV).withConfig({displayName:"pages__StyledBackgroundImage",componentId:"sc-19ihi1-9"})(["position:fixed !important;background-position:center;-webkit-background-size:cover;width:100%;top:0;bottom:0;left:0;right:0;z-index:0;transition:opacity 0.3s ease-out;"]);const ButtonContainer=styled_components_esm["default"].div.withConfig({displayName:"pages__ButtonContainer",componentId:"sc-19ihi1-10"})(["display:flex;justify-content:flex-start;margin-top:45px;"]);const StyledButton=(0,styled_components_esm["default"])(Button/* default */.A).withConfig({displayName:"pages__StyledButton",componentId:"sc-19ihi1-11"})(["margin-right:15px;"]);const FloatingPageNav=styled_components_esm["default"].div.withConfig({displayName:"pages__FloatingPageNav",componentId:"sc-19ihi1-12"})(["position:fixed;left:0;top:250px;z-index:2;display:flex;flex-direction:column;margin-left:2vw;@media (min-width:1340px){margin-left:3vw;top:250px;}@media (max-width:1000px){display:none;}"]);const FloatingButton=(0,styled_components_esm["default"])(Button/* default */.A).withConfig({displayName:"pages__FloatingButton",componentId:"sc-19ihi1-13"})(["border:none;background-color:","52;text-align:center;padding:30px 0;width:120px;height:auto;@media (min-width:1340px){width:150px;}@media (max-width:1000px){display:none;}&:hover{background-color:","85;border:none;color:",";}"],({theme})=>theme.palette.background,({theme})=>theme.palette.background,theme/* default */.A.palette.font);const FloatingDivider=styled_components_esm["default"].div.withConfig({displayName:"pages__FloatingDivider",componentId:"sc-19ihi1-14"})(["background-color:",";height:1.5px;width:120px;@media (min-width:1340px){width:150px;}@media (max-width:1000px){display:none;}"],theme/* default */.A.palette.font);const EventPane=styled_components_esm["default"].div.withConfig({displayName:"pages__EventPane",componentId:"sc-19ihi1-15"})(["width:78vw;background-color:","26;backdrop-filter:blur(5px);border-radius:20px;box-shadow:","4D 0px 19px 38px,","38 0px 15px 12px;transition:all .3s;@media (max-width:1000px){width:96vw;}&:hover{transform:scale(1.01);}"],({theme})=>theme.palette.secondary1,({theme})=>theme.palette.background,({theme})=>theme.palette.background);const EventBar=styled_components_esm["default"].div.withConfig({displayName:"pages__EventBar",componentId:"sc-19ihi1-16"})(["z-index:1;display:-webkit-box;flex-direction:row;overflow-x:scroll;&::-webkit-scrollbar{width:0.8em;}&::-webkit-scrollbar-track{box-shadow:inset 0 0 6px ","4D;border-radius:10px;}&::-webkit-scrollbar-thumb{background-color:slategray;opacity:0.6;border-radius:10px;}"],({theme})=>theme.palette.background);const EventItem=styled_components_esm["default"].div.withConfig({displayName:"pages__EventItem",componentId:"sc-19ihi1-17"})(["width:180px;margin:30px;display:flex;flex-direction:column;justify-content:space-between;padding:20px 10px;align-items:center;border:2px solid ",";border-radius:10px;color:",";"],theme/* default */.A.font,theme/* default */.A.palette.font);const EventTitle=(0,styled_components_esm["default"])(Typography/* default */.A).withConfig({displayName:"pages__EventTitle",componentId:"sc-19ihi1-18"})(["text-align:center;"]);const EventDate=(0,styled_components_esm["default"])(Typography/* default */.A).withConfig({displayName:"pages__EventDate",componentId:"sc-19ihi1-19"})(["margin-top:25px;display:flex;align-items:center;flex-direction:column;"]);const EventText=(0,styled_components_esm["default"])(Typography/* default */.A).withConfig({displayName:"pages__EventText",componentId:"sc-19ihi1-20"})(["margin-top:20px;margin-bottom:15px;margin-left:5px;"]);const BottomFloatingButton=(0,styled_components_esm["default"])(FloatingButton).withConfig({displayName:"pages__BottomFloatingButton",componentId:"sc-19ihi1-21"})(["border-bottom:none;"]);const EventLink=(0,styled_components_esm["default"])(gatsby_browser_entry.Link).withConfig({displayName:"pages__EventLink",componentId:"sc-19ihi1-22"})(["width:78vw;display:flex;"]);const SpotlightBox=styled_components_esm["default"].div.withConfig({displayName:"pages__SpotlightBox",componentId:"sc-19ihi1-23"})(["width:120px;height:77px;@media (min-width:1340px){width:150px;}@media (max-width:1000px){display:none;}"]);/*
const BlackoutContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  position: fixed;
  // left: 30px;
  left: 0;        //centers timepane
  right: 0;
  top: 15vh;      //vertical alignment
  z-index: 1;
  @media (max-width: 1000px) {
    left: 0;
    right: 0;
    top: 20vh;
  }
`;*/const BlackoutBackground=styled_components_esm["default"].img.withConfig({displayName:"pages__BlackoutBackground",componentId:"sc-19ihi1-24"})(["min-height:100%;width:100%;position:fixed;top:0;left:0;z-index:0;@media (max-width:1100px){min-height:auto;height:auto;width:100%;}@media (max-width:500px){min-height:auto;height:auto;width:100%;top:30vh;}"]);/*
const TimerPane = styled.div`
  width: 400px;
  padding: 15px;
          background-color: ${({ theme }) => theme.palette.background}54;  
  backdrop-filter: blur(5px);
  border-radius: 20px;
  z-index: 1;
  @media (max-width: 1000px) {
    width: 80vw;
  }
`;

const Timer = () => {
  const [days, setDays] = React.useState(0);
  const [hours, setHours] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);
  const [seconds, setSeconds] = React.useState(0);

  const deadline = "2024-08-15T19:00:00-06:00";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();    

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  React.useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  const timerStyles = {
    marginBottom: '20px'
  }

  return (
    <div style={timerStyles}>
      <Typography variant='h6' style={{textAlign: 'center'}}>
        {days} days {hours} hours {minutes} minutes
      </Typography>
    </div>
  );
};*/// const BlackoutPage = () => {
//   // For blacking out the page during the Summer
//   // To replace the homepage with the blackout page just change 'export default IndexPage'
//   // at the bottom of this file to 'export default BlackoutPage'
//   // Also it would prob be smart to comment out the header and footer in the Layout.js file
//   // so they can click on other links
//   const [currBackground, setCurrBackground] = React.useState(transitionGIF);
//   const buttonContainerStyles = {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//     alignItems: 'center'
//   };
//   React.useEffect(() => {
//     setTimeout(() => {
//       setCurrBackground(null);
//       setCurrBackground(themeGIF);
//     }, 6790);
//   }, [])
//   return (
//     <BlackoutContainer>
//       <BlackoutBackground src={currBackground} alt="LNYF Theme" />
//       <TimerPane>
//         <Timer></Timer>
//         <div style={buttonContainerStyles}>
//           <Link to="/people" style={{marginBottom: '7px'}}>
//             <StyledButton>Executive Board</StyledButton>
//           </Link>
//           <Link to="/performances" style={{marginBottom: '7px'}}>
//             <StyledButton>2024 Performers</StyledButton>
//           </Link>
//         </div>
//         {/* <Typography variant="creditfont">
//           Background by WashU Animation Association
//         </Typography> */}
//       </TimerPane>
//     </BlackoutContainer>
//   );
// }
function debounce(func,wait,immediate){var timeout;return function(){var context=this,args=arguments;var later=function(){timeout=null;if(!immediate)func.apply(context,args);};var callNow=immediate&&!timeout;clearTimeout(timeout);timeout=setTimeout(later,wait);if(callNow)func.apply(context,args);};};const MovingSpotlight=()=>{const[scrollTicker,setScrollTicker]=index_js_.useState(77);const handleTick=debounce(()=>{const scrollPos=window.scrollY;if(scrollPos<400){setScrollTicker(77);}else if(scrollPos<1100){setScrollTicker(155.5);}else if(scrollPos<1900){setScrollTicker(234);}else{setScrollTicker(312.5);}},10);index_js_.useEffect(()=>{document.addEventListener("scroll",handleTick);return()=>document.removeEventListener("scroll",handleTick);},[scrollTicker,handleTick]);const spotlightStyles={position:'relative',top:scrollTicker+'px',right:'0',zIndex:'1',backgroundColor:`${theme/* default */.A.palette.secondary1}66`,borderRadius:'15px',transition:'all 0.3s ease-out'};return/*#__PURE__*/index_js_.createElement(SpotlightBox,{style:spotlightStyles});};const IndexPage=({data})=>{const[scrollPos,setScrollPos]=index_js_.useState(0);// All code used for transition animations, may not be used in the future
// const [currBackground, setCurrBackground] = React.useState(transitionGIF);
// React.useEffect(() => {
//   setTimeout(() => {
//     setCurrBackground(null);
//     setCurrBackground(themeGIF);
//   }, 9700);
// }, [])
const blurredImg=(0,gatsby_image_module/* getImage */.Qp)(data.blurredBackgroundData);const aboutImg=(0,gatsby_image_module/* getImage */.Qp)(data.aboutData);const philanthropyImg=(0,gatsby_image_module/* getImage */.Qp)(data.philanthropyData);const instaImg=(0,gatsby_image_module/* getImage */.Qp)(data.instagramData);const youtubeImg=(0,gatsby_image_module/* getImage */.Qp)(data.youtubeData);const facebookImg=(0,gatsby_image_module/* getImage */.Qp)(data.facebookData);const currBackground=misc_theme;const handleScroll=debounce(()=>{const scrollY=window.pageYOffset;setScrollPos(scrollY);},10);index_js_.useEffect(()=>{document.addEventListener("scroll",handleScroll);return()=>document.removeEventListener("scroll",handleScroll);},[scrollPos,handleScroll]);return/*#__PURE__*/index_js_.createElement(Layout/* default */.A,{transparent:true,noWaves:true},/*#__PURE__*/index_js_.createElement(Seo/* default */.A,{title:"Home"}),/*#__PURE__*/index_js_.createElement(BlackoutBackground,{src:currBackground}),/*#__PURE__*/index_js_.createElement("div",{style:{opacity:Math.min(scrollPos/400,1),transition:'opacity 0.3s ease-out'}},/*#__PURE__*/index_js_.createElement(StyledBackgroundImage,{style:{"top":"0px"},image:blurredImg,alt:"Image"})),/*#__PURE__*/index_js_.createElement(JumbotronContainer,{id:"section-1",style:{animation:'fadeInUp 0.8s ease-out forwards',opacity:0,transform:'translateY(30px)'}},/*#__PURE__*/index_js_.createElement(TitleContainer,null,/*#__PURE__*/index_js_.createElement(Typography/* default */.A,{style:{"text-shadow":`2px 2px 5px ${theme/* default */.A.palette.background}85`},variant:"h5",color:"white"},src_text/* default */.A.index.jumbotronTop),/*#__PURE__*/index_js_.createElement(Typography/* default */.A,{style:{"white-space":"pre-line","text-shadow":`2px 2px 5px ${theme/* default */.A.palette.background}85`},variant:"h1",color:"white"},src_text/* default */.A.index.jumbotronMiddle),src_text/* default */.A.index.jumbotronBottom&&/*#__PURE__*/index_js_.createElement(Typography/* default */.A,{variant:"h3",color:"secondary2"},src_text/* default */.A.index.jumbotronBottom),/*#__PURE__*/index_js_.createElement(JumbotronButton,null,/*#__PURE__*/index_js_.createElement("a",{href:src_text/* default */.A.links.instagram},/*#__PURE__*/index_js_.createElement(StyledIcon,{image:instaImg,alt:"Instagram"})),/*#__PURE__*/index_js_.createElement("a",{href:src_text/* default */.A.links.youtube},/*#__PURE__*/index_js_.createElement(StyledIcon,{image:youtubeImg,alt:"Youtube"})),/*#__PURE__*/index_js_.createElement("a",{href:src_text/* default */.A.links.facebook},/*#__PURE__*/index_js_.createElement(StyledIcon,{image:facebookImg,alt:"Facebook"}))))),/*#__PURE__*/index_js_.createElement(FloatingPageNav,null,/*#__PURE__*/index_js_.createElement(MovingSpotlight,null),/*#__PURE__*/index_js_.createElement("a",{href:"#section-1"},/*#__PURE__*/index_js_.createElement(FloatingButton,{style:{"borderRadius":"15px 15px 0px 0px"}},/*#__PURE__*/index_js_.createElement(Typography/* default */.A,{variant:"floatingbuttonfont"},"LNYF"))),/*#__PURE__*/index_js_.createElement(FloatingDivider,null),/*#__PURE__*/index_js_.createElement("a",{href:"#section-2"},/*#__PURE__*/index_js_.createElement(FloatingButton,{style:{"borderRadius":"0px"}},/*#__PURE__*/index_js_.createElement(Typography/* default */.A,{variant:"floatingbuttonfont"},"About"))),/*#__PURE__*/index_js_.createElement(FloatingDivider,null),/*#__PURE__*/index_js_.createElement("a",{href:"#section-3"},/*#__PURE__*/index_js_.createElement(FloatingButton,{style:{"borderRadius":"0px"}},/*#__PURE__*/index_js_.createElement(Typography/* default */.A,{variant:"floatingbuttonfont"},"Events"))),/*#__PURE__*/index_js_.createElement(FloatingDivider,null),/*#__PURE__*/index_js_.createElement("a",{href:"#section-4"},/*#__PURE__*/index_js_.createElement(BottomFloatingButton,{style:{"borderRadius":"0px 0px 15px 15px"}},/*#__PURE__*/index_js_.createElement(Typography/* default */.A,{variant:"floatingbuttonfont"},"Philanthropy")))),/*#__PURE__*/index_js_.createElement(ContentContainer,{id:"section-2",style:{animation:'fadeInUp 0.8s ease-out 0.2s forwards',opacity:0,transform:'translateY(30px)'}},/*#__PURE__*/index_js_.createElement(TwoColumn/* default */.A,{spacing:0},/*#__PURE__*/index_js_.createElement(EmptyColumn,null),/*#__PURE__*/index_js_.createElement(ContentColumn,null,/*#__PURE__*/index_js_.createElement(Typography/* default */.A,{variant:"h2"},"About LNYF"),/*#__PURE__*/index_js_.createElement(Underline/* default */.A,null),/*#__PURE__*/index_js_.createElement(TextContainer,null,src_text/* default */.A.index.aboutText),/*#__PURE__*/index_js_.createElement(ButtonContainer,null,/*#__PURE__*/index_js_.createElement(gatsby_browser_entry.Link,{to:"/gallery"},/*#__PURE__*/index_js_.createElement(StyledButton,null,"Gallery")))),/*#__PURE__*/index_js_.createElement(ImageColumn,null,/*#__PURE__*/index_js_.createElement(gatsby_image_module/* GatsbyImage */.mV,{style:{"width":"97%"},image:aboutImg,alt:""})))),/*#__PURE__*/index_js_.createElement(ContentContainer,{id:"section-3"},/*#__PURE__*/index_js_.createElement("div",{class:"events"},/*#__PURE__*/index_js_.createElement(Typography/* default */.A,{variant:"h2"},"Events"),/*#__PURE__*/index_js_.createElement(Underline/* default */.A,null),/*#__PURE__*/index_js_.createElement(EventText,{variant:"linkfont",color:"secondary2"},"Click to Learn More"),/*#__PURE__*/index_js_.createElement(EventLink,{to:"/events",style:{textDecoration:'none'}},/*#__PURE__*/index_js_.createElement(EventPane,null,/*#__PURE__*/index_js_.createElement(EventBar,null,src_text/* default */.A.events.map((e,i)=>{return/*#__PURE__*/index_js_.createElement(EventItem,{key:i},/*#__PURE__*/index_js_.createElement(EventTitle,{variant:"h5",color:"secondary2"},e.title),/*#__PURE__*/index_js_.createElement(EventDate,null,/*#__PURE__*/index_js_.createElement(Typography/* default */.A,{variant:"h6",color:"secondary2"},e.month),/*#__PURE__*/index_js_.createElement(Typography/* default */.A,{variant:"h6",color:"secondary2"},e.day)));})))))),/*#__PURE__*/index_js_.createElement(ContentContainer,{id:"section-4",style:{animation:'fadeInUp 0.8s ease-out 0.4s forwards',opacity:0,transform:'translateY(30px)'}},/*#__PURE__*/index_js_.createElement(TwoColumn/* default */.A,{spacing:0},/*#__PURE__*/index_js_.createElement(EmptyColumn,null),/*#__PURE__*/index_js_.createElement(ContentColumn,null,/*#__PURE__*/index_js_.createElement(Typography/* default */.A,{variant:"h6",color:"secondary2"},"Philanthropy"),/*#__PURE__*/index_js_.createElement(Typography/* default */.A,{variant:"h2"},src_text/* default */.A.index.philanthropyTitle),/*#__PURE__*/index_js_.createElement(Underline/* default */.A,null),/*#__PURE__*/index_js_.createElement(TextContainer,null,src_text/* default */.A.index.philanthropyText),/*#__PURE__*/index_js_.createElement(ButtonContainer,null,/*#__PURE__*/index_js_.createElement(gatsby_browser_entry.Link,{to:"/philanthropy"},/*#__PURE__*/index_js_.createElement(StyledButton,null,"Learn more")))),/*#__PURE__*/index_js_.createElement(ImageColumn,null,/*#__PURE__*/index_js_.createElement(gatsby_image_module/* GatsbyImage */.mV,{image:philanthropyImg,alt:"earthdance"})))));};/* harmony default export */ const pages = (IndexPage);// export default BlackoutPage
const query="4000662979";

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-js.js.map