!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=t(e,document):"function"==typeof define&&define.amd?define(null,function(){t(e,document)}):e.plyr=t(e,document)}("undefined"!=typeof window?window:this,function(e,t){"use strict";function n(){var e,n,r,s=navigator.userAgent,a=navigator.appName,o=""+parseFloat(navigator.appVersion),i=parseInt(navigator.appVersion,10);return-1!==navigator.appVersion.indexOf("Windows NT")&&-1!==navigator.appVersion.indexOf("rv:11")?(a="IE",o="11;"):-1!==(n=s.indexOf("MSIE"))?(a="IE",o=s.substring(n+5)):-1!==(n=s.indexOf("Chrome"))?(a="Chrome",o=s.substring(n+7)):-1!==(n=s.indexOf("Safari"))?(a="Safari",o=s.substring(n+7),-1!==(n=s.indexOf("Version"))&&(o=s.substring(n+8))):-1!==(n=s.indexOf("Firefox"))?(a="Firefox",o=s.substring(n+8)):(e=s.lastIndexOf(" ")+1)<(n=s.lastIndexOf("/"))&&(a=s.substring(e,n),o=s.substring(n+1),a.toLowerCase()==a.toUpperCase()&&(a=navigator.appName)),-1!==(r=o.indexOf(";"))&&(o=o.substring(0,r)),-1!==(r=o.indexOf(" "))&&(o=o.substring(0,r)),i=parseInt(""+o,10),isNaN(i)&&(o=""+parseFloat(navigator.appVersion),i=parseInt(navigator.appVersion,10)),{name:a,version:i,ios:/(iPad|iPhone|iPod)/g.test(navigator.platform),touch:"ontouchstart"in t.documentElement}}function r(e,t){var n=e.media;if("video"==e.type)switch(t){case"video/webm":return!(!n.canPlayType||!n.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/no/,""));case"video/mp4":return!(!n.canPlayType||!n.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"').replace(/no/,""));case"video/ogg":return!(!n.canPlayType||!n.canPlayType('video/ogg; codecs="theora"').replace(/no/,""))}else if("audio"==e.type)switch(t){case"audio/mpeg":return!(!n.canPlayType||!n.canPlayType("audio/mpeg;").replace(/no/,""));case"audio/ogg":return!(!n.canPlayType||!n.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/,""));case"audio/wav":return!(!n.canPlayType||!n.canPlayType('audio/wav; codecs="1"').replace(/no/,""))}return!1}function s(e){if(!t.querySelectorAll('script[src="'+e+'"]').length){var n=t.createElement("script");n.src=e;var r=t.getElementsByTagName("script")[0];r.parentNode.insertBefore(n,r)}}function a(e,t){return Array.prototype.indexOf&&-1!=e.indexOf(t)}function o(e,t,n){return e.replace(new RegExp(t.replace(/([.*+?\^=!:${}()|\[\]\/\\])/g,"\\$1"),"g"),n)}function i(e,t){e.length||(e=[e]);for(var n=e.length-1;n>=0;n--){var r=n>0?t.cloneNode(!0):t,s=e[n],a=s.parentNode,o=s.nextSibling;r.appendChild(s),o?a.insertBefore(r,o):a.appendChild(r)}}function l(e){for(var t=e.parentNode;e.firstChild;)t.insertBefore(e.firstChild,e);t.removeChild(e)}function u(e){e&&e.parentNode.removeChild(e)}function c(e,t){e.insertBefore(t,e.firstChild)}function p(e,t){for(var n in t)e.setAttribute(n,"boolean"==typeof t[n]&&t[n]?"":t[n])}function d(e,n,r){var s=t.createElement(e);p(s,r),c(n,s)}function f(e){return e.replace(".","")}function m(e,t,n){if(e)if(e.classList)e.classList[n?"add":"remove"](t);else{var r=(" "+e.className+" ").replace(/\s+/g," ").replace(" "+t+" ","");e.className=r+(n?" "+t:"")}}function y(e,t){return e?e.classList?e.classList.contains(t):new RegExp("(\\s|^)"+t+"(\\s|$)").test(e.className):!1}function b(e,t,n,r){e&&h(e,t,n,!0,r)}function v(e,t,n,r){e&&h(e,t,n,!1,r)}function g(e,t,n,r,s){b(e,t,function(t){n&&n.apply(e,[t]),r.apply(e,[t])},s)}function h(e,t,n,r,s){var a=t.split(" ");if("boolean"!=typeof s&&(s=!1),e instanceof NodeList)for(var o=0;o<e.length;o++)e[o]instanceof Node&&h(e[o],arguments[1],arguments[2],arguments[3]);else for(var i=0;i<a.length;i++)e[r?"addEventListener":"removeEventListener"](a[i],n,s)}function k(e,t,n){if(e&&t){var r=new CustomEvent(t,n);e.dispatchEvent(r)}}function w(e,t){return e?(t="boolean"==typeof t?t:!e.getAttribute("aria-pressed"),e.setAttribute("aria-pressed",t),t):void 0}function x(e,t){return 0===e||0===t||isNaN(e)||isNaN(t)?0:(e/t*100).toFixed(2)}function T(){var e=arguments;if(e.length){if(1==e.lenth)return e[0];for(var t=Array.prototype.shift.call(e),n=e.length,r=0;n>r;r++){var s=e[r];for(var a in s)s[a]&&s[a].constructor&&s[a].constructor===Object?(t[a]=t[a]||{},T(t[a],s[a])):t[a]=s[a]}return t}}function _(){var e={supportsFullScreen:!1,isFullScreen:function(){return!1},requestFullScreen:function(){},cancelFullScreen:function(){},fullScreenEventName:"",element:null,prefix:""},n="webkit moz o ms khtml".split(" ");if("undefined"!=typeof t.cancelFullScreen)e.supportsFullScreen=!0;else for(var r=0,s=n.length;s>r;r++){if(e.prefix=n[r],"undefined"!=typeof t[e.prefix+"CancelFullScreen"]){e.supportsFullScreen=!0;break}if("undefined"!=typeof t.msExitFullscreen&&t.msFullscreenEnabled){e.prefix="ms",e.supportsFullScreen=!0;break}}return e.supportsFullScreen&&(e.fullScreenEventName="ms"==e.prefix?"MSFullscreenChange":e.prefix+"fullscreenchange",e.isFullScreen=function(e){switch("undefined"==typeof e&&(e=t.body),this.prefix){case"":return t.fullscreenElement==e;case"moz":return t.mozFullScreenElement==e;default:return t[this.prefix+"FullscreenElement"]==e}},e.requestFullScreen=function(e){return"undefined"==typeof e&&(e=t.body),""===this.prefix?e.requestFullScreen():e[this.prefix+("ms"==this.prefix?"RequestFullscreen":"RequestFullScreen")]()},e.cancelFullScreen=function(){return""===this.prefix?t.cancelFullScreen():t[this.prefix+("ms"==this.prefix?"ExitFullscreen":"CancelFullScreen")]()},e.element=function(){return""===this.prefix?t.fullscreenElement:t[this.prefix+"FullscreenElement"]}),e}function F(){var t={supported:function(){if(!("localStorage"in e))return!1;try{e.localStorage.setItem("___test","OK");var t=e.localStorage.getItem("___test");return e.localStorage.removeItem("___test"),"OK"===t}catch(n){return!1}return!1}()};return t}function C(h,T){function C(t,n){T.debug&&e.console&&console[n?"warn":"log"](t)}function A(){var e=[];return a(T.controls,"play-large")&&e.push('<button type="button" data-plyr="play" class="plyr__play-large">','<svg><use xlink:href="#'+T.iconPrefix+'-play" /></svg>','<span class="plyr__sr-only">'+T.i18n.play+"</span>","</button>"),e.push('<div class="plyr__controls">'),a(T.controls,"restart")&&e.push('<button type="button" data-plyr="restart">','<svg><use xlink:href="#'+T.iconPrefix+'-restart" /></svg>','<span class="plyr__sr-only">'+T.i18n.restart+"</span>","</button>"),a(T.controls,"rewind")&&e.push('<button type="button" data-plyr="rewind">','<svg><use xlink:href="#'+T.iconPrefix+'-rewind" /></svg>','<span class="plyr__sr-only">'+T.i18n.rewind+"</span>","</button>"),a(T.controls,"play")&&e.push('<button type="button" data-plyr="play">','<svg><use xlink:href="#'+T.iconPrefix+'-play" /></svg>','<span class="plyr__sr-only">'+T.i18n.play+"</span>","</button>",'<button type="button" data-plyr="pause">','<svg><use xlink:href="#'+T.iconPrefix+'-pause" /></svg>','<span class="plyr__sr-only">'+T.i18n.pause+"</span>","</button>"),a(T.controls,"fast-forward")&&e.push('<button type="button" data-plyr="fast-forward">','<svg><use xlink:href="#'+T.iconPrefix+'-fast-forward" /></svg>','<span class="plyr__sr-only">'+T.i18n.forward+"</span>","</button>"),a(T.controls,"progress")&&(e.push('<span class="plyr__progress">','<label for="seek{id}" class="plyr__sr-only">Seek</label>','<input id="seek{id}" class="plyr__progress--seek" type="range" min="0" max="100" step="0.1" value="0" data-plyr="seek">','<progress class="plyr__progress--played" max="100" value="0" role="presentation"></progress>','<progress class="plyr__progress--buffer" max="100" value="0">',"<span>0</span>% "+T.i18n.buffered,"</progress>"),T.tooltips.seek&&e.push('<span class="plyr__tooltip">00:00</span>'),e.push("</span>")),a(T.controls,"current-time")&&e.push('<span class="plyr__time">','<span class="plyr__sr-only">'+T.i18n.currentTime+"</span>",'<span class="plyr__time--current">00:00</span>',"</span>"),a(T.controls,"duration")&&e.push('<span class="plyr__time">','<span class="plyr__sr-only">'+T.i18n.duration+"</span>",'<span class="plyr__time--duration">00:00</span>',"</span>"),a(T.controls,"mute")&&e.push('<button type="button" data-plyr="mute">','<svg class="icon--muted"><use xlink:href="#'+T.iconPrefix+'-muted" /></svg>','<svg><use xlink:href="#'+T.iconPrefix+'-volume" /></svg>','<span class="plyr__sr-only">'+T.i18n.toggleMute+"</span>","</button>"),a(T.controls,"volume")&&e.push('<span class="plyr__volume">','<label for="volume{id}" class="plyr__sr-only">'+T.i18n.volume+"</label>",'<input id="volume{id}" class="plyr__volume--input" type="range" min="0" max="10" value="5" data-plyr="volume">','<progress class="plyr__volume--display" max="10" value="0" role="presentation"></progress>',"</span>"),a(T.controls,"captions")&&e.push('<button type="button" data-plyr="captions">','<svg class="icon--captions-on"><use xlink:href="#'+T.iconPrefix+'-captions-on" /></svg>','<svg><use xlink:href="#'+T.iconPrefix+'-captions-off" /></svg>','<span class="plyr__sr-only">'+T.i18n.toggleCaptions+"</span>","</button>"),a(T.controls,"fullscreen")&&e.push('<button type="button" data-plyr="fullscreen">','<svg class="icon--exit-fullscreen"><use xlink:href="#'+T.iconPrefix+'-exit-fullscreen" /></svg>','<svg><use xlink:href="#'+T.iconPrefix+'-enter-fullscreen" /></svg>','<span class="plyr__sr-only">'+T.i18n.toggleFullscreen+"</span>","</button>"),e.push("</div>"),e.join("")}function N(){if(Ce.supported.full&&("audio"!=Ce.type||T.fullscreen.allowAudio)&&T.fullscreen.enabled){var e=E.supportsFullScreen;e||T.fullscreen.fallback&&!q()?(C((e?"Native":"Fallback")+" fullscreen enabled"),m(Ce.container,T.classes.fullscreen.enabled,!0)):C("Fullscreen not supported and fallback disabled"),w(Ce.buttons.fullscreen,!1),R()}}function I(){if("video"===Ce.type){V(T.selectors.captions)||Ce.videoContainer.insertAdjacentHTML("afterbegin",'<div class="'+f(T.selectors.captions)+'"></div>'),Ce.usingTextTracks=!1,Ce.media.textTracks&&(Ce.usingTextTracks=!0);for(var e,t="",n=Ce.media.childNodes,r=0;r<n.length;r++)"track"===n[r].nodeName.toLowerCase()&&(e=n[r].kind,"captions"!==e&&"subtitles"!==e||(t=n[r].getAttribute("src")));if(Ce.captionExists=!0,""===t?(Ce.captionExists=!1,C("No caption track found")):C("Caption track found; URI: "+t),Ce.captionExists){for(var s=Ce.media.textTracks,a=0;a<s.length;a++)s[a].mode="hidden";if(L(Ce),("IE"===Ce.browser.name&&Ce.browser.version>=10||"Firefox"===Ce.browser.name&&Ce.browser.version>=31)&&(C("Detected browser with known TextTrack issues - using manual fallback"),Ce.usingTextTracks=!1),Ce.usingTextTracks){C("TextTracks supported");for(var o=0;o<s.length;o++){var i=s[o];"captions"!==i.kind&&"subtitles"!==i.kind||b(i,"cuechange",function(){this.activeCues[0]&&"text"in this.activeCues[0]?P(this.activeCues[0].getCueAsHTML()):P()})}}else if(C("TextTracks not supported so rendering captions manually"),Ce.currentCaption="",Ce.captions=[],""!==t){var l=new XMLHttpRequest;l.onreadystatechange=function(){if(4===l.readyState)if(200===l.status){var e,t=[],n=l.responseText;t=n.split("\n\n");for(var r=0;r<t.length;r++){e=t[r],Ce.captions[r]=[];var s=e.split("\n"),a=0;-1===s[a].indexOf(":")&&(a=1),Ce.captions[r]=[s[a],s[a+1]]}Ce.captions.shift(),C("Successfully loaded the caption file via AJAX")}else C("There was a problem loading the caption file via AJAX",!0)},l.open("get",t,!0),l.send()}}else m(Ce.container,T.classes.captions.enabled)}}function P(e){var n=V(T.selectors.captions),r=t.createElement("span");n.innerHTML="","undefined"==typeof e&&(e=""),"string"==typeof e?r.innerHTML=e.trim():r.appendChild(e),n.appendChild(r);n.offsetHeight}function M(e){function t(e,t){var n=[];n=e.split(" --> ");for(var r=0;r<n.length;r++)n[r]=n[r].replace(/(\d+:\d+:\d+\.\d+).*/,"$1");return s(n[t])}function n(e){return t(e,0)}function r(e){return t(e,1)}function s(e){if(null===e||void 0===e)return 0;var t,n=[],r=[];return n=e.split(","),r=n[0].split(":"),t=Math.floor(60*r[0]*60)+Math.floor(60*r[1])+Math.floor(r[2])}if(!Ce.usingTextTracks&&"video"===Ce.type&&Ce.supported.full&&(Ce.subcount=0,e="number"==typeof e?e:Ce.media.currentTime,Ce.captions[Ce.subcount])){for(;r(Ce.captions[Ce.subcount][0])<e.toFixed(1);)if(Ce.subcount++,Ce.subcount>Ce.captions.length-1){Ce.subcount=Ce.captions.length-1;break}Ce.media.currentTime.toFixed(1)>=n(Ce.captions[Ce.subcount][0])&&Ce.media.currentTime.toFixed(1)<=r(Ce.captions[Ce.subcount][0])?(Ce.currentCaption=Ce.captions[Ce.subcount][1],P(Ce.currentCaption)):P()}}function L(){Ce.buttons.captions&&(m(Ce.container,T.classes.captions.enabled,!0),T.captions.defaultActive&&(m(Ce.container,T.classes.captions.active,!0),w(Ce.buttons.captions,!0)))}function O(e){return Ce.container.querySelectorAll(e)}function V(e){return O(e)[0]}function q(){try{return e.self!==e.top}catch(t){return!0}}function R(){function e(e){9===e.which&&Ce.isFullscreen&&(e.target!==r||e.shiftKey?e.target===n&&e.shiftKey&&(e.preventDefault(),r.focus()):(e.preventDefault(),n.focus()))}var t=O("input:not([disabled]), button:not([disabled])"),n=t[0],r=t[t.length-1];b(Ce.container,"keydown",e)}function j(e,t){if("string"==typeof t)d(e,Ce.media,{src:t});else if(t.constructor===Array)for(var n=t.length-1;n>=0;n--)d(e,Ce.media,t[n])}function H(){var e=T.html;C("Injecting custom controls"),e||(e=A()),e=o(e,"{seektime}",T.seekTime),e=o(e,"{id}",Math.floor(1e4*Math.random()));var n;if(null!==T.selectors.controls.container&&(n=T.selectors.controls.container,"string"==typeof selector&&(n=t.querySelector(n))),n instanceof HTMLElement||(n=Ce.container),n.insertAdjacentHTML("beforeend",e),T.tooltips.controls)for(var r=O([T.selectors.controls.wrapper," ",T.selectors.labels," .",T.classes.hidden].join("")),s=r.length-1;s>=0;s--){var a=r[s];m(a,T.classes.hidden,!1),m(a,T.classes.tooltip,!0)}}function D(){try{return Ce.controls=V(T.selectors.controls.wrapper),Ce.buttons={},Ce.buttons.seek=V(T.selectors.buttons.seek),Ce.buttons.play=O(T.selectors.buttons.play),Ce.buttons.pause=V(T.selectors.buttons.pause),Ce.buttons.restart=V(T.selectors.buttons.restart),Ce.buttons.rewind=V(T.selectors.buttons.rewind),Ce.buttons.forward=V(T.selectors.buttons.forward),Ce.buttons.fullscreen=V(T.selectors.buttons.fullscreen),Ce.buttons.mute=V(T.selectors.buttons.mute),Ce.buttons.captions=V(T.selectors.buttons.captions),Ce.progress={},Ce.progress.container=V(T.selectors.progress.container),Ce.progress.buffer={},Ce.progress.buffer.bar=V(T.selectors.progress.buffer),Ce.progress.buffer.text=Ce.progress.buffer.bar&&Ce.progress.buffer.bar.getElementsByTagName("span")[0],Ce.progress.played=V(T.selectors.progress.played),Ce.progress.tooltip=Ce.progress.container&&Ce.progress.container.querySelector("."+T.classes.tooltip),Ce.volume={},Ce.volume.input=V(T.selectors.volume.input),Ce.volume.display=V(T.selectors.volume.display),Ce.duration=V(T.selectors.duration),Ce.currentTime=V(T.selectors.currentTime),Ce.seekTime=O(T.selectors.seekTime),!0}catch(e){return C("It looks like there is a problem with your controls html",!0),W(!0),!1}}function B(){m(Ce.container,T.selectors.container.replace(".",""),Ce.supported.full)}function W(e){e?Ce.media.setAttribute("controls",""):Ce.media.removeAttribute("controls")}function Y(e){var t=T.i18n.play;if("undefined"!=typeof T.title&&T.title.length&&(t+=", "+T.title),Ce.supported.full&&Ce.buttons.play)for(var n=Ce.buttons.play.length-1;n>=0;n--)Ce.buttons.play[n].setAttribute("aria-label",t);e instanceof HTMLElement&&e.setAttribute("title",T.i18n.frameTitle.replace("{title}",T.title))}function $(){if(!Ce.media)return C("No audio or video element found",!0),!1;if(Ce.supported.full&&(m(Ce.container,T.classes.type.replace("{0}",Ce.type),!0),a(T.types.embed,Ce.type)&&m(Ce.container,T.classes.type.replace("{0}","video"),!0),m(Ce.container,T.classes.stopped,T.autoplay),m(Ce.container,T.classes.isIos,Ce.browser.ios),m(Ce.container,T.classes.isTouch,Ce.browser.touch),"video"===Ce.type)){var e=t.createElement("div");e.setAttribute("class",T.classes.videoWrapper),i(Ce.media,e),Ce.videoContainer=e}a(T.types.embed,Ce.type)&&(z(),Ce.embedId=null)}function z(){for(var n=t.createElement("div"),r=Ce.embedId,a=Ce.type+"-"+Math.floor(1e4*Math.random()),o=O('[id^="'+Ce.type+'-"]'),i=o.length-1;i>=0;i--)u(o[i]);if(m(Ce.media,T.classes.videoWrapper,!0),m(Ce.media,T.classes.embedWrapper,!0),"youtube"===Ce.type)Ce.media.appendChild(n),n.setAttribute("id",a),"object"==typeof YT?U(r,n):(s(T.urls.youtube.api),e.onYouTubeReadyCallbacks=e.onYouTubeReadyCallbacks||[],e.onYouTubeReadyCallbacks.push(function(){U(r,n)}),e.onYouTubeIframeAPIReady=function(){e.onYouTubeReadyCallbacks.forEach(function(e){e()})});else if("vimeo"===Ce.type){var l=t.createElement("iframe");l.loaded=!1,b(l,"load",function(){l.loaded=!0}),p(l,{src:"https://player.vimeo.com/video/"+r+"?player_id="+a+"&api=1&badge=0&byline=0&portrait=0&title=0",id:a,webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:"",frameborder:0}),Ce.supported.full?(n.appendChild(l),Ce.media.appendChild(n)):Ce.media.appendChild(l),"$f"in e||s(T.urls.vimeo.api);var c=e.setInterval(function(){"$f"in e&&l.loaded&&(e.clearInterval(c),X.call(l))},50)}}function K(){Ce.container.plyr.embed=Ce.embed,Fe(),Y(V("iframe"))}function U(t,n){"timer"in Ce||(Ce.timer={}),Ce.embed=new YT.Player(n.id,{videoId:t,playerVars:{autoplay:T.autoplay?1:0,controls:Ce.supported.full?0:1,rel:0,showinfo:0,iv_load_policy:3,cc_load_policy:T.captions.defaultActive?1:0,cc_lang_pref:"en",wmode:"transparent",modestbranding:1,disablekb:1,origin:"*"},events:{onReady:function(t){var n=t.target;Ce.media.play=function(){n.playVideo(),Ce.media.paused=!1},Ce.media.pause=function(){n.pauseVideo(),Ce.media.paused=!0},Ce.media.stop=function(){n.stopVideo(),Ce.media.paused=!0},Ce.media.duration=n.getDuration(),Ce.media.paused=!0,Ce.media.currentTime=n.getCurrentTime(),Ce.media.muted=n.isMuted(),T.title=n.getVideoData().title,k(Ce.media,"timeupdate"),e.clearInterval(Ce.timer.buffering),Ce.timer.buffering=e.setInterval(function(){Ce.media.buffered=n.getVideoLoadedFraction(),k(Ce.media,"progress"),1===Ce.media.buffered&&(e.clearInterval(Ce.timer.buffering),k(Ce.media,"canplaythrough"))},200),K(),fe()},onStateChange:function(t){var n=t.target;switch(e.clearInterval(Ce.timer.playing),t.data){case 0:Ce.media.paused=!0,k(Ce.media,"ended");break;case 1:Ce.media.paused=!1,Ce.media.seeking=!1,k(Ce.media,"play"),k(Ce.media,"playing"),Ce.timer.playing=e.setInterval(function(){Ce.media.currentTime=n.getCurrentTime(),k(Ce.media,"timeupdate")},100);break;case 2:Ce.media.paused=!0,k(Ce.media,"pause")}}}})}function X(){Ce.embed=$f(this),Ce.embed.addEvent("ready",function(){Ce.media.play=function(){Ce.embed.api("play"),Ce.media.paused=!1},Ce.media.pause=function(){Ce.embed.api("pause"),Ce.media.paused=!0},Ce.media.stop=function(){Ce.embed.api("stop"),Ce.media.paused=!0},Ce.media.paused=!0,Ce.media.currentTime=0,K(),Ce.embed.api("getCurrentTime",function(e){Ce.media.currentTime=e,k(Ce.media,"timeupdate")}),Ce.embed.api("getDuration",function(e){Ce.media.duration=e,fe()}),Ce.embed.addEvent("play",function(){Ce.media.paused=!1,k(Ce.media,"play"),k(Ce.media,"playing")}),Ce.embed.addEvent("pause",function(){Ce.media.paused=!0,k(Ce.media,"pause")}),Ce.embed.addEvent("playProgress",function(e){Ce.media.seeking=!1,Ce.media.currentTime=e.seconds,k(Ce.media,"timeupdate")}),Ce.embed.addEvent("loadProgress",function(e){Ce.media.buffered=e.percent,k(Ce.media,"progress"),1===parseInt(e.percent)&&k(Ce.media,"canplaythrough")}),Ce.embed.addEvent("finish",function(){Ce.media.paused=!0,k(Ce.media,"ended")}),T.autoplay&&Ce.embed.api("play")})}function J(){"play"in Ce.media&&Ce.media.play()}function G(){"pause"in Ce.media&&Ce.media.pause()}function Q(e){e===!0?J():e===!1?G():Ce.media[Ce.media.paused?"play":"pause"]()}function Z(e){"number"!=typeof e&&(e=T.seekTime),te(Ce.media.currentTime-e)}function ee(e){"number"!=typeof e&&(e=T.seekTime),te(Ce.media.currentTime+e)}function te(e){var t=0,n=Ce.media.paused,r=ne();"number"==typeof e?t=e:"object"!=typeof e||"input"!==e.type&&"change"!==e.type||(t=e.target.value/e.target.max*r),0>t?t=0:t>r&&(t=r),Ce.progress&&Ce.progress.played&&(Ce.progress.played.value=100/r*t);try{Ce.media.currentTime=t.toFixed(1)}catch(s){}if(a(T.types.embed,Ce.type)){switch(Ce.type){case"youtube":Ce.embed.seekTo(t);break;case"vimeo":Ce.embed.api("seekTo",t.toFixed(0))}n&&G(),k(Ce.media,"timeupdate"),Ce.media.seeking=!0}C("Seeking to "+Ce.media.currentTime+" seconds"),M(t)}function ne(){var e=parseInt(T.duration);return isNaN(e)?Ce.media.duration:e}function re(){m(Ce.container,T.classes.playing,!Ce.media.paused),m(Ce.container,T.classes.stopped,Ce.media.paused),be(Ce.media.paused)}function se(e){var n=E.supportsFullScreen;e&&e.type===E.fullScreenEventName?Ce.isFullscreen=E.isFullScreen(Ce.container):n?(E.isFullScreen(Ce.container)?E.cancelFullScreen():E.requestFullScreen(Ce.container),Ce.isFullscreen=E.isFullScreen(Ce.container)):(Ce.isFullscreen=!Ce.isFullscreen,Ce.isFullscreen?(b(t,"keyup",ae),t.body.style.overflow="hidden"):(v(t,"keyup",ae),t.body.style.overflow="")),m(Ce.container,T.classes.fullscreen.active,Ce.isFullscreen),Ce.isFullscreen?Ce.container.setAttribute("tabindex","-1"):Ce.container.removeAttribute("tabindex"),R(Ce.isFullscreen),w(Ce.buttons.fullscreen,Ce.isFullscreen),k(Ce.container,Ce.isFullscreen?"enterfullscreen":"exitfullscreen")}function ae(e){27===(e.which||e.charCode||e.keyCode)&&Ce.isFullscreen&&se()}function oe(e){if("boolean"!=typeof e&&(e=!Ce.media.muted),w(Ce.buttons.mute,e),Ce.media.muted=e,0===Ce.media.volume&&ie(T.volume),a(T.types.embed,Ce.type)){switch(Ce.type){case"youtube":Ce.embed[Ce.media.muted?"mute":"unMute"]();break;case"vimeo":Ce.embed.api("setVolume",Ce.media.muted?0:parseFloat(T.volume/10))}k(Ce.media,"volumechange")}}function ie(t){if("undefined"==typeof t&&(t=T.volume,T.storage.enabled&&F().supported&&(t=e.localStorage.getItem(T.storage.key),e.localStorage.removeItem("plyr-volume"))),(null===t||isNaN(t))&&(t=T.volume),t>10&&(t=10),0>t&&(t=0),Ce.media.volume=parseFloat(t/10),Ce.volume.display&&(Ce.volume.display.value=t),a(T.types.embed,Ce.type)){switch(Ce.type){case"youtube":Ce.embed.setVolume(100*Ce.media.volume);break;case"vimeo":Ce.embed.api("setVolume",Ce.media.volume)}k(Ce.media,"volumechange")}Ce.media.muted&&t>0&&oe()}function le(){var t=Ce.media.muted?0:10*Ce.media.volume;Ce.supported.full&&(Ce.volume.input&&(Ce.volume.input.value=t),Ce.volume.display&&(Ce.volume.display.value=t)),T.storage.enabled&&F().supported&&!isNaN(t)&&e.localStorage.setItem(T.storage.key,t),m(Ce.container,T.classes.muted,0===t),Ce.supported.full&&Ce.buttons.mute&&w(Ce.buttons.mute,0===t)}function ue(e){Ce.supported.full&&Ce.buttons.captions&&("boolean"!=typeof e&&(e=-1===Ce.container.className.indexOf(T.classes.captions.active)),Ce.captionsEnabled=e,w(Ce.buttons.captions,Ce.captionsEnabled),m(Ce.container,T.classes.captions.active,Ce.captionsEnabled),k(Ce.container,Ce.captionsEnabled?"captionsenabled":"captionsdisabled"))}function ce(e){var t="waiting"===e.type;clearTimeout(Ce.timers.loading),Ce.timers.loading=setTimeout(function(){m(Ce.container,T.classes.loading,t)},t?250:0)}function pe(e){var t=Ce.progress.played,n=!1,r=0,s=ne();if(e)switch(e.type){case"timeupdate":case"seeking":r=x(Ce.media.currentTime,s),"timeupdate"==e.type&&Ce.buttons.seek&&(Ce.buttons.seek.value=r);break;case"playing":case"progress":t=Ce.progress.buffer.bar,n=Ce.progress.buffer.text,r=function(){var e=Ce.media.buffered;return e&&e.length?x(e.end(0),s):"number"==typeof e?100*e:0}()}t&&(t.value=r),n&&(n.innerHTML=r)}function de(e,t){if(t){isNaN(e)&&(e=0),Ce.secs=parseInt(e%60),Ce.mins=parseInt(e/60%60),Ce.hours=parseInt(e/60/60%60);var n=parseInt(ne()/60/60%60)>0;Ce.secs=("0"+Ce.secs).slice(-2),Ce.mins=("0"+Ce.mins).slice(-2),t.innerHTML=(n?Ce.hours+":":"")+Ce.mins+":"+Ce.secs}}function fe(){if(Ce.supported.full){var e=ne()||0;!Ce.duration&&T.displayDuration&&Ce.media.paused&&de(e,Ce.currentTime),Ce.duration&&de(e,Ce.duration),ye()}}function me(e){de(Ce.media.currentTime,Ce.currentTime),e&&"timeupdate"==e.type&&Ce.media.seeking||pe(e)}function ye(e){if(T.tooltips.seek&&!Ce.browser.touch){var t=Ce.progress.container.getBoundingClientRect(),n=0,r=T.classes.tooltip+"--visible";if(e)n=100/t.width*(e.pageX-t.left);else{if(!y(Ce.progress.tooltip,r))return;n=Ce.progress.tooltip.style.left.replace("%","")}0>n?n=0:n>100&&(n=100),de(ne()/100*n,Ce.progress.tooltip),Ce.progress.tooltip.style.left=n+"%",e&&a(["mouseenter","mouseleave"],e.type)&&m(Ce.progress.tooltip,r,"mouseenter"===e.type)}}function be(t){if(T.hideControls&&"audio"!==Ce.type){var n=0,r=!1,s=t;"boolean"!=typeof t&&(t&&t.type?(r="enterfullscreen"===t.type,s=a(["mousemove","mouseenter","focus"],t.type),"mousemove"===t.type&&(n=2e3),"focus"===t.type&&(n=3e3)):s=!1),e.clearTimeout(Ce.timers.hover),(s||Ce.media.paused)&&(m(Ce.container,T.classes.hideControls,!1),Ce.media.paused)||s&&Ce.media.paused||(Ce.timers.hover=e.setTimeout(function(){Ce.controls.active&&!r||m(Ce.container,T.classes.hideControls,!0)},n))}}function ve(e){if("undefined"!=typeof e)return void ge(e);var t;switch(Ce.type){case"youtube":t=Ce.embed.getVideoUrl();break;case"vimeo":Ce.embed.api("getVideoUrl",function(e){t=e});break;default:t=Ce.media.currentSrc}return t||""}function ge(n){if(!("undefined"!=typeof n&&"sources"in n&&n.sources.length))return void C("Invalid source format",!0);if(G(),Ce.buttons&&Ce.buttons.seek&&(Ce.buttons.seek.value=0),Ce.progress&&Ce.progress.played&&(Ce.progress.played.value=0),"youtube"===Ce.type?(Ce.embed.destroy(),e.clearInterval(Ce.timer.buffering),e.clearInterval(Ce.timer.playing)):"video"===Ce.type&&Ce.videoContainer&&u(Ce.videoContainer),Ce.embed=null,xe(),u(Ce.media),"type"in n&&(Ce.type=n.type,"video"===Ce.type)){var r=n.sources[0];"type"in r&&a(T.types.embed,r.type)&&(Ce.type=r.type)}switch(Ce.supported=S.supported(Ce.type),Ce.type){case"video":Ce.media=t.createElement("video");break;case"audio":Ce.media=t.createElement("audio");break;case"youtube":case"vimeo":Ce.media=t.createElement("div"),Ce.embedId=n.sources[0].src}c(Ce.container,Ce.media),"undefined"!=typeof n.autoplay&&(T.autoplay=n.autoplay),a(T.types.html5,Ce.type)&&(T.crossorigin&&Ce.media.setAttribute("crossorigin",""),T.autoplay&&Ce.media.setAttribute("autoplay",""),"poster"in n&&Ce.media.setAttribute("poster",n.poster),T.loop&&Ce.media.setAttribute("loop","")),Ce.container.className=Ce.originalClassName,m(Ce.container,T.classes.fullscreen.active,Ce.isFullscreen),m(Ce.container,T.classes.captions.active,Ce.captionsEnabled),B(),a(T.types.html5,Ce.type)&&j("source",n.sources),$(),a(T.types.html5,Ce.type)&&("tracks"in n&&j("track",n.tracks),Ce.media.load(),Fe(),fe()),T.title=n.title,Y(),Ce.container.plyr.media=Ce.media}function he(e){"video"===Ce.type&&Ce.media.setAttribute("poster",e)}function ke(){function n(){var e=Ce.media.paused;e?J():G();var t=Ce.buttons[e?"play":"pause"],n=Ce.buttons[e?"pause":"play"];if(n&&n.length>1&&(n=n[n.length-1]),n){var r=y(t,T.classes.tabFocus);setTimeout(function(){n.focus(),r&&(m(t,T.classes.tabFocus,!1),m(n,T.classes.tabFocus,!0))},100)}}function r(){var e=t.activeElement;e&&e!=t.body?t.querySelector&&(e=t.querySelector(":focus")):e=null;for(var n in Ce.buttons){var r=Ce.buttons[n];if(r instanceof NodeList)for(var s=0;s<r.length;s++)m(r[s],T.classes.tabFocus,r[s]===e);else m(r,T.classes.tabFocus,r===e)}}var s="IE"==Ce.browser.name?"change":"input";b(e,"keyup",function(e){var t=e.keyCode?e.keyCode:e.which;9==t&&r()}),b(t.body,"click",function(){m(V("."+T.classes.tabFocus),T.classes.tabFocus,!1)});for(var a in Ce.buttons){var o=Ce.buttons[a];b(o,"blur",function(){m(o,"tab-focus",!1)})}g(Ce.buttons.play,"click",T.listeners.play,n),g(Ce.buttons.pause,"click",T.listeners.pause,n),g(Ce.buttons.restart,"click",T.listeners.restart,te),g(Ce.buttons.rewind,"click",T.listeners.rewind,Z),g(Ce.buttons.forward,"click",T.listeners.forward,ee),g(Ce.buttons.seek,s,T.listeners.seek,te),g(Ce.volume.input,s,T.listeners.volume,function(){ie(Ce.volume.input.value)}),g(Ce.buttons.mute,"click",T.listeners.mute,oe),g(Ce.buttons.fullscreen,"click",T.listeners.fullscreen,se),E.supportsFullScreen&&b(t,E.fullScreenEventName,se),b(Ce.buttons.captions,"click",ue),b(Ce.progress.container,"mouseenter mouseleave mousemove",ye),T.hideControls&&(b(Ce.container,"mouseenter mouseleave mousemove enterfullscreen",be),b(Ce.controls,"mouseenter mouseleave",function(e){Ce.controls.active="mouseenter"===e.type}),b(Ce.controls,"focus blur",be,!0))}function we(){if(b(Ce.media,"timeupdate seeking",me),b(Ce.media,"timeupdate",M),b(Ce.media,"durationchange loadedmetadata",fe),b(Ce.media,"ended",function(){"video"===Ce.type&&P(),re()}),b(Ce.media,"progress playing",pe),b(Ce.media,"volumechange",le),b(Ce.media,"play pause",re),b(Ce.media,"waiting canplay seeked",ce),T.clickToPlay&&"audio"!==Ce.type){var e=V("."+T.classes.videoWrapper);if(!e)return;e.style.cursor="pointer",b(e,"click",function(){Ce.media.paused?J():Ce.media.ended?(te(),J()):G()})}b(Ce.media,T.events.join(" "),function(e){k(Ce.container,e.type)})}function xe(){if(a(T.types.html5,Ce.type)){Ce.media.setAttribute("src","");for(var e=Ce.media.querySelectorAll("source"),t=0;t<e.length;t++)u(e[t]);Ce.media.load(),C("Cancelled network requests for old media")}}function Te(){if(!Ce.init)return null;if(Ce.container.setAttribute("class",f(T.selectors.container)),Ce.init=!1,u(V(T.selectors.controls.wrapper)),"youtube"===Ce.type)return void Ce.embed.destroy();"video"===Ce.type&&(u(V(T.selectors.captions)),l(Ce.videoContainer)),W(!0);var e=Ce.media.cloneNode(!0);Ce.media.parentNode.replaceChild(e,Ce.media)}function _e(){if(Ce.init)return null;E=_(),Ce.browser=n(),Ce.media=Ce.container.querySelectorAll("audio, video, div")[0],Ce.originalClassName=Ce.container.className;var e=Ce.media.tagName.toLowerCase();if("div"===e?(Ce.type=Ce.media.getAttribute("data-type"),Ce.embedId=Ce.media.getAttribute("data-video-id"),Ce.media.removeAttribute("data-type"),Ce.media.removeAttribute("data-video-id")):(Ce.type=e,T.crossorigin=null!==Ce.media.getAttribute("crossorigin"),T.autoplay=T.autoplay||null!==Ce.media.getAttribute("autoplay"),T.loop=T.loop||null!==Ce.media.getAttribute("loop")),Ce.supported=S.supported(Ce.type),B(),!Ce.supported.basic)return!1;if(C(Ce.browser.name+" "+Ce.browser.version),$(),a(T.types.html5,Ce.type)){if(!Ce.supported.full)return void(Ce.init=!0);Fe(),Y(),T.autoplay&&J()}Ce.init=!0}function Fe(){if(!Ce.supported.full)return C("No full support for this media type ("+Ce.type+")",!0),u(V(T.selectors.controls.wrapper)),u(V(T.selectors.buttons.play)),void W(!0);var e=!O(T.selectors.controls.wrapper).length;e&&H(),D()&&(e&&ke(),we(),W(),N(),I(),ie(),le(),me(),re(),fe(),k(Ce.container,"ready"))}var Ce=this;return Ce.container=h,Ce.timers={},C(T),_e(),Ce.init?{media:Ce.media,play:J,pause:G,restart:te,rewind:Z,forward:ee,seek:te,source:ve,poster:he,setVolume:ie,togglePlay:Q,toggleMute:oe,toggleCaptions:ue,toggleFullscreen:se,isFullscreen:function(){return Ce.isFullscreen||!1},support:function(e){return r(Ce,e)},destroy:Te,restore:_e}:{}}var E,S={},A={enabled:!0,debug:!1,autoplay:!1,loop:!1,seekTime:10,volume:5,duration:null,displayDuration:!0,iconPrefix:"icon",clickToPlay:!0,hideControls:!0,tooltips:{controls:!1,seek:!0},selectors:{container:".plyr",controls:{container:null,wrapper:".plyr__controls"},labels:"[data-plyr]",buttons:{seek:'[data-plyr="seek"]',play:'[data-plyr="play"]',pause:'[data-plyr="pause"]',restart:'[data-plyr="restart"]',rewind:'[data-plyr="rewind"]',forward:'[data-plyr="fast-forward"]',mute:'[data-plyr="mute"]',captions:'[data-plyr="captions"]',fullscreen:'[data-plyr="fullscreen"]'},volume:{input:'[data-plyr="volume"]',display:".plyr__volume--display"},progress:{container:".plyr__progress",buffer:".plyr__progress--buffer",played:".plyr__progress--played"},captions:".plyr__captions",currentTime:".plyr__time--current",duration:".plyr__time--duration"},classes:{videoWrapper:"plyr__video-wrapper",embedWrapper:"plyr__video-embed",type:"plyr--{0}",stopped:"plyr--stopped",playing:"plyr--playing",muted:"plyr--muted",loading:"plyr--loading",hover:"plyr--hover",
tooltip:"plyr__tooltip",hidden:"plyr__sr-only",hideControls:"plyr--hide-controls",isIos:"plyr--is-ios",isTouch:"plyr--is-touch",captions:{enabled:"plyr--captions-enabled",active:"plyr--captions-active"},fullscreen:{enabled:"plyr--fullscreen-enabled",active:"plyr--fullscreen-active"},tabFocus:"tab-focus"},captions:{defaultActive:!1},fullscreen:{enabled:!0,fallback:!0,allowAudio:!1},storage:{enabled:!0,key:"plyr"},controls:["play-large","play","progress","current-time","mute","volume","captions","fullscreen"],i18n:{restart:"Restart",rewind:"Rewind {seektime} secs",play:"Play",pause:"Pause",forward:"Forward {seektime} secs",played:"played",buffered:"buffered",currentTime:"Current time",duration:"Duration",volume:"Volume",toggleMute:"Toggle Mute",toggleCaptions:"Toggle Captions",toggleFullscreen:"Toggle Fullscreen",frameTitle:"Player for {title}"},types:{embed:["youtube","vimeo"],html5:["video","audio"]},urls:{vimeo:{api:"https://cdn.plyr.io/froogaloop/1.0.1/plyr.froogaloop.js"},youtube:{api:"https://www.youtube.com/iframe_api"}},listeners:{seek:null,play:null,pause:null,restart:null,rewind:null,forward:null,mute:null,volume:null,captions:null,fullscreen:null},events:["ended","progress","stalled","playing","waiting","canplay","canplaythrough","loadstart","loadeddata","loadedmetadata","timeupdate","volumechange","play","pause","error","seeking","emptied"]};return S.supported=function(e){var r,s,a=n(),o="IE"===a.name&&a.version<=9,i=/iPhone|iPod/i.test(navigator.userAgent),l=!!t.createElement("audio").canPlayType,u=!!t.createElement("video").canPlayType;switch(e){case"video":r=u,s=r&&!o&&!i;break;case"audio":r=l,s=r&&!o;break;case"vimeo":case"youtube":r=!0,s=!o&&!i;break;default:r=l&&u,s=r&&!o}return{basic:r,full:s}},S.setup=function(e,n){var r=[];if("string"==typeof e?e=t.querySelectorAll(e):e instanceof HTMLElement?e=[e]:e instanceof NodeList||"string"==typeof e||("undefined"==typeof n&&"object"==typeof e&&(n=e),e=t.querySelectorAll(A.selectors.container)),!S.supported().basic||!e.length)return!1;for(var s=0;s<e.length;s++){var a=e[s];if("undefined"==typeof a.plyr){var o=T(A,n,JSON.parse(a.getAttribute("data-plyr")));if(!o.enabled)return;var i=new C(a,o);a.plyr=Object.keys(i).length?i:!1,k(a,"setup",{plyr:a.plyr})}r.push(a.plyr)}return r},S}),function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}return"function"==typeof window.CustomEvent?!1:(e.prototype=window.Event.prototype,void(window.CustomEvent=e))}();