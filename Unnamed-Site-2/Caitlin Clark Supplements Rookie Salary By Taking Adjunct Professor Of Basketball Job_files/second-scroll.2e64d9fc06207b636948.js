(window.webpackJsonp=window.webpackJsonp||[]).push([["second-scroll"],{"/gfI":function(e,t,o){var a=o("COrk");e.exports=function(e,t){return a(e,t)}},"4aco":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getChannelMeta=void 0;t.getChannelMeta=e=>{const{channel:t,section:o,subsection:a}=e||{};return{...t?{channel:t.canonical,channelDisplayName:t.displayName,channelId:t.id}:{},...o?{section:o.canonical,sectionDisplayName:o.displayName,sectionId:o.id}:{},...a?{subsection:a.canonical,subsectionDisplayName:a.displayName,subsectionId:a.id}:{}}}},"6WUJ":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,n=(a=o("BZkQ"))&&a.__esModule?a:{default:a};var i=e=>{const t=n.default.getPageContextByKey(e),{postMeta:o}=t,a=window._paq=window._paq||[];a.push(["setCustomUrl",location.href]),a.push(["setDocumentTitle",null==o?void 0:o.headline]),a.push(["trackPageView"]),a.push(["enableLinkTracking"])};t.default=i,e.exports=t.default},"98ez":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getCategorizationData=void 0;var a=o("Dem5");const n=async e=>{const t=await(0,a.getSectionById)(e).catch((()=>null)),o=t&&t.parentId?await(0,a.getSectionById)(t.parentId).catch((()=>null)):t,n=null!=t&&t.parentId?t:null;if(!o)return{};return{channel:await(0,a.getChannelById)(o.channelId).catch((()=>null)),section:o,subsection:n}};t.getCategorizationData=async e=>{const{channelId:t,sectionId:o,subsectionId:i}=e;return t?o?(0,a.getTreeById)(t,o,i).then((({channel:e,section:t,subsection:o})=>({channel:e,section:t,subsection:o}))):(async e=>({channel:await(0,a.getChannelById)(e).catch((()=>null))}))(t):i?n(i):o?n(o):{}}},"9B7T":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.prepareVeritasTags=t.prepareRefinitivTags=t.getPrimaryTagNames=t.default=void 0;var a=i(o("MNu8")),n=i(o("7LJO"));function i(e){return e&&e.__esModule?e:{default:e}}const r=["article","articles","jews","anti-chinese sentiment","atlanta spa shootings","human sexuality","suicidal ideation","hatred","blaq son","given names","animal sexuality","reproduction","bird breeding","rape","branches of biology","american television series","child grooming","child pornography","sexual assault","palestinian terrorism","Apes"],s=(e,t)=>{const o=(e,t,o=1)=>e&&e.length>0?t:o,a=({score:e,position:t})=>{if(!t)return e;const{inHeadline:a,inBody:n}=t;return(e+o(a,1,0)+o(n,0,0))*o(a,1)*o(n,1)},i=[...e.topics.filter((({score:e})=>e>=0)).map((e=>({name:e.name,type:"topics",score:0*a(e)}))),...e.socialTags.filter((({score:e})=>e>=0)).map((e=>({name:e.name,type:"socialTags",score:1*a(e)}))),...e.entities.filter((({score:e})=>e>=0)).filter((({confidencelevel:e})=>void 0===e||e>=.9)).map((e=>({name:e.name,type:"entities",score:1*a(e)})))].reduce(((e,{name:t,score:o})=>{const a=t.toLowerCase();return void 0===e[a]?e[a]={name:t,score:o}:e[a].score=Math.max(e[a].score,o),e}),{}),s=[];Object.keys(i).forEach((e=>s.push(i[e])));const l=(t||[]).map((e=>e.tag));return s.filter((({name:e})=>!(-1!==l.indexOf(e)))).filter((({score:e})=>e>=.01)).filter((({name:e})=>e.length<=35)).filter((({name:e})=>n.default.isAllowedString(e)&&!(-1!==r.indexOf(e.toLowerCase())))).sort(((e,t)=>e.score>t.score?-1:1))};t.prepareRefinitivTags=s;t.prepareVeritasTags=e=>Object.entries(e).reduce(((e,t)=>(e.push({name:t[0],score:Number(t[1])}),e)),[]).sort(((e,t)=>e.score>t.score?-1:1));t.getPrimaryTagNames=(e,t)=>(e&&s(e,t)||[]).map((({name:e})=>e));var l=(e,t)=>(e&&s(e,t)||[]).slice(0,4).map((({name:e})=>e)).map((e=>new a.default({canonical:e,urlName:e,displayName:e})));t.default=l},"9G0t":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withExternalSourceNameOrAuthor=t.isSlideshowAutomation=t.isFLM=t.isAPNews=void 0;(a=o("OAzy"))&&a.__esModule;var a,n=o("UXFd");t.isSlideshowAutomation=e=>e.getPropertyByKey("slideshowAutomation",!1);const i=(e,t,o)=>{if(-1!==e.authorIds.indexOf(t))return!0;const a=(e=>{const t=e.getPropertyByKey("externalData",null);return t?{sourceName:t.sourceName||"",sourceUrl:t.sourceUrl||""}:null})(e);return(null==a?void 0:a.sourceName)===o};t.withExternalSourceNameOrAuthor=i;t.isFLM=e=>i(e,n.FLM_AUTHOR_ID,"Field Level Media");t.isAPNews=e=>i(e,n.APNEWS_AUTHOR_ID,"AP News")},"A/p8":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getSecondScrollPromotedPost=void 0;(a=o("KKHd"))&&a.__esModule;var a,n=o("acqA");t.getSecondScrollPromotedPost=e=>(0,n.searchPromotions)({status:"active"}).then((t=>{const o=-1!==["XX","US"].indexOf(window.countryCode)?"us":"nonus";let a=t.filter((t=>{const{properties:{blogIds:a,location:n}}=t;return n===o&&(!a||-1!==a.indexOf(e))&&t.isLive(Date.now())}));const n=a.reduce(((e,{properties:{percentage:t}})=>t+e),0);n>100&&(a=a.map((e=>(e.properties.percentage*=100/n,e))));let i=100*Math.random();for(;i>=0&&a.length>0;){const{properties:{percentage:e,postId:t}}=a.pop();if(i-=e,i<=0)return t}return null}))},DjDD:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getPostMeta=void 0;r(o("OAzy")),r(o("OiCc"));var a=o("OG6S"),n=o("Wy1a"),i=r(o("yEGG"));function r(e){return e&&e.__esModule?e:{default:e}}t.getPostMeta=(e,t,o)=>{var r;const s=(0,a.getPostType)(e,e.discussionSettings),l=t[0];return{adZone:e.adZone,author:{displayName:(null==l?void 0:l.displayName)||""},byline:e.byline||"",discussionSettings:e.discussionSettings,gaVideoIds:e.gaVideoIds,hasVideos:e.hasVideos,headline:e.formattedHeadline,id:e.id,modifiedTimeMillis:e.modifiedTimeMillis,permalink:e.permalink,postOriginator:e.getPropertyByKey("contentOriginator",""),postPosition:0,postSource:(0,i.default)(e),postType:s,publishTimeMillis:e.publishTimeMillis,qaStatus:"QA"===s&&(null===(r=e.discussionSettings)||void 0===r?void 0:r.status)||"Disabled",slideIndex:"SLIDESHOW"===s?(null==o?void 0:o.slideIndex)||1:null,sov100:e.sov100,sponsored:e.sponsored,tags:e.tags,truncation:(0,n.getPostTruncation)({features:o.features,isMobileDevice:o.isMobileDevice,post:e}).truncation,wordCount:e.wordCount,wordCountBucket:e.wordCountBucket}}},IY5k:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,n=(a=o("BZkQ"))&&a.__esModule?a:{default:a};var i=(e,t)=>{var o;const{googleAnalyticsID:a}=n.default.getPageContextByKey(t);"function"==typeof(null===(o=window)||void 0===o?void 0:o.ga)&&(e&&(window.ga("set","page",e),a&&window.ga("unique.set","page",e)),window.ga("send","pageview"),a&&window.ga("unique.send","pageview"))};t.default=i,e.exports=t.default},KKHd:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,n=(a=o("/gfI"))&&a.__esModule?a:{default:a},i=o("lI4E");class r{constructor(e){this.originalProps=e,this.id=e.id,this.properties=e.properties}get isChanged(){return!r.compareProperties(this.originalProps.properties,this.properties)}isLive(e){const{startTime:t,endTime:o}=this.properties;return(!t||t<=e)&&(!o||e<=o)}static compareProperties(e,t){const{blogIds:o,...a}=e,{blogIds:i,...r}=t;return(0,n.default)((o||[]).sort(),(i||[]).sort())&&(0,n.default)(a,r)}static fromJSON({id:e,startTime:t,endTime:o,status:a,properties:n}){const{label:s,postId:l,location:d,blogIds:c,percentage:u}=n;return new r({id:e,properties:{label:s,postId:(0,i.createPostId)(l),location:d,blogIds:c?c.map(i.createBlogId):void 0,startTime:t&&Date.parse(t)||Date.now(),endTime:o&&Date.parse(o)||Date.now(),percentage:u,status:a}})}}t.default=r,e.exports=t.default},LoZR:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getForcedSecondScrollPostId=t.getForcedRecircPostId=void 0;var a=o("lI4E");t.getForcedSecondScrollPostId=()=>-1!==location.hash.indexOf("___permalink_forced_second_scroll=")?(0,a.createPostId)(location.hash.split("___permalink_forced_second_scroll=")[1]):null;t.getForcedRecircPostId=()=>-1!==location.hash.indexOf("___permalink_forced_recirc=")?(0,a.createPostId)(location.hash.split("___permalink_forced_recirc=")[1]):null},NqMr:function(e,t,o){var a=o("nxZd");e.exports=function(e){return a(e)?e:[]}},QFYQ:function(e,t){e.exports=function(e){for(var t=-1,o=null==e?0:e.length,a=0,n=[];++t<o;){var i=e[t];i&&(n[a++]=i)}return n}},Rs5T:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getUserHash=t.getPostDataForId=t.getNotifications=t.getNavigationItems=void 0;var a=d(o("f8ne")),n=d(o("NWgQ")),i=d(o("2pqj")),r=o("aSl8"),s=d(o("OAzy")),l=d(o("DI1U"));function d(e){return e&&e.__esModule?e:{default:e}}const{magmaApiUrl:c}=a.default.api;t.getNavigationItems=e=>(0,l.default)(`${c}/navbar/config?navigationGroup=${e}`).then((e=>e.map((e=>new r.NavBarBlogConfig(e)))));t.getNotifications=({userId:e,token:t,startTime:o,maxReturned:a,markAsRead:i,pinPending:r})=>{const s=n.default.stringify({startTime:o,maxReturned:a,markAsRead:i,pinPending:r});return(0,l.default)(`${c}/notifications/paginated/${e}?${s}`,{token:t})};t.getPostDataForId=({postId:e})=>{const t=n.default.stringify({postId:e});return(0,l.default)(`${c}/post/views/id/?${t}`).then((({posts:e,authors:t,blogs:o,links:a})=>{const n=Object.keys(o).reduce(((e,t)=>{const a=o[t][0];return e[t]=[i.default.fromJSON(a)],e}),{});return{posts:e.map((e=>s.default.fromJSON(e))),blogs:n,authors:t,blockNodeLinksLookup:a}}))};t.getUserHash=e=>{const t=n.default.stringify({timestamp:e});return(0,l.default)(`${c}/user_hash?${t}`)}},TUED:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.loadAd=t.isBulbsLoaded=t.createWaypointForContainer=void 0;var a,n=(a=o("8exm"))&&a.__esModule?a:{default:a},i=o("v+SS");t.isBulbsLoaded=()=>Boolean(window.BULBS_ELEMENTS_ADS_MANAGER);const r=e=>{const t=window.BULBS_ELEMENTS_ADS_MANAGER;t?(t.loadAds(e),t.asyncRefreshSlot(e)):console.warn("Bulbs was called before it was initialized.")};t.loadAd=r;t.createWaypointForContainer=e=>{const t=window.BULBS_ELEMENTS_ADS_MANAGER;if(!t)return;let o=(window.innerHeight||document.documentElement&&document.documentElement.clientHeight||0)+(parseInt((0,n.default)("offset_pixels"))||750);const a=e.getElementsByClassName("dfp");Array.prototype.forEach.call(a,(e=>{const a=e.dataset.adUnit;if(!a)return;const n=t.getAdUnitByCode(a);n&&!n.eagerLoad&&(e.classList.contains("placement-slideshow-inpost")&&(o="150%"),((e,t)=>{(0,i.intersectionPromise)(e,{rootMargin:"number"==typeof t?`${t}px`:t}).then((e=>{r(e.target)}))})(e,o))}))}},U6v4:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getSlideshowSlideCount=void 0;t.getSlideshowSlideCount=()=>document.querySelectorAll(".js_slide").length},UXFd:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FLM_AUTHOR_ID=t.APNEWS_AUTHOR_ID=void 0;t.FLM_AUTHOR_ID="5876237249240104229";t.APNEWS_AUTHOR_ID="5876237249242420889"},UeuN:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(o("Lw0F")),n=i(o("tI+K"));function i(e){return e&&e.__esModule?e:{default:e}}var r=({pageContext:e},t,o=[])=>{const i={...(0,a.default)({pageContext:e}),...t},r={...(0,n.default)({pageContext:e}),...t};for(const e of o)delete i[e],delete r[e];window.ga("set",i),window.ga("unique.set",r)};t.default=r,e.exports=t.default},Uj2Y:function(e,t,o){var a=o("tDyL"),n=o("i/JN");e.exports=function(e,t){return e&&e.length?n(e,a(t,2)):[]}},Wy1a:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getPostTruncation=void 0;var a=o("OG6S"),n=o("wfRB");t.getPostTruncation=({features:e,isMobileDevice:t=!1,post:o})=>{if(!(e=>"DEFAULT"===e)((0,a.getPostType)(o,o.discussionSettings)))return{truncation:!1};const i=(0,n.getTruncationType)(t,e);return i?o.internalNavbarItems.length>0||o.wordCount<(0,n.getTruncationWords)(i)?{truncation:!1}:{truncation:!0,truncationType:i}:{truncation:!1}}},ZwJt:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,n=(a=o("v+SS"))&&a.__esModule?a:{default:a};var i=({cb:e,observerOptions:t})=>{const o=document.querySelector(".js_reading-list");o&&(0,n.default)({targetElement:o,callback:()=>{e(!0)},negativeCallback:()=>{e(!1)},observerOptions:t||{rootMargin:"50px",trigger:"intersection"}})};t.default=i,e.exports=t.default},aSl8:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.NavBarBlogConfig=void 0;class a{constructor(e){this.displayName=e.displayName,this.url=e.url,this.blogGroup=e.blogGroup||null,this.blogId=void 0!==e.expandable?e.blogId:null,this.avatarId=e.avatarId,this.expandable=void 0===e.expandable||e.expandable,this.isSatire=void 0!==e.isSatire&&e.isSatire,this.isPartnerEditorial=void 0!==e.isPartnerEditorial&&e.isPartnerEditorial}}t.NavBarBlogConfig=a;var n=a;t.default=n},acqA:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.updatePromotion=t.searchPromotions=t.deletePromotion=t.addPromotion=void 0;var a=d(o("f8ne")),n=d(o("NWgQ")),i=d(o("KKHd")),r=d(o("NBZd")),s=d(o("DI1U")),l=d(o("tsyB"));function d(e){return e&&e.__esModule?e:{default:e}}const c=a.default.api.curationUrl;t.searchPromotions=({startTime:e,endTime:t,status:o,cacheBuster:a=!1})=>(0,s.default)(`${c}promotion/search?${n.default.stringify({startTime:e,endTime:t,status:o,cb:a?Date.now():void 0})}`).then((e=>e.map(i.default.fromJSON)));t.addPromotion=e=>r.default.fresh().then((t=>(0,l.default)(`${c}promotion/add`,{...e},{token:t}).then(i.default.fromJSON)));t.updatePromotion=({id:e,properties:t})=>r.default.fresh().then((o=>(0,l.default)(`${c}promotion/update`,{id:e,...t},{token:o}).then(i.default.fromJSON)));t.deletePromotion=e=>r.default.fresh().then((t=>(0,l.default)(`${c}promotion/delete`,{id:e},{token:t})))},awY9:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getTwitterShareUrl=t.getRedditShareUrl=t.getMailtoShareUrl=t.getFacebookShareUrl=t.getEncodedUrlWithUtmParams=void 0;const a=(e,t)=>encodeURIComponent(`${e}${t?"?"+(e=>["utm_medium","utm_source","utm_campaign"].map((t=>void 0!==e[t]?`${t}=${e[t]}`:"")).filter(Boolean).join("&"))(t):""}`);t.getEncodedUrlWithUtmParams=a;t.getFacebookShareUrl=(e,t)=>`https://facebook.com/sharer.php?u=${a(e,t)}`;t.getTwitterShareUrl=(e,t,o,n)=>`https://twitter.com/intent/tweet?${o?`via=${o}&`:""}url=${a(e,n)}&text=${encodeURIComponent(t)}`;t.getMailtoShareUrl=(e,t,o)=>`mailto:?subject=${encodeURIComponent(t)}&body=${a(e,o)}`;t.getRedditShareUrl=(e,t,o)=>`https://www.reddit.com/submit?url=${a(e,o)}&title=${encodeURIComponent(t)}`},"b/Pu":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=async function(e){if(!E.default||!U.renderData.postId)return;const t="theinventory"===E.default.blogGroup?await(0,d.trendingPosts)({blogIds:[E.default.id],language:$,exclude:U.renderData.postId?[U.renderData.postId]:void 0,past:"12 minutes",maxReturned:20}).then((e=>e.map((e=>e.id)))).catch((()=>[])):await(0,R.getRecommendedPostIds)({blogId:E.default.id,language:$,maxReturned:20,excludedPostIds:U.renderData.postId?[U.renderData.postId]:[]}).catch((()=>[]));t.splice(0,4);const r=await(0,N.getSecondScrollPromotedPost)(E.default.id);let p,g=[];const w=(0,k.getForcedSecondScrollPostId)();if(w)p=w,g=t;else if(r)p=r,g=t;else{const[e,...o]=t;p=e,g=o}const S=(0,k.getForcedRecircPostId)();S&&(g[0]=S);if(p){const t=(0,i.default)([p,...g]);(0,s.getPostDataForId)({postId:t}).then((async({posts:i,authors:s,blogs:d,blockNodeLinksLookup:w})=>{const S=i.sort((0,b.sortByIndexArray)(t)).filter((e=>r&&e.id.toString()===r||(0,v.filterForRecirc)(e)&&!e.sponsored));if(0===S.length)return;const[M,...C]=S,{featuredMedia:B}=M,x=(0,m.deRankOldPosts)(C,(0,y.getTrendingMaxAgeByBlog)(E.default.id)),D=await(0,h.resolveCategorizationData)(x),{channelId:k,sectionId:N,subsectionId:A}=M.categorization||{},R=!M.categorizationData&&k?await(0,f.getCategorizationData)({channelId:k,sectionId:N,subsectionId:A}):null,U=R?M.clone({categorizationData:R}):M,L=B&&"KinjaVideo"===B.type&&B.id,j=L?[L]:(0,u.default)([U]),$=j&&await(0,c.fetchVideoMetaByIds)(j),W=L&&$[0]||void 0,q=(0,l.getBlog)(U.defaultBlogId),J=(0,l.getBlogSales)(U.defaultBlogId),Z=[Promise.all([o.e("vendor~PlaylistCarousels~adEditorComponent~adEditorPageComponent~animatedBlogLogo~biztools~blog-avat~049d702c"),o.e("vendor~PlaylistCarousels~adEditorComponent~adEditorPageComponent~biztools~capPage~capRoundupPage~cel~964e7990"),o.e("vendor~PlaylistCarousels~adEditorComponent~biztools~capPage~capRoundupPage~celebrityPage~commentsIfr~03147cd6"),o.e("vendor~PlaylistCarousels~adEditor~biztools~capPage~capRoundupPage~celebrityPage~commerceDashboard~cu~976f26e2"),o.e("vendor~PlaylistCarousels~adEditorComponent~biztools~capPage~capRoundupPage~celebrityPage~commerceDas~decba093"),o.e("vendor~PlaylistCarousels~biztools~capPage~capRoundupPage~celebrityPage~commerceDashboard~curatedPage~8d218f23"),o.e("vendor~celebrityPage~curated-homepage-editor~hydrateFiveCardCarouselBlock~hydrateSearchPageList~list~432f53a4"),o.e("vendor~PlaylistCarousels~celebrityPage~curated-homepage-editor~hydrateFiveCardCarouselBlock~hydrateS~a6b6960f"),o.e("vendor~celebrityPage~curated-homepage-editor~hydrateFiveCardCarouselBlock~hydrateSearchPageList~lunc~34ae3c1e"),o.e("vendor~celebrityPage~curated-homepage-editor~hydrateFiveCardCarouselBlock~hydrateSearchPageList~lunc~28f52164"),o.e("vendor~curated-homepage-editor~hydrateFiveCardCarouselBlock~hydrateSearchPageList~lunchbox-read-only~cbbfa5af"),o.e("vendor~commerceDashboard~login~notification~render-custom-header~second-scroll-container~special-sec~e51224db"),o.e("PlaylistCarousels~adEditorComponent~adEditorPageComponent~biztools~capPage~capRoundupPage~commentsIf~18a437f7"),o.e("PlaylistCarousels~adEditorComponent~adEditorPageComponent~curatedPageEditor~exit-intent-form~feature~8366ebaf"),o.e("PlaylistCarousels~adEditorComponent~adEditorPageComponent~biztools~conversation-button~curatedPageEd~a5ef0a83"),o.e("PlaylistCarousels~adEditorComponent~biztools~curatedPageEditor~curatedPostsPage~exit-intent-form~fea~7393a0a3"),o.e("PlaylistCarousels~biztools~blog-avatars~curatedPageEditor~exit-intent-form~footer~in-article-selecto~af078761"),o.e("PlaylistCarousels~adEditorComponent~biztools~curatedPageEditor~expandable-container~image~in-article~c4cf25e4"),o.e("PlaylistCarousels~adEditorComponent~biztools~expandable-container~image~in-article-selector~liveblog~1e35dea9"),o.e("second-scroll-container")]).then(o.t.bind(null,"LWgP",7)),q,J];W&&(window.initVideoHtml5||Z.push(Promise.all([o.e("vendor~PlaylistCarousels~adEditorComponent~adEditorPageComponent~animatedBlogLogo~biztools~blog-avat~049d702c"),o.e("vendor~PlaylistCarousels~adEditorComponent~adEditorPageComponent~biztools~capPage~capRoundupPage~cel~964e7990"),o.e("vendor~video-html5-playlist~videoHtml5"),o.e("PlaylistCarousels~adEditorComponent~adEditorPageComponent~biztools~capPage~capRoundupPage~commentsIf~18a437f7"),o.e("curated-homepage-editor~in-article-selector~nextVideoRender~renderFloatingBottomVideo~video-html5-playlist"),o.e("adManager~video-html5-playlist~videoHtml5"),o.e("video-html5-playlist~videoHtml5"),o.e("video-html5-playlist")]).then(o.t.bind(null,"zPH0",7))),Z.push(Promise.all([o.e("vendor~PlaylistCarousels~adEditorComponent~adEditorPageComponent~animatedBlogLogo~biztools~blog-avat~049d702c"),o.e("vendor~PlaylistCarousels~adEditorComponent~adEditorPageComponent~biztools~capPage~capRoundupPage~cel~964e7990"),o.e("vendor~video-html5-playlist~videoHtml5"),o.e("PlaylistCarousels~adEditorComponent~adEditorPageComponent~biztools~capPage~capRoundupPage~commentsIf~18a437f7"),o.e("curated-homepage-editor~in-article-selector~nextVideoRender~renderFloatingBottomVideo~video-html5-playlist"),o.e("adManager~video-html5-playlist~videoHtml5"),o.e("video-html5-playlist~videoHtml5"),o.e("video-html5-playlist")]).then(o.t.bind(null,"htW2",7)))),Promise.all(Z).then((t=>{const[o,i,r]=t,l=o.default,c=i,u={blog:E.default,post:U,pageType:H,features:G,scrollListItems:D,disableAds:F,blogName:c&&c.name,blogSales:r,authors:s,blogs:d,blockNodeLinksLookup:w,parentIsFeatured:"FEATURED"===z,videoMetadata:$,featuredVideo:W,isLoggedIn:T.default.isLoggedIn()};n.default.render(a.createElement(_.FeaturesProvider,{value:G},a.createElement(l,u)),e,(()=>{if(W){const e=`video:${W.id}`;I.default.setPageContextByKey(e,{...I.default.getPageContextByKey("post:"+U.id),isRefresh:!1})}window.initVideoHtml5&&window.initVideoHtml5(e);const t=document.querySelector(".related-stories-inset-video-double");if(t){const e=t.querySelector(".video-html5");e&&window.nextVideoHtml5&&window.nextVideoHtml5(e.id)}(0,P.createWaypointForContainer)(e)})),V(p,g),(0,O.default)(e);const f=s&&s[U.id][0],m=d&&d[U.id][0];(0,O.default)(),K({post:U,author:f,blog:m,blogSales:r})}))}))}};var a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var o=j(t);if(o&&o.has(e))return o.get(e);var a={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var r=n?Object.getOwnPropertyDescriptor(e,i):null;r&&(r.get||r.set)?Object.defineProperty(a,i,r):a[i]=e[i]}a.default=e,o&&o.set(e,a);return a}(o("mXGw")),n=L(o("xARA")),i=L(o("bAmA")),r=(L(o("2pqj")),L(o("KF+7")),L(o("niTC"))),s=o("Rs5T"),l=o("O1lG"),d=o("vGmL"),c=o("qJ8v"),u=L(o("ch1e")),p=o("4aco"),g=o("l+kN"),f=o("98ez"),m=o("waOh"),v=o("2m1d"),h=o("WM6G"),y=o("M0jG"),b=o("yxSn"),P=o("TUED"),_=o("+rfr"),w=o("iaVH"),S=o("DjDD"),I=L(o("BZkQ")),M=L(o("IY5k")),C=L(o("6WUJ")),T=L(o("9sXr")),O=L(o("T5Df")),E=L(o("RYvd")),B=o("TrPc"),x=o("rkpQ"),D=o("fDwi"),k=o("LoZR"),N=o("A/p8"),A=L(o("ZwJt")),R=o("IFmO"),U=o("9YsU");function L(e){return e&&e.__esModule?e:{default:e}}function j(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,o=new WeakMap;return(j=function(e){return e?o:t})(e)}const{disableAds:F,pageType:H,postType:z,features:G,language:$}=U.renderData,V=(e,t)=>{B.postToolsHelper.setPostToolsData();const o=[...document.querySelectorAll(`.post-tools-wrapper[data-post-id="${e}"]`)];B.postToolsHelper.renderForOnePost({postId:e,postToolsWrapper:o[0]}),t.map((e=>{B.postToolsHelper.renderForOnePost({postId:e})}))},W=e=>{const{currentReadingListItemIndex:t,readingListItems:o}=window,a=Math.max(t+e,0),n=o[a];if(!n)return;const i=n&&n.post?"post:"+n.post.id.toString():"default";window.currentReadingListItemIndex=a,document.title=n.title,history.replaceState(null,"",n.path);const r=document.querySelector('link[rel="canonical"]');r&&r instanceof HTMLLinkElement&&(r.href=n.href),(0,D.setGAContext)(n),n.isPageViewSent||((0,M.default)(),(0,C.default)(i),(0,w.sendGa4PageviewEvent)(i),window.readingListItems[a].isPageViewSent=!0)},K=({post:e,author:t,blog:o,blogSales:a})=>{window.currentReadingListItemIndex=0,window.readingListItems=[{title:document.title,path:window.location.pathname,href:window.location.href,isPageViewSent:!0},{title:(0,r.default)(e),path:e.permalinkPath,href:e.permalink,isPageViewSent:!1,post:e}];const n=(0,S.getPostMeta)(e,[t],{features:G,isMobileDevice:(0,x.isMobile)()});n.postPosition=1,e.useFullSecondScroll||(n.truncation=!0);const i="post:"+e.id.toString();I.default.setPageContextByPartialContext(i,{adSiteName:(null==a?void 0:a.adSiteName)||"",adsEnabled:Boolean(null==a?void 0:a.adsEnabled),blogGroup:o.blogGroupTyped,blogId:o.id,channelMeta:(0,p.getChannelMeta)(e.categorizationData),isRefresh:!1,newsletterPopupChance:null==a?void 0:a.newsletterPopupChance,pageType:I.default.pageContexts.default.pageType,postMeta:n,tagMeta:(0,g.getTagMeta)(e.tags,e.refinitivTags)});let s=!1;(0,A.default)({cb:e=>{if(e){if(W(1),!s&&!F){s=!0;const e=document.getElementsByClassName("ad-native-below-article"),t=document.getElementsByClassName("ad-left-rail"),o=[...Array.from(e),...Array.from(t)];Array.from(o).map(P.loadAd)}}else W(-1)}})};e.exports=t.default},b4WN:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.toBackendDateTime=t.sortByPublishTimeDesc=t.fromBackendDateTime=void 0;var a=o("qqzO");const n=e=>a.DateTime.fromISO(e.replace(/\[[^\]]+\]/g,""));t.fromBackendDateTime=n;t.toBackendDateTime=e=>a.DateTime.fromMillis(e).toISO();t.sortByPublishTimeDesc=e=>e.concat().sort(((e,t)=>n(t.publishTime).toMillis()-n(e.publishTime).toMillis()))},ch1e:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e.reduce(((e,t)=>{const o=t.body.reduce(((e,t)=>"KinjaVideo"===t.type?e.concat(t):e),[]);return e.concat(o.map((e=>e.id)))}),[])};var a;(a=o("OAzy"))&&a.__esModule;e.exports=t.default},fDwi:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setGAContext=void 0;var a=i(o("BZkQ")),n=i(o("UeuN"));function i(e){return e&&e.__esModule?e:{default:e}}t.setGAContext=e=>{const{post:t,href:o,title:i}=e,r={location:o,title:i},s=t?"post:"+t.id.toString():void 0,l=a.default.getPageContextByKey(s);(0,n.default)({pageContext:l},r,["dimension131"])}},iaVH:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sendGa4SlideshowPageviewEvent=t.sendGa4PageviewEvent=void 0;var a=o("7YU8"),n=o("U6v4"),i=d(o("BZkQ")),r=o("zgUT"),s=o("OYmB"),l=d(o("/KEH"));function d(e){return e&&e.__esModule?e:{default:e}}const c=(e,t)=>{const o=i.default.getPageContextByKey(e),{pageType:r,postMeta:d,channelMeta:c,tagMeta:u,contentOriginator:p,contentSource:g,isRefresh:f}=o;return{event:"page_view",content_type:(0,a.getContentType)({pageType:r,postMeta:d,channelMeta:c,isRefresh:f}),adblock:(0,l.default)(),site_section:o.blogId||"",content_channel:c&&c.channel||"none",content_section:c&&c.section||"none",content_subsection:c&&c.subsection||"none",...(()=>{if(-1!==["permalink","gatewaypage"].indexOf(r)&&d){const e=d.publishTimeMillis?new Date(d.publishTimeMillis):"",o=d.modifiedTimeMillis?new Date(d.modifiedTimeMillis):"";return{content_title:d.headline,content_id:d.id,content_created_date:e?e.toISOString().split("T")[0]:"none",content_updated_date:o?o.toISOString().split("T")[0]:"none",content_author:d.author&&d.author.displayName||"none",content_author_byline:d.byline||"none",content_originator:p,content_source:g,slideshow_length:"SLIDESHOW"===d.postType?(0,n.getSlideshowSlideCount)():void 0,slideshow_page_number:"SLIDESHOW"===d.postType?t||d.slideIndex||1:void 0,content_sponsored:Boolean(d.sponsored),article_truncated:Boolean(d.truncation),article_word_count:null==d?void 0:d.wordCount,article_word_count_group:null==d?void 0:d.wordCountBucket,article_primary_tags:(null==u?void 0:u.tags)||"",article_tags:(null==u?void 0:u.refinitivTags)||""}}return{}})(),content_role:"",user_id:(0,s.getVeritasId)()||"none",user_type:""}};t.sendGa4PageviewEvent=e=>{const t=c(e);t&&(0,r.sendGa4Event)(t)};t.sendGa4SlideshowPageviewEvent=e=>{const t=c("",e);t&&(0,r.sendGa4Event)(t)}},"l+kN":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.prepareTagMetaDisplayName=t.getTagMeta=void 0;var a=o("9B7T");const n=e=>e.toLowerCase().replace(/-/g," ");t.prepareTagMetaDisplayName=n;t.getTagMeta=(e,t,o)=>({tags:e?e.map((e=>n(e.displayName))).join(","):void 0,refinitivTags:t?(0,a.prepareRefinitivTags)(t,o).map((({name:e})=>e)).join(","):void 0})},r60O:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o("awY9");const n=(e,t)=>{const o=t&&t.name;return{utm_medium:"sharefromsite",utm_source:o?`${o}_${e}`:e}};var i=({url:e,blog:t,subject:o,utm_params:i={}})=>{const r=t&&t.twitterScreenName||null;return{permalink:e,twitterShareUrl:(0,a.getTwitterShareUrl)(e,o,r,{...n("twitter",t),...i}),facebookShareUrl:(0,a.getFacebookShareUrl)(e,{...n("facebook",t),...i}),emailShareUrl:(0,a.getMailtoShareUrl)(e,o,{...n("email",t),...i}),redditShareUrl:(0,a.getRedditShareUrl)(e,o,{...n("reddit",t),...i})}};t.default=i,e.exports=t.default},t6lN:function(e,t,o){var a=o("GE03"),n=o("l3+0"),i=o("BAZ7"),r=o("NmMy"),s=o("TsNJ"),l=o("+165"),d=Math.min;e.exports=function(e,t,o){for(var c=o?i:n,u=e[0].length,p=e.length,g=p,f=Array(p),m=1/0,v=[];g--;){var h=e[g];g&&t&&(h=r(h,s(t))),m=d(h.length,m),f[g]=!o&&(t||u>=120&&h.length>=120)?new a(g&&h):void 0}h=e[0];var y=-1,b=f[0];e:for(;++y<u&&v.length<m;){var P=h[y],_=t?t(P):P;if(P=o||0!==P?P:0,!(b?l(b,_):c(v,_,o))){for(g=p;--g;){var w=f[g];if(!(w?l(w,_):c(e[g],_,o)))continue e}b&&b.push(_),v.push(P)}}return v}},tbV4:function(e,t,o){var a=o("NmMy"),n=o("t6lN"),i=o("bim0"),r=o("NqMr"),s=i((function(e){var t=a(e,r);return t.length&&t[0]===e[0]?n(t):[]}));e.exports=s},wfRB:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getTruncationWords=t.getTruncationType=t.getTruncationLinesCount=t.getGatewayTruncationType=void 0;t.getTruncationType=(e,t)=>t.truncate_permalink_content?((e,t)=>e&&Boolean(t.truncate_permalink_mobile))(e,t)?"mobile":((e,t)=>!e&&Boolean(t.truncate_permalink_desktop))(e,t)?"desktop":"default":null;t.getGatewayTruncationType=e=>e?"gatewayMobile":"gatewayDesktop";const a={default:1e3,mobile:300,desktop:500};t.getTruncationWords=e=>a[e]||a.default;const n={default:170,gatewayMobile:21,gatewayDesktop:12,mobile:85,desktop:85};t.getTruncationLinesCount=e=>n[e]||n.default},yEGG:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o("9G0t");var n=e=>((0,a.isFLM)(e)?"flm":(0,a.isAPNews)(e)&&"ap")||(0,a.isSlideshowAutomation)(e)&&"bot"||e.getPropertyByKey("isRanking",!1)&&"bot"||e.getPropertyByKey("isRoundup",!1)&&"bot"||void 0;t.default=n,e.exports=t.default},yxSn:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sortByIndexArray=void 0;var a=o("DKNM");t.sortByIndexArray=e=>(0,a.sortByNumberExtract)((({id:t})=>{const o=e.indexOf(t);return-1===o?o:e.length-o}))}}]);