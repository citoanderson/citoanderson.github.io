(window.webpackJsonp=window.webpackJsonp||[]).push([["PlaylistCarousels~adEditorComponent~adEditorPageComponent~biztools~capPage~capRoundupPage~commentsIf~18a437f7"],{"3oR8":function(o,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.makeGridValue=t.gridValue=void 0;var a=e("Uy5J"),r=e("KpbG");function n(o,t=r.gridConfig){return(e,a)=>(e[a]=o(t[a]),e)}const l=Object.keys(r.gridConfig).reduce(n(a.values),{});t.gridValue=l;t.makeGridValue=o=>Object.keys(o).reduce(n(a.values,o),{})},"4TrE":function(o,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fonturl=void 0;t.fonturl="https://f.kinja-static.com/assets/fonts"},"51+y":function(o,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withTheme=t.default=void 0;var a=function(o,t){if(!t&&o&&o.__esModule)return o;if(null===o||"object"!=typeof o&&"function"!=typeof o)return{default:o};var e=l(t);if(e&&e.has(o))return e.get(o);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in o)if("default"!==n&&Object.prototype.hasOwnProperty.call(o,n)){var i=r?Object.getOwnPropertyDescriptor(o,n):null;i&&(i.get||i.set)?Object.defineProperty(a,n,i):a[n]=o[n]}a.default=o,e&&e.set(o,a);return a}(e("mXGw")),r=e("UutA"),n=e("ZdL9");function l(o){if("function"!=typeof WeakMap)return null;var t=new WeakMap,e=new WeakMap;return(l=function(o){return o?e:t})(o)}const i=o=>{const{children:t,theme:e,blog:l}=o,i=l?{...n.blogThemes[l]||n.blogThemes.default,blog:l}:e;return a.createElement(r.ThemeProvider,{theme:i},t)};i.defaultProps={theme:n.blogThemes.default};t.withTheme=(o,t)=>e=>a.createElement(i,{blog:t.blogTheme},a.createElement(o,e));var f=i;t.default=f},"77cC":function(o,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.archivoNarrowRegWoff2=t.archivoNarrowRegItWoff2=t.archivoNarrow700Woff2=t.archivoNarrow700ItWoff2=t.archivoNarrow600Woff2=t.archivoNarrow600WItoff2=t.archivoNarrow500Woff2=t.archivoNarrow500ItWoff2=void 0;var a=e("4TrE");const r=`${a.fonturl}/archivo-narrow/archivo-narrow-v30-latin-regular.woff2`;t.archivoNarrowRegWoff2=r;const n=`${a.fonturl}/archivo-narrow/archivo-narrow-v30-latin-italic-regular.woff2`;t.archivoNarrowRegItWoff2=n;const l=`${a.fonturl}/archivo-narrow/archivo-narrow-v30-latin-500.woff2`;t.archivoNarrow500Woff2=l;const i=`${a.fonturl}/archivo-narrow/archivo-narrow-v30-latin-italic-500.woff2`;t.archivoNarrow500ItWoff2=i;const f=`${a.fonturl}/archivo-narrow/archivo-narrow-v30-latin-600.woff2`;t.archivoNarrow600Woff2=f;const s=`${a.fonturl}/archivo-narrow/archivo-narrow-v30-latin-italic-600.woff2`;t.archivoNarrow600WItoff2=s;const d=`${a.fonturl}/archivo-narrow/archivo-narrow-v30-latin-700.woff2`;t.archivoNarrow700Woff2=d;const c=`${a.fonturl}/archivo-narrow/archivo-narrow-v30-latin-italic-700.woff2`;t.archivoNarrow700ItWoff2=c;var p=`\n\t// Archivo Narrow Regular\n\t@font-face {\n\t\tfont-display: fallback;\n\t\tfont-family: 'Archivo Narrow';\n\t\tfont-weight: 400;\n\t\tfont-style: normal;\n\t\tsrc: url(${r}) format("woff2");\n\t}\n\n\t// Archivo Narrow Regular Italics\n\t@font-face {\n\t\tfont-display: fallback;\n\t\tfont-family: 'Archivo Narrow';\n\t\tfont-weight: 400;\n\t\tfont-style: italic;\n\t\tsrc: url(${n}) format("woff2");\n\t}\n\n\t// Archivo Narrow Regular 500\n\t@font-face {\n\t\tfont-display: fallback;\n\t\tfont-family: 'Archivo Narrow';\n\t\tfont-weight: 500;\n\t\tfont-style: normal;\n\t\tsrc: url(${l}) format("woff2");\n\t}\n\n\t// Archivo Narrow Regular 500 Italics\n\t@font-face {\n\t\tfont-display: fallback;\n\t\tfont-family: 'Archivo Narrow';\n\t\tfont-weight: 500;\n\t\tfont-style: italic;\n\t\tsrc: url(${i}) format("woff2");\n\t}\n\n\t// Archivo Narrow Regular 600\n\t@font-face {\n\t\tfont-display: fallback;\n\t\tfont-family: 'Archivo Narrow';\n\t\tfont-weight: 600;\n\t\tfont-style: normal;\n\t\tsrc: url(${f}) format("woff2");\n\t}\n\n\t// Archivo Narrow Regular 600 Italics\n\t@font-face {\n\t\tfont-display: fallback;\n\t\tfont-family: 'Archivo Narrow';\n\t\tfont-weight: 600;\n\t\tfont-style: italic;\n\t\tsrc: url(${s}) format("woff2");\n\t}\n\n\t// Archivo Narrow Regular 700\n\t@font-face {\n\t\tfont-display: fallback;\n\t\tfont-family: 'Archivo Narrow';\n\t\tfont-weight: 700;\n\t\tfont-style: normal;\n\t\tsrc: url(${d}) format("woff2");\n\t}\n\n\t// Archivo Narrow Regular 700 Italics\n\t@font-face {\n\t\tfont-display: fallback;\n\t\tfont-family: 'Archivo Narrow';\n\t\tfont-weight: 700;\n\t\tfont-style: italic;\n\t\tsrc: url(${c}) format("woff2");\n\t}\n`;t.default=p},E9CN:function(o,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.robotoCondRegWoff2=t.robotoCondRegWoff=t.robotoCondRegItWoff2=t.robotoCondRegItWoff=t.robotoCondLightWoff2=t.robotoCondLightWoff=t.robotoCondLightItWoff2=t.robotoCondLightItWoff=t.robotoCondBoldWoff2=t.robotoCondBoldWoff=t.robotoCondBoldItWoff2=t.robotoCondBoldItWoff=t.default=void 0;var a=e("4TrE");const r=`${a.fonturl}/roboto-ext/roboto_condensed_ext_reg-webfont.woff2?11012022`;t.robotoCondRegWoff2=r;const n=`${a.fonturl}/roboto-ext/roboto_condensed_ext_reg-webfont.woff?11012022`;t.robotoCondRegWoff=n;const l=`${a.fonturl}/roboto-ext/roboto_condensed_ext_reg_it-webfont.woff2?11012022`;t.robotoCondRegItWoff2=l;const i=`${a.fonturl}/roboto-ext/roboto_condensed_ext_reg_it-webfont.woff?11012022`;t.robotoCondRegItWoff=i;const f=`${a.fonturl}/roboto-ext/roboto_condensed_ext_light-webfont.woff2?11012022`;t.robotoCondLightWoff2=f;const s=`${a.fonturl}/roboto-ext/roboto_condensed_ext_light-webfont.woff?11012022`;t.robotoCondLightWoff=s;const d=`${a.fonturl}/roboto-ext/roboto_condensed_ext_light_it-webfont.woff2?11012022`;t.robotoCondLightItWoff2=d;const c=`${a.fonturl}/roboto-ext/roboto_condensed_ext_light_it-webfont.woff?11012022`;t.robotoCondLightItWoff=c;const p=`${a.fonturl}/roboto-ext/roboto_condensed_ext_bold-webfont.woff2?11012022`;t.robotoCondBoldWoff2=p;const m=`${a.fonturl}/roboto-ext/roboto_condensed_ext_bold-webfont.woff?11012022`;t.robotoCondBoldWoff=m;const g=`${a.fonturl}/roboto-ext/roboto_condensed_ext_bold_it-webfont.woff2?11012022`;t.robotoCondBoldItWoff2=g;const u=`${a.fonturl}/roboto-ext/roboto_condensed_ext_bold_it-webfont.woff?11012022`;t.robotoCondBoldItWoff=u;var x=`\n\t// Roboto Condensed - regular\n\t@font-face {\n\t\tfont-display: fallback;\n\t\tfont-family: 'Roboto Condensed';\n\t\tfont-weight: 400;\n\t\tfont-style: normal;\n\n\t\tsrc: url(${r}) format('woff2'),\n\t\t\turl(${n}) format('woff');\n\t}\n\n\t// Roboto Condensed - regular italics\n\t@font-face {\n\t\tfont-display: fallback;\n\t\tfont-family: 'Roboto Condensed';\n\t\tfont-weight: 400;\n\t\tfont-style: italic;\n\n\t\tsrc: url(${l}) format('woff2'),\n\t\t\turl(${i}) format('woff');\n\t}\n\n\t// Roboto Condensed - light\n\t@font-face {\n\t\tfont-display: fallback;\n\t\tfont-family: 'Roboto Condensed';\n\t\tfont-weight: 300;\n\t\tfont-style: normal;\n\n\t\tsrc: url(${f}) format('woff2'),\n\t\t\turl(${s}) format('woff');\n\t}\n\n\t// Roboto Condensed - light italics\n\t@font-face {\n\t\tfont-display: fallback;\n\t\tfont-family: 'Roboto Condensed';\n\t\tfont-weight: 300;\n\t\tfont-style: normal;\n\t\tfont-style: italic;\n\n\t\tsrc: url(${d}) format('woff2'),\n\t\t\turl(${c}) format('woff');\n\t}\n\n\t// Roboto Condensed - bold\n\t@font-face {\n\t\tfont-display: fallback;\n\t\tfont-family: 'Roboto Condensed';\n\t\tfont-weight: 700;\n\t\tfont-style: normal;\n\n\t\tsrc: url(${p}) format('woff2'),\n\t\t\turl(${p}) format('woff');\n\t}\n\n\t// Roboto Condensed - bold italics\n\t@font-face {\n\t\tfont-display: fallback;\n\t\tfont-family: 'Roboto Condensed';\n\t\tfont-weight: 700;\n\t\tfont-style: italic;\n\n\t\tsrc: url(${g}) format('woff2'),\n\t\t\turl(${g}) format('woff');\n\t}\n\n\t// Fallback font for Roboto Condensed\n\t@font-face {\n\t\tfont-family: 'Roboto fallback';\n\t\tsize-adjust: 87%;\n\t\tsrc: local("Arial");\n\t}\n`;t.default=x},HxTW:function(o,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.amiriRegularWoff2=t.amiriItalicWoff2=void 0;var a=e("4TrE");const r=`${a.fonturl}/amiri/Amiri-Regular.woff2`;t.amiriRegularWoff2=r;const n=`${a.fonturl}/amiri/Amiri-Italic.woff2`;t.amiriItalicWoff2=n;var l=`\n\t// amiri-regular\n\t@font-face {\n\t\tfont-display: fallback;\n\t\tfont-family: 'Amiri';\n\t\tfont-weight: 400;\n\t\tfont-style: normal;\n\t\tsrc: local('Amiri Regular'), local('Amiri-Regular'), url(${r}) format('woff2');\n\t}\n\n\n\t// amiri-italic\n\t@font-face {\n\t\tfont-display: fallback;\n\t\tfont-family: 'Amiri';\n\t\tfont-weight: 400;\n\t\tfont-style: italic;\n\t\tsrc: local('Amiri Italic'), local('Amiri-Italic'), url(${n}) format('woff2');\n\t}\n`;t.default=l},IXzj:function(o,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ptSerifRegularWoff2=t.ptSerifRegularWoff=t.ptSerifItalicWoff2=t.ptSerifItalicWoff=t.ptSerifBoldWoff2=t.ptSerifBoldWoff=t.ptSerifBoldItalicWoff2=t.ptSerifBoldItalicWoff=t.default=void 0;var a=e("4TrE");const r=`${a.fonturl}/pt-serif/PT_Serif-Web-Regular.woff2`;t.ptSerifRegularWoff2=r;const n=`${a.fonturl}/pt-serif/PT_Serif-Web-Regular.woff`;t.ptSerifRegularWoff=n;const l=`${a.fonturl}/pt-serif/PT_Serif-Web-Bold.woff2`;t.ptSerifBoldWoff2=l;const i=`${a.fonturl}/pt-serif/PT_Serif-Web-Bold.woff`;t.ptSerifBoldWoff=i;const f=`${a.fonturl}/pt-serif/PT_Serif-Web-Italic.woff2`;t.ptSerifItalicWoff2=f;const s=`${a.fonturl}/pt-serif/PT_Serif-Web-Italic.woff`;t.ptSerifItalicWoff=s;const d=`${a.fonturl}/pt-serif/PT_Serif-Web-BoldItalic.woff2`;t.ptSerifBoldItalicWoff2=d;const c=`${a.fonturl}/pt-serif/PT_Serif-Web-BoldItalic.woff`;t.ptSerifBoldItalicWoff=c;var p=`\n\t// PT Serif regular\n\t@font-face {\n\t\tfont-display: fallback;\n\t\tfont-family: 'PT Serif';\n\t\tfont-weight: normal;\n\t\tfont-style: normal;\n\t\tsrc: url("${r}") format("woff2"),\n            url("${n}") format("woff");\n\t}\n\n    // PT Serif bold\n\t@font-face {\n\t\tfont-display: fallback;\n\t\tfont-family: 'PT Serif';\n\t\tfont-weight: 700;\n\t\tfont-style: normal;\n\t\tsrc: url("${l}") format("woff2"),\n            url("${i}") format("woff");\n\t}\n\n    // PT Serif italic\n\t@font-face {\n\t\tfont-display: fallback;\n\t\tfont-family: 'PT Serif';\n\t\tfont-weight: normal;\n\t\tfont-style: italic;\n\t\tsrc: url("${f}") format("woff2"),\n            url("${s}") format("woff");\n\t}\n\n    // PT Serif bold italic\n\t@font-face {\n\t\tfont-display: fallback;\n\t\tfont-family: 'PT Serif';\n\t\tfont-weight: 700;\n\t\tfont-style: italic;\n\t\tsrc: url("${d}") format("woff2"),\n            url("${c}") format("woff");\n\t}\n`;t.default=p},KpbG:function(o,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.gridConfig=void 0;t.gridConfig={small:{totalColumns:6,gutterSize:16},medium:{totalColumns:6,gutterSize:16},large:{totalColumns:8,gutterSize:24},xlarge:{totalColumns:12,gutterSize:24},xxlarge:{contentWidth:1364,totalColumns:12,gutterSize:32},xxxlarge:{contentWidth:1640,totalColumns:12,gutterSize:32}}},Uy5J:function(o,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.values=t.parse=t.gutterExpr=void 0;const a=/(-)?(?:(\d+)c)?(?:((?:\d+\.)?\d+)g)?/,r=o=>{const[,t,e,r]=o.match(a)||[];return{negative:Boolean(t),columns:e?parseInt(e):0,gutters:r?Math.round(100*parseFloat(r))/100:0}};t.parse=r;const n=(o,t,e)=>{const a=e?(1-o)*t:(o-1)*t;return a>0?` + ${a}px`:a<0?` - ${Math.abs(a)}px`:""};t.gutterExpr=n;t.values=({contentWidth:o,totalColumns:t,gutterSize:e,calcType:a})=>l=>{const{negative:i,columns:f,gutters:s}=r(l);if(f){if("fractions"===a)return`${f}fr`;{const a=o?`${o}px`:"100vw";return`calc(${i?`(${e}px - ${a})`:`(${a} - ${e}px)`} * ${f/t}${n(s,e,i)})`}}return`${i?"-":""}${e*s}px`}},ZdL9:function(o,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.thetakeout=t.theroot=t.theonion=t.theinventory=t.quartz=t.kotaku=t.jezebel=t.jalopnik=t.gizmodo=t.default=t.deadspin=t.colors=t.brandColors=t.blogThemes=t.avclub=t.applyThemeTypography=void 0;var a=e("UutA"),r=e("yAx5"),n=e("3oR8"),l=e("KpbG"),i=e("HxTW"),f=e("77cC"),s=e("bOKD"),d=e("rEz5"),c=e("IXzj"),p=e("E9CN"),m=e("eU9s");const g={primary:"#0A7BC2",primaryLight:"#0C91E4",backgroundLight:"#E6F2F8",logo:"#000",success:"#23891F",alert:"#EEB544",error:"#D24A1D",white:"#FFF",whitesmoke:"#F5F5F5",lightgray:"#E5E5E5",midgray:"#CCC",gray:"#757575",darkgray:"#666",darksmoke:"#222",black:"#000",lightgreen:"#e5eee4",facebook:"#1877F2",instagram:"#C32AA3",youtube:"#FF0000",twitter:"#1DA1F2",google:"#DB4437",linkedin:"#0077B5",rss:"#7D7D7D",amazon:"#F5C056",commerce:"#72AD75",newCommerce:"#0075B2"};t.colors=g;const u={avclub:{primary:"#9408A3",primaryLight:"#D20BE7",secondary:"#91DBD9",backgroundLight:"#E5F7F9",logo:"#1C263C",lightGray:"#D9D9D9"},deadspin:{primary:"#247B72",primaryLight:"#249D9D",backgroundLight:"#EAF5F4",logo:"#1B3A4D",deadspinLightblue:"#7DA8C4",deadspinLightgreen:"#DEFF73",lightGray:"#D9DADF"},gizmodo:{primary:"#0B008A",primaryLight:"#18AFED",secondary:"#695CFF",tertiary:"#DAD6FF",backgroundLight:"#E6F2F8",logo:"#0B008A",lightGray:"#D9D9D9",categorizationLink:"#8D8D8D"},io9:{primary:"#0075B2",logo:"#B384AB"},jalopnik:{primary:"#00594F",primaryLight:"#A63446",backgroundLight:"#E8E9F3",logo:"#00594F",headline:"#A63446",divider:"#A63446",categorizationLink:"#8D8D8D",lightGray:"#D9DADF"},jezebel:{primary:"#a90026",primaryLight:"#FFEBBE",backgroundLight:"#FFF0F3",logo:"#a90026",jezebelBlue:"#00D0FF"},kinjadeals:{primary:"#4A7D51",primaryLight:"#72AD75",backgroundLight:"#F5FAF5",logo:"#72AD75",dealsBlue:"#008CBA"},deals:{primary:"#4A7D51",primaryLight:"#72AD75",backgroundLight:"#F5FAF5",logo:"#72AD75",dealsBlue:"#008CBA"},kotaku:{primary:"#B12460",primaryLight:"#FBC000",backgroundLight:"#FDF0C7",logo:"#FBC000",kotakuGreen:"#54AB97",kotakuBurgandy:"#36222b",headline:"#FBC000",divider:"#FBC000",lightGray:"#D9DADF"},theinventory:{primary:"#8F085E",primaryLight:"#F764C1",backgroundLight:"#F5DFED",logo:"#8F085E"},theroot:{primary:"#3F7A1A",primaryLight:"#509C21",backgroundLight:"#E6F2DF",logo:"#509C21",therootOrange:"#DD6634",therootPurple:"#692695"},theonion:{primary:"#006B3A",primaryLight:"#94D1B4",backgroundLight:"#DFF5EB",logo:"#006B3A",headline:"#E5E5E5"},thetakeout:{primary:"#CA3116",primaryLight:"#FBC000",backgroundLight:"#FAF0C3",logo:"#E5371A",thetakeoutBlue:"#174066"},test:{primary:"#0075B2",primaryLight:"#18AFED",backgroundLight:"#E6F2F8",logo:"#18AFED"},quartz:{primary:"#168DD9",primaryLight:"#76cbff",logo:g.black,activeLink:"#0078a0",bodytext:g.black,gray:(0,r.rgba)(g.black,.7),secondarytext:(0,r.rgba)(g.black,.7),bodyBackground:"#F9F9F9",adBackground:(0,r.rgba)(212,212,212,1),borderColor:(0,r.rgba)(0,0,0,.15)}};t.brandColors=u;const x={RobotoCond:{fontFamily:"Roboto Condensed, Roboto fallback",fontSizes:{xsmall:"16px",small:"19px",medium:"24px",large:"32px",xlarge:"37px"},lineHeights:{xsmall:"24px",small:"24px",medium:"32px",large:"40px",xlarge:"44px"}},Georgia:{fontFamily:"Georgia, serif",fontSizes:{xsmall:"16px",small:"17px",medium:"18px",large:"29px",xlarge:"33px"},lineHeights:{xsmall:"24px",small:"24px",medium:"32px",large:"40px",xlarge:"44px"}},FiraSans:{fontFamily:"FiraSans, sans-serif",fontSizes:{xsmall:"15px",small:"17px",medium:"21px",large:"29px",xlarge:"35px"},lineHeights:{xsmall:"24px",small:"24px",medium:"32px",large:"40px",xlarge:"44px"}},LibreBaskerville:{fontFamily:"Libre Baskerville, serif",fontSizes:{xsmall:"14px",small:"15px",medium:"19px",large:"26px",xlarge:"30px"},lineHeights:{xsmall:"24px",small:"24px",medium:"32px",large:"40px",xlarge:"44px"}},WorkSans:{fontFamily:"Work Sans, sans-serif",fontSizes:{xsmall:"14px",small:"18px",medium:"26px",large:"29px",xlarge:"40px"},lineHeights:{xsmall:"20px",small:"24px",medium:"32px",large:"36px",xlarge:"44px"}},Amiri:{fontFamily:"Amiri, serif",fontSizes:{xsmall:"16px",small:"21px",medium:"27px",large:"36px",xlarge:"41px"},lineHeights:{xsmall:"20px",small:"24px",medium:"32px",large:"40px",xlarge:"44px"}},Oswald:{fontFamily:"Oswald, sans-serif",fontSizes:{xsmall:"17px",small:"20px",medium:"28px",large:"32px",xlarge:"42px"},lineHeights:{xsmall:"20px",small:"24px",medium:"32px",large:"40px",xlarge:"48px"}},Archivo:{fontFamily:'"Archivo", -apple-system, "Helvetica Neue", helvetica, "Hiragino Sans", sans-serif',fontSizes:{xsmall:"16px",small:"20px",medium:"26px",large:"28px",xlarge:"40px",xxlarge:"64px"},lineHeights:{xsmall:"24px",small:"27px",medium:"32px",large:"36px",xlarge:"44px"}},ArchivoNarrow:{fontFamily:'"Archivo Narrow", -apple-system, "Helvetica Neue", helvetica, "Hiragino Sans", sans-serif',fontSizes:{xsmall:"16px",small:"20px",medium:"26px",large:"28px",xlarge:"40px",xxlarge:"64px"},lineHeights:{xsmall:"24px",small:"27px",medium:"32px",large:"36px",xlarge:"44px"}},PTSerif:{fontFamily:'"PT Serif", -apple-system, "Helvetica Neue", helvetica, "Hiragino Sans", sans-serif',fontSizes:{xsmall:"14px",small:"16px",medium:"20px",large:"29px",xlarge:"40px"},lineHeights:{xsmall:"20px",small:"24px",medium:"32px",large:"36px",xlarge:"44px"}},PublicoHeadline:{fontFamily:'"Publico Headline", -apple-system, "Helvetica Neue", helvetica, "Hiragino Sans", sans-serif',fontSizes:{xsmall:"14px",small:"18px",medium:"26px",large:"29px",xlarge:"40px"},lineHeights:{xsmall:"20px",small:"24px",medium:"32px",large:"36px",xlarge:"44px"}}};t.applyThemeTypography=(o,t)=>(0,a.css)(["",""],(({theme:e})=>((o,t)=>`\n\tfont-size: ${o.fontSizes[t]};\n\tline-height: ${o.lineHeights[t]};\n`)(e.typography[o]||e.typography.primary,t)));const h={color:{...g,bodyBackground:g.white,adBackground:g.whitesmoke,bodytext:g.darksmoke,secondarytext:g.gray,backgroundLayer:(0,r.rgba)(g.black,.45),foregroundLayer:(0,r.rgba)(g.black,.4),whiteOverlay:(0,r.rgba)(g.white,.7),blackOverlay:(0,r.rgba)(g.black,.7),darkBlackOverlay:(0,r.rgba)(g.black,.9),featuredPostHeaderBackgroundColor:g.black,featuredPostHeaderColor:g.white},gridValue:(0,n.makeGridValue)({...l.gridConfig}),typography:{primary:x.RobotoCond,serif:x.Georgia,tertiary:x.FiraSans,headline:x.RobotoCond,subHead:x.RobotoCond,excerpt:x.RobotoCond,body:x.Georgia,utility:x.RobotoCond,headerLinks:x.RobotoCond,headlineWeight:700,labelWeight:700,metaFontWeight:600,commerceDisclaimerFontSize:"10px",headlineSize:"24px",embiggenedHeadlineSize:"34px",headlineLineHeight:"1.3",permalinkHeadlineSize:{small:"2rem",mediumUp:"2.5rem",xxxlargeUp:"3rem"},permalinkHeadlineLineHeight:"1.2",metaFontStyle:"normal",hedFontWeight:"normal",boldFontWeight:"bold",preloadUrls:[p.robotoCondRegWoff2,p.robotoCondRegItWoff2,p.robotoCondBoldWoff2,p.robotoCondBoldItWoff2],curatedHomepage:{...x.RobotoCond,curatedHomepageSecondary:x.RobotoCond,fontSizes:{xsmall:"16px",small:"18px",medium:"21px",large:"28px",xlarge:"32px",xxlarge:"52px"},lineHeights:{xsmall:"24px",small:"24px",medium:"25px",large:"34px",xlarge:"38px",xxlarge:"64px"}}},linkTransition:"0.1s ease-out",columnGutter:"2.25rem",columnPadding:"1.125rem",columnPaddingAdjusted:"1.075rem",columnGutter19:{small19:"1rem",largeUp:"1.5rem",xlargeUp:"2rem"},columnPadding19:{small19:"0.5rem",largeUp:"0.75rem",xlargeUp:"1rem"},pageWidth:"1336px",sidebarContainerWidth:"33.5%",mainContainerWidth:"66.5%",featuredContentWidth:"1024px",sidebarContentMinWidth:"200px",sidebarContentMaxWidth:"360px",mainContentMaxWidth:"800px",postContentMaxWidth:"636px",breakpointBanner:"969px",breakpointMedium:"53.125em",globalNavHeight:"80px",scrollbackNavHeight:"60px",slideshowTransitionDuration:"0.2s",thumbnailBorderRadius:"0",thumbnailOnTheRight:!1,headerTopMargin:"0",homepageBorders:!0,homepageCardVerticalPadding:"0rem",homepageCardHorizontalPadding:"0rem",homepageBlockSpacing:"2rem",homepageBlockSpacingMobile:"2rem",metaFontStyle:"normal",postHeaderTextAlign:"center",homepageBlockBorderSpacing:"1rem"},y={...h,homepageBorders:!1,homepageBlockSpacing:"4.6875rem",homepageBlockSpacingMobile:"3.4375rem",color:{...h.color,...u.avclub,videoBlockPrimary:u.avclub.primary,videoBlockSecondary:u.avclub.secondary},typography:{...h.typography,curatedHomepage:{...x.RobotoCond,curatedHomepageSecondary:x.RobotoCond,fontSizes:{xsmall:"16px",small:"18px",medium:"21px",large:"28px",xlarge:"32px",xxlarge:"52px"},lineHeights:{xsmall:"24px",small:"24px",medium:"25px",large:"34px",xlarge:"38px",xxlarge:"64px"}}}};t.avclub=y;const b={...h,color:{...h.color,...u.deadspin,videoBlockPrimary:u.deadspin.primaryLight,videoBlockSecondary:u.deadspin.deadspinLightblue},typography:{...h.typography,curatedHomepage:{...x.RobotoCond,curatedHomepageSecondary:x.RobotoCond,fontSizes:{xsmall:"16px",small:"18px",medium:"21px",large:"32px",xlarge:"40px",xxlarge:"52px"},lineHeights:{xsmall:"24px",small:"24px",medium:"34px",large:"38px",xlarge:"46px",xxlarge:"64px"}}},thumbnailBorderRadius:"8px",homepageBorders:!1,homepageBlockSpacing:"4.6875rem",homepageBlockSpacingMobile:"3.125rem"};t.deadspin=b;const w={...h,color:{...h.color,...u.gizmodo,videoBlockPrimary:u.gizmodo.secondary,videoBlockSecondary:u.gizmodo.primary},gridValue:(0,n.makeGridValue)({...l.gridConfig,small:{...h.gridValue.small,calcType:"fractions"},medium:{...h.gridValue.medium,calcType:"fractions"},large:{...h.gridValue.large,calcType:"fractions",gutterSize:30},xlarge:{calcType:"fractions",totalColumns:12,gutterSize:60},xxlarge:{calcType:"fractions",totalColumns:12,gutterSize:60},xxxlarge:{calcType:"fractions",totalColumns:12,gutterSize:60}}),typography:{...h.typography,curatedHomepage:{...x.RobotoCond,curatedHomepageSecondary:x.RobotoCond,fontSizes:{xsmall:"16px",small:"19px",medium:"28px",large:"52px"},lineHeights:{xsmall:"24px",small:"24px",medium:"28px",large:"64px"}}},thumbnailBorderRadius:"4px",homepageBorders:!1};t.gizmodo=w;const k={...h,color:{...h.color,...u.jalopnik,videoBlockPrimary:u.jalopnik.logo,videoBlockSecondary:u.jalopnik.primary},typography:{...h.typography,curatedHomepage:{...x.Archivo,fontSizes:{xsmall:"16px",small:"18px",medium:"21px",large:"32px",xlarge:"40px"},lineHeights:{xsmall:"24px",small:"24px",medium:"32px",large:"38px",xlarge:"44px"}},curatedHomepageSecondary:x.Archivo,primary:x.Archivo,utility:x.Archivo,headerLinks:x.Archivo,excerpt:x.Archivo,letterSpacing:"0.5px",headlineWeight:900,labelWeight:600,metaFontWeight:400},homepageBorders:!1};t.jalopnik=k;const v={...h,color:{...h.color,...u.jezebel,videoBlockPrimary:u.jezebel.primary,videoBlockSecondary:u.jezebel.primaryLight},typography:{...h.typography,curatedHomepage:x.Amiri,headlineWeight:400,metaFontStyle:"italic",preloadUrls:[...h.typography.preloadUrls,i.amiriRegularWoff2]},homepageCardVerticalPadding:"0.5rem",homepageCardHorizontalPadding:"1rem",homepageBlockSpacing:"2.5rem"};t.jezebel=v;const W={...h,color:{...h.color,...u.kotaku,videoBlockPrimary:u.kotaku.primaryLight,videoBlockSecondary:u.kotaku.primary},gridValue:(0,n.makeGridValue)({...l.gridConfig,small:{...h.gridValue.small,calcType:"fractions"},medium:{...h.gridValue.medium,calcType:"fractions"},large:{...h.gridValue.large,calcType:"fractions",gutterSize:30},xlarge:{calcType:"fractions",totalColumns:12,gutterSize:60},xxlarge:{calcType:"fractions",totalColumns:12,gutterSize:60},xxxlarge:{calcType:"fractions",totalColumns:12,gutterSize:60}}),typography:{...h.typography,headline:x.WorkSans,primary:x.WorkSans,curatedHomepage:x.WorkSans,curatedHomepageSecondary:x.WorkSans,preloadUrls:[...h.typography.preloadUrls,m.worksans600WItoff2,m.worksans600Woff2,m.worksans700ItWoff2,m.worksans700Woff2,m.worksansRegItWoff2,m.worksansRegWoff2]},homepageBorders:!1};t.kotaku=W;const S={...h,color:{...h.color,...u.theinventory}};t.theinventory=S;const C={...h,color:{...h.color,...u.theroot,videoBlockPrimary:u.theroot.primary,videoBlockSecondary:u.theroot.primaryLight},typography:{...h.typography,curatedHomepage:{...x.Oswald,fontSizes:{xsmall:"16px",small:"18px",medium:"21px",large:"28px",xlarge:"32px",xxlarge:"52px"},lineHeights:{xsmall:"24px",small:"24px",medium:"25px",large:"34px",xlarge:"38px",xxlarge:"64px"}},headlineWeight:700,preloadUrls:[...h.typography.preloadUrls,d.oswaldMediumWoff2]},homepageCardVerticalPadding:"0.5rem",homepageCardHorizontalPadding:"0rem",homepageBlockSpacing:"2.5rem",homepageBorders:!1};t.theroot=C;const B={...h,color:{...h.color,...u.theonion,videoBlockPrimary:u.theonion.primary,videoBlockSecondary:u.theonion.primaryLight},typography:{...h.typography,headline:x.Georgia,excerpt:x.Georgia,curatedHomepage:x.LibreBaskerville,headlineSize:"22px",embiggenedHeadlineSize:"28px",headlineLineHeight:"1.4",permalinkHeadlineSize:{small:"2rem",mediumUp:"2.125rem",xxxlargeUp:"2.5rem"},permalinkHeadlineLineHeight:"1.3",preloadUrls:[...h.typography.preloadUrls,s.libreBaskervilleBoldWoff2]}};t.theonion=B;const F={...h,color:{...h.color,...u.thetakeout,videoBlockPrimary:u.thetakeout.primaryLight,videoBlockSecondary:u.thetakeout.primary},typography:{...h.typography,metaFontStyle:"italic"},homepageCardVerticalPadding:"0.5rem",homepageCardHorizontalPadding:"1rem",homepageBlockSpacing:"2.5rem"};t.thetakeout=F;const $={...x.ArchivoNarrow,fontSizes:{xsmall:"18px",small:"21px",medium:"24px",large:"32px",xlarge:"40px"},lineHeights:{xsmall:"24px",small:"25px",medium:"30px",large:"38px",xlarge:"44px"}},A={...h,color:{...h.color,...u.quartz,featuredPostHeaderBackgroundColor:"#f9f9f9",featuredPostHeaderColor:"#000",videoBlockPrimary:u.quartz.primary,videoBlockSecondary:u.quartz.primaryLight},typography:{...h.typography,curatedHomepage:$,curatedHomepageSecondary:$,primary:x.ArchivoNarrow,serif:x.PTSerif,headline:x.ArchivoNarrow,subHead:x.PTSerif,excerpt:$,body:x.PTSerif,utility:x.ArchivoNarrow,headerLinks:x.ArchivoNarrow,kicker:x.ArchivoNarrow,headlineWeight:800,labelWeight:800,hedFontWeight:800,boldFontWeight:800,permalinkHeadlineSize:{small:"24px",mediumUp:"48px",xxxlargeUp:"64px"},preloadUrls:[f.archivoNarrowRegWoff2,f.archivoNarrow500Woff2,f.archivoNarrow600Woff2,f.archivoNarrow700Woff2,c.ptSerifRegularWoff2,c.ptSerifBoldWoff2]},thumbnailBorderRadius:"8px",homepageBorders:!1,postHeaderTextAlign:"left",headerTopMargin:"40px"};t.quartz=A;const R={avclub:y,deadspin:b,gizmodo:w,jalopnik:k,jezebel:v,kotaku:W,splinter:h,theinventory:S,theroot:C,theonion:B,thetakeout:F,quartz:A,default:h};t.blogThemes=R;var _=h;t.default=_},bOKD:function(o,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.libreBaskervilleBoldWoff2=t.default=void 0;const a=`${e("4TrE").fonturl}/libre-baskerville/libre-baskerville-bold.woff2`;t.libreBaskervilleBoldWoff2=a;var r=`\n\t// libre-baskerville-bold ********** 700\n\t@font-face {\n\t\tfont-display: fallback;\n\t\tfont-family: 'Libre Baskerville';\n\t\tfont-weight: 700;\n\t\tfont-style: normal;\n\t\tsrc: local('Libre Baskerville Bold'), local('LibreBaskerville-Bold'),\n\t\t\turl(${a}) format('woff2');\n\t}\n`;t.default=r},eU9s:function(o,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.worksansRegWoff2=t.worksansRegItWoff2=t.worksans700Woff2=t.worksans700ItWoff2=t.worksans600Woff2=t.worksans600WItoff2=t.default=void 0;var a=e("4TrE");const r=`${a.fonturl}/work-sans/work-sans-v19-latin_latin-ext-regular.woff2`;t.worksansRegWoff2=r;const n=`${a.fonturl}/work-sans/work-sans-v19-latin_latin-ext-italic.woff2`;t.worksansRegItWoff2=n;const l=`${a.fonturl}/work-sans/work-sans-v19-latin_latin-ext-600.woff2`;t.worksans600Woff2=l;const i=`${a.fonturl}/work-sans/work-sans-v19-latin_latin-ext-600italic.woff2`;t.worksans600WItoff2=i;const f=`${a.fonturl}/work-sans/work-sans-v19-latin_latin-ext-700.woff2`;t.worksans700Woff2=f;const s=`${a.fonturl}/work-sans/work-sans-v19-latin_latin-ext-700italic.woff2`;t.worksans700ItWoff2=s;var d=`\n\t// Work Sans Regular\n\t@font-face {\n\t\tfont-display: fallback;\n\t\tfont-family: 'Work Sans';\n\t\tfont-weight: 400;\n\t\tfont-style: normal;\n\t\tsrc: url(${r}) format("woff2");\n\t}\n\n\t// Work Sans Italics\n\t@font-face {\n\t\tfont-display: fallback;\n\t\tfont-family: 'Work Sans';\n\t\tfont-weight: 400;\n\t\tfont-style: italic;\n\t\tsrc: url(${n}) format("woff2");\n\t}\n\n\t// Work Sans Regular 600\n\t@font-face {\n\t\tfont-display: fallback;\n\t\tfont-family: 'Work Sans';\n\t\tfont-weight: 600;\n\t\tfont-style: normal;\n\t\tsrc: url(${l}) format("woff2");\n\t}\n\n\t// Work Sans Italics 600\n\t@font-face {\n\t\tfont-display: fallback;\n\t\tfont-family: 'Work Sans';\n\t\tfont-weight: 600;\n\t\tfont-style: italic;\n\t\tsrc: url(${i}) format("woff2");\n\t}\n\n\t//Work Sans Regular 700\n\t@font-face {\n\t\tfont-display: fallback;\n\t\tfont-family: 'Work Sans';\n\t\tfont-weight: 700;\n\t\tfont-style: normal;\n\t\tsrc: url(${f}) format("woff2");\n\t}\n\n\t// Work Sans Italics 700\n\t@font-face {\n\t\tfont-display: fallback;\n\t\tfont-family: 'Work Sans';\n\t\tfont-weight: 700;\n\t\tfont-style: italic;\n\t\tsrc: url(${s}) format("woff2");\n\t}\n`;t.default=d},rEz5:function(o,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.oswaldSemiBoldWoff2=t.oswaldRegularWoff2=t.oswaldMediumWoff2=t.oswaldLightWoff2=t.oswaldBoldWoff2=t.default=void 0;var a=e("4TrE");const r=`${a.fonturl}/oswald-ext/oswald-ext-light.woff2`;t.oswaldLightWoff2=r;const n=`${a.fonturl}/oswald-ext/oswald-ext-regular.woff2`;t.oswaldRegularWoff2=n;const l=`${a.fonturl}/oswald-ext/oswald-ext-medium.woff2`;t.oswaldMediumWoff2=l;const i=`${a.fonturl}/oswald-ext/oswald-ext-semibold.woff2`;t.oswaldSemiBoldWoff2=i;const f=`${a.fonturl}/oswald-ext/oswald-ext-bold.woff2`;t.oswaldBoldWoff2=f;var s=`\n\t// Oswald - light\n\t@font-face {\n\t\tfont-display: fallback;\n\t\tfont-family: 'Oswald';\n\t\tfont-weight: 400;\n\t\tfont-style: normal;\n\n\t\tsrc: url(${r}) format('woff2');\n\t}\n\n\t// Oswald - regular\n\t@font-face {\n\t\tfont-display: fallback;\n\t\tfont-family: 'Oswald';\n\t\tfont-weight: 400;\n\t\tfont-style: normal;\n\n\t\tsrc: url(${n}) format('woff2');\n\t}\n\n\t// Oswald - medium\n\t@font-face {\n\t\tfont-display: fallback;\n\t\tfont-family: 'Oswald';\n\t\tfont-weight: 500;\n\t\tfont-style: normal;\n\n\t\tsrc: url(${l}) format('woff2');\n\t}\n\n\t// Oswald - semibold\n\t@font-face {\n\t\tfont-display: fallback;\n\t\tfont-family: 'Oswald';\n\t\tfont-weight: 600;\n\t\tfont-style: normal;\n\n\t\tsrc: url(${i}) format('woff2');\n\t}\n\n\t// Oswald - bold\n\t@font-face {\n\t\tfont-display: fallback;\n\t\tfont-family: 'Oswald';\n\t\tfont-weight: 700;\n\t\tfont-style: normal;\n\n\t\tsrc: url(${f}) format('woff2');\n\t}\n`;t.default=s}}]);