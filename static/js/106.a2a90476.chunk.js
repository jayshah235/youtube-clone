/*! For license information please see 106.a2a90476.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkyoutube_clone=self.webpackChunkyoutube_clone||[]).push([[106],{3197:function(e,t,r){r.d(t,{l:function(){return n}});var n={API_ENDPOINT:"https://youtube.googleapis.com/youtube/v3"}},7106:function(e,t,r){r.r(t),r.d(t,{default:function(){return re}});var n=r(1087),i=r(9353),s=r(8623),u="styles_videoContainer__xDF7+",o="styles_videoImage__9+0Nv",a="styles_videoContent__8DN0j",l="styles_videoDesc__zIXdR",c="styles_videoResultSection__dKfkj",d=r(184),h=function(e){var t=e.videoImage,r=e.title,h=e.timePosted,f=e.totalViews,v=e.link,p=e.authorTitle;return(0,d.jsxs)(n.rU,{to:v,className:u,children:[(0,d.jsx)("figure",{className:o,children:(0,d.jsx)(i.Z,{loadingSrc:s,src:t,placeHolderStyle:{width:"100%"}})}),(0,d.jsxs)("div",{className:a,children:[(0,d.jsx)(i.Z,{loadingSrc:s,src:t,placeHolderStyle:{width:"40px"}}),(0,d.jsxs)("div",{className:l,children:[(0,d.jsx)("h3",{children:(null===r||void 0===r?void 0:r.length)>58?"".concat(null===r||void 0===r?void 0:r.substring(0,58),"..."):r}),(0,d.jsx)("p",{children:p}),(0,d.jsxs)("div",{className:c,children:[(null===f||void 0===f?void 0:f.length)&&(0,d.jsxs)("p",{children:[f," Views"]}),(0,d.jsx)("p",{children:h})]})]})]})]})},f="styles_videoGrid__9zFVE",v="styles_videoWrapper__pJCQr",p=r(481),y=function(e){var t=e.data;return(0,d.jsx)("div",{className:f,children:null===t||void 0===t?void 0:t.map((function(e,t){var r,n,i,s,u,o,a,l,c,f,y,R,m;return(0,d.jsx)("section",{className:v,children:(0,d.jsx)(h,{videoImage:null!==(r=null===e||void 0===e||null===(n=e.snippet)||void 0===n||null===(i=n.thumbnails)||void 0===i||null===(s=i.maxres)||void 0===s?void 0:s.url)&&void 0!==r?r:null===e||void 0===e||null===(u=e.snippet)||void 0===u||null===(o=u.thumbnails)||void 0===o||null===(a=o.high)||void 0===a?void 0:a.url,title:null===e||void 0===e||null===(l=e.snippet)||void 0===l?void 0:l.title,timePosted:null===e||void 0===e||null===(c=e.snippet)||void 0===c?void 0:c.publishedAt,totalViews:(0,p.Y)(null===e||void 0===e||null===(f=e.statistics)||void 0===f?void 0:f.viewCount),link:"/youtube-clone/watch/".concat(null!==(y=null===e||void 0===e||null===(R=e.id)||void 0===R?void 0:R.videoId)&&void 0!==y?y:null===e||void 0===e?void 0:e.id,"/").concat(null===e||void 0===e?void 0:e.snippet.channelTitle),authorTitle:null===e||void 0===e||null===(m=e.snippet)||void 0===m?void 0:m.channelTitle})},t)}))})},R=r(7731),m=r(4165),b=r(5861),S=r(3734),g=r(1413);function k(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var I=r(5671),E=r(3144),x=r(136),O=r(516),Q=r(9538),C=r(1771),w=r(5511),T=r(3075),j=["refetchPage"],P=function(e){(0,x.Z)(r,e);var t=(0,O.Z)(r);function r(e,n){var i;return(0,I.Z)(this,r),(i=t.call(this)).client=e,i.options=n,i.trackedProps=new Set,i.selectError=null,i.bindMethods(),i.setOptions(n),i}return(0,E.Z)(r,[{key:"bindMethods",value:function(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}},{key:"onSubscribe",value:function(){1===this.listeners.size&&(this.currentQuery.addObserver(this),_(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}},{key:"onUnsubscribe",value:function(){this.hasListeners()||this.destroy()}},{key:"shouldFetchOnReconnect",value:function(){return F(this.currentQuery,this.options,this.options.refetchOnReconnect)}},{key:"shouldFetchOnWindowFocus",value:function(){return F(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}},{key:"destroy",value:function(){this.listeners=new Set,this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}},{key:"setOptions",value:function(e,t){var r=this.options,n=this.currentQuery;if(this.options=this.client.defaultQueryOptions(e),(0,S.VS)(r,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),"undefined"!==typeof this.options.enabled&&"boolean"!==typeof this.options.enabled)throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=r.queryKey),this.updateQuery();var i=this.hasListeners();i&&U(this.currentQuery,n,this.options,r)&&this.executeFetch(),this.updateResult(t),!i||this.currentQuery===n&&this.options.enabled===r.enabled&&this.options.staleTime===r.staleTime||this.updateStaleTimeout();var s=this.computeRefetchInterval();!i||this.currentQuery===n&&this.options.enabled===r.enabled&&s===this.currentRefetchInterval||this.updateRefetchInterval(s)}},{key:"getOptimisticResult",value:function(e){var t=this.client.getQueryCache().build(this.client,e),r=this.createResult(t,e);return function(e,t,r){if(r.keepPreviousData)return!1;if(void 0!==r.placeholderData)return t.isPlaceholderData;if(!(0,S.VS)(e.getCurrentResult(),t))return!0;return!1}(this,r,e)&&(this.currentResult=r,this.currentResultOptions=this.options,this.currentResultState=this.currentQuery.state),r}},{key:"getCurrentResult",value:function(){return this.currentResult}},{key:"trackResult",value:function(e){var t=this,r={};return Object.keys(e).forEach((function(n){Object.defineProperty(r,n,{configurable:!1,enumerable:!0,get:function(){return t.trackedProps.add(n),e[n]}})})),r}},{key:"getCurrentQuery",value:function(){return this.currentQuery}},{key:"remove",value:function(){this.client.getQueryCache().remove(this.currentQuery)}},{key:"refetch",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refetchPage,r=k(e,j);return this.fetch((0,g.Z)((0,g.Z)({},r),{},{meta:{refetchPage:t}}))}},{key:"fetchOptimistic",value:function(e){var t=this,r=this.client.defaultQueryOptions(e),n=this.client.getQueryCache().build(this.client,r);return n.isFetchingOptimistic=!0,n.fetch().then((function(){return t.createResult(n,r)}))}},{key:"fetch",value:function(e){var t,r=this;return this.executeFetch((0,g.Z)((0,g.Z)({},e),{},{cancelRefetch:null==(t=e.cancelRefetch)||t})).then((function(){return r.updateResult(),r.currentResult}))}},{key:"executeFetch",value:function(e){this.updateQuery();var t=this.currentQuery.fetch(this.options,e);return null!=e&&e.throwOnError||(t=t.catch(S.ZT)),t}},{key:"updateStaleTimeout",value:function(){var e=this;if(this.clearStaleTimeout(),!S.sk&&!this.currentResult.isStale&&(0,S.PN)(this.options.staleTime)){var t=(0,S.Kp)(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout((function(){e.currentResult.isStale||e.updateResult()}),t)}}},{key:"computeRefetchInterval",value:function(){var e;return"function"===typeof this.options.refetchInterval?this.options.refetchInterval(this.currentResult.data,this.currentQuery):null!=(e=this.options.refetchInterval)&&e}},{key:"updateRefetchInterval",value:function(e){var t=this;this.clearRefetchInterval(),this.currentRefetchInterval=e,!S.sk&&!1!==this.options.enabled&&(0,S.PN)(this.currentRefetchInterval)&&0!==this.currentRefetchInterval&&(this.refetchIntervalId=setInterval((function(){(t.options.refetchIntervalInBackground||C.j.isFocused())&&t.executeFetch()}),this.currentRefetchInterval))}},{key:"updateTimers",value:function(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}},{key:"clearStaleTimeout",value:function(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}},{key:"clearRefetchInterval",value:function(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}},{key:"createResult",value:function(e,t){var r,n=this.currentQuery,i=this.options,s=this.currentResult,u=this.currentResultState,o=this.currentResultOptions,a=e!==n,l=a?e.state:this.currentQueryInitialState,c=a?this.currentResult:this.previousQueryResult,d=e.state,h=d.dataUpdatedAt,f=d.error,v=d.errorUpdatedAt,p=d.fetchStatus,y=d.status,R=!1,m=!1;if(t._optimisticResults){var b=this.hasListeners(),g=!b&&_(e,t),k=b&&U(e,n,t,i);(g||k)&&(p=(0,T.Kw)(e.options.networkMode)?"fetching":"paused",h||(y="loading")),"isRestoring"===t._optimisticResults&&(p="idle")}if(t.keepPreviousData&&!d.dataUpdatedAt&&null!=c&&c.isSuccess&&"error"!==y)r=c.data,h=c.dataUpdatedAt,y=c.status,R=!0;else if(t.select&&"undefined"!==typeof d.data)if(s&&d.data===(null==u?void 0:u.data)&&t.select===this.selectFn)r=this.selectResult;else try{this.selectFn=t.select,r=t.select(d.data),r=(0,S.oE)(null==s?void 0:s.data,r,t),this.selectResult=r,this.selectError=null}catch(Q){0,this.selectError=Q}else r=d.data;if("undefined"!==typeof t.placeholderData&&"undefined"===typeof r&&"loading"===y){var I;if(null!=s&&s.isPlaceholderData&&t.placeholderData===(null==o?void 0:o.placeholderData))I=s.data;else if(I="function"===typeof t.placeholderData?t.placeholderData():t.placeholderData,t.select&&"undefined"!==typeof I)try{I=t.select(I),this.selectError=null}catch(Q){0,this.selectError=Q}"undefined"!==typeof I&&(y="success",r=(0,S.oE)(null==s?void 0:s.data,I,t),m=!0)}this.selectError&&(f=this.selectError,r=this.selectResult,v=Date.now(),y="error");var E="fetching"===p,x="loading"===y,O="error"===y;return{status:y,fetchStatus:p,isLoading:x,isSuccess:"success"===y,isError:O,isInitialLoading:x&&E,data:r,dataUpdatedAt:h,error:f,errorUpdatedAt:v,failureCount:d.fetchFailureCount,failureReason:d.fetchFailureReason,errorUpdateCount:d.errorUpdateCount,isFetched:d.dataUpdateCount>0||d.errorUpdateCount>0,isFetchedAfterMount:d.dataUpdateCount>l.dataUpdateCount||d.errorUpdateCount>l.errorUpdateCount,isFetching:E,isRefetching:E&&!x,isLoadingError:O&&0===d.dataUpdatedAt,isPaused:"paused"===p,isPlaceholderData:m,isPreviousData:R,isRefetchError:O&&0!==d.dataUpdatedAt,isStale:D(e,t),refetch:this.refetch,remove:this.remove}}},{key:"updateResult",value:function(e){var t=this,r=this.currentResult,n=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,!(0,S.VS)(n,r)){this.currentResult=n;var i={cache:!0};!1!==(null==e?void 0:e.listeners)&&function(){if(!r)return!0;var e=t.options.notifyOnChangeProps,n="function"===typeof e?e():e;if("all"===n||!n&&!t.trackedProps.size)return!0;var i=new Set(null!=n?n:t.trackedProps);return t.options.useErrorBoundary&&i.add("error"),Object.keys(t.currentResult).some((function(e){var n=e;return t.currentResult[n]!==r[n]&&i.has(n)}))}()&&(i.listeners=!0),this.notify((0,g.Z)((0,g.Z)({},i),e))}}},{key:"updateQuery",value:function(){var e=this.client.getQueryCache().build(this.client,this.options);if(e!==this.currentQuery){var t=this.currentQuery;this.currentQuery=e,this.currentQueryInitialState=e.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(null==t||t.removeObserver(this),e.addObserver(this))}}},{key:"onQueryUpdate",value:function(e){var t={};"success"===e.type?t.onSuccess=!e.manual:"error"!==e.type||(0,T.DV)(e.error)||(t.onError=!0),this.updateResult(t),this.hasListeners()&&this.updateTimers()}},{key:"notify",value:function(e){var t=this;Q.V.batch((function(){var r,n,i,s;if(e.onSuccess)null==(r=(n=t.options).onSuccess)||r.call(n,t.currentResult.data),null==(i=(s=t.options).onSettled)||i.call(s,t.currentResult.data,null);else if(e.onError){var u,o,a,l;null==(u=(o=t.options).onError)||u.call(o,t.currentResult.error),null==(a=(l=t.options).onSettled)||a.call(l,void 0,t.currentResult.error)}e.listeners&&t.listeners.forEach((function(e){(0,e.listener)(t.currentResult)})),e.cache&&t.client.getQueryCache().notify({query:t.currentQuery,type:"observerResultsUpdated"})}))}}]),r}(w.l);function _(e,t){return function(e,t){return!1!==t.enabled&&!e.state.dataUpdatedAt&&!("error"===e.state.status&&!1===t.retryOnMount)}(e,t)||e.state.dataUpdatedAt>0&&F(e,t,t.refetchOnMount)}function F(e,t,r){if(!1!==t.enabled){var n="function"===typeof r?r(e):r;return"always"===n||!1!==n&&D(e,t)}return!1}function U(e,t,r,n){return!1!==r.enabled&&(e!==t||!1===n.enabled)&&(!r.suspense||"error"!==e.state.status)&&D(e,r)}function D(e,t){return e.isStaleByTime(t.staleTime)}var Z=r(9439),A=r(2791),N=r(7248).useSyncExternalStore;function V(){var e=!1;return{clearReset:function(){e=!1},reset:function(){e=!0},isReset:function(){return e}}}var L=A.createContext(V()),B=function(){return A.useContext(L)},q=r(6403),M=A.createContext(!1),K=function(){return A.useContext(M)},z=(M.Provider,r(3433));var W=function(e,t){(e.suspense||e.useErrorBoundary)&&(t.isReset()||(e.retryOnMount=!1))},G=function(e){A.useEffect((function(){e.clearReset()}),[e])},H=function(e){var t,r,n=e.result,i=e.errorResetBoundary,s=e.useErrorBoundary,u=e.query;return n.isError&&!i.isReset()&&!n.isFetching&&(t=s,r=[n.error,u],"function"===typeof t?t.apply(void 0,(0,z.Z)(r)):!!t)},$=function(e){e.suspense&&"number"!==typeof e.staleTime&&(e.staleTime=1e3)},Y=function(e,t,r){return(null==e?void 0:e.suspense)&&function(e,t){return e.isLoading&&e.isFetching&&!t}(t,r)},J=function(e,t,r){return t.fetchOptimistic(e).then((function(t){var r=t.data;null==e.onSuccess||e.onSuccess(r),null==e.onSettled||e.onSettled(r,null)})).catch((function(t){r.clearReset(),null==e.onError||e.onError(t),null==e.onSettled||e.onSettled(void 0,t)}))};function X(e,t,r){return function(e,t){var r=(0,q.NL)({context:e.context}),n=K(),i=B(),s=r.defaultQueryOptions(e);s._optimisticResults=n?"isRestoring":"optimistic",s.onError&&(s.onError=Q.V.batchCalls(s.onError)),s.onSuccess&&(s.onSuccess=Q.V.batchCalls(s.onSuccess)),s.onSettled&&(s.onSettled=Q.V.batchCalls(s.onSettled)),$(s),W(s,i),G(i);var u=A.useState((function(){return new t(r,s)})),o=(0,Z.Z)(u,1)[0],a=o.getOptimisticResult(s);if(N(A.useCallback((function(e){var t=n?function(){}:o.subscribe(Q.V.batchCalls(e));return o.updateResult(),t}),[o,n]),(function(){return o.getCurrentResult()}),(function(){return o.getCurrentResult()})),A.useEffect((function(){o.setOptions(s,{listeners:!1})}),[s,o]),Y(s,a,n))throw J(s,o,i);if(H({result:a,errorResetBoundary:i,useErrorBoundary:s.useErrorBoundary,query:o.getCurrentQuery()}))throw a.error;return s.notifyOnChangeProps?a:o.trackResult(a)}((0,S._v)(e,t,r),P)}var ee=r(3197),te=function(){var e=(0,b.Z)((0,m.Z)().mark((function e(t){var r,n;return(0,m.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return r=e.sent,n=null===r||void 0===r?void 0:r.json(),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),re=function(){var e,t=(e="videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50",X(["homepage"],(function(){return te("".concat(ee.l.API_ENDPOINT,"/").concat(e,"&regionCode=IN&key=").concat("AIzaSyAHRqdVvnpSEoj5xlb23Rp6GLQSBRGFTPc"))}),{cacheTime:5e5,staleTime:5e5})),r=t.data,n=t.isError;return t.isLoading?(0,d.jsx)(R.a,{}):n?"Something Went Wrong...":(0,d.jsx)(y,{data:null===r||void 0===r?void 0:r.items})}},481:function(e,t,r){r.d(t,{Y:function(){return n}});var n=function(e){return e>=1e9?(e/1e9).toFixed(1).replace(/\.0$/,"")+"G":e>=1e6?(e/1e6).toFixed(1).replace(/\.0$/,"")+"M":e>=1e3?(e/1e3).toFixed(1).replace(/\.0$/,"")+"K":e}},1561:function(e,t,r){var n=r(2791);var i="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t},s=n.useState,u=n.useEffect,o=n.useLayoutEffect,a=n.useDebugValue;function l(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!i(e,r)}catch(n){return!0}}var c="undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),n=s({inst:{value:r,getSnapshot:t}}),i=n[0].inst,c=n[1];return o((function(){i.value=r,i.getSnapshot=t,l(i)&&c({inst:i})}),[e,r,t]),u((function(){return l(i)&&c({inst:i}),e((function(){l(i)&&c({inst:i})}))}),[e]),a(r),r};t.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:c},7248:function(e,t,r){e.exports=r(1561)}}]);
//# sourceMappingURL=106.a2a90476.chunk.js.map