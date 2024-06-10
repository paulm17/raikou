"use strict";var __create=Object.create,__defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropNames=Object.getOwnPropertyNames,__getOwnPropSymbols=Object.getOwnPropertySymbols,__getProtoOf=Object.getPrototypeOf,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(obj,key,value)=>key in obj?__defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value:value}):obj[key]=value,__spreadValues=(a,b)=>{for(var prop in b||(b={}))__hasOwnProp.call(b,prop)&&__defNormalProp(a,prop,b[prop]);if(__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(b))__propIsEnum.call(b,prop)&&__defNormalProp(a,prop,b[prop]);return a},__spreadProps=(a,b)=>__defProps(a,__getOwnPropDescs(b)),__objRest=(source,exclude)=>{var target={};for(var prop in source)__hasOwnProp.call(source,prop)&&exclude.indexOf(prop)<0&&(target[prop]=source[prop]);if(null!=source&&__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(source))exclude.indexOf(prop)<0&&__propIsEnum.call(source,prop)&&(target[prop]=source[prop]);return target},__export=(target,all)=>{for(var name in all)__defProp(target,name,{get:all[name],enumerable:!0})},__copyProps=(to,from,except,desc)=>{if(from&&"object"==typeof from||"function"==typeof from)for(let key of __getOwnPropNames(from))__hasOwnProp.call(to,key)||key===except||__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to},__toESM=(mod,isNodeMode,target)=>(target=null!=mod?__create(__getProtoOf(mod)):{},__copyProps(!isNodeMode&&mod&&mod.__esModule?target:__defProp(target,"default",{value:mod,enumerable:!0}),mod)),__toCommonJS=mod=>__copyProps(__defProp({},"__esModule",{value:!0}),mod),src_exports={};__export(src_exports,{CheckIcon:()=>CheckIcon,Checkbox:()=>Checkbox,CheckboxGroup:()=>CheckboxGroup}),module.exports=__toCommonJS(src_exports);var import_react85=__toESM(require("react")),import_react=require("react"),import_react2=require("react"),import_react3=require("react"),import_react4=require("react"),import_react5=require("react"),import_react6=require("react"),import_react7=require("react"),import_react8=require("react"),import_react9=require("react"),import_react10=require("react"),import_react11=require("react"),import_react12=require("react"),import_react13=require("react"),import_react14=require("react"),import_react15=require("react"),import_react16=__toESM(require("react"),1),import_react17=require("react"),import_react18=require("react"),import_react19=require("react"),import_react20=require("react"),import_react21=require("react"),import_react22=require("react"),import_react23=require("react"),import_react24=require("react"),import_react25=require("react"),import_react26=require("react"),import_react27=require("react"),import_react28=require("react"),import_react29=require("react"),import_react30=require("react"),import_react31=require("react"),import_react32=require("react"),import_react33=require("react"),import_react34=require("react"),import_react35=require("react"),import_react36=require("react"),import_react37=require("react"),import_react38=require("react"),import_react39=require("react"),import_react40=require("react"),import_react41=require("react"),import_react42=require("react"),import_react43=require("react"),import_react44=require("react"),import_react45=require("react"),import_react46=require("react"),import_react47=require("react"),import_react48=require("react"),import_react49=require("react"),import_react50=require("react"),import_react51=require("react"),import_react52=require("react"),import_react53=require("react"),import_react54=require("react"),import_react55=require("react"),import_react56=require("react"),import_react57=require("react"),import_react58=require("react"),import_react59=require("react"),import_react60=require("react"),import_react61=require("react"),import_react62=require("react"),import_react63=require("react"),import_react64=require("react"),import_react65=require("react"),import_react66=require("react");function randomId(){return`mantine-${Math.random().toString(36).slice(2,11)}`}var useIsomorphicEffect="undefined"!=typeof document?import_react9.useLayoutEffect:import_react9.useEffect,__useId=import_react16.default["useId".toString()]||(()=>{});function useReactId(){const id=__useId();return id?`mantine-${id.replace(/:/g,"")}`:""}function useId(staticId){const reactId=useReactId(),[uuid,setUuid]=(0,import_react15.useState)(reactId);return useIsomorphicEffect((()=>{setUuid(randomId())}),[]),"string"==typeof staticId?staticId:"undefined"==typeof window?reactId:uuid}function deserializeJSON(value){try{return value&&JSON.parse(value)}catch(e){return value}}function createStorageHandler(type){return{getItem:key=>{try{return window[type].getItem(key)}catch(error){return console.warn("use-local-storage: Failed to get value from storage, localStorage is blocked"),null}},setItem:(key,value)=>{try{window[type].setItem(key,value)}catch(error){console.warn("use-local-storage: Failed to set value to storage, localStorage is blocked")}},removeItem:key=>{try{window[type].removeItem(key)}catch(error){console.warn("use-local-storage: Failed to remove value from storage, localStorage is blocked")}}}}function readValue(type){const{getItem:getItem}=createStorageHandler(type);return function({key:key,defaultValue:defaultValue,deserialize:deserialize=deserializeJSON}){let storageBlockedOrSkipped;try{storageBlockedOrSkipped="undefined"==typeof window||!(type in window)||null===window[type]}catch(_e){storageBlockedOrSkipped=!0}if(storageBlockedOrSkipped)return defaultValue;const storageValue=getItem(key);return null!==storageValue?deserialize(storageValue):defaultValue}}var readLocalStorageValue=readValue("localStorage"),readSessionStorageValue=readValue("sessionStorage");function useUncontrolled({value:value,defaultValue:defaultValue,finalValue:finalValue,onChange:onChange=(()=>{})}){const[uncontrolledValue,setUncontrolledValue]=(0,import_react26.useState)(void 0!==defaultValue?defaultValue:finalValue);return void 0!==value?[value,onChange,!0]:[uncontrolledValue,(val,...payload)=>{setUncontrolledValue(val),null==onChange||onChange(val,...payload)},!1]}var import_core13=require("@raikou/core"),import_react77=__toESM(require("react")),import_core7=require("@raikou/core"),import_react76=__toESM(require("react")),import_core6=require("@raikou/core"),import_react67=__toESM(require("react")),import_react68=__toESM(require("react"));function createOptionalContext(initialValue=null){const Context=(0,import_react68.createContext)(initialValue);return[({children:children,value:value})=>import_react68.default.createElement(Context.Provider,{value:value},children),()=>(0,import_react68.useContext)(Context)]}var import_react69=require("react"),import_react70=require("react"),[InputWrapperProvider,useInputWrapperContext]=createOptionalContext({offsetBottom:!1,offsetTop:!1,describedBy:void 0,getStyles:null,inputId:void 0,labelId:void 0}),import_react71=__toESM(require("react")),import_core=require("@raikou/core"),Input_module_default={wrapper:"m-6c018570",input:"m-8fb7ebe7",section:"m-82577fc2",placeholder:"m-88bacfd0",root:"m-46b77525",label:"m-8fdc1311",required:"m-78a94662",error:"m-8f816625",description:"m-fe47ce59"},defaultProps={labelElement:"label"},varsResolver=(0,import_core.createVarsResolver)(((_,{size:size})=>({label:{"--input-label-size":(0,import_core.getFontSize)(size),"--input-asterisk-color":void 0}}))),InputLabel=(0,import_core.factory)(((_props,ref)=>{const props=(0,import_core.useProps)("InputLabel",defaultProps,_props),_a=(0,import_core.useProps)("InputLabel",defaultProps,props),{classNames:classNames,className:className,style:style,styles:styles,unstyled:unstyled,vars:vars,labelElement:labelElement,size:size,required:required,htmlFor:htmlFor,onMouseDown:onMouseDown,children:children,__staticSelector:__staticSelector,variant:variant,mod:mod}=_a,others=__objRest(_a,["classNames","className","style","styles","unstyled","vars","labelElement","size","required","htmlFor","onMouseDown","children","__staticSelector","variant","mod"]),_getStyles=(0,import_core.useStyles)({name:["InputWrapper",__staticSelector],props:props,classes:Input_module_default,className:className,style:style,classNames:classNames,styles:styles,unstyled:unstyled,rootSelector:"label",vars:vars,varsResolver:varsResolver}),ctx=useInputWrapperContext(),getStyles=(null==ctx?void 0:ctx.getStyles)||_getStyles;return import_react71.default.createElement(import_core.Box,__spreadValues(__spreadProps(__spreadValues({},getStyles("label")),{component:labelElement,variant:variant,size:size,ref:ref,htmlFor:"label"===labelElement?htmlFor:void 0,mod:[{required:required},mod],onMouseDown:event=>{null==onMouseDown||onMouseDown(event),!event.defaultPrevented&&event.detail>1&&event.preventDefault()}}),others),children,required&&import_react71.default.createElement("span",__spreadProps(__spreadValues({},getStyles("required")),{"aria-hidden":!0})," *"))}));InputLabel.displayName="@raikou/core/InputLabel";var import_react72=__toESM(require("react")),import_core2=require("@raikou/core"),defaultProps2={},varsResolver2=(0,import_core2.createVarsResolver)(((_,{size:size})=>({error:{"--input-error-size":void 0===size?void 0:`calc(${(0,import_core2.getFontSize)(size)} - ${(0,import_core2.rem)(2)})`}}))),InputError=(0,import_core2.factory)(((_props,ref)=>{const props=(0,import_core2.useProps)("InputError",defaultProps2,_props),_a=props,{classNames:classNames,className:className,style:style,styles:styles,unstyled:unstyled,vars:vars,size:size,__staticSelector:__staticSelector,__inheritStyles:__inheritStyles=!0,variant:variant}=_a,others=__objRest(_a,["classNames","className","style","styles","unstyled","vars","size","__staticSelector","__inheritStyles","variant"]),_getStyles=(0,import_core2.useStyles)({name:["InputWrapper",__staticSelector],props:props,classes:Input_module_default,className:className,style:style,classNames:classNames,styles:styles,unstyled:unstyled,rootSelector:"error",vars:vars,varsResolver:varsResolver2}),ctx=useInputWrapperContext(),getStyles=__inheritStyles&&(null==ctx?void 0:ctx.getStyles)||_getStyles;return import_react72.default.createElement(import_core2.Box,__spreadValues(__spreadValues({component:"p",ref:ref,variant:variant,size:size},getStyles("error")),others))}));InputError.displayName="@raikou/core/InputError";var import_react73=__toESM(require("react")),import_core3=require("@raikou/core"),defaultProps3={},varsResolver3=(0,import_core3.createVarsResolver)(((_,{size:size})=>({description:{"--input-description-size":void 0===size?void 0:`calc(${(0,import_core3.getFontSize)(size)} - ${(0,import_core3.rem)(2)})`}}))),InputDescription=(0,import_core3.factory)(((_props,ref)=>{const props=(0,import_core3.useProps)("InputDescription",defaultProps3,_props),_a=(0,import_core3.useProps)("InputDescription",defaultProps3,props),{classNames:classNames,className:className,style:style,styles:styles,unstyled:unstyled,vars:vars,size:size,__staticSelector:__staticSelector,__inheritStyles:__inheritStyles=!0,variant:variant}=_a,others=__objRest(_a,["classNames","className","style","styles","unstyled","vars","size","__staticSelector","__inheritStyles","variant"]),ctx=useInputWrapperContext(),_getStyles=(0,import_core3.useStyles)({name:["InputWrapper",__staticSelector],props:props,classes:Input_module_default,className:className,style:style,classNames:classNames,styles:styles,unstyled:unstyled,rootSelector:"description",vars:vars,varsResolver:varsResolver3}),getStyles=__inheritStyles&&(null==ctx?void 0:ctx.getStyles)||_getStyles;return import_react73.default.createElement(import_core3.Box,__spreadValues(__spreadValues({component:"p",ref:ref,variant:variant,size:size},getStyles("description")),others))}));InputDescription.displayName="@raikou/core/InputDescription";var import_react74=__toESM(require("react")),import_core4=require("@raikou/core"),defaultProps4={},InputPlaceholder=(0,import_core4.factory)(((_props,ref)=>{const props=(0,import_core4.useProps)("InputPlaceholder",defaultProps4,_props),_a=(0,import_core4.useProps)("InputPlaceholder",defaultProps4,props),{classNames:classNames,className:className,style:style,styles:styles,unstyled:unstyled,vars:vars,__staticSelector:__staticSelector,variant:variant,error:error,mod:mod}=_a,others=__objRest(_a,["classNames","className","style","styles","unstyled","vars","__staticSelector","variant","error","mod"]),getStyles=(0,import_core4.useStyles)({name:["InputPlaceholder",__staticSelector],props:props,classes:Input_module_default,className:className,style:style,classNames:classNames,styles:styles,unstyled:unstyled,rootSelector:"placeholder"});return import_react74.default.createElement(import_core4.Box,__spreadValues(__spreadProps(__spreadValues({},getStyles("placeholder")),{mod:[{error:!!error},mod],component:"span",variant:variant,ref:ref}),others))}));InputPlaceholder.displayName="@raikou/core/InputPlaceholder";var import_react75=__toESM(require("react")),import_core5=require("@raikou/core");function getInputOffsets(inputWrapperOrder,{hasDescription:hasDescription,hasError:hasError}){const inputIndex=inputWrapperOrder.findIndex((part=>"input"===part)),aboveInput=inputWrapperOrder[inputIndex-1],belowInput=inputWrapperOrder[inputIndex+1];return{offsetBottom:hasDescription&&"description"===belowInput||hasError&&"error"===belowInput,offsetTop:hasDescription&&"description"===aboveInput||hasError&&"error"===aboveInput}}var defaultProps5={labelElement:"label",inputContainer:children=>children,inputWrapperOrder:["label","description","input","error"]},varsResolver4=(0,import_core5.createVarsResolver)(((_,{size:size})=>({label:{"--input-label-size":(0,import_core5.getFontSize)(size),"--input-asterisk-color":void 0},error:{"--input-error-size":void 0===size?void 0:`calc(${(0,import_core5.getFontSize)(size)} - ${(0,import_core5.rem)(2)})`},description:{"--input-description-size":void 0===size?void 0:`calc(${(0,import_core5.getFontSize)(size)} - ${(0,import_core5.rem)(2)})`}}))),InputWrapper=(0,import_core5.factory)(((_props,ref)=>{const props=(0,import_core5.useProps)("InputWrapper",defaultProps5,_props),_a=props,{classNames:classNames,className:className,style:style,styles:styles,unstyled:unstyled,vars:vars,size:size,variant:variant,__staticSelector:__staticSelector,inputContainer:inputContainer,inputWrapperOrder:inputWrapperOrder,label:label,error:error,description:description,labelProps:labelProps,descriptionProps:descriptionProps,errorProps:errorProps,labelElement:labelElement,children:children,withAsterisk:withAsterisk,id:id,required:required,__stylesApiProps:__stylesApiProps,mod:mod}=_a,others=__objRest(_a,["classNames","className","style","styles","unstyled","vars","size","variant","__staticSelector","inputContainer","inputWrapperOrder","label","error","description","labelProps","descriptionProps","errorProps","labelElement","children","withAsterisk","id","required","__stylesApiProps","mod"]),getStyles=(0,import_core5.useStyles)({name:["InputWrapper",__staticSelector],props:__stylesApiProps||props,classes:Input_module_default,className:className,style:style,classNames:classNames,styles:styles,unstyled:unstyled,vars:vars,varsResolver:varsResolver4}),sharedProps={size:size,variant:variant,__staticSelector:__staticSelector},idBase=useId(id),isRequired="boolean"==typeof withAsterisk?withAsterisk:required,errorId=(null==errorProps?void 0:errorProps.id)||`${idBase}-error`,descriptionId=(null==descriptionProps?void 0:descriptionProps.id)||`${idBase}-description`,inputId=idBase,hasError=!!error&&"boolean"!=typeof error,hasDescription=!!description,_describedBy=`${hasError?errorId:""} ${hasDescription?descriptionId:""}`,describedBy=_describedBy.trim().length>0?_describedBy.trim():void 0,labelId=(null==labelProps?void 0:labelProps.id)||`${idBase}-label`,_label=label&&import_react75.default.createElement(InputLabel,__spreadValues(__spreadValues({key:"label",labelElement:labelElement,id:labelId,htmlFor:inputId,required:isRequired},sharedProps),labelProps),label),_description=hasDescription&&import_react75.default.createElement(InputDescription,__spreadProps(__spreadValues(__spreadValues({key:"description"},descriptionProps),sharedProps),{size:(null==descriptionProps?void 0:descriptionProps.size)||sharedProps.size,id:(null==descriptionProps?void 0:descriptionProps.id)||descriptionId}),description),_input=import_react75.default.createElement(import_react75.default.Fragment,{key:"input"},inputContainer(children)),_error=hasError&&import_react75.default.createElement(InputError,__spreadProps(__spreadValues(__spreadValues({},errorProps),sharedProps),{size:(null==errorProps?void 0:errorProps.size)||sharedProps.size,key:"error",id:(null==errorProps?void 0:errorProps.id)||errorId}),error),content=inputWrapperOrder.map((part=>{switch(part){case"label":return _label;case"input":return _input;case"description":return _description;case"error":return _error;default:return null}}));return import_react75.default.createElement(InputWrapperProvider,{value:__spreadValues({getStyles:getStyles,describedBy:describedBy,inputId:inputId,labelId:labelId},getInputOffsets(inputWrapperOrder,{hasDescription:hasDescription,hasError:hasError}))},import_react75.default.createElement(import_core5.Box,__spreadValues(__spreadValues({ref:ref,variant:variant,size:size,mod:[{error:!!error},mod]},getStyles("root")),others),content))}));InputWrapper.displayName="@raikou/core/InputWrapper";var Input_module_default2={wrapper:"m-6c018570",input:"m-8fb7ebe7",section:"m-82577fc2",placeholder:"m-88bacfd0",root:"m-46b77525",label:"m-8fdc1311",required:"m-78a94662",error:"m-8f816625",description:"m-fe47ce59"},defaultProps6={variant:"default",leftSectionPointerEvents:"none",rightSectionPointerEvents:"none",withAria:!0,withErrorStyles:!0},varsResolver5=(0,import_core6.createVarsResolver)(((_,props,ctx)=>({wrapper:{"--input-margin-top":ctx.offsetTop?"calc(var(--raikou-spacing-xs) / 2)":void 0,"--input-margin-bottom":ctx.offsetBottom?"calc(var(--raikou-spacing-xs) / 2)":void 0,"--input-height":(0,import_core6.getSize)(props.size,"input-height"),"--input-fz":(0,import_core6.getFontSize)(props.size),"--input-radius":void 0===props.radius?void 0:(0,import_core6.getRadius)(props.radius),"--input-left-section-width":void 0!==props.leftSectionWidth?(0,import_core6.rem)(props.leftSectionWidth):void 0,"--input-right-section-width":void 0!==props.rightSectionWidth?(0,import_core6.rem)(props.rightSectionWidth):void 0,"--input-padding-y":props.multiline?(0,import_core6.getSize)(props.size,"input-padding-y"):void 0,"--input-left-section-pointer-events":props.leftSectionPointerEvents,"--input-right-section-pointer-events":props.rightSectionPointerEvents}}))),Input=(0,import_core6.polymorphicFactory)(((_props,ref)=>{const props=(0,import_core6.useProps)("Input",defaultProps6,_props),_a=props,{classNames:classNames,className:className,style:style,styles:styles,unstyled:unstyled,required:required,__staticSelector:__staticSelector,__stylesApiProps:__stylesApiProps,size:size,wrapperProps:wrapperProps,error:error,disabled:disabled,leftSection:leftSection,leftSectionProps:leftSectionProps,leftSectionWidth:leftSectionWidth,rightSection:rightSection,rightSectionProps:rightSectionProps,rightSectionWidth:rightSectionWidth,rightSectionPointerEvents:rightSectionPointerEvents,leftSectionPointerEvents:leftSectionPointerEvents,variant:variant,vars:vars,pointer:pointer,multiline:multiline,radius:radius,id:id,withAria:withAria,withErrorStyles:withErrorStyles,mod:mod,inputSize:inputSize}=_a,others=__objRest(_a,["classNames","className","style","styles","unstyled","required","__staticSelector","__stylesApiProps","size","wrapperProps","error","disabled","leftSection","leftSectionProps","leftSectionWidth","rightSection","rightSectionProps","rightSectionWidth","rightSectionPointerEvents","leftSectionPointerEvents","variant","vars","pointer","multiline","radius","id","withAria","withErrorStyles","mod","inputSize"]),{styleProps:styleProps,rest:rest}=(0,import_core6.extractStyleProps)(others),ctx=useInputWrapperContext(),stylesCtx={offsetBottom:null==ctx?void 0:ctx.offsetBottom,offsetTop:null==ctx?void 0:ctx.offsetTop},getStyles=(0,import_core6.useStyles)({name:["Input",__staticSelector],props:__stylesApiProps||props,classes:Input_module_default2,className:className,style:style,classNames:classNames,styles:styles,unstyled:unstyled,stylesCtx:stylesCtx,rootSelector:"wrapper",vars:vars,varsResolver:varsResolver5}),ariaAttributes=withAria?{required:required,disabled:disabled,"aria-invalid":!!error,"aria-describedby":null==ctx?void 0:ctx.describedBy,id:(null==ctx?void 0:ctx.inputId)||id}:{};return import_react76.default.createElement(import_core6.Box,__spreadProps(__spreadValues(__spreadValues(__spreadValues({},getStyles("wrapper")),styleProps),wrapperProps),{mod:[{error:!!error&&withErrorStyles,pointer:pointer,disabled:disabled,multiline:multiline,"data-with-right-section":!!rightSection,"data-with-left-section":!!leftSection},mod],variant:variant,size:size}),leftSection&&import_react76.default.createElement("div",__spreadValues(__spreadProps(__spreadValues({},leftSectionProps),{"data-position":"left"}),getStyles("section",{className:null==leftSectionProps?void 0:leftSectionProps.className,style:null==leftSectionProps?void 0:leftSectionProps.style})),leftSection),import_react76.default.createElement(import_core6.Box,__spreadValues(__spreadProps(__spreadValues(__spreadValues({component:"input"},rest),ariaAttributes),{ref:ref,required:required,mod:{disabled:disabled,error:!!error&&withErrorStyles},variant:variant,__size:inputSize}),getStyles("input"))),rightSection&&import_react76.default.createElement("div",__spreadValues(__spreadProps(__spreadValues({},rightSectionProps),{"data-position":"right"}),getStyles("section",{className:null==rightSectionProps?void 0:rightSectionProps.className,style:null==rightSectionProps?void 0:rightSectionProps.style})),rightSection))}));Input.classes=Input_module_default2,Input.Wrapper=InputWrapper,Input.Label=InputLabel,Input.Error=InputError,Input.Description=InputDescription,Input.Placeholder=InputPlaceholder,Input.displayName="@raikou/core/Input";var InlineInput_module_default={root:"m-5f75b09e",body:"m-5f6e695e",labelWrapper:"m-d3ea56bb",label:"m-8ee546b8",description:"m-328f68c0",error:"m-8e8a99cc"},InlineInput=(0,import_react77.forwardRef)(((_a,ref)=>{var _b=_a,{__staticSelector:__staticSelector,__stylesApiProps:__stylesApiProps,className:className,classNames:classNames,styles:styles,unstyled:unstyled,children:children,label:label,description:description,id:id,disabled:disabled,error:error,size:size,labelPosition:labelPosition="left",bodyElement:bodyElement="div",labelElement:labelElement="label",variant:variant,style:style,vars:vars,mod:mod}=_b,others=__objRest(_b,["__staticSelector","__stylesApiProps","className","classNames","styles","unstyled","children","label","description","id","disabled","error","size","labelPosition","bodyElement","labelElement","variant","style","vars","mod"]);const getStyles=(0,import_core7.useStyles)({name:__staticSelector,props:__stylesApiProps,className:className,style:style,classes:InlineInput_module_default,classNames:classNames,styles:styles,unstyled:unstyled});return import_react77.default.createElement(import_core7.Box,__spreadValues(__spreadProps(__spreadValues({},getStyles("root")),{ref:ref,__vars:{"--label-fz":(0,import_core7.getFontSize)(size),"--label-lh":(0,import_core7.getSize)(size,"label-lh")},mod:[{"label-position":labelPosition},mod],variant:variant,size:size}),others),import_react77.default.createElement(import_core7.Box,__spreadValues({component:bodyElement,htmlFor:"label"===bodyElement?id:void 0},getStyles("body")),children,import_react77.default.createElement("div",__spreadProps(__spreadValues({},getStyles("labelWrapper")),{"data-disabled":disabled||void 0}),label&&import_react77.default.createElement(import_core7.Box,__spreadProps(__spreadValues({component:labelElement,htmlFor:"label"===labelElement?id:void 0},getStyles("label")),{"data-disabled":disabled||void 0}),label),description&&import_react77.default.createElement(Input.Description,__spreadValues({size:size,__inheritStyles:!1},getStyles("description")),description),error&&"boolean"!=typeof error&&import_react77.default.createElement(Input.Error,__spreadValues({size:size,__inheritStyles:!1},getStyles("error")),error))))}));InlineInput.displayName="@raikou/core/InlineInput";var import_react78=require("react"),CheckboxGroupContext=(0,import_react78.createContext)(null),CheckboxGroupProvider=CheckboxGroupContext.Provider,useCheckboxGroupContext=()=>(0,import_react78.useContext)(CheckboxGroupContext),import_react80=__toESM(require("react")),import_core9=require("@raikou/core"),import_react79=__toESM(require("react")),import_core8=require("@raikou/core"),UnstyledButton_module_default={root:"m-87cf2631"},defaultProps7={__staticSelector:"UnstyledButton"},UnstyledButton=(0,import_core8.polymorphicFactory)(((_props,ref)=>{const props=(0,import_core8.useProps)("UnstyledButton",defaultProps7,_props),_a=props,{className:className,component:component="button",__staticSelector:__staticSelector,unstyled:unstyled,classNames:classNames,styles:styles,style:style}=_a,others=__objRest(_a,["className","component","__staticSelector","unstyled","classNames","styles","style"]),getStyles=(0,import_core8.useStyles)({name:__staticSelector,props:props,classes:UnstyledButton_module_default,className:className,style:style,classNames:classNames,styles:styles,unstyled:unstyled});return import_react79.default.createElement(import_core8.Box,__spreadValues(__spreadProps(__spreadValues({},getStyles("root",{focusable:!0})),{component:component,ref:ref,type:"button"===component?"button":void 0}),others))}));UnstyledButton.displayName="@raikou/core/UnstyledButton",UnstyledButton.classes=UnstyledButton_module_default;var[CheckboxCardProvider,useCheckboxCardContext]=createOptionalContext(),CheckboxCard_module_default={card:"m-26775b0a"},defaultProps8={withBorder:!0},varsResolver6=(0,import_core9.createVarsResolver)(((_,{radius:radius})=>({card:{"--card-radius":(0,import_core9.getRadius)(radius)}}))),CheckboxCard=(0,import_core9.factory)(((_props,ref)=>{const props=(0,import_core9.useProps)("CheckboxCard",defaultProps8,_props),_a=props,{classNames:classNames,className:className,style:style,styles:styles,unstyled:unstyled,vars:vars,checked:checked,mod:mod,withBorder:withBorder,value:value,onClick:onClick}=_a,others=__objRest(_a,["classNames","className","style","styles","unstyled","vars","checked","mod","withBorder","value","onClick"]),getStyles=(0,import_core9.useStyles)({name:"CheckboxCard",classes:CheckboxCard_module_default,props:props,className:className,style:style,classNames:classNames,styles:styles,unstyled:unstyled,vars:vars,varsResolver:varsResolver6,rootSelector:"card"}),ctx=useCheckboxGroupContext(),_checked="boolean"==typeof checked?checked:(null==ctx?void 0:ctx.value.includes(value||""))||!1;return import_react80.default.createElement(CheckboxCardProvider,{value:{checked:_checked}},import_react80.default.createElement(UnstyledButton,__spreadProps(__spreadValues(__spreadValues({ref:ref,mod:[{"with-border":withBorder,checked:_checked},mod]},getStyles("card")),others),{role:"checkbox","aria-checked":_checked,onClick:event=>{null==onClick||onClick(event),null==ctx||ctx.onChange(value||"")}})))}));CheckboxCard.displayName="@Raikou/core/CheckboxCard",CheckboxCard.classes=CheckboxCard_module_default;var import_react82=__toESM(require("react")),import_core10=require("@raikou/core"),import_react81=__toESM(require("react"));function InputsGroupFieldset({children:children,role:role}){const ctx=useInputWrapperContext();return ctx?import_react81.default.createElement("div",{role:role,"aria-labelledby":ctx.labelId,"aria-describedby":ctx.describedBy},children):import_react81.default.createElement(import_react81.default.Fragment,null,children)}var defaultProps9={},CheckboxGroup=(0,import_core10.factory)(((props,ref)=>{const _a=(0,import_core10.useProps)("CheckboxGroup",defaultProps9,props),{value:value,defaultValue:defaultValue,onChange:onChange,size:size,wrapperProps:wrapperProps,children:children,readOnly:readOnly}=_a,others=__objRest(_a,["value","defaultValue","onChange","size","wrapperProps","children","readOnly"]),[_value,setValue]=useUncontrolled({value:value,defaultValue:defaultValue,finalValue:[],onChange:onChange});return import_react82.default.createElement(CheckboxGroupProvider,{value:{value:_value,onChange:event=>{const itemValue="string"==typeof event?event:event.currentTarget.value;!readOnly&&setValue(_value.includes(itemValue)?_value.filter((item=>item!==itemValue)):[..._value,itemValue])},size:size}},import_react82.default.createElement(Input.Wrapper,__spreadProps(__spreadValues(__spreadValues({size:size,ref:ref},wrapperProps),others),{labelElement:"div",__staticSelector:"CheckboxGroup"}),import_react82.default.createElement(InputsGroupFieldset,{role:"group"},children)))})),import_react84=__toESM(require("react")),import_core12=require("@raikou/core"),import_react83=__toESM(require("react")),import_core11=require("@raikou/core");function CheckIcon(_a){var _b=_a,{size:size,style:style}=_b,others=__objRest(_b,["size","style"]);const _style=void 0!==size?__spreadValues({width:(0,import_core11.rem)(size),height:(0,import_core11.rem)(size)},style):style;return import_react83.default.createElement("svg",__spreadValues({viewBox:"0 0 10 7",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:_style,"aria-hidden":!0},others),import_react83.default.createElement("path",{d:"M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}function CheckboxIcon(_a){var _b=_a,{indeterminate:indeterminate}=_b,others=__objRest(_b,["indeterminate"]);return indeterminate?import_react83.default.createElement("svg",__spreadValues({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 32 6","aria-hidden":!0},others),import_react83.default.createElement("rect",{width:"32",height:"6",fill:"currentColor",rx:"3"})):import_react83.default.createElement(CheckIcon,__spreadValues({},others))}var CheckboxIndicator_module_default={indicator:"m-5e5256ee",icon:"m-1b1c543a","indicator--outline":"m-76e20374"},defaultProps10={icon:CheckboxIcon},varsResolver7=(0,import_core12.createVarsResolver)(((theme,{radius:radius,color:color,size:size,iconColor:iconColor,variant:variant,autoContrast:autoContrast})=>{const parsedColor=(0,import_core12.parseThemeColor)({color:color||theme.primaryColor,theme:theme}),outlineColor=parsedColor.isThemeColor&&void 0===parsedColor.shade?`var(--Raikou-color-${parsedColor.color}-outline)`:parsedColor.color;return{indicator:{"--checkbox-size":(0,import_core12.getSize)(size,"checkbox-size"),"--checkbox-radius":void 0===radius?void 0:(0,import_core12.getRadius)(radius),"--checkbox-color":"outline"===variant?outlineColor:(0,import_core12.getThemeColor)(color,theme),"--checkbox-icon-color":iconColor?(0,import_core12.getThemeColor)(iconColor,theme):(0,import_core12.getAutoContrastValue)(autoContrast,theme)?(0,import_core12.getContrastColor)({color:color,theme:theme,autoContrast:autoContrast}):void 0}}})),CheckboxIndicator=(0,import_core12.factory)(((_props,ref)=>{const props=(0,import_core12.useProps)("CheckboxIndicator",defaultProps10,_props),_a=props,{classNames:classNames,className:className,style:style,styles:styles,unstyled:unstyled,vars:vars,icon:icon,indeterminate:indeterminate,radius:radius,color:color,iconColor:iconColor,autoContrast:autoContrast,checked:checked,mod:mod,variant:variant,disabled:disabled}=_a,others=__objRest(_a,["classNames","className","style","styles","unstyled","vars","icon","indeterminate","radius","color","iconColor","autoContrast","checked","mod","variant","disabled"]),Icon=icon,getStyles=(0,import_core12.useStyles)({name:"CheckboxIndicator",classes:CheckboxIndicator_module_default,props:props,className:className,style:style,classNames:classNames,styles:styles,unstyled:unstyled,vars:vars,varsResolver:varsResolver7,rootSelector:"indicator"}),ctx=useCheckboxCardContext(),_checked="boolean"==typeof checked||"boolean"==typeof indeterminate?checked||indeterminate:(null==ctx?void 0:ctx.checked)||!1;return import_react84.default.createElement(import_core12.Box,__spreadValues(__spreadProps(__spreadValues({ref:ref},getStyles("indicator",{variant:variant})),{variant:variant,mod:[{checked:_checked,disabled:disabled},mod]}),others),import_react84.default.createElement(Icon,__spreadValues({indeterminate:indeterminate},getStyles("icon"))))}));CheckboxIndicator.displayName="@Raikou/core/CheckboxIndicator",CheckboxIndicator.classes=CheckboxIndicator_module_default;var Checkbox_module_default={root:"m-bf2d988c",inner:"m-26062bec",input:"m-26063560",icon:"m-bf295423","input--outline":"m-215c4542"},defaultProps11={labelPosition:"right",icon:CheckboxIcon},varsResolver8=(0,import_core13.createVarsResolver)(((theme,{radius:radius,color:color,size:size,iconColor:iconColor,variant:variant,autoContrast:autoContrast})=>{const parsedColor=(0,import_core13.parseThemeColor)({color:color||theme.primaryColor,theme:theme}),outlineColor=parsedColor.isThemeColor&&void 0===parsedColor.shade?`var(--raikou-color-${parsedColor.color}-outline)`:parsedColor.color;return{root:{"--checkbox-size":(0,import_core13.getSize)(size,"checkbox-size"),"--checkbox-radius":void 0===radius?void 0:(0,import_core13.getRadius)(radius),"--checkbox-color":"outline"===variant?outlineColor:(0,import_core13.getThemeColor)(color,theme),"--checkbox-icon-color":iconColor?(0,import_core13.getThemeColor)(iconColor,theme):(0,import_core13.getAutoContrastValue)(autoContrast,theme)?(0,import_core13.getContrastColor)({color:color,theme:theme,autoContrast:autoContrast}):void 0}}})),Checkbox=(0,import_core13.factory)(((_props,ref)=>{const props=(0,import_core13.useProps)("Checkbox",defaultProps11,_props),_a=props,{classNames:classNames,className:className,style:style,styles:styles,unstyled:unstyled,vars:vars,color:color,label:label,id:id,size:size,radius:radius,wrapperProps:wrapperProps,children:children,checked:checked,labelPosition:labelPosition,description:description,error:error,disabled:disabled,variant:variant,indeterminate:indeterminate,icon:icon,rootRef:rootRef,iconColor:iconColor,onChange:onChange,autoContrast:autoContrast,mod:mod}=_a,others=__objRest(_a,["classNames","className","style","styles","unstyled","vars","color","label","id","size","radius","wrapperProps","children","checked","labelPosition","description","error","disabled","variant","indeterminate","icon","rootRef","iconColor","onChange","autoContrast","mod"]),ctx=useCheckboxGroupContext(),_size=size||(null==ctx?void 0:ctx.size),Icon=icon,getStyles=(0,import_core13.useStyles)({name:"Checkbox",props:props,classes:Checkbox_module_default,className:className,style:style,classNames:classNames,styles:styles,unstyled:unstyled,vars:vars,varsResolver:varsResolver8}),{styleProps:styleProps,rest:rest}=(0,import_core13.extractStyleProps)(others),uuid=useId(id),contextProps=ctx?{checked:ctx.value.includes(rest.value),onChange:event=>{ctx.onChange(event),null==onChange||onChange(event)}}:{};return import_react85.default.createElement(InlineInput,__spreadValues(__spreadValues(__spreadProps(__spreadValues({},getStyles("root")),{__staticSelector:"Checkbox",__stylesApiProps:props,id:uuid,size:_size,labelPosition:labelPosition,label:label,description:description,error:error,disabled:disabled,classNames:classNames,styles:styles,unstyled:unstyled,"data-checked":contextProps.checked||void 0,variant:variant,ref:rootRef}),styleProps),wrapperProps),import_react85.default.createElement(import_core13.Box,__spreadProps(__spreadValues({},getStyles("inner")),{mod:{"data-label-position":labelPosition}}),import_react85.default.createElement(import_core13.Box,__spreadProps(__spreadValues(__spreadValues(__spreadProps(__spreadValues({component:"input",id:uuid,ref:ref,checked:checked,disabled:disabled,mod:{error:!!error,indeterminate:indeterminate}},getStyles("input",{focusable:!0,variant:variant})),{onChange:onChange}),rest),contextProps),{type:"checkbox"})),import_react85.default.createElement(Icon,__spreadValues({indeterminate:indeterminate},getStyles("icon")))))}));Checkbox.displayName="@raikou/core/Checkbox",Checkbox.Group=CheckboxGroup,Checkbox.Indicator=CheckboxIndicator,Checkbox.Card=CheckboxCard;