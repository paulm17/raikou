"use strict";var __create=Object.create,__defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropNames=Object.getOwnPropertyNames,__getOwnPropSymbols=Object.getOwnPropertySymbols,__getProtoOf=Object.getPrototypeOf,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,r,o)=>r in e?__defProp(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,__spreadValues=(e,r)=>{for(var o in r=r||{})__hasOwnProp.call(r,o)&&__defNormalProp(e,o,r[o]);if(__getOwnPropSymbols)for(var o of __getOwnPropSymbols(r))__propIsEnum.call(r,o)&&__defNormalProp(e,o,r[o]);return e},__spreadProps=(e,r)=>__defProps(e,__getOwnPropDescs(r)),__objRest=(e,r)=>{var o={};for(t in e)__hasOwnProp.call(e,t)&&r.indexOf(t)<0&&(o[t]=e[t]);if(null!=e&&__getOwnPropSymbols)for(var t of __getOwnPropSymbols(e))r.indexOf(t)<0&&__propIsEnum.call(e,t)&&(o[t]=e[t]);return o},__export=(e,r)=>{for(var o in r)__defProp(e,o,{get:r[o],enumerable:!0})},__copyProps=(r,o,t,a)=>{if(o&&"object"==typeof o||"function"==typeof o)for(let e of __getOwnPropNames(o))__hasOwnProp.call(r,e)||e===t||__defProp(r,e,{get:()=>o[e],enumerable:!(a=__getOwnPropDesc(o,e))||a.enumerable});return r},__toESM=(e,r,o)=>(o=null!=e?__create(__getProtoOf(e)):{},__copyProps(!r&&e&&e.__esModule?o:__defProp(o,"default",{value:e,enumerable:!0}),e)),__toCommonJS=e=>__copyProps(__defProp({},"__esModule",{value:!0}),e),src_exports={},import_react17=(__export(src_exports,{ScrollArea:()=>ScrollArea,ScrollAreaAutosize:()=>ScrollAreaAutosize}),module.exports=__toCommonJS(src_exports),__toESM(require("react"))),import_core4=require("@raikou/core"),import_react12=__toESM(require("react")),import_react=__toESM(require("react"));function createSafeContext(r){const o=(0,import_react.createContext)(null);return[({children:e,value:r})=>import_react.default.createElement(o.Provider,{value:r},e),()=>{var e=(0,import_react.useContext)(o);if(null===e)throw new Error(r);return e}]}var import_react2=__toESM(require("react")),import_react3=require("react"),import_react4=require("react"),[ScrollAreaProvider,useScrollAreaContext]=createSafeContext("ScrollArea.Root component was not found in tree"),import_react8=__toESM(require("react")),import_core=require("@raikou/core"),import_react6=__toESM(require("react")),import_hooks3=require("@raikou/hooks"),import_react5=__toESM(require("react")),import_hooks2=require("@raikou/hooks"),import_hooks=require("@raikou/hooks");function useResizeObserver(o,e){const t=(0,import_hooks.useCallbackRef)(e);(0,import_hooks.useIsomorphicEffect)(()=>{let e=0;if(o){const r=new ResizeObserver(()=>{cancelAnimationFrame(e),e=window.requestAnimationFrame(t)});return r.observe(o),()=>{window.cancelAnimationFrame(e),r.unobserve(o)}}},[o,t])}var[ScrollbarProvider,useScrollbarContext]=createSafeContext("ScrollAreaScrollbar was not found in tree");function isScrollingWithinScrollbarBounds(e,r){return 0<e&&e<r}function getThumbRatio(e,r){e/=r;return Number.isNaN(e)?0:e}function getThumbSize(e){var r=getThumbRatio(e.viewport,e.content),o=e.scrollbar.paddingStart+e.scrollbar.paddingEnd,e=(e.scrollbar.size-o)*r;return Math.max(e,18)}function composeEventHandlers(r,o,{checkForDefaultPrevented:t=!0}={}){return e=>{null!=r&&r(e),!1!==t&&e.defaultPrevented||null!=o&&o(e)}}function toInt(e){return e?parseInt(e,10):0}function linearScale(o,t){return e=>{var r;return o[0]===o[1]||t[0]===t[1]?t[0]:(r=(t[1]-t[0])/(o[1]-o[0]),t[0]+r*(e-o[0]))}}function clamp(e,[r,o]){return Math.min(o,Math.max(r,e))}function getThumbOffsetFromScroll(e,r,o="ltr"){var t=getThumbSize(r),a=r.scrollbar.paddingStart+r.scrollbar.paddingEnd,a=r.scrollbar.size-a,r=r.content-r.viewport,a=a-t,t=clamp(e,"ltr"===o?[0,r]:[-1*r,0]);return linearScale([0,r],[0,a])(t)}function getScrollPositionFromPointer(e,r,o,t="ltr"){var a=getThumbSize(o),r=r||a/2,l=o.scrollbar.paddingStart+r,a=o.scrollbar.size-o.scrollbar.paddingEnd-(a-r),r=o.content-o.viewport;return linearScale([l,a],"ltr"===t?[0,r]:[-1*r,0])(e)}function addUnlinkedScrollListener(a,l=()=>{}){let s={left:a.scrollLeft,top:a.scrollTop},n=0;return function e(){var r={left:a.scrollLeft,top:a.scrollTop},o=s.left!==r.left,t=s.top!==r.top;(o||t)&&l(),s=r,n=window.requestAnimationFrame(e)}(),()=>window.cancelAnimationFrame(n)}var Scrollbar=(0,import_react5.forwardRef)((e,r)=>{const o=e,{sizes:t,hasThumb:a,onThumbChange:l,onThumbPointerUp:s,onThumbPointerDown:n,onThumbPositionChange:i,onDragScroll:c,onWheelScroll:u,onResize:p}=o,_=__objRest(o,["sizes","hasThumb","onThumbChange","onThumbPointerUp","onThumbPointerDown","onThumbPositionChange","onDragScroll","onWheelScroll","onResize"]);var d=useScrollAreaContext();const[m,f]=import_react5.default.useState(null);r=(0,import_hooks2.useMergedRef)(r,e=>f(e));const b=import_react5.default.useRef(null),S=import_react5.default.useRef("");var h=d["viewport"];const v=t.content-t.viewport,w=(0,import_hooks2.useCallbackRef)(u);var g=(0,import_hooks2.useCallbackRef)(i),P=(0,import_hooks2.useDebounceCallback)(p,10);const y=e=>{var r;b.current&&(r=e.clientX-b.current.left,e=e.clientY-b.current.top,c({x:r,y:e}))};return(0,import_react5.useEffect)(()=>{const e=e=>{var r=e.target;(null==m?void 0:m.contains(r))&&w(e,v)};return document.addEventListener("wheel",e,{passive:!1}),()=>document.removeEventListener("wheel",e,{passive:!1})},[h,m,v,w]),(0,import_react5.useEffect)(g,[t,g]),useResizeObserver(m,P),useResizeObserver(d.content,P),import_react5.default.createElement(ScrollbarProvider,{value:{scrollbar:m,hasThumb:a,onThumbChange:(0,import_hooks2.useCallbackRef)(l),onThumbPointerUp:(0,import_hooks2.useCallbackRef)(s),onThumbPositionChange:g,onThumbPointerDown:(0,import_hooks2.useCallbackRef)(n)}},import_react5.default.createElement("div",__spreadProps(__spreadValues({},_),{ref:r,style:__spreadValues({position:"absolute"},_.style),onPointerDown:composeEventHandlers(e.onPointerDown,e=>{0===e.button&&(e.target.setPointerCapture(e.pointerId),b.current=m.getBoundingClientRect(),S.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",y(e))}),onPointerMove:composeEventHandlers(e.onPointerMove,y),onPointerUp:composeEventHandlers(e.onPointerUp,e=>{var r=e.target;r.hasPointerCapture(e.pointerId)&&r.releasePointerCapture(e.pointerId),document.body.style.webkitUserSelect=S.current,b.current=null})})))}),ScrollAreaScrollbarX=(Scrollbar.displayName="@raikou/Scrollbar",(0,import_react6.forwardRef)((t,e)=>{const r=t,{sizes:o,onSizesChange:a,style:l}=r,s=__objRest(r,["sizes","onSizesChange","style"]),n=useScrollAreaContext(),[i,c]=(0,import_react6.useState)(),u=(0,import_react6.useRef)(null);e=(0,import_hooks3.useMergedRef)(e,u,n.onScrollbarXChange);return(0,import_react6.useEffect)(()=>{u.current&&c(getComputedStyle(u.current))},[u]),import_react6.default.createElement(Scrollbar,__spreadProps(__spreadValues({"data-orientation":"horizontal"},s),{ref:e,sizes:o,style:__spreadProps(__spreadValues({},l),{"--sa-thumb-width":getThumbSize(o)+"px"}),onThumbPointerDown:e=>t.onThumbPointerDown(e.x),onDragScroll:e=>t.onDragScroll(e.x),onWheelScroll:(e,r)=>{var o;n.viewport&&(o=n.viewport.scrollLeft+e.deltaX,t.onWheelScroll(o),isScrollingWithinScrollbarBounds(o,r))&&e.preventDefault()},onResize:()=>{u.current&&n.viewport&&i&&a({content:n.viewport.scrollWidth,viewport:n.viewport.offsetWidth,scrollbar:{size:u.current.clientWidth,paddingStart:toInt(i.paddingLeft),paddingEnd:toInt(i.paddingRight)}})}}))})),import_react7=__toESM(require("react")),import_hooks4=require("@raikou/hooks"),ScrollAreaScrollbarY=(0,import_react7.forwardRef)((t,e)=>{const r=t,{sizes:o,onSizesChange:a,style:l}=r,s=__objRest(r,["sizes","onSizesChange","style"]),n=useScrollAreaContext(),[i,c]=import_react7.default.useState(),u=(0,import_react7.useRef)(null);e=(0,import_hooks4.useMergedRef)(e,u,n.onScrollbarYChange);return(0,import_react7.useEffect)(()=>{u.current&&c(getComputedStyle(u.current))},[u]),import_react7.default.createElement(Scrollbar,__spreadProps(__spreadValues({},s),{"data-orientation":"vertical",ref:e,sizes:o,style:__spreadValues({"--sa-thumb-height":getThumbSize(o)+"px"},l),onThumbPointerDown:e=>t.onThumbPointerDown(e.y),onDragScroll:e=>t.onDragScroll(e.y),onWheelScroll:(e,r)=>{var o;n.viewport&&(o=n.viewport.scrollTop+e.deltaY,t.onWheelScroll(o),isScrollingWithinScrollbarBounds(o,r))&&e.preventDefault()},onResize:()=>{u.current&&n.viewport&&i&&a({content:n.viewport.scrollHeight,viewport:n.viewport.offsetHeight,scrollbar:{size:u.current.clientHeight,paddingStart:toInt(i.paddingTop),paddingEnd:toInt(i.paddingBottom)}})}}))}),ScrollAreaScrollbarVisible=(0,import_react8.forwardRef)((e,r)=>{var{orientation:o="vertical"}=e,e=__objRest(e,["orientation"]);const t=(0,import_core.useDirection)()["dir"],a=useScrollAreaContext(),l=(0,import_react8.useRef)(null),s=(0,import_react8.useRef)(0),[n,i]=(0,import_react8.useState)({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}});var c=getThumbRatio(n.viewport,n.content),e=__spreadProps(__spreadValues({},e),{sizes:n,onSizesChange:i,hasThumb:Boolean(0<c&&c<1),onThumbChange:e=>{l.current=e},onThumbPointerUp:()=>{s.current=0},onThumbPointerDown:e=>{s.current=e}});const u=(e,r)=>getScrollPositionFromPointer(e,s.current,n,r);return"horizontal"===o?import_react8.default.createElement(ScrollAreaScrollbarX,__spreadProps(__spreadValues({},e),{ref:r,onThumbPositionChange:()=>{var e;a.viewport&&l.current&&(e=getThumbOffsetFromScroll(a.viewport.scrollLeft,n,t),l.current.style.transform=`translate3d(${e}px, 0, 0)`)},onWheelScroll:e=>{a.viewport&&(a.viewport.scrollLeft=e)},onDragScroll:e=>{a.viewport&&(a.viewport.scrollLeft=u(e,t))}})):"vertical"===o?import_react8.default.createElement(ScrollAreaScrollbarY,__spreadProps(__spreadValues({},e),{ref:r,onThumbPositionChange:()=>{var e;a.viewport&&l.current&&(e=getThumbOffsetFromScroll(a.viewport.scrollTop,n),l.current.style.transform=`translate3d(0, ${e}px, 0)`)},onWheelScroll:e=>{a.viewport&&(a.viewport.scrollTop=e)},onDragScroll:e=>{a.viewport&&(a.viewport.scrollTop=u(e))}})):null}),import_react10=__toESM(require("react")),import_react9=__toESM(require("react")),import_hooks5=require("@raikou/hooks"),ScrollAreaScrollbarAuto=(0,import_react9.forwardRef)((e,r)=>{const o=useScrollAreaContext();var t=e["forceMount"],a=__objRest(e,["forceMount"]);const[l,s]=(0,import_react9.useState)(!1),n="horizontal"===e.orientation;e=(0,import_hooks5.useDebounceCallback)(()=>{var e,r;o.viewport&&(e=o.viewport.offsetWidth<o.viewport.scrollWidth,r=o.viewport.offsetHeight<o.viewport.scrollHeight,s(n?e:r))},10);return useResizeObserver(o.viewport,e),useResizeObserver(o.content,e),t||l?import_react9.default.createElement(ScrollAreaScrollbarVisible,__spreadProps(__spreadValues({"data-state":l?"visible":"hidden"},a),{ref:r})):null}),ScrollAreaScrollbarHover=(0,import_react10.forwardRef)((e,r)=>{var o=e["forceMount"],e=__objRest(e,["forceMount"]);const a=useScrollAreaContext(),[t,l]=(0,import_react10.useState)(!1);return(0,import_react10.useEffect)(()=>{const e=a["scrollArea"];let r=0;if(e){const o=()=>{window.clearTimeout(r),l(!0)},t=()=>{r=window.setTimeout(()=>l(!1),a.scrollHideDelay)};return e.addEventListener("pointerenter",o),e.addEventListener("pointerleave",t),()=>{window.clearTimeout(r),e.removeEventListener("pointerenter",o),e.removeEventListener("pointerleave",t)}}},[a.scrollArea,a.scrollHideDelay]),o||t?import_react10.default.createElement(ScrollAreaScrollbarAuto,__spreadProps(__spreadValues({"data-state":t?"visible":"hidden"},e),{ref:r})):null}),import_react11=__toESM(require("react")),import_hooks6=require("@raikou/hooks"),ScrollAreaScrollbarScroll=(0,import_react11.forwardRef)((e,r)=>{var o=e["forceMount"],t=__objRest(e,["forceMount"]);const a=useScrollAreaContext(),l="horizontal"===e.orientation,[s,n]=(0,import_react11.useState)("hidden"),i=(0,import_hooks6.useDebounceCallback)(()=>n("idle"),100);return(0,import_react11.useEffect)(()=>{if("idle"===s){const e=window.setTimeout(()=>n("hidden"),a.scrollHideDelay);return()=>window.clearTimeout(e)}},[s,a.scrollHideDelay]),(0,import_react11.useEffect)(()=>{const o=a["viewport"],t=l?"scrollLeft":"scrollTop";if(o){let r=o[t];const e=()=>{var e=o[t];r!==e&&(n("scrolling"),i()),r=e};return o.addEventListener("scroll",e),()=>o.removeEventListener("scroll",e)}},[a.viewport,l,i]),o||"hidden"!==s?import_react11.default.createElement(ScrollAreaScrollbarVisible,__spreadProps(__spreadValues({"data-state":"hidden"===s?"hidden":"visible"},t),{ref:r,onPointerEnter:composeEventHandlers(e.onPointerEnter,()=>n("interacting")),onPointerLeave:composeEventHandlers(e.onPointerLeave,()=>n("idle"))})):null}),ScrollAreaScrollbar=import_react12.default.forwardRef((e,r)=>{var o=e["forceMount"],t=__objRest(e,["forceMount"]),a=useScrollAreaContext();const{onScrollbarXEnabledChange:l,onScrollbarYEnabledChange:s}=a,n="horizontal"===e.orientation;return import_react12.default.useEffect(()=>((n?l:s)(!0),()=>{(n?l:s)(!1)}),[n,l,s]),"hover"===a.type?import_react12.default.createElement(ScrollAreaScrollbarHover,__spreadProps(__spreadValues({},t),{ref:r,forceMount:o})):"scroll"===a.type?import_react12.default.createElement(ScrollAreaScrollbarScroll,__spreadProps(__spreadValues({},t),{ref:r,forceMount:o})):"auto"===a.type?import_react12.default.createElement(ScrollAreaScrollbarAuto,__spreadProps(__spreadValues({},t),{ref:r,forceMount:o})):"always"===a.type?import_react12.default.createElement(ScrollAreaScrollbarVisible,__spreadProps(__spreadValues({},t),{ref:r})):null}),import_react13=__toESM(require("react")),Corner=import_react13.default.forwardRef((e,r)=>{var o=e["style"],e=__objRest(e,["style"]);const t=useScrollAreaContext(),[a,l]=import_react13.default.useState(0),[s,n]=import_react13.default.useState(0);var i=Boolean(a&&s);return useResizeObserver(t.scrollbarX,()=>{var e=(null==(e=t.scrollbarX)?void 0:e.offsetHeight)||0;t.onCornerHeightChange(e),n(e)}),useResizeObserver(t.scrollbarY,()=>{var e=(null==(e=t.scrollbarY)?void 0:e.offsetWidth)||0;t.onCornerWidthChange(e),l(e)}),i?import_react13.default.createElement("div",__spreadProps(__spreadValues({},e),{ref:r,style:__spreadProps(__spreadValues({},o),{width:a,height:s})})):null}),ScrollAreaCorner=import_react13.default.forwardRef((e,r)=>{var o=useScrollAreaContext(),t=Boolean(o.scrollbarX&&o.scrollbarY);return"scroll"!==o.type&&t?import_react13.default.createElement(Corner,__spreadProps(__spreadValues({},e),{ref:r})):null}),import_react14=__toESM(require("react")),import_hooks7=require("@raikou/hooks"),import_core2=require("@raikou/core"),defaultProps={scrollHideDelay:1e3,type:"hover"},ScrollAreaRoot=(0,import_react14.forwardRef)((e,r)=>{var e=(0,import_core2.useProps)("ScrollAreaRoot",defaultProps,e),{type:o,scrollHideDelay:t,scrollbars:a}=e,e=__objRest(e,["type","scrollHideDelay","scrollbars"]);const[l,s]=(0,import_react14.useState)(null);var[n,i]=(0,import_react14.useState)(null),[c,u]=(0,import_react14.useState)(null),[p,_]=(0,import_react14.useState)(null),[d,m]=(0,import_react14.useState)(null),[f,b]=(0,import_react14.useState)(0),[S,h]=(0,import_react14.useState)(0),[v,w]=(0,import_react14.useState)(!1),[g,P]=(0,import_react14.useState)(!1),r=(0,import_hooks7.useMergedRef)(r,e=>s(e));return import_react14.default.createElement(ScrollAreaProvider,{value:{type:o,scrollHideDelay:t,scrollArea:l,viewport:n,onViewportChange:i,content:c,onContentChange:u,scrollbarX:p,onScrollbarXChange:_,scrollbarXEnabled:v,onScrollbarXEnabledChange:w,scrollbarY:d,onScrollbarYChange:m,scrollbarYEnabled:g,onScrollbarYEnabledChange:P,onCornerWidthChange:b,onCornerHeightChange:h}},import_react14.default.createElement(import_core2.Box,__spreadProps(__spreadValues({},e),{ref:r,__vars:{"--sa-corner-width":"xy"!==a?"0px":f+"px","--sa-corner-height":"xy"!==a?"0px":S+"px"}})))}),import_react15=(ScrollAreaRoot.displayName="@raikou/core/ScrollAreaRoot",__toESM(require("react"))),import_hooks8=require("@raikou/hooks"),import_core3=require("@raikou/core"),ScrollAreaViewport=(0,import_react15.forwardRef)((e,r)=>{var{children:o,style:t}=e,e=__objRest(e,["children","style"]),a=useScrollAreaContext(),r=(0,import_hooks8.useMergedRef)(r,a.onViewportChange);return import_react15.default.createElement(import_core3.Box,__spreadProps(__spreadValues({},e),{ref:r,style:__spreadValues({overflowX:a.scrollbarXEnabled?"scroll":"hidden",overflowY:a.scrollbarYEnabled?"scroll":"hidden"},t)}),import_react15.default.createElement("div",{style:{minWidth:"100%",display:"table"},ref:a.onContentChange},o))}),import_react16=(ScrollAreaViewport.displayName="@raikou/core/ScrollAreaViewport",__toESM(require("react"))),import_hooks9=require("@raikou/hooks"),Thumb=(0,import_react16.forwardRef)((e,r)=>{var o=e["style"],t=__objRest(e,["style"]);const a=useScrollAreaContext(),l=useScrollbarContext(),s=l["onThumbPositionChange"];r=(0,import_hooks9.useMergedRef)(r,e=>l.onThumbChange(e));const n=(0,import_react16.useRef)(),i=(0,import_hooks9.useDebounceCallback)(()=>{n.current&&(n.current(),n.current=void 0)},100);return(0,import_react16.useEffect)(()=>{const r=a["viewport"];if(r){const e=()=>{var e;i(),n.current||(e=addUnlinkedScrollListener(r,s),n.current=e,s())};return s(),r.addEventListener("scroll",e),()=>r.removeEventListener("scroll",e)}},[a.viewport,i,s]),import_react16.default.createElement("div",__spreadProps(__spreadValues({"data-state":l.hasThumb?"visible":"hidden"},t),{ref:r,style:__spreadValues({width:"var(--sa-thumb-width)",height:"var(--sa-thumb-height)"},o),onPointerDownCapture:composeEventHandlers(e.onPointerDownCapture,e=>{var r=e.target.getBoundingClientRect(),o=e.clientX-r.left,e=e.clientY-r.top;l.onThumbPointerDown({x:o,y:e})}),onPointerUp:composeEventHandlers(e.onPointerUp,l.onThumbPointerUp)}))}),ScrollAreaThumb=import_react16.default.forwardRef((e,r)=>{var o=e["forceMount"],e=__objRest(e,["forceMount"]),t=useScrollbarContext();return o||t.hasThumb?import_react16.default.createElement(Thumb,__spreadValues({ref:r},e)):null}),ScrollArea_module_default={root:"m-d57069b5",viewport:"m-c0783ff9",viewportInner:"m-f8f631dd",scrollbar:"m-c44ba933",thumb:"m-d8b5e363",corner:"m-21657268"},defaultProps2={scrollHideDelay:1e3,type:"hover",scrollbars:"xy"},varsResolver=(0,import_core4.createVarsResolver)((e,{scrollbarSize:r})=>({root:{"--scrollarea-scrollbar-size":(0,import_core4.rem)(r)}})),ScrollArea=(0,import_core4.factory)((e,r)=>{e=(0,import_core4.useProps)("ScrollArea",defaultProps2,e);const o=e,{classNames:t,className:a,style:l,styles:s,unstyled:n,vars:i,type:c,scrollHideDelay:u,viewportProps:p,viewportRef:_,onScrollPositionChange:d,children:m,offsetScrollbars:f,scrollbars:b}=o,S=__objRest(o,["classNames","className","style","styles","unstyled","scrollbarSize","vars","type","scrollHideDelay","viewportProps","viewportRef","onScrollPositionChange","children","offsetScrollbars","scrollbars"]),[h,v]=(0,import_react17.useState)(!1);e=(0,import_core4.useStyles)({name:"ScrollArea",props:e,classes:ScrollArea_module_default,className:a,style:l,classNames:t,styles:s,unstyled:n,vars:i,varsResolver:varsResolver});return import_react17.default.createElement(ScrollAreaRoot,__spreadValues(__spreadValues({type:"never"===c?"always":c,scrollHideDelay:u,ref:r,scrollbars:b},e("root")),S),import_react17.default.createElement(ScrollAreaViewport,__spreadProps(__spreadValues(__spreadValues({},p),e("viewport")),{ref:_,"data-offset-scrollbars":f||void 0,"data-scrollbars":b||void 0,onScroll:"function"==typeof d?({currentTarget:e})=>d({x:e.scrollLeft,y:e.scrollTop}):void 0}),m),("xy"===b||"x"===b)&&import_react17.default.createElement(ScrollAreaScrollbar,__spreadProps(__spreadValues({},e("scrollbar")),{orientation:"horizontal","data-hidden":"never"===c||void 0,forceMount:!0,onMouseEnter:()=>v(!0),onMouseLeave:()=>v(!1)}),import_react17.default.createElement(ScrollAreaThumb,__spreadValues({},e("thumb")))),("xy"===b||"y"===b)&&import_react17.default.createElement(ScrollAreaScrollbar,__spreadProps(__spreadValues({},e("scrollbar")),{orientation:"vertical","data-hidden":"never"===c||void 0,forceMount:!0,onMouseEnter:()=>v(!0),onMouseLeave:()=>v(!1)}),import_react17.default.createElement(ScrollAreaThumb,__spreadValues({},e("thumb")))),import_react17.default.createElement(ScrollAreaCorner,__spreadProps(__spreadValues({},e("corner")),{"data-hovered":h||void 0,"data-hidden":"never"===c||void 0})))}),ScrollAreaAutosize=(ScrollArea.displayName="@raikou/core/ScrollArea",(0,import_core4.factory)((e,r)=>{var e=(0,import_core4.useProps)("ScrollAreaAutosize",defaultProps2,e),{children:o,classNames:t,styles:a,scrollbarSize:l,scrollHideDelay:s,type:n,dir:i,offsetScrollbars:c,viewportRef:u,onScrollPositionChange:p,unstyled:_,variant:d,viewportProps:m,scrollbars:f,style:b,vars:S}=e,e=__objRest(e,["children","classNames","styles","scrollbarSize","scrollHideDelay","type","dir","offsetScrollbars","viewportRef","onScrollPositionChange","unstyled","variant","viewportProps","scrollbars","style","vars"]);return import_react17.default.createElement(import_core4.Box,__spreadProps(__spreadValues({},e),{ref:r,style:[{display:"flex"},b]}),import_react17.default.createElement(import_core4.Box,{style:{display:"flex",flexDirection:"column",flex:1}},import_react17.default.createElement(ScrollArea,{classNames:t,styles:a,scrollHideDelay:s,scrollbarSize:l,type:n,dir:i,offsetScrollbars:c,viewportRef:u,onScrollPositionChange:p,unstyled:_,variant:d,viewportProps:m,vars:S,scrollbars:f},o)))}));ScrollArea.classes=ScrollArea_module_default,ScrollAreaAutosize.displayName="@raikou/core/ScrollAreaAutosize",ScrollArea.Autosize=ScrollAreaAutosize;