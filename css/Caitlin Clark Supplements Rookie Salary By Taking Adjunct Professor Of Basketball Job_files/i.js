(function() { function bxBootstrap() {
	var re = /bot|crawl|slurp|spider|mediapartners|headlesschrome|snap-prefetch|remotasks|woorank|uptime\.com|facebookexternalhit|facebookcatalog/i;
	if (re.test(navigator.userAgent) || navigator.userAgent == '') {
		return;
	}

	if (!(window.bouncex&&bouncex.website)) {
		var pushedData = [];
		if(window.bouncex && bouncex.push && bouncex.length){
			pushedData = bouncex;
		}
		window.bouncex = {};
		bouncex.pushedData = pushedData;
		bouncex.website = {"id":3645,"name":"G/O Media | The Onion","cookie_name":"bounceClientVisit3645","domain":"theonion.com","ct":"fp_local_storage","ally":0,"ei":0,"tcjs":"","cjs":"","force_https":false,"waypoints":false,"content_width":900,"gai":"","swids":"","sd":0,"ljq":"auto","campaign_id":0,"is_preview":false,"aco":{"first_party_limit":"3500","local_storage":"1"},"cmp":{"gdpr":0,"gmp":0,"whitelist_check":0},"burls":[],"ple":false,"fbe":true,"ffs":"","mas":2,"map":1,"gar":true,"ete":2,"ettm":true,"etjs":"","dge":true,"bxidLoadFirst":false,"pie":true,"cme":false,"gbi_enabled":1,"bpush":false,"pt":null,"els":{"endcap":".js_newsletter-form-inline","infeed":".js_starterpost .js_post-content p"},"vars":[{"name":"dfp_rblock","polling":"all","persist":"no","page_types":[],"testmode":false,"default":"false","code":"(function() {\n    if (!bouncex.dfpRan) {\n        bouncex.dfpRan = true;\n        return 'not_ready';\n    }\n    function check() {\n        bouncex.dfp_loaded = false || bouncex.dfp_loaded;\n        var slots = window.googletag && typeof googletag.pubads == 'function' && typeof googletag.pubads().getSlots == 'function'? googletag.pubads().getSlots() : [];\n        var numSlots = slots.length;\n        for (var i = 0; i < numSlots; i++) {\n            var slotInfo = slots[i] && typeof slots[i].getResponseInformation == 'function'? slots[i].getResponseInformation() : false;\n            if (slotInfo && slotInfo.lineItemId) {\n                bouncex.dfp_loaded = true;\n                if (bouncex.website.gbi.rblocks && bouncex.website.gbi.rblocks.indexOf(slotInfo.lineItemId) > -1) {\n                    return 'sponsor';\n                }\n            }\n        }\n        if (bouncex.dfp_loaded) {\n            return 'allow';\n        }\n        return 'not_ready';\n    }\n    if (bouncex.website.gbi.rblocks) {\n        if (!bouncex.website.gbi_enabled) {\n            return 'disabled';\n        } else if (bouncex.dfp_loaded) {\n            return null;\n        } else if (window.googletag && googletag.apiReady && googletag.pubadsReady) {\n            return check();\n        } else if (typeof window.googletag === 'undefined') {\n            return 'no_googletag';\n        }\n        return 'fallback';\n    } else {\n        return 'not_ready';\n    }\n})();\n","trigger":"pageload"}],"dgu":"pixel.cdnwidget.com","dgp":false,"ba":{"enabled":0,"fbte":0},"biu":"assets.bounceexchange.com","bau":"api.bounceexchange.com","beu":"events.bouncex.net","ibx":{"tjs":"","cjs":"","miw":1,"mibcx":1,"te":0,"cart_rep":{"get":"","set":""},"ulpj":null,"cus":"","miw_exclude":"","enabled":0},"etjson":null,"osre":true,"osru":"osr.bounceexchange.com/v1/osr/items","checkDfp":true,"gamNetwork":"4246","spa":0,"spatm":1,"preinit_cjs":"","crs":{"integrations":null,"pageCount":null},"mat":0,"math":0,"cpnu":"coupons.bounceexchange.com","dfpcms":0,"sms":{"optm":"","eventSharing":false,"shqId":"","enabled":0},"pde":false,"fme":false,"fmx":"","sdk":{"android":{"enabled":false,"enabledVersions":[],"eventModifications":null},"ios":{"enabled":false,"enabledVersions":[],"eventModifications":null}},"onsite":{"enabled":1},"ads":{"enabled":1},"pubs":{"enabled":1},"websdk":{"enabled":0},"ga4_property_id":"","ga4_measurement_id":"","tag_state_domain":"api.bounceexchange.com"}
;

		bouncex.tag = 'tag3';
		bouncex.$ = window.jQuery;
		bouncex.env = 'production';
		bouncex.restrictedTlds = {"casl":{"ca":1},"gdpr":{"ad":1,"al":1,"at":1,"ax":1,"ba":1,"be":1,"bg":1,"by":1,"xn--90ais":1,"ch":1,"cy":1,"cz":1,"de":1,"dk":1,"ee":1,"es":1,"eu":1,"fi":1,"fo":1,"fr":1,"uk":1,"gb":1,"gg":1,"gi":1,"gr":1,"hr":1,"hu":1,"ie":1,"im":1,"is":1,"it":1,"je":1,"li":1,"lt":1,"lu":1,"lv":1,"mc":1,"md":1,"me":1,"mk":1,"xn--d1al":1,"mt":1,"nl":1,"no":1,"pl":1,"pt":1,"ro":1,"rs":1,"xn--90a3ac":1,"ru":1,"su":1,"xn--p1ai":1,"se":1,"si":1,"sj":1,"sk":1,"sm":1,"ua":1,"xn--j1amh":1,"va":1,"tr":1}};
		bouncex.client = {
			supportsBrotli: 1
		};
		bouncex.assets = {"ads":"9299f60775d267b57110c55646cbcb63","creativesBaseStyles":"a53944a2","gam_4246":"//assets.bounceexchange.com/assets/gam/4246/26dabd6fefd5b1ba55411686e29f534e.json","gpsAuction":"0aafcb326e2e52aae2936349578031e7","inbox":"02aca5df0e176b8810a86da97ac05424","onsite":"0e56ab6ba004ee080ce3deb3edae35e9","sms":"e39203556bab2366e56296ce42e974a7","websdk":"316488089720f476d313caece6addbe7"};
		bouncex.push = function(pushData) {
			bouncex.pushedData.push(pushData);
		}

		var runtime = document.createElement('script');
		runtime.setAttribute('src', '//assets.bounceexchange.com/assets/smart-tag/versioned/runtime_6459738026535cda4232dc813c61447d.br.js');
		runtime.setAttribute('async', 'async');
		runtime.setAttribute('onload', 'bouncex.initializeTag()');

		bouncex.initializeTag = function() {
			var script = document.createElement('script');
			script.setAttribute('src', '//assets.bounceexchange.com/assets/smart-tag/versioned/main-v2_f01faeed4f261176a71666567394c61a.br.js');
			script.setAttribute('async', 'async');
			document.body.appendChild(script);


			var deviceGraphScript = document.createElement('script');
			deviceGraphScript.setAttribute('src', '//assets.bounceexchange.com/assets/smart-tag/versioned/cjs_min_3a843477d8e318f67237a66d0a58c542.js');
			deviceGraphScript.setAttribute('async', 'async');
			var dgAttrs = [{"Key":"id","Value":"c.js"},{"Key":"async","Value":"true"},{"Key":"data-apikey","Value":"2^HIykD"},{"Key":"data-cb","Value":"bouncex.dg.initPostDeviceGraph"},{"Key":"data-bx","Value":"1"},{"Key":"data-fire","Value":"1"},{"Key":"data-adcb","Value":"bouncex.dg.getAdsOptStatus"}];
			if (dgAttrs) {
				for (var i = 0; i < dgAttrs.length; i++) {
					deviceGraphScript.setAttribute(dgAttrs[i].Key, dgAttrs[i].Value);
				}
			}
			document.body.appendChild(deviceGraphScript);

			bouncex.initializeTag = function() {};
		};

		document.body.appendChild(runtime);

	}


}

if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", bxBootstrap);
} else {
	bxBootstrap();
}})();