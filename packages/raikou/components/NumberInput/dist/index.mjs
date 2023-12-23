var __defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,r,t)=>r in e?__defProp(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,__spreadValues=(e,r)=>{for(var t in r=r||{})__hasOwnProp.call(r,t)&&__defNormalProp(e,t,r[t]);if(__getOwnPropSymbols)for(var t of __getOwnPropSymbols(r))__propIsEnum.call(r,t)&&__defNormalProp(e,t,r[t]);return e},__spreadProps=(e,r)=>__defProps(e,__getOwnPropDescs(r)),__objRest=(e,r)=>{var t={};for(s in e)__hasOwnProp.call(e,s)&&r.indexOf(s)<0&&(t[s]=e[s]);if(null!=e&&__getOwnPropSymbols)for(var s of __getOwnPropSymbols(e))r.indexOf(s)<0&&__propIsEnum.call(e,s)&&(t[s]=e[s]);return t};import React12 from"react";import cx from"clsx";import{NumericFormat}from"react-number-format";import{assignRef,clamp,useUncontrolled}from"@raikou/hooks";import{factory as factory6,useProps as useProps9,useStyles as useStyles8,createVarsResolver as createVarsResolver6,getSize as getSize2,useResolvedStylesApi}from"@raikou/core";import React from"react";import{Box,useProps,useStyles,polymorphicFactory}from"@raikou/core";var UnstyledButton_module_default={root:"m-87cf2631"},defaultProps={__staticSelector:"UnstyledButton"},UnstyledButton=polymorphicFactory((e,r)=>{var e=useProps("UnstyledButton",defaultProps,e),{className:t,component:s="button",__staticSelector:a,unstyled:o,classNames:l,styles:i,style:n}=e,p=__objRest(e,["className","component","__staticSelector","unstyled","classNames","styles","style"]),a=useStyles({name:a,props:e,classes:UnstyledButton_module_default,className:t,style:n,classNames:l,styles:i,unstyled:o});return React.createElement(Box,__spreadValues(__spreadProps(__spreadValues({},a("root",{focusable:!0})),{component:s,ref:r,type:"button"===s?"button":void 0}),p))});UnstyledButton.displayName="@raikou/core/UnstyledButton",UnstyledButton.classes=UnstyledButton_module_default;import React10 from"react";import{polymorphicFactory as polymorphicFactory3}from"@raikou/core";import React9 from"react";import{Box as Box7,polymorphicFactory as polymorphicFactory2,useProps as useProps7,useStyles as useStyles7,extractStyleProps,getSize,getFontSize as getFontSize5,getRadius,rem as rem4,createVarsResolver as createVarsResolver5}from"@raikou/core";import React2,{createContext,useContext}from"react";import React3,{createContext as createContext2,useContext as useContext2}from"react";function createOptionalContext(e=null){const t=createContext2(e);return[({children:e,value:r})=>React3.createElement(t.Provider,{value:r},e),()=>useContext2(t)]}import{useState}from"react";import{useEffect,useLayoutEffect}from"react";var[InputWrapperProvider,useInputWrapperContext]=createOptionalContext({offsetBottom:!1,offsetTop:!1,describedBy:void 0,getStyles:null,inputId:void 0,labelId:void 0});import React4 from"react";import{Box as Box2,factory,useProps as useProps2,useStyles as useStyles2,getFontSize,createVarsResolver}from"@raikou/core";var Input_module_default={wrapper:"m-6c018570",input:"m-8fb7ebe7",section:"m-82577fc2",placeholder:"m-88bacfd0",root:"m-46b77525",label:"m-8fdc1311",required:"m-78a94662",error:"m-8f816625",description:"m-fe47ce59"},defaultProps2={labelElement:"label"},varsResolver=createVarsResolver((e,{size:r})=>({label:{"--input-label-size":getFontSize(r),"--input-asterisk-color":void 0}})),InputLabel=factory((e,r)=>{e=useProps2("InputLabel",defaultProps2,e);const t=useProps2("InputLabel",defaultProps2,e),{classNames:s,className:a,style:o,styles:l,unstyled:i,vars:n,labelElement:p,size:u,required:c,htmlFor:d,onMouseDown:m,children:_,__staticSelector:v,variant:y}=t,f=__objRest(t,["classNames","className","style","styles","unstyled","vars","labelElement","size","required","htmlFor","onMouseDown","children","__staticSelector","variant"]);var e=useStyles2({name:["InputWrapper",v],props:e,classes:Input_module_default,className:a,style:o,classNames:s,styles:l,unstyled:i,rootSelector:"label",vars:n,varsResolver:varsResolver}),P=useInputWrapperContext(),P=(null==P?void 0:P.getStyles)||e;return React4.createElement(Box2,__spreadValues(__spreadProps(__spreadValues({},P("label")),{component:p,variant:y,size:u,ref:r,htmlFor:"label"===p?d:void 0,mod:{required:c},onMouseDown:e=>{null!=m&&m(e),!e.defaultPrevented&&1<e.detail&&e.preventDefault()}}),f),_,c&&React4.createElement("span",__spreadProps(__spreadValues({},P("required")),{"aria-hidden":!0})," *"))});InputLabel.displayName="@raikou/core/InputLabel";import React5 from"react";import{Box as Box3,factory as factory2,useProps as useProps3,useStyles as useStyles3,getFontSize as getFontSize2,rem,createVarsResolver as createVarsResolver2}from"@raikou/core";var defaultProps3={},varsResolver2=createVarsResolver2((e,{size:r})=>({error:{"--input-error-size":void 0===r?void 0:`calc(${getFontSize2(r)} - ${rem(2)})`}})),InputError=factory2((e,r)=>{var e=useProps3("InputError",defaultProps3,e),{classNames:t,className:s,style:a,styles:o,unstyled:l,vars:i,size:n,__staticSelector:p,__inheritStyles:u=!0,variant:c}=e,d=__objRest(e,["classNames","className","style","styles","unstyled","vars","size","__staticSelector","__inheritStyles","variant"]),p=useStyles3({name:["InputWrapper",p],props:e,classes:Input_module_default,className:s,style:a,classNames:t,styles:o,unstyled:l,rootSelector:"error",vars:i,varsResolver:varsResolver2}),e=useInputWrapperContext(),s=u&&(null==e?void 0:e.getStyles)||p;return React5.createElement(Box3,__spreadValues(__spreadValues({component:"p",ref:r,variant:c,size:n},s("error")),d))});InputError.displayName="@raikou/core/InputError";import React6 from"react";import{Box as Box4,factory as factory3,useProps as useProps4,useStyles as useStyles4,getFontSize as getFontSize3,rem as rem2,createVarsResolver as createVarsResolver3}from"@raikou/core";var defaultProps4={},varsResolver3=createVarsResolver3((e,{size:r})=>({description:{"--input-description-size":void 0===r?void 0:`calc(${getFontSize3(r)} - ${rem2(2)})`}})),InputDescription=factory3((e,r)=>{var e=useProps4("InputDescription",defaultProps4,e),t=useProps4("InputDescription",defaultProps4,e),{classNames:s,className:a,style:o,styles:l,unstyled:i,vars:n,size:p,__staticSelector:u,__inheritStyles:c=!0,variant:d}=t,t=__objRest(t,["classNames","className","style","styles","unstyled","vars","size","__staticSelector","__inheritStyles","variant"]),m=useInputWrapperContext(),u=useStyles4({name:["InputWrapper",u],props:e,classes:Input_module_default,className:a,style:o,classNames:s,styles:l,unstyled:i,rootSelector:"description",vars:n,varsResolver:varsResolver3}),e=c&&(null==m?void 0:m.getStyles)||u;return React6.createElement(Box4,__spreadValues(__spreadValues({component:"p",ref:r,variant:d,size:p},e("description")),t))});InputDescription.displayName="@raikou/core/InputDescription";import React7 from"react";import{Box as Box5,factory as factory4,useProps as useProps5,useStyles as useStyles5}from"@raikou/core";var defaultProps5={},InputPlaceholder=factory4((e,r)=>{var e=useProps5("InputPlaceholder",defaultProps5,e),t=useProps5("InputPlaceholder",defaultProps5,e),{classNames:s,className:a,style:o,styles:l,unstyled:i,__staticSelector:n,variant:p}=t,t=__objRest(t,["classNames","className","style","styles","unstyled","vars","__staticSelector","variant"]),n=useStyles5({name:["InputPlaceholder",n],props:e,classes:Input_module_default,className:a,style:o,classNames:s,styles:l,unstyled:i,rootSelector:"placeholder"});return React7.createElement(Box5,__spreadValues(__spreadProps(__spreadValues({},n("placeholder")),{component:"span",variant:p,ref:r}),t))});InputPlaceholder.displayName="@raikou/core/InputPlaceholder";import React8 from"react";import{useId}from"@raikou/hooks";import{Box as Box6,factory as factory5,useProps as useProps6,useStyles as useStyles6,createVarsResolver as createVarsResolver4,getFontSize as getFontSize4,rem as rem3}from"@raikou/core";function getInputOffsets(e,{hasDescription:r,hasError:t}){var s=e.findIndex(e=>"input"===e),a=e[s-1],e=e[s+1];return{offsetBottom:r&&"description"===e||t&&"error"===e,offsetTop:r&&"description"===a||t&&"error"===a}}var defaultProps6={labelElement:"label",inputContainer:e=>e,inputWrapperOrder:["label","description","input","error"]},varsResolver4=createVarsResolver4((e,{size:r})=>({label:{"--input-label-size":getFontSize4(r),"--input-asterisk-color":void 0},error:{"--input-error-size":void 0===r?void 0:`calc(${getFontSize4(r)} - ${rem3(2)})`},description:{"--input-description-size":void 0===r?void 0:`calc(${getFontSize4(r)} - ${rem3(2)})`}})),InputWrapper=factory5((e,r)=>{var e=useProps6("InputWrapper",defaultProps6,e),{classNames:t,className:s,style:a,styles:o,unstyled:l,vars:i,size:n,variant:p,__staticSelector:u,inputContainer:c,inputWrapperOrder:d,label:m,error:_,description:v,labelProps:y,descriptionProps:f,errorProps:P,labelElement:b,children:S,withAsterisk:h,id:N,required:I,__stylesApiProps:R}=e,g=__objRest(e,["classNames","className","style","styles","unstyled","vars","size","variant","__staticSelector","inputContainer","inputWrapperOrder","label","error","description","labelProps","descriptionProps","errorProps","labelElement","children","withAsterisk","id","required","__stylesApiProps"]),R=useStyles6({name:["InputWrapper",u],props:R||e,classes:Input_module_default,className:s,style:a,classNames:t,styles:o,unstyled:l,vars:i,varsResolver:varsResolver4}),e={size:n,variant:p,__staticSelector:u},s=useId(N),a="boolean"==typeof h?h:I,t=(null==P?void 0:P.id)||s+"-error",o=(null==f?void 0:f.id)||s+"-description",l=s,i=!!_&&"boolean"!=typeof _,u=!!v,N=`${i?t:""} `+(u?o:""),h=0<N.trim().length?N.trim():void 0,I=(null==y?void 0:y.id)||s+"-label";const w=m&&React8.createElement(InputLabel,__spreadValues(__spreadValues({key:"label",labelElement:b,id:I,htmlFor:l,required:a},e),y),m),V=u&&React8.createElement(InputDescription,__spreadProps(__spreadValues(__spreadValues({key:"description"},f),e),{size:(null==f?void 0:f.size)||e.size,id:(null==f?void 0:f.id)||o}),v),z=React8.createElement(React8.Fragment,{key:"input"},c(S)),E=i&&React8.createElement(InputError,__spreadProps(__spreadValues(__spreadValues({},P),e),{size:(null==P?void 0:P.size)||e.size,key:"error",id:(null==P?void 0:P.id)||t}),_);N=d.map(e=>{switch(e){case"label":return w;case"input":return z;case"description":return V;case"error":return E;default:return null}});return React8.createElement(InputWrapperProvider,{value:__spreadValues({getStyles:R,describedBy:h,inputId:l,labelId:I},getInputOffsets(d,{hasDescription:u,hasError:i}))},React8.createElement(Box6,__spreadValues(__spreadValues({ref:r,variant:p,size:n},R("root")),g),N))}),Input_module_default2=(InputWrapper.displayName="@raikou/core/InputWrapper",{wrapper:"m-6c018570",input:"m-8fb7ebe7",section:"m-82577fc2",placeholder:"m-88bacfd0",root:"m-46b77525",label:"m-8fdc1311",required:"m-78a94662",error:"m-8f816625",description:"m-fe47ce59"}),defaultProps7={variant:"default",leftSectionPointerEvents:"none",rightSectionPointerEvents:"none",withAria:!0,withErrorStyles:!0},varsResolver5=createVarsResolver5((e,r,t)=>({wrapper:{"--input-margin-top":t.offsetTop?"calc(var(--raikou-spacing-xs) / 2)":void 0,"--input-margin-bottom":t.offsetBottom?"calc(var(--raikou-spacing-xs) / 2)":void 0,"--input-height":getSize(r.size,"input-height"),"--input-fz":getFontSize5(r.size),"--input-radius":void 0===r.radius?void 0:getRadius(r.radius),"--input-left-section-width":void 0!==r.leftSectionWidth?rem4(r.leftSectionWidth):void 0,"--input-right-section-width":void 0!==r.rightSectionWidth?rem4(r.rightSectionWidth):void 0,"--input-padding-y":r.multiline?getSize(r.size,"input-padding-y"):void 0,"--input-left-section-pointer-events":r.leftSectionPointerEvents,"--input-right-section-pointer-events":r.rightSectionPointerEvents}})),Input=polymorphicFactory2((e,r)=>{var e=useProps7("Input",defaultProps7,e),{classNames:t,className:s,style:a,styles:o,unstyled:l,required:i,__staticSelector:n,__stylesApiProps:p,size:u,wrapperProps:c,error:d,disabled:m,leftSection:_,leftSectionProps:v,rightSection:y,rightSectionProps:f,variant:P,vars:b,pointer:S,multiline:h,id:N,withAria:I,withErrorStyles:R}=e,g=__objRest(e,["classNames","className","style","styles","unstyled","required","__staticSelector","__stylesApiProps","size","wrapperProps","error","disabled","leftSection","leftSectionProps","leftSectionWidth","rightSection","rightSectionProps","rightSectionWidth","rightSectionPointerEvents","leftSectionPointerEvents","variant","vars","pointer","multiline","radius","id","withAria","withErrorStyles"]),{styleProps:g,rest:w}=extractStyleProps(g),V=useInputWrapperContext(),z={offsetBottom:null==V?void 0:V.offsetBottom,offsetTop:null==V?void 0:V.offsetTop},n=useStyles7({name:["Input",n],props:p||e,classes:Input_module_default2,className:s,style:a,classNames:t,styles:o,unstyled:l,stylesCtx:z,rootSelector:"wrapper",vars:b,varsResolver:varsResolver5}),p=I?{required:i,disabled:m,"aria-invalid":!!d,"aria-describedby":null==V?void 0:V.describedBy,id:(null==V?void 0:V.inputId)||N}:{};return React9.createElement(Box7,__spreadProps(__spreadValues(__spreadValues(__spreadValues({},n("wrapper")),g),c),{mod:{error:!!d&&R,pointer:S,disabled:m,multiline:h,"data-with-right-section":!!y,"data-with-left-section":!!_},variant:P,size:u}),_&&React9.createElement("div",__spreadValues(__spreadProps(__spreadValues({},v),{"data-position":"left"}),n("section",{className:null==v?void 0:v.className,style:null==v?void 0:v.style})),_),React9.createElement(Box7,__spreadValues(__spreadProps(__spreadValues(__spreadValues({component:"input"},w),p),{ref:r,required:i,mod:{disabled:m,error:!!d&&R},variant:P}),n("input"))),y&&React9.createElement("div",__spreadValues(__spreadProps(__spreadValues({},f),{"data-position":"right"}),n("section",{className:null==f?void 0:f.className,style:null==f?void 0:f.style})),y))});Input.Wrapper=InputWrapper,Input.Label=InputLabel,Input.Error=InputError,Input.Description=InputDescription,Input.Placeholder=InputPlaceholder,Input.displayName="@raikou/core/Input";import{extractStyleProps as extractStyleProps2,useProps as useProps8}from"@raikou/core";function useInputProps(e,r,t){var e=useProps8(e,r,t),{label:r,description:t,error:s,required:a,classNames:o,styles:l,className:i,unstyled:n,__staticSelector:p,__stylesApiProps:u,errorProps:c,labelProps:d,descriptionProps:m,wrapperProps:_,id:v,size:y,style:f,inputContainer:P,inputWrapperOrder:b,withAsterisk:S,variant:h}=e,N=__objRest(e,["label","description","error","required","classNames","styles","className","unstyled","__staticSelector","__stylesApiProps","errorProps","labelProps","descriptionProps","wrapperProps","id","size","style","inputContainer","inputWrapperOrder","withAsterisk","variant","vars"]),{styleProps:N,rest:I}=extractStyleProps2(N),r=__spreadValues({label:r,description:t,error:s,required:a,classNames:o,className:i,__staticSelector:p,__stylesApiProps:u||e,errorProps:c,labelProps:d,descriptionProps:m,unstyled:n,styles:l,size:y,style:f,inputContainer:P,inputWrapperOrder:b,withAsterisk:S,variant:h,id:v},_);return __spreadProps(__spreadValues({},I),{classNames:o,styles:l,unstyled:n,wrapperProps:__spreadValues(__spreadValues({},r),N),inputProps:{required:a,classNames:o,styles:l,unstyled:n,size:y,__staticSelector:p,__stylesApiProps:u||e,error:s,variant:h}})}var defaultProps8={__staticSelector:"InputBase",withAria:!0},InputBase=polymorphicFactory3((e,r)=>{var e=useInputProps("InputBase",defaultProps8,e),{inputProps:t,wrapperProps:s}=e,e=__objRest(e,["inputProps","wrapperProps"]);return React10.createElement(Input.Wrapper,__spreadValues({},s),React10.createElement(Input,__spreadProps(__spreadValues(__spreadValues({},t),e),{ref:r})))});InputBase.displayName="@raikou/core/InputBase";import React11 from"react";function NumberInputChevron(e){var{direction:r,style:t}=e,e=__objRest(e,["direction","style"]);return React11.createElement("svg",__spreadValues({style:__spreadValues({width:"var(--ni-chevron-size)",height:"var(--ni-chevron-size)",transform:"up"===r?"rotate(180deg)":void 0},t),viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),React11.createElement("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}var NumberInput_module_default={root:"m-e2f5cd4e",controls:"m-95e17d22",control:"m-80b4b171"};function isValidNumber(e){return"number"==typeof e&&!Number.isNaN(e)}function getDecrementedValue({value:e,min:r,step:t=1,allowNegative:s}){t=e-t;return void 0!==r&&t<r?r:!s&&t<0&&void 0===r?e:t}function isInRange(e,r,t){return void 0===e||(void 0===r||r<=e)&&(void 0===t||e<=t)}var defaultProps9={step:1,clampBehavior:"blur",allowDecimal:!0,allowNegative:!0,startValue:0},varsResolver6=createVarsResolver6((e,{size:r})=>({controls:{"--ni-chevron-size":getSize2(r,"ni-chevron-size")}})),NumberInput=factory6((e,r)=>{e=useProps9("NumberInput",defaultProps9,e);const t=e,{className:s,classNames:a,styles:o,unstyled:l,vars:i,onChange:n,onValueChange:p,value:u,defaultValue:c,max:d,min:m,step:_,hideControls:v,rightSection:y,isAllowed:f,clampBehavior:P,onBlur:b,allowDecimal:S,decimalScale:h,onKeyDown:N,handlersRef:I,startValue:R,disabled:g,rightSectionPointerEvents:w,allowNegative:V,readOnly:z,size:E,rightSectionWidth:x}=t,W=__objRest(t,["className","classNames","styles","unstyled","vars","onChange","onValueChange","value","defaultValue","max","min","step","hideControls","rightSection","isAllowed","clampBehavior","onBlur","allowDecimal","decimalScale","onKeyDown","handlersRef","startValue","disabled","rightSectionPointerEvents","allowNegative","readOnly","size","rightSectionWidth"]);var B=useStyles8({name:"NumberInput",classes:NumberInput_module_default,props:e,classNames:a,styles:o,unstyled:l,vars:i,varsResolver:varsResolver6}),{resolvedClassNames:e,resolvedStyles:F}=useResolvedStylesApi({classNames:a,styles:o,props:e});const[C,k]=useUncontrolled({value:u,defaultValue:c,onChange:n});const D=()=>{"number"!=typeof C||Number.isNaN(C)?k(clamp(R,m,d)):void 0!==d?k(C+_<=d?C+_:d):k(C+_)},O=()=>{"number"!=typeof C||Number.isNaN(C)?k(null!=d?d:clamp(R,m,d)):k(getDecrementedValue({value:C,min:m,step:_,allowNegative:V}))};assignRef(I,{increment:D,decrement:O});B=React12.createElement("div",__spreadValues({},B("controls")),React12.createElement(UnstyledButton,__spreadProps(__spreadValues({},B("control")),{tabIndex:-1,"aria-hidden":!0,disabled:g||"number"==typeof C&&void 0!==d&&C>=d,mod:{direction:"up"},onMouseDown:e=>e.preventDefault(),onPointerDown:D}),React12.createElement(NumberInputChevron,{direction:"up"})),React12.createElement(UnstyledButton,__spreadProps(__spreadValues({},B("control")),{tabIndex:-1,"aria-hidden":!0,disabled:g||"number"==typeof C&&void 0!==m&&C<=m,mod:{direction:"down"},onMouseDown:e=>e.preventDefault(),onPointerDown:O}),React12.createElement(NumberInputChevron,{direction:"down"})));return React12.createElement(InputBase,__spreadProps(__spreadValues({component:NumericFormat,allowNegative:V,className:cx(NumberInput_module_default.root,s),size:E},W),{readOnly:z,disabled:g,value:C,getInputRef:r,onValueChange:(e,r)=>{k("number"==typeof C&&isValidNumber(e.floatValue)?e.floatValue:e.value),null!=p&&p(e,r)},rightSection:v||z?y:y||B,classNames:e,styles:F,unstyled:l,__staticSelector:"NumberInput",decimalScale:S?h:0,onKeyDown:e=>{null!=N&&N(e),z||("ArrowUp"===e.key&&(e.preventDefault(),D()),"ArrowDown"===e.key&&(e.preventDefault(),O()))},rightSectionPointerEvents:(null!=w?w:g)?"none":void 0,rightSectionWidth:null!=x?x:`var(--ni-right-section-width-${E||"sm"})`,onBlur:e=>{null!=b&&b(e),"blur"===P&&"number"==typeof C&&k(clamp(C,m,d))},isAllowed:e=>"strict"===P?(!f||f(e))&&isInRange(e.floatValue,m,d):!f||f(e)}))});NumberInput.displayName="@raikou/core/NumberInput";export{NumberInput};