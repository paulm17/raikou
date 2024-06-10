"use strict";var __create=Object.create,__defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropNames=Object.getOwnPropertyNames,__getOwnPropSymbols=Object.getOwnPropertySymbols,__getProtoOf=Object.getPrototypeOf,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__pow=Math.pow,__defNormalProp=(obj,key,value)=>key in obj?__defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value:value}):obj[key]=value,__spreadValues=(a,b)=>{for(var prop in b||(b={}))__hasOwnProp.call(b,prop)&&__defNormalProp(a,prop,b[prop]);if(__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(b))__propIsEnum.call(b,prop)&&__defNormalProp(a,prop,b[prop]);return a},__spreadProps=(a,b)=>__defProps(a,__getOwnPropDescs(b)),__objRest=(source,exclude)=>{var target={};for(var prop in source)__hasOwnProp.call(source,prop)&&exclude.indexOf(prop)<0&&(target[prop]=source[prop]);if(null!=source&&__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(source))exclude.indexOf(prop)<0&&__propIsEnum.call(source,prop)&&(target[prop]=source[prop]);return target},__export=(target,all)=>{for(var name in all)__defProp(target,name,{get:all[name],enumerable:!0})},__copyProps=(to,from,except,desc)=>{if(from&&"object"==typeof from||"function"==typeof from)for(let key of __getOwnPropNames(from))__hasOwnProp.call(to,key)||key===except||__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to},__toESM=(mod,isNodeMode,target)=>(target=null!=mod?__create(__getProtoOf(mod)):{},__copyProps(!isNodeMode&&mod&&mod.__esModule?target:__defProp(target,"default",{value:mod,enumerable:!0}),mod)),__toCommonJS=mod=>__copyProps(__defProp({},"__esModule",{value:!0}),mod),src_exports={};__export(src_exports,{NumberInput:()=>NumberInput}),module.exports=__toCommonJS(src_exports);var import_react14=__toESM(require("react")),import_clsx=__toESM(require("clsx")),import_react_number_format=require("react-number-format"),import_hooks2=require("@raikou/hooks"),import_core10=require("@raikou/core"),import_react=__toESM(require("react")),import_core=require("@raikou/core"),UnstyledButton_module_default={root:"m-87cf2631"},defaultProps={__staticSelector:"UnstyledButton"},UnstyledButton=(0,import_core.polymorphicFactory)(((_props,ref)=>{const props=(0,import_core.useProps)("UnstyledButton",defaultProps,_props),_a=props,{className:className,component:component="button",__staticSelector:__staticSelector,unstyled:unstyled,classNames:classNames,styles:styles,style:style}=_a,others=__objRest(_a,["className","component","__staticSelector","unstyled","classNames","styles","style"]),getStyles=(0,import_core.useStyles)({name:__staticSelector,props:props,classes:UnstyledButton_module_default,className:className,style:style,classNames:classNames,styles:styles,unstyled:unstyled});return import_react.default.createElement(import_core.Box,__spreadValues(__spreadProps(__spreadValues({},getStyles("root",{focusable:!0})),{component:component,ref:ref,type:"button"===component?"button":void 0}),others))}));UnstyledButton.displayName="@raikou/core/UnstyledButton",UnstyledButton.classes=UnstyledButton_module_default;var import_react12=__toESM(require("react")),import_core9=require("@raikou/core"),import_react11=__toESM(require("react")),import_core7=require("@raikou/core"),import_react2=__toESM(require("react")),import_react3=__toESM(require("react"));function createOptionalContext(initialValue=null){const Context=(0,import_react3.createContext)(initialValue);return[({children:children,value:value})=>import_react3.default.createElement(Context.Provider,{value:value},children),()=>(0,import_react3.useContext)(Context)]}var import_react4=require("react"),import_react5=require("react"),[InputWrapperProvider,useInputWrapperContext]=createOptionalContext({offsetBottom:!1,offsetTop:!1,describedBy:void 0,getStyles:null,inputId:void 0,labelId:void 0}),import_react6=__toESM(require("react")),import_core2=require("@raikou/core"),Input_module_default={wrapper:"m-6c018570",input:"m-8fb7ebe7",section:"m-82577fc2",placeholder:"m-88bacfd0",root:"m-46b77525",label:"m-8fdc1311",required:"m-78a94662",error:"m-8f816625",description:"m-fe47ce59"},defaultProps2={labelElement:"label"},varsResolver=(0,import_core2.createVarsResolver)(((_,{size:size})=>({label:{"--input-label-size":(0,import_core2.getFontSize)(size),"--input-asterisk-color":void 0}}))),InputLabel=(0,import_core2.factory)(((_props,ref)=>{const props=(0,import_core2.useProps)("InputLabel",defaultProps2,_props),_a=(0,import_core2.useProps)("InputLabel",defaultProps2,props),{classNames:classNames,className:className,style:style,styles:styles,unstyled:unstyled,vars:vars,labelElement:labelElement,size:size,required:required,htmlFor:htmlFor,onMouseDown:onMouseDown,children:children,__staticSelector:__staticSelector,variant:variant,mod:mod}=_a,others=__objRest(_a,["classNames","className","style","styles","unstyled","vars","labelElement","size","required","htmlFor","onMouseDown","children","__staticSelector","variant","mod"]),_getStyles=(0,import_core2.useStyles)({name:["InputWrapper",__staticSelector],props:props,classes:Input_module_default,className:className,style:style,classNames:classNames,styles:styles,unstyled:unstyled,rootSelector:"label",vars:vars,varsResolver:varsResolver}),ctx=useInputWrapperContext(),getStyles=(null==ctx?void 0:ctx.getStyles)||_getStyles;return import_react6.default.createElement(import_core2.Box,__spreadValues(__spreadProps(__spreadValues({},getStyles("label")),{component:labelElement,variant:variant,size:size,ref:ref,htmlFor:"label"===labelElement?htmlFor:void 0,mod:[{required:required},mod],onMouseDown:event=>{null==onMouseDown||onMouseDown(event),!event.defaultPrevented&&event.detail>1&&event.preventDefault()}}),others),children,required&&import_react6.default.createElement("span",__spreadProps(__spreadValues({},getStyles("required")),{"aria-hidden":!0})," *"))}));InputLabel.displayName="@raikou/core/InputLabel";var import_react7=__toESM(require("react")),import_core3=require("@raikou/core"),defaultProps3={},varsResolver2=(0,import_core3.createVarsResolver)(((_,{size:size})=>({error:{"--input-error-size":void 0===size?void 0:`calc(${(0,import_core3.getFontSize)(size)} - ${(0,import_core3.rem)(2)})`}}))),InputError=(0,import_core3.factory)(((_props,ref)=>{const props=(0,import_core3.useProps)("InputError",defaultProps3,_props),_a=props,{classNames:classNames,className:className,style:style,styles:styles,unstyled:unstyled,vars:vars,size:size,__staticSelector:__staticSelector,__inheritStyles:__inheritStyles=!0,variant:variant}=_a,others=__objRest(_a,["classNames","className","style","styles","unstyled","vars","size","__staticSelector","__inheritStyles","variant"]),_getStyles=(0,import_core3.useStyles)({name:["InputWrapper",__staticSelector],props:props,classes:Input_module_default,className:className,style:style,classNames:classNames,styles:styles,unstyled:unstyled,rootSelector:"error",vars:vars,varsResolver:varsResolver2}),ctx=useInputWrapperContext(),getStyles=__inheritStyles&&(null==ctx?void 0:ctx.getStyles)||_getStyles;return import_react7.default.createElement(import_core3.Box,__spreadValues(__spreadValues({component:"p",ref:ref,variant:variant,size:size},getStyles("error")),others))}));InputError.displayName="@raikou/core/InputError";var import_react8=__toESM(require("react")),import_core4=require("@raikou/core"),defaultProps4={},varsResolver3=(0,import_core4.createVarsResolver)(((_,{size:size})=>({description:{"--input-description-size":void 0===size?void 0:`calc(${(0,import_core4.getFontSize)(size)} - ${(0,import_core4.rem)(2)})`}}))),InputDescription=(0,import_core4.factory)(((_props,ref)=>{const props=(0,import_core4.useProps)("InputDescription",defaultProps4,_props),_a=(0,import_core4.useProps)("InputDescription",defaultProps4,props),{classNames:classNames,className:className,style:style,styles:styles,unstyled:unstyled,vars:vars,size:size,__staticSelector:__staticSelector,__inheritStyles:__inheritStyles=!0,variant:variant}=_a,others=__objRest(_a,["classNames","className","style","styles","unstyled","vars","size","__staticSelector","__inheritStyles","variant"]),ctx=useInputWrapperContext(),_getStyles=(0,import_core4.useStyles)({name:["InputWrapper",__staticSelector],props:props,classes:Input_module_default,className:className,style:style,classNames:classNames,styles:styles,unstyled:unstyled,rootSelector:"description",vars:vars,varsResolver:varsResolver3}),getStyles=__inheritStyles&&(null==ctx?void 0:ctx.getStyles)||_getStyles;return import_react8.default.createElement(import_core4.Box,__spreadValues(__spreadValues({component:"p",ref:ref,variant:variant,size:size},getStyles("description")),others))}));InputDescription.displayName="@raikou/core/InputDescription";var import_react9=__toESM(require("react")),import_core5=require("@raikou/core"),defaultProps5={},InputPlaceholder=(0,import_core5.factory)(((_props,ref)=>{const props=(0,import_core5.useProps)("InputPlaceholder",defaultProps5,_props),_a=(0,import_core5.useProps)("InputPlaceholder",defaultProps5,props),{classNames:classNames,className:className,style:style,styles:styles,unstyled:unstyled,vars:vars,__staticSelector:__staticSelector,variant:variant,error:error,mod:mod}=_a,others=__objRest(_a,["classNames","className","style","styles","unstyled","vars","__staticSelector","variant","error","mod"]),getStyles=(0,import_core5.useStyles)({name:["InputPlaceholder",__staticSelector],props:props,classes:Input_module_default,className:className,style:style,classNames:classNames,styles:styles,unstyled:unstyled,rootSelector:"placeholder"});return import_react9.default.createElement(import_core5.Box,__spreadValues(__spreadProps(__spreadValues({},getStyles("placeholder")),{mod:[{error:!!error},mod],component:"span",variant:variant,ref:ref}),others))}));InputPlaceholder.displayName="@raikou/core/InputPlaceholder";var import_react10=__toESM(require("react")),import_hooks=require("@raikou/hooks"),import_core6=require("@raikou/core");function getInputOffsets(inputWrapperOrder,{hasDescription:hasDescription,hasError:hasError}){const inputIndex=inputWrapperOrder.findIndex((part=>"input"===part)),aboveInput=inputWrapperOrder[inputIndex-1],belowInput=inputWrapperOrder[inputIndex+1];return{offsetBottom:hasDescription&&"description"===belowInput||hasError&&"error"===belowInput,offsetTop:hasDescription&&"description"===aboveInput||hasError&&"error"===aboveInput}}var defaultProps6={labelElement:"label",inputContainer:children=>children,inputWrapperOrder:["label","description","input","error"]},varsResolver4=(0,import_core6.createVarsResolver)(((_,{size:size})=>({label:{"--input-label-size":(0,import_core6.getFontSize)(size),"--input-asterisk-color":void 0},error:{"--input-error-size":void 0===size?void 0:`calc(${(0,import_core6.getFontSize)(size)} - ${(0,import_core6.rem)(2)})`},description:{"--input-description-size":void 0===size?void 0:`calc(${(0,import_core6.getFontSize)(size)} - ${(0,import_core6.rem)(2)})`}}))),InputWrapper=(0,import_core6.factory)(((_props,ref)=>{const props=(0,import_core6.useProps)("InputWrapper",defaultProps6,_props),_a=props,{classNames:classNames,className:className,style:style,styles:styles,unstyled:unstyled,vars:vars,size:size,variant:variant,__staticSelector:__staticSelector,inputContainer:inputContainer,inputWrapperOrder:inputWrapperOrder,label:label,error:error,description:description,labelProps:labelProps,descriptionProps:descriptionProps,errorProps:errorProps,labelElement:labelElement,children:children,withAsterisk:withAsterisk,id:id,required:required,__stylesApiProps:__stylesApiProps,mod:mod}=_a,others=__objRest(_a,["classNames","className","style","styles","unstyled","vars","size","variant","__staticSelector","inputContainer","inputWrapperOrder","label","error","description","labelProps","descriptionProps","errorProps","labelElement","children","withAsterisk","id","required","__stylesApiProps","mod"]),getStyles=(0,import_core6.useStyles)({name:["InputWrapper",__staticSelector],props:__stylesApiProps||props,classes:Input_module_default,className:className,style:style,classNames:classNames,styles:styles,unstyled:unstyled,vars:vars,varsResolver:varsResolver4}),sharedProps={size:size,variant:variant,__staticSelector:__staticSelector},idBase=(0,import_hooks.useId)(id),isRequired="boolean"==typeof withAsterisk?withAsterisk:required,errorId=(null==errorProps?void 0:errorProps.id)||`${idBase}-error`,descriptionId=(null==descriptionProps?void 0:descriptionProps.id)||`${idBase}-description`,inputId=idBase,hasError=!!error&&"boolean"!=typeof error,hasDescription=!!description,_describedBy=`${hasError?errorId:""} ${hasDescription?descriptionId:""}`,describedBy=_describedBy.trim().length>0?_describedBy.trim():void 0,labelId=(null==labelProps?void 0:labelProps.id)||`${idBase}-label`,_label=label&&import_react10.default.createElement(InputLabel,__spreadValues(__spreadValues({key:"label",labelElement:labelElement,id:labelId,htmlFor:inputId,required:isRequired},sharedProps),labelProps),label),_description=hasDescription&&import_react10.default.createElement(InputDescription,__spreadProps(__spreadValues(__spreadValues({key:"description"},descriptionProps),sharedProps),{size:(null==descriptionProps?void 0:descriptionProps.size)||sharedProps.size,id:(null==descriptionProps?void 0:descriptionProps.id)||descriptionId}),description),_input=import_react10.default.createElement(import_react10.default.Fragment,{key:"input"},inputContainer(children)),_error=hasError&&import_react10.default.createElement(InputError,__spreadProps(__spreadValues(__spreadValues({},errorProps),sharedProps),{size:(null==errorProps?void 0:errorProps.size)||sharedProps.size,key:"error",id:(null==errorProps?void 0:errorProps.id)||errorId}),error),content=inputWrapperOrder.map((part=>{switch(part){case"label":return _label;case"input":return _input;case"description":return _description;case"error":return _error;default:return null}}));return import_react10.default.createElement(InputWrapperProvider,{value:__spreadValues({getStyles:getStyles,describedBy:describedBy,inputId:inputId,labelId:labelId},getInputOffsets(inputWrapperOrder,{hasDescription:hasDescription,hasError:hasError}))},import_react10.default.createElement(import_core6.Box,__spreadValues(__spreadValues({ref:ref,variant:variant,size:size,mod:[{error:!!error},mod]},getStyles("root")),others),content))}));InputWrapper.displayName="@raikou/core/InputWrapper";var Input_module_default2={wrapper:"m-6c018570",input:"m-8fb7ebe7",section:"m-82577fc2",placeholder:"m-88bacfd0",root:"m-46b77525",label:"m-8fdc1311",required:"m-78a94662",error:"m-8f816625",description:"m-fe47ce59"},defaultProps7={variant:"default",leftSectionPointerEvents:"none",rightSectionPointerEvents:"none",withAria:!0,withErrorStyles:!0},varsResolver5=(0,import_core7.createVarsResolver)(((_,props,ctx)=>({wrapper:{"--input-margin-top":ctx.offsetTop?"calc(var(--raikou-spacing-xs) / 2)":void 0,"--input-margin-bottom":ctx.offsetBottom?"calc(var(--raikou-spacing-xs) / 2)":void 0,"--input-height":(0,import_core7.getSize)(props.size,"input-height"),"--input-fz":(0,import_core7.getFontSize)(props.size),"--input-radius":void 0===props.radius?void 0:(0,import_core7.getRadius)(props.radius),"--input-left-section-width":void 0!==props.leftSectionWidth?(0,import_core7.rem)(props.leftSectionWidth):void 0,"--input-right-section-width":void 0!==props.rightSectionWidth?(0,import_core7.rem)(props.rightSectionWidth):void 0,"--input-padding-y":props.multiline?(0,import_core7.getSize)(props.size,"input-padding-y"):void 0,"--input-left-section-pointer-events":props.leftSectionPointerEvents,"--input-right-section-pointer-events":props.rightSectionPointerEvents}}))),Input=(0,import_core7.polymorphicFactory)(((_props,ref)=>{const props=(0,import_core7.useProps)("Input",defaultProps7,_props),_a=props,{classNames:classNames,className:className,style:style,styles:styles,unstyled:unstyled,required:required,__staticSelector:__staticSelector,__stylesApiProps:__stylesApiProps,size:size,wrapperProps:wrapperProps,error:error,disabled:disabled,leftSection:leftSection,leftSectionProps:leftSectionProps,leftSectionWidth:leftSectionWidth,rightSection:rightSection,rightSectionProps:rightSectionProps,rightSectionWidth:rightSectionWidth,rightSectionPointerEvents:rightSectionPointerEvents,leftSectionPointerEvents:leftSectionPointerEvents,variant:variant,vars:vars,pointer:pointer,multiline:multiline,radius:radius,id:id,withAria:withAria,withErrorStyles:withErrorStyles,mod:mod,inputSize:inputSize}=_a,others=__objRest(_a,["classNames","className","style","styles","unstyled","required","__staticSelector","__stylesApiProps","size","wrapperProps","error","disabled","leftSection","leftSectionProps","leftSectionWidth","rightSection","rightSectionProps","rightSectionWidth","rightSectionPointerEvents","leftSectionPointerEvents","variant","vars","pointer","multiline","radius","id","withAria","withErrorStyles","mod","inputSize"]),{styleProps:styleProps,rest:rest}=(0,import_core7.extractStyleProps)(others),ctx=useInputWrapperContext(),stylesCtx={offsetBottom:null==ctx?void 0:ctx.offsetBottom,offsetTop:null==ctx?void 0:ctx.offsetTop},getStyles=(0,import_core7.useStyles)({name:["Input",__staticSelector],props:__stylesApiProps||props,classes:Input_module_default2,className:className,style:style,classNames:classNames,styles:styles,unstyled:unstyled,stylesCtx:stylesCtx,rootSelector:"wrapper",vars:vars,varsResolver:varsResolver5}),ariaAttributes=withAria?{required:required,disabled:disabled,"aria-invalid":!!error,"aria-describedby":null==ctx?void 0:ctx.describedBy,id:(null==ctx?void 0:ctx.inputId)||id}:{};return import_react11.default.createElement(import_core7.Box,__spreadProps(__spreadValues(__spreadValues(__spreadValues({},getStyles("wrapper")),styleProps),wrapperProps),{mod:[{error:!!error&&withErrorStyles,pointer:pointer,disabled:disabled,multiline:multiline,"data-with-right-section":!!rightSection,"data-with-left-section":!!leftSection},mod],variant:variant,size:size}),leftSection&&import_react11.default.createElement("div",__spreadValues(__spreadProps(__spreadValues({},leftSectionProps),{"data-position":"left"}),getStyles("section",{className:null==leftSectionProps?void 0:leftSectionProps.className,style:null==leftSectionProps?void 0:leftSectionProps.style})),leftSection),import_react11.default.createElement(import_core7.Box,__spreadValues(__spreadProps(__spreadValues(__spreadValues({component:"input"},rest),ariaAttributes),{ref:ref,required:required,mod:{disabled:disabled,error:!!error&&withErrorStyles},variant:variant,__size:inputSize}),getStyles("input"))),rightSection&&import_react11.default.createElement("div",__spreadValues(__spreadProps(__spreadValues({},rightSectionProps),{"data-position":"right"}),getStyles("section",{className:null==rightSectionProps?void 0:rightSectionProps.className,style:null==rightSectionProps?void 0:rightSectionProps.style})),rightSection))}));Input.classes=Input_module_default2,Input.Wrapper=InputWrapper,Input.Label=InputLabel,Input.Error=InputError,Input.Description=InputDescription,Input.Placeholder=InputPlaceholder,Input.displayName="@raikou/core/Input";var import_core8=require("@raikou/core");function useInputProps(component,defaultProps10,_props){const props=(0,import_core8.useProps)(component,defaultProps10,_props),_a=props,{label:label,description:description,error:error,required:required,classNames:classNames,styles:styles,className:className,unstyled:unstyled,__staticSelector:__staticSelector,__stylesApiProps:__stylesApiProps,errorProps:errorProps,labelProps:labelProps,descriptionProps:descriptionProps,wrapperProps:_wrapperProps,id:id,size:size,style:style,inputContainer:inputContainer,inputWrapperOrder:inputWrapperOrder,withAsterisk:withAsterisk,variant:variant,vars:vars}=_a,others=__objRest(_a,["label","description","error","required","classNames","styles","className","unstyled","__staticSelector","__stylesApiProps","errorProps","labelProps","descriptionProps","wrapperProps","id","size","style","inputContainer","inputWrapperOrder","withAsterisk","variant","vars"]),{styleProps:styleProps,rest:rest}=(0,import_core8.extractStyleProps)(others),wrapperProps=__spreadValues({label:label,description:description,error:error,required:required,classNames:classNames,className:className,__staticSelector:__staticSelector,__stylesApiProps:__stylesApiProps||props,errorProps:errorProps,labelProps:labelProps,descriptionProps:descriptionProps,unstyled:unstyled,styles:styles,size:size,style:style,inputContainer:inputContainer,inputWrapperOrder:inputWrapperOrder,withAsterisk:withAsterisk,variant:variant,id:id},_wrapperProps);return __spreadProps(__spreadValues({},rest),{classNames:classNames,styles:styles,unstyled:unstyled,wrapperProps:__spreadValues(__spreadValues({},wrapperProps),styleProps),inputProps:{required:required,classNames:classNames,styles:styles,unstyled:unstyled,size:size,__staticSelector:__staticSelector,__stylesApiProps:__stylesApiProps||props,error:error,variant:variant}})}var defaultProps8={__staticSelector:"InputBase",withAria:!0},InputBase=(0,import_core9.polymorphicFactory)(((props,ref)=>{const _a=useInputProps("InputBase",defaultProps8,props),{inputProps:inputProps,wrapperProps:wrapperProps}=_a,others=__objRest(_a,["inputProps","wrapperProps"]);return import_react12.default.createElement(Input.Wrapper,__spreadValues({},wrapperProps),import_react12.default.createElement(Input,__spreadProps(__spreadValues(__spreadValues({},inputProps),others),{ref:ref})))}));InputBase.displayName="@raikou/core/InputBase";var import_react13=__toESM(require("react"));function NumberInputChevron(_a){var _b=_a,{direction:direction,style:style}=_b,others=__objRest(_b,["direction","style"]);return import_react13.default.createElement("svg",__spreadValues({style:__spreadValues({width:"var(--ni-chevron-size)",height:"var(--ni-chevron-size)",transform:"up"===direction?"rotate(180deg)":void 0},style),viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},others),import_react13.default.createElement("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}var NumberInput_module_default={root:"m-e2f5cd4e",controls:"m-95e17d22",control:"m-80b4b171"},leadingDecimalZeroPattern=/^(0\.0*|-0(\.0*)?)$/,leadingZerosPattern=/^-?0\d+(\.\d+)?\.?$/;function isValidNumber(value){return("number"==typeof value?value<Number.MAX_SAFE_INTEGER:!Number.isNaN(Number(value)))&&!Number.isNaN(value)}function isInRange(value,min,max){if(void 0===value)return!0;return(void 0===min||value>=min)&&(void 0===max||value<=max)}var defaultProps9={step:1,clampBehavior:"blur",allowDecimal:!0,allowNegative:!0,withKeyboardEvents:!0,allowLeadingZeros:!0,trimLeadingZeroesOnBlur:!0,startValue:0},varsResolver6=(0,import_core10.createVarsResolver)(((_,{size:size})=>({controls:{"--ni-chevron-size":(0,import_core10.getSize)(size,"ni-chevron-size")}}))),NumberInput=(0,import_core10.factory)(((_props,ref)=>{const props=(0,import_core10.useProps)("NumberInput",defaultProps9,_props),_a=props,{className:className,classNames:classNames,styles:styles,unstyled:unstyled,vars:vars,onChange:onChange,onValueChange:onValueChange,value:value,defaultValue:defaultValue,max:max,min:min,step:step,hideControls:hideControls,rightSection:rightSection,isAllowed:isAllowed,clampBehavior:clampBehavior,onBlur:onBlur,allowDecimal:allowDecimal,decimalScale:decimalScale,onKeyDown:onKeyDown,onKeyDownCapture:onKeyDownCapture,handlersRef:handlersRef,startValue:startValue,disabled:disabled,rightSectionPointerEvents:rightSectionPointerEvents,allowNegative:allowNegative,readOnly:readOnly,size:size,rightSectionWidth:rightSectionWidth,stepHoldInterval:stepHoldInterval,stepHoldDelay:stepHoldDelay,allowLeadingZeros:allowLeadingZeros,withKeyboardEvents:withKeyboardEvents,trimLeadingZeroesOnBlur:trimLeadingZeroesOnBlur}=_a,others=__objRest(_a,["className","classNames","styles","unstyled","vars","onChange","onValueChange","value","defaultValue","max","min","step","hideControls","rightSection","isAllowed","clampBehavior","onBlur","allowDecimal","decimalScale","onKeyDown","onKeyDownCapture","handlersRef","startValue","disabled","rightSectionPointerEvents","allowNegative","readOnly","size","rightSectionWidth","stepHoldInterval","stepHoldDelay","allowLeadingZeros","withKeyboardEvents","trimLeadingZeroesOnBlur"]),getStyles=(0,import_core10.useStyles)({name:"NumberInput",classes:NumberInput_module_default,props:props,classNames:classNames,styles:styles,unstyled:unstyled,vars:vars,varsResolver:varsResolver6}),{resolvedClassNames:resolvedClassNames,resolvedStyles:resolvedStyles}=(0,import_core10.useResolvedStylesApi)({classNames:classNames,styles:styles,props:props}),[_value,setValue]=(0,import_hooks2.useUncontrolled)({value:value,defaultValue:defaultValue,onChange:onChange}),shouldUseStepInterval=void 0!==stepHoldDelay&&void 0!==stepHoldInterval,inputRef=(0,import_react14.useRef)(null),onStepTimeoutRef=(0,import_react14.useRef)(null),stepCountRef=(0,import_react14.useRef)(0),getDecimalPlaces=inputValue=>{const match=String(inputValue).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return match?Math.max(0,(match[1]?match[1].length:0)-(match[2]?+match[2]:0)):0},adjustCursor=position=>{inputRef.current&&void 0!==position&&inputRef.current.setSelectionRange(position,position)},incrementRef=(0,import_react14.useRef)();incrementRef.current=()=>{let val;const currentValuePrecision=getDecimalPlaces(_value),stepPrecision=getDecimalPlaces(step),maxPrecision=Math.max(currentValuePrecision,stepPrecision),factor=__pow(10,maxPrecision);if("number"!=typeof _value||Number.isNaN(_value))val=(0,import_hooks2.clamp)(startValue,min,max);else if(void 0!==max){const incrementedValue=(Math.round(_value*factor)+Math.round(step*factor))/factor;val=incrementedValue<=max?incrementedValue:max}else val=(Math.round(_value*factor)+Math.round(step*factor))/factor;const formattedValue=val.toFixed(maxPrecision);setValue(parseFloat(formattedValue)),null==onValueChange||onValueChange({floatValue:parseFloat(formattedValue),formattedValue:formattedValue,value:formattedValue},{source:"increment"}),setTimeout((()=>{var _a2;return adjustCursor(null==(_a2=inputRef.current)?void 0:_a2.value.length)}),0)};const decrementRef=(0,import_react14.useRef)();decrementRef.current=()=>{let val;const minValue=void 0!==min?min:allowNegative?Number.MIN_SAFE_INTEGER:0,currentValuePrecision=getDecimalPlaces(_value),stepPrecision=getDecimalPlaces(step),maxPrecision=Math.max(currentValuePrecision,stepPrecision),factor=__pow(10,maxPrecision);if("number"!=typeof _value||Number.isNaN(_value))val=(0,import_hooks2.clamp)(startValue,minValue,max);else{const decrementedValue=(Math.round(_value*factor)-Math.round(step*factor))/factor;val=void 0!==minValue&&decrementedValue<minValue?minValue:decrementedValue}const formattedValue=val.toFixed(maxPrecision);setValue(parseFloat(formattedValue)),null==onValueChange||onValueChange({floatValue:parseFloat(formattedValue),formattedValue:formattedValue,value:formattedValue},{source:"decrement"}),setTimeout((()=>{var _a2;return adjustCursor(null==(_a2=inputRef.current)?void 0:_a2.value.length)}),0)};(0,import_hooks2.assignRef)(handlersRef,{increment:incrementRef.current,decrement:decrementRef.current});const onStepHandleChange=isIncrement=>{isIncrement?incrementRef.current():decrementRef.current(),stepCountRef.current+=1},onStepLoop=isIncrement=>{if(onStepHandleChange(isIncrement),shouldUseStepInterval){const interval="number"==typeof stepHoldInterval?stepHoldInterval:stepHoldInterval(stepCountRef.current);onStepTimeoutRef.current=window.setTimeout((()=>onStepLoop(isIncrement)),interval)}},onStep=(event,isIncrement)=>{var _a2;event.preventDefault(),null==(_a2=inputRef.current)||_a2.focus(),onStepHandleChange(isIncrement),shouldUseStepInterval&&(onStepTimeoutRef.current=window.setTimeout((()=>onStepLoop(isIncrement)),stepHoldDelay))},onStepDone=()=>{onStepTimeoutRef.current&&window.clearTimeout(onStepTimeoutRef.current),onStepTimeoutRef.current=null,stepCountRef.current=0},controls=import_react14.default.createElement("div",__spreadValues({},getStyles("controls")),import_react14.default.createElement(UnstyledButton,__spreadProps(__spreadValues({},getStyles("control")),{tabIndex:-1,"aria-hidden":!0,disabled:disabled||"number"==typeof _value&&void 0!==max&&_value>=max,mod:{direction:"up"},onMouseDown:event=>event.preventDefault(),onPointerDown:event=>{onStep(event,!0)},onPointerUp:onStepDone,onPointerLeave:onStepDone}),import_react14.default.createElement(NumberInputChevron,{direction:"up"})),import_react14.default.createElement(UnstyledButton,__spreadProps(__spreadValues({},getStyles("control")),{tabIndex:-1,"aria-hidden":!0,disabled:disabled||"number"==typeof _value&&void 0!==min&&_value<=min,mod:{direction:"down"},onMouseDown:event=>event.preventDefault(),onPointerDown:event=>{onStep(event,!1)},onPointerUp:onStepDone,onPointerLeave:onStepDone}),import_react14.default.createElement(NumberInputChevron,{direction:"down"})));return import_react14.default.createElement(InputBase,__spreadProps(__spreadValues({component:import_react_number_format.NumericFormat,allowNegative:allowNegative,className:(0,import_clsx.default)(NumberInput_module_default.root,className),size:size},others),{readOnly:readOnly,disabled:disabled,value:_value,getInputRef:(0,import_hooks2.useMergedRef)(ref,inputRef),onValueChange:(payload,event)=>{"event"===event.source&&setValue(!isValidNumber(payload.floatValue)||leadingDecimalZeroPattern.test(payload.value)||allowLeadingZeros&&leadingZerosPattern.test(payload.value)?payload.value:payload.floatValue),null==onValueChange||onValueChange(payload,event)},rightSection:hideControls||readOnly?rightSection:rightSection||controls,classNames:resolvedClassNames,styles:resolvedStyles,unstyled:unstyled,__staticSelector:"NumberInput",decimalScale:allowDecimal?decimalScale:0,onKeyDown:event=>{null==onKeyDown||onKeyDown(event),!readOnly&&withKeyboardEvents&&("ArrowUp"===event.key&&(event.preventDefault(),incrementRef.current()),"ArrowDown"===event.key&&(event.preventDefault(),decrementRef.current()))},onKeyDownCapture:event=>{if(null==onKeyDownCapture||onKeyDownCapture(event),"Backspace"===event.key){const input=inputRef.current;0===input.selectionStart&&input.selectionStart===input.selectionEnd&&(event.preventDefault(),window.setTimeout((()=>adjustCursor(0)),0))}},rightSectionPointerEvents:null!=rightSectionPointerEvents?rightSectionPointerEvents:disabled?"none":void 0,rightSectionWidth:null!=rightSectionWidth?rightSectionWidth:`var(--ni-right-section-width-${size||"sm"})`,allowLeadingZeros:allowLeadingZeros,onBlur:event=>{if(null==onBlur||onBlur(event),"blur"===clampBehavior&&"number"==typeof _value){(0,import_hooks2.clamp)(_value,min,max)!==_value&&setValue((0,import_hooks2.clamp)(_value,min,max))}if(trimLeadingZeroesOnBlur&&"string"==typeof _value){const replaced=_value.replace(/^0+/,""),parsedValue=parseFloat(replaced);setValue(Number.isNaN(parsedValue)?replaced:parsedValue)}},isAllowed:val=>"strict"===clampBehavior?isAllowed?isAllowed(val)&&isInRange(val.floatValue,min,max):isInRange(val.floatValue,min,max):!isAllowed||isAllowed(val)}))}));NumberInput.displayName="@raikou/core/NumberInput";