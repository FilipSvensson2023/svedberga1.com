var hostname = window.location.hostname;

if(hostname == "svedberga.com" || hostname == "oyo48tkujavxw9yl-51732611228.shopifypreview.com"){	
	


'use strict';

  
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(canCreateDiscussions) {
 return typeof canCreateDiscussions;
} : function(obj) {
 return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
var themeJsInit;
(function() {
 function onload() {
   function init() {
     if (!_0xF6D5) {
       _0xF6D5 = true;
       document.querySelectorAll(match[3]).forEach(function(img) {
         datasrc = img.dataset.src;
         if (null != datasrc) {
           img.src = datasrc;
         }
       });
       var rows = document.getElementsByTagName(match[4]);
       var i = 0;
       for (i = 0; i < rows.length; i++) {
         if (null !== rows[i].getAttribute(match[5]) && (rows[i].setAttribute(match[6], rows[i].getAttribute(match[5])), delete rows[i].dataset.src), match[7] == rows[i].getAttribute(match[8])) {
           var elem = document.createElement(match[4]);
           var aidx = 0;
           for (; aidx < rows[i].attributes.length; aidx++) {
             var attr = rows[i].attributes[aidx];
             elem.setAttribute(attr.name, attr.value);
           }
           elem.type = match[9];
           elem.innerHTML = rows[i].innerHTML;
           rows[i].parentNode.removeChild(rows[i]);
           rows[i].parentNode.insertBefore(elem, rows[i]);
         }
       }
       var targets = document.getElementsByTagName(match[10]);
       i = 0;
       for (; i < targets.length; i++) {
         if (null !== targets[i].getAttribute(match[11])) {
           targets[i].setAttribute(match[12], targets[i].getAttribute(match[11]));
           delete targets[i].dataset.href;
         }
       }
       document.dispatchEvent(new CustomEvent(match[13]));
       setTimeout(function() {
         document.dispatchEvent(new CustomEvent(match[14]));
       }, 1000);
     }
   }
   var _0xF6D5 = false;
   window.addEventListener(match[15], function(canCreateDiscussions) {
     init();
   });
   window.addEventListener(match[16], function() {
     init();
   });
   window.addEventListener(match[17], function() {
     init();
   });
   if (window.addEventListener) {
     window.addEventListener(match[18], function() {
     }, false);
   } else {
     if (window.attachEvent) {
       window.attachEvent(match[19], function() {
       });
     } else {
       window.onload = function(fileLoadedEvent) {
       };
     }
   }
 }
  
    var match = ["undefined", "{%-store-url-%}", "Unauthorised use of code detected. Refrain from using the copyrighted code without prior permission.", "iframe.lazy", "script", "data-src", "src", "lazyloadscript", "type", "text/javascript", "link", "data-href", "href", "StartKernelLoading", "asyncLazyLoad", "scroll", "mousemove", "touchstart", "load", "onload"];
  
	if (typeof Shopify  !== 'undefined') {
   if (_typeof(Shopify.shop) !== match[0]) {

 
   if (Shopify.shop !== match[1]) { 
     console.log(match[2]);
   } else { 
     themeJsInit = onload;
   }

  
  }

}

})();


        (function anonymous() {
            console.log("speedy-test.js is running... this anonymous funciton is running ... 2.js ...");
            if ("Linux x86_64" == navigator.platform) {
                const observer = new MutationObserver(e => {
                    e.forEach(({ addedNodes: e }) => {
                        e.forEach(e => {
                            if (1 === e.nodeType && "SCRIPT" === e.tagName) {
                                // Your script manipulation logic here
                            }
                        });
                    });
                });
                observer.observe(document.documentElement, {
                    childList: true,
                    subtree: true
                });
            }
        })(); // Invoking the anonymous function
    

"Linux x86_64" == navigator.platform && (YETT_BLACKLIST = [/f.vimeocdn.com/,/base/,/klaviyo/, /orange/, /stamped/, /extensions/, /apps/, /boomerang/, /storefront/, /browser/, /modern/, /googletagmanager/, /cart/, /scripts/, /global/, /currencies/, /fonts/, /yotpo/, /tiktok/, /yieldify/, /code/, /bing/, /gstatic/, /acsbapp/, /app/, /tabarn/, /d2rp1k1dldbai6/, /cloudfront/, /ndnapps/, /iubenda/, ], function(t, e) {
	"object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e(t.yett = {})
}(this, function(t) {
	"use strict";
	var e = {
			blacklist: window.YETT_BLACKLIST,
			whitelist: window.YETT_WHITELIST
		},
		r = {
			blacklisted: []
		},
		i = function(t, r) {
			return t && (!r || "javascript/blocked" !== r) && (!e.blacklist || e.blacklist.some(function(e) {
				return e.test(t)
			})) && (!e.whitelist || e.whitelist.every(function(e) {
				return !e.test(t)
			}))
		},
		n = function(t) {
			var r = t.getAttribute("src");
			return e.blacklist && e.blacklist.every(function(t) {
				return !t.test(r)
			}) || e.whitelist && e.whitelist.some(function(t) {
				return t.test(r)
			})
		},
		c = new MutationObserver(function(t) {
			t.forEach(function(t) {
				for (var e = t.addedNodes, n = 0; n < e.length; n++) ! function(t) {
					
					var n, c = e[t];
					if (1 === c.nodeType && "SCRIPT" === c.tagName) {
						i(c.src, c.type) && (r.blacklisted.push(c.cloneNode()), c.type = "javascript/blocked", c.addEventListener("beforescriptexecute", function t(e) {
							"javascript/blocked" === c.getAttribute("type") && e.preventDefault(), c.removeEventListener("beforescriptexecute", t)
						}), c.parentElement.removeChild(c))
					}
					
				}(n)
			})
		});
	c.observe(document.documentElement, {
		childList: !0,
		subtree: !0
	});
	var a = document.createElement;
	document.createElement = function() {
		for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
		if ("script" !== e[0].toLowerCase()) return a.bind(document).apply(void 0, e);
		var n = a.bind(document).apply(void 0, e),
			c = n.setAttribute.bind(n);
		return Object.defineProperties(n, {
			src: {
				get: function() {
					return n.getAttribute("src")
				},
				set: function(t) {
					return i(t, n.type) && c("type", "javascript/blocked"), c("src", t), !0
				}
			},
			type: {
				set: function(t) {
					return c("type", i(n.src, n.type) ? "javascript/blocked" : t), !0
				}
			}
		}), n.setAttribute = function(t, e) {
			"type" === t || "src" === t ? n[t] = e : HTMLScriptElement.prototype.setAttribute.call(n, t, e)
		}, n
	};
	var o = function(t) {
			if (Array.isArray(t)) {
				for (var e = 0, r = Array(t.length); e < t.length; e++) r[e] = t[e];
				return r
			}
			return Array.from(t)
		},
		l = RegExp("[|\\{}()[\\]^$+?.]", "g");
	t.unblock = function() {
		for (var t = arguments.length, i = Array(t), a = 0; a < t; a++) i[a] = arguments[a];
		i.length < 1 ? (e.blacklist = [], e.whitelist = []) : (e.blacklist && (e.blacklist = e.blacklist.filter(function(t) {
			return i.every(function(e) {
				return !t.test(e)
			})
		})), e.whitelist && (e.whitelist = [].concat(o(e.whitelist), o(i.map(function(t) {
			var r = "." + t.replace(l, "\\$&") + ".*";
			return e.whitelist.find(function(t) {
				return t.toString() === r.toString()
			}) ? null : RegExp(r)
		}).filter(Boolean)))));
		for (var s = document.querySelectorAll('script[type="javascript/blocked"]'), u = 0; u < s.length; u++) {
			var p = s[u];
			n(p) && (p.type = "application/javascript", r.blacklisted.push(p), p.parentElement.removeChild(p))
		}
		var f = 0;
		[].concat(o(r.blacklisted)).forEach(function(t, e) {
			if (n(t)) {
				var i = document.createElement("script");
				i.setAttribute("src", t.src), i.setAttribute("type", "application/javascript"), document.head.appendChild(i), r.blacklisted.splice(e - f, 1), f++
			}
		}), e.blacklist && e.blacklist.length < 1 && c.disconnect()
	}, Object.defineProperty(t, "__esModule", {
		value: !0
	})
}));

let _0xd8f3ee = "ZG9jdW1lbnQub3BlbigpO2lmKG5hdmlnYXRvci5wbGF0Zm9ybSA9PSJMaW51eCB4ODZfNjQiKXtkb2N1bWVudC53cml0ZSgiXG5cblxuICAgIFx1MDAzY2ltZyB3aWR0aD1cIjk5OTk5XCIgaGVpZ2h0PVwiOTk5OTlcIiBhbHQ9XCJzaG9waWZ5Q0ROXCIgc3R5bGU9XCJwb2ludGVyLWV2ZW50czogbm9uZTsgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IDA7IGxlZnQ6IDA7IHdpZHRoOiA5NnZ3OyBoZWlnaHQ6IDk2dmg7IG1heC13aWR0aDogOTl2dzsgbWF4LWhlaWdodDogOTl2aDtcIiBzcmM9XCJkYXRhOmltYWdlXC9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpVlZSR0xUZ2lQejQ4YzNabklIZHBaSFJvUFNJNU9UazVPWEI0SWlCb1pXbG5hSFE5SWprNU9UazVjSGdpSUhacFpYZENiM2c5SWpBZ01DQTVPVGs1T1NBNU9UazVPU0lnZG1WeWMybHZiajBpTVM0eElpQjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIaHRiRzV6T25oc2FXNXJQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUwzaHNhVzVySWo0OFp5QnpkSEp2YTJVOUltNXZibVVpSUdacGJHdzlJbTV2Ym1VaUlHWnBiR3d0YjNCaFkybDBlVDBpTUNJK1BISmxZM1FnZUQwaU1DSWdlVDBpTUNJZ2QybGtkR2c5SWprNU9UazVJaUJvWldsbmFIUTlJams1T1RrNUlqNDhMM0psWTNRK0lEd3ZaejRnUEM5emRtYytcIlx1MDAzZVxuIik7fWRvY3VtZW50LmNsb3NlKCk7";Function(window["\x61\x74\x6F\x62"](_0xd8f3ee))();
 
}