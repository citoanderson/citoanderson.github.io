(window.webpackJsonp=window.webpackJsonp||[]).push([["adEditor~biztoolsPage~channelSectionPage~curatedHomepage~curatedPostsPage~editorPage~errorPage~featu~56dbe87f"],{"//ky":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.languages=t.languageDisplayNames=t.defaultLanguage=void 0;t.defaultLanguage="en";t.languages={en:"EN",es:"ES",ja:"JA",de:"DE",fr:"FR"};t.languageDisplayNames={en:"English",es:"Español",de:"Deutsch",fr:"Français",ja:"日本語"}},"2pqj":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,r=o("TiJv"),a=o("lI4E"),n=(i=o("skmR"))&&i.__esModule?i:{default:i},s=o("4AjC"),l=o("i03R"),p=o("5BOv");class c{constructor(e){this.id=e.id,this.name=e.name,this.displayName=e.displayName,this.canonicalHostOriginal=e.canonicalHostOriginal||e.canonicalHost,this.status=e.status,this.timezone=e.timezone,this.timezoneOffset=e.timezoneOffset,this.createTimeMillis=e.createTimeMillis,this.ownerId=e.ownerId,this.description=e.description,this.isLiveSpecialSection=e.isLiveSpecialSection,this.properties=e.properties||{},this.avatar=e.avatar,this.logo=e.logo,e.properties&&e.properties.background&&(this.headerBackground={background:e.properties.background.background,mode:e.properties.background.mode})}get blogGroupTyped(){return this.properties.blogGroup||this.name}get canonicalHost(){return(0,l.rewriteHost)(this.canonicalHostOriginal||"")}get trackonomicsCustomerId(){return this.properties&&this.properties.trackonomicsCustomerId}get language(){return this.properties&&this.properties.language||"en"}get locale(){return this.properties&&this.properties.locale||r.defaultLocale}get isSatire(){return(this.properties.recircGroup||"").indexOf("fmgSatire")>-1}get adsTxtEnabled(){return Boolean(this.properties&&this.properties.adsTxtEnabled)}get noindex(){return Boolean(this.properties&&this.properties.noindex)}get blogGroup(){return this.properties&&this.properties.blogGroup||"default"}get googleSiteVerification(){return this.properties&&this.properties.googleSiteVerification}get pinterestVerification(){return this.properties&&this.properties.pinterestVerification}get flexoffersVerification(){return this.properties&&this.properties.flexoffersVerification}get facebookScreenName(){return this.properties&&this.properties.facebookScreenName}get twitterScreenName(){return this.properties&&this.properties.twitterScreenName}get instagramScreenName(){return this.properties&&this.properties.instagramScreenName}get campaignMonitorNewsletterName(){return this.properties&&this.properties.campaignMonitorNewsletterName}get youtubeUrl(){return this.properties&&this.properties.youtubeUrl}get navigationGroup(){return this.navigationGroupOpt||"fmg"}get navigationGroupOpt(){return this.properties&&this.properties.navigationGroup}get recircGroupOpt(){return this.properties&&this.properties.recircGroup}get recircGroup(){return this.properties&&this.properties.recircGroup}get aboutPostId(){return this.properties&&this.properties.aboutPostId}get hideAuthorInfo(){return Boolean(this.properties&&this.properties.hideAuthorInfo)}get hideImageAttributions(){return Boolean(this.properties&&this.properties.hideImageAttributions)}get hideRecommendations(){return Boolean(this.properties&&this.properties.hideRecommendations)}get alternativeFiledToText(){return this.properties&&this.properties.alternativeFiledToText}get robotsAllowed(){return Boolean(this.properties&&this.properties.robotsAllowed)}get commentsDisabled(){return Boolean(this.properties&&this.properties.commentsDisabled)}get fbAppId(){return this.properties&&this.properties.fbAppId}get fbPagesId(){return this.properties&&this.properties.fbPagesId}get googleAnalyticsId(){return this.properties&&this.properties.googleAnalyticsID}get surveyMonkeyId(){return this.properties&&this.properties.surveyMonkeyId}get blogTheme(){const{blogTheme:e,blogGroup:t}=this.properties;return(0,p.matchBlogGroupToTheme)(e||t)}get isCommerce(){return Boolean(this.properties&&this.properties.isCommerce)}get sitemapStartTime(){return this.properties&&this.properties.sitemapStartTime}get sitemapWeeks(){return this.properties&&this.properties.sitemapWeeks}get sitemapDisableNews(){return this.properties&&this.properties.sitemapDisableNews}get metaDescription(){return this.properties&&this.properties.metaDescription}get tagPageDescription(){return this.properties&&this.properties.tagPageDescription}get freelancerDraftEmail(){return this.properties&&this.properties.freelancerDraftEmail}get commerceTags(){const{commerceTags:e}=this.properties;return this.properties&&e?JSON.parse(e):null}get disablePartnerRecommendation(){return this.properties&&this.properties.disablePartnerRecommendation}static isBlogGroup(e,t){return(0,s.isBlogGroup)(e,t||"")}static getBlogGroup(e){return(0,s.getBlogGroup)(e||"")}get isQuartz(){return c.isBlogGroup("quartz",this.id)}static fromJSON(e){return new c({id:(0,a.createBlogId)(e.id),name:e.name,displayName:e.displayName,canonicalHost:e.canonicalHost,canonicalHostOriginal:e.canonicalHostOriginal,status:e.status,timezone:e.timezone,timezoneOffset:e.timezoneOffset,createTimeMillis:e.createTimeMillis,ownerId:e.ownerId?(0,a.createUserId)(e.ownerId):void 0,description:e.description,isLiveSpecialSection:e.isLiveSpecialSection,properties:e.properties,avatar:e.avatar?new n.default(e.avatar):void 0,logo:e.logo?new n.default(e.logo):void 0})}static toJSON(e){return{id:e.id,name:e.name,displayName:e.displayName,canonicalHost:e.canonicalHost,status:e.status,timezone:e.timezone,timezoneOffset:e.timezoneOffset,...e.createTimeMillis?{createTimeMillis:e.createTimeMillis}:null,...e.ownerId?{ownerId:e.ownerId}:null,...e.description?{description:e.description}:null,isLiveSpecialSection:e.isLiveSpecialSection,properties:e.properties,...e.avatar?{avatar:e.avatar}:null,...e.logo?{logo:e.logo}:null}}}var u=c;t.default=u,e.exports=t.default},"4AjC":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.matchBlogId=t.isBlogGroup=t.getBlogName=t.getBlogId=t.getBlogGroup=t.getBlogDisplayName=void 0;var i=p(o("dtQo")),r=p(o("sJMx")),a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var o=l(t);if(o&&o.has(e))return o.get(e);var i={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var n=r?Object.getOwnPropertyDescriptor(e,a):null;n&&(n.get||n.set)?Object.defineProperty(i,a,n):i[a]=e[a]}i.default=e,o&&o.set(e,i);return i}(o("XF7X")),n=o("8DOO"),s=o("lI4E");function l(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,o=new WeakMap;return(l=function(e){return e?o:t})(e)}function p(e){return e&&e.__esModule?e:{default:e}}t.getBlogName=e=>a.default[e.toString()]||"default";const c=e=>{const t=r.default.find((t=>a.default[t]===e));return t?(0,s.createBlogId)(t):null};t.matchBlogId=c;t.getBlogId=e=>c(e)||(0,s.createBlogId)(a.DEFAULT_BLOG_ID);const u=Object.keys(n.primaryBlogs).reduce(((e,t)=>{const{id:o,translations:i}=n.primaryBlogs[t];return{...e,[o.toString()]:t,...Object.keys(i).reduce(((e,o)=>{const{id:r}=i[o];return{...e,[r.toString()]:t}}),{})}}),{}),d=e=>u[e.toString()]||"default";t.getBlogGroup=d;t.isBlogGroup=(e,t)=>d(t)===e;t.getBlogDisplayName=e=>i.default[e.toString()]||""},"5BOv":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.matchBlogGroupToTheme=void 0;const i=["avclub","deadspin","gizmodo","jalopnik","jezebel","kotaku","splinter","theinventory","theroot","theonion","thetakeout","quartz","default"];t.matchBlogGroupToTheme=e=>i.find((t=>t===e))||"default"},"8DOO":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.primaryBlogs=void 0;t.primaryBlogs={avclub:{id:1636027099,name:"avclub",displayName:"The A.V. Club",canonicalHost:"www.avclub.com",translations:{es:{id:1638532508,name:"esavclub",displayName:"AVClub en Español",canonicalHost:"es.avclub.com"}}},deadspin:{id:11,name:"deadspin",displayName:"Deadspin",canonicalHost:"deadspin.com",translations:{es:{id:1638532510,name:"esdeadspin",displayName:"Deadspin en Español",canonicalHost:"es.deadspin.com"}}},gizmodo:{id:4,name:"gizmodo",displayName:"Gizmodo",canonicalHost:"gizmodo.com",translations:{es:{id:19292,name:"esgizmodo",displayName:"Gizmodo en Español",canonicalHost:"es.gizmodo.com"},de:{id:1638532517,name:"degizmodo",displayName:"Gizmodo auf Deutsch",canonicalHost:"de.gizmodo.com"},fr:{id:1638532516,name:"frgizmodo",displayName:"Gizmodo en Français",canonicalHost:"fr.gizmodo.com"}}},jalopnik:{id:12,name:"jalopnik",displayName:"Jalopnik",canonicalHost:"jalopnik.com",translations:{es:{id:1638532509,name:"esjalopnik",displayName:"Jalopnik en Español",canonicalHost:"es.jalopnik.com"},de:{id:1638532518,name:"dejalopnik",displayName:"Jalopnik auf Deutsch",canonicalHost:"de.jalopnik.com"},fr:{id:1638532519,name:"frjalopnik",displayName:"Jalopnik en Français",canonicalHost:"fr.jalopnik.com"}}},jezebel:{id:39,name:"jezebel",displayName:"Jezebel",canonicalHost:"jezebel.com",translations:{}},kotaku:{id:9,name:"kotaku",displayName:"Kotaku",canonicalHost:"kotaku.com",translations:{es:{id:1638532507,name:"eskotaku",displayName:"Kotaku en Español",canonicalHost:"es.kotaku.com"},de:{id:1638532512,name:"dekotaku",displayName:"Kotaku auf Deutsch",canonicalHost:"de.kotaku.com"},fr:{id:1638532513,name:"frkotaku",displayName:"Kotaku en Français",canonicalHost:"fr.kotaku.com"}}},splinter:{id:1635895473,name:"splinter",displayName:"Splinter",canonicalHost:"splinternews.com",translations:{}},theinventory:{id:1458353822,name:"theinventory",displayName:"The Inventory",canonicalHost:"theinventory.com",translations:{}},theonion:{id:1636079510,name:"theonion",displayName:"The Onion",canonicalHost:"www.theonion.com",translations:{}},theroot:{id:1635821517,name:"theroot",displayName:"The Root",canonicalHost:"www.theroot.com",translations:{es:{id:1638532522,name:"estheroot",displayName:"The Root en Español",canonicalHost:"es.theroot.com"},de:{id:1638532520,name:"detheroot",displayName:"The Root auf Deutsch",canonicalHost:"de.theroot.com"},fr:{id:1638532521,name:"frtheroot",displayName:"The Root en Français",canonicalHost:"fr.theroot.com"}}},thetakeout:{id:1636140418,name:"thetakeout",displayName:"The Takeout",canonicalHost:"thetakeout.com",translations:{}},quartz:{id:1638532506,name:"quartz",displayName:"Quartz",canonicalHost:"qz.com",translations:{es:{id:1638532511,name:"esquartz",displayName:"Quartz en Español",canonicalHost:"es.qz.com"},de:{id:1638532515,name:"dequartz",displayName:"Quartz auf Deutsch",canonicalHost:"de.qz.com"},fr:{id:1638532514,name:"frquartz",displayName:"Quartz en Français",canonicalHost:"fr.qz.com"}}}}},Rsny:function(e,t,o){"use strict";function i(e,t,o){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var i=o.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.Logger=t.DEFAULT_LOG=t.DEBUG_LOG=t.CLIENT_ERRORS_LOG=void 0;t.DEFAULT_LOG="DEFAULT_LOG";t.CLIENT_ERRORS_LOG="CLIENT_ERRORS_LOG";t.DEBUG_LOG="DEBUG_LOG";class r{constructor(e){i(this,"debug",((e,t)=>this.log("debug",e,t))),i(this,"info",((e,t)=>this.log("info",e,t))),i(this,"warning",((e,t)=>this.log("warning",e,t))),i(this,"error",((e,t)=>this.log("error",e,t))),i(this,"critical",((e,t)=>this.log("critical",e,t))),this.scope=e}log(e,t,o){(console[e]||console.log)(`${e.toUpperCase()}: ${this.scope} ${t}`,o)}}t.Logger=r;var a=r;t.default=a},TiJv:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.locales=t.localeToLanguage=t.languageToLocale=t.defaultLocale=t.default=void 0;var i=o("//ky");const r="en-US";t.defaultLocale=r;const a={en:"en-US",es:"es-ES",ja:"ja-JP",de:"de-DE",fr:"fr-FR"};t.locales=a;t.localeToLanguage=e=>Object.keys(a).find((t=>a[t]===e))||i.defaultLanguage;t.languageToLocale=e=>a[e||i.defaultLanguage]||r;var n={defaultLocale:r,locales:a};t.default=n},XF7X:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.otherBlogNames=t.default=t.GOMEDIASTUDIOS_BLOG_ID=t.DEFAULT_BLOG_ID=void 0;var i=o("8DOO");t.DEFAULT_BLOG_ID="464";const r=Object.keys(i.primaryBlogs).reduce(((e,t)=>{const{id:o,name:r,translations:a}=i.primaryBlogs[t];return{...e,[o.toString()]:r,...Object.keys(a).reduce(((e,t)=>{const{id:o,name:i}=a[t];return{...e,[o.toString()]:i}}),{})}}),{464:"default"}),a="4541888";t.GOMEDIASTUDIOS_BLOG_ID=a;const n={[a]:"gomediastudios",1636420981:"onionnative"};t.otherBlogNames=n;var s=r;t.default=s},dtQo:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o("XF7X"),r=o("8DOO");var a=Object.keys(r.primaryBlogs).reduce(((e,t)=>{const{id:o,displayName:i,translations:a}=r.primaryBlogs[t];return{...e,[o.toString()]:i,...Object.keys(a).reduce(((e,t)=>{const{id:o,displayName:i}=a[t];return{...e,[o.toString()]:i}}),{})}}),{[i.DEFAULT_BLOG_ID]:"default"});t.default=a,e.exports=t.default},i03R:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.parseUrl=t.getHostByUrl=void 0,t.replaceTldOf=c,t.rewriteHost=p,t.rewriteUrl=void 0,t.tldOf=function(e){return e.split(".").slice(-1).join("")};var i=r(o("f8ne"));function r(e){return e&&e.__esModule?e:{default:e}}const a=new(r(o("Rsny")).default)("kinja:magma"),n=e=>{try{if(/^https?:\/\//i.test(e))return new URL(e)}catch(t){a.warning(`Could not parse url: ${e}`)}};t.parseUrl=n;const s=e=>{const t=n(e);return t?t.hostname:null};t.getHostByUrl=s;const l=(i.default.isDev?"development":i.default.isStage&&"staging")||"production";function p(e,t=l){return"production"===t?e:-1!==["development","staging"].indexOf(t)?"kinja.com"===e?"staging"===t?"kinjastaging.com":"kinja.localhost:3000":e.endsWith("kinjastaging.com")?e:c(e,"staging"===t?"kinjastaging.com":"localhost:3000"):e}function c(e,t){return e.split(".").slice(0,-1).join(".").concat(".").concat(t)}t.rewriteUrl=(e,t=!0,o=l)=>{if("production"===o)return e;const i=s(e);if(i){const r=new URL(e),a=p(i,o);if(i!==a){const[e,t]=a.split(":");r.hostname=e,r.port=t,"development"===o&&(r.protocol="http:")}return t?r.toString().replace(/\/$/,""):r.toString()}return e}},sJMx:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.allBlogIds=void 0;var i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var o=a(t);if(o&&o.has(e))return o.get(e);var i={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if("default"!==n&&Object.prototype.hasOwnProperty.call(e,n)){var s=r?Object.getOwnPropertyDescriptor(e,n):null;s&&(s.get||s.set)?Object.defineProperty(i,n,s):i[n]=e[n]}i.default=e,o&&o.set(e,i);return i}(o("XF7X")),r=o("lI4E");function a(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,o=new WeakMap;return(a=function(e){return e?o:t})(e)}const n=Object.keys(i.default).map(r.createBlogId),s=[...Object.keys(i.otherBlogNames),...Object.keys(i.default)].map(r.createBlogId);t.allBlogIds=s;var l=n;t.default=l}}]);