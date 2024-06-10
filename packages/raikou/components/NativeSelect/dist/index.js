"use strict";var __create=Object.create,__defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropNames=Object.getOwnPropertyNames,__getOwnPropSymbols=Object.getOwnPropertySymbols,__getProtoOf=Object.getPrototypeOf,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(obj,key,value)=>key in obj?__defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value:value}):obj[key]=value,__spreadValues=(a,b)=>{for(var prop in b||(b={}))__hasOwnProp.call(b,prop)&&__defNormalProp(a,prop,b[prop]);if(__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(b))__propIsEnum.call(b,prop)&&__defNormalProp(a,prop,b[prop]);return a},__spreadProps=(a,b)=>__defProps(a,__getOwnPropDescs(b)),__objRest=(source,exclude)=>{var target={};for(var prop in source)__hasOwnProp.call(source,prop)&&exclude.indexOf(prop)<0&&(target[prop]=source[prop]);if(null!=source&&__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(source))exclude.indexOf(prop)<0&&__propIsEnum.call(source,prop)&&(target[prop]=source[prop]);return target},__export=(target,all)=>{for(var name in all)__defProp(target,name,{get:all[name],enumerable:!0})},__copyProps=(to,from,except,desc)=>{if(from&&"object"==typeof from||"function"==typeof from)for(let key of __getOwnPropNames(from))__hasOwnProp.call(to,key)||key===except||__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to},__toESM=(mod,isNodeMode,target)=>(target=null!=mod?__create(__getProtoOf(mod)):{},__copyProps(!isNodeMode&&mod&&mod.__esModule?target:__defProp(target,"default",{value:mod,enumerable:!0}),mod)),__toCommonJS=mod=>__copyProps(__defProp({},"__esModule",{value:!0}),mod),src_exports={};__export(src_exports,{NativeSelect:()=>NativeSelect}),module.exports=__toCommonJS(src_exports);var import_react80=__toESM(require("react")),import_core10=require("@raikou/core"),import_react77=__toESM(require("react")),import_core8=require("@raikou/core"),import_react76=__toESM(require("react")),import_core6=require("@raikou/core"),import_react=__toESM(require("react")),import_react2=__toESM(require("react"));function createOptionalContext(initialValue=null){const Context=(0,import_react2.createContext)(initialValue);return[({children:children,value:value})=>import_react2.default.createElement(Context.Provider,{value:value},children),()=>(0,import_react2.useContext)(Context)]}var import_react3=require("react"),import_react4=require("react"),[InputWrapperProvider,useInputWrapperContext]=createOptionalContext({offsetBottom:!1,offsetTop:!1,describedBy:void 0,getStyles:null,inputId:void 0,labelId:void 0}),import_react5=__toESM(require("react")),import_core=require("@raikou/core"),Input_module_default={wrapper:"m-6c018570",input:"m-8fb7ebe7",section:"m-82577fc2",placeholder:"m-88bacfd0",root:"m-46b77525",label:"m-8fdc1311",required:"m-78a94662",error:"m-8f816625",description:"m-fe47ce59"},defaultProps={labelElement:"label"},varsResolver=(0,import_core.createVarsResolver)(((_,{size:size})=>({label:{"--input-label-size":(0,import_core.getFontSize)(size),"--input-asterisk-color":void 0}}))),InputLabel=(0,import_core.factory)(((_props,ref)=>{const props=(0,import_core.useProps)("InputLabel",defaultProps,_props),_a=(0,import_core.useProps)("InputLabel",defaultProps,props),{classNames:classNames,className:className,style:style,styles:styles,unstyled:unstyled,vars:vars,labelElement:labelElement,size:size,required:required,htmlFor:htmlFor,onMouseDown:onMouseDown,children:children,__staticSelector:__staticSelector,variant:variant,mod:mod}=_a,others=__objRest(_a,["classNames","className","style","styles","unstyled","vars","labelElement","size","required","htmlFor","onMouseDown","children","__staticSelector","variant","mod"]),_getStyles=(0,import_core.useStyles)({name:["InputWrapper",__staticSelector],props:props,classes:Input_module_default,className:className,style:style,classNames:classNames,styles:styles,unstyled:unstyled,rootSelector:"label",vars:vars,varsResolver:varsResolver}),ctx=useInputWrapperContext(),getStyles=(null==ctx?void 0:ctx.getStyles)||_getStyles;return import_react5.default.createElement(import_core.Box,__spreadValues(__spreadProps(__spreadValues({},getStyles("label")),{component:labelElement,variant:variant,size:size,ref:ref,htmlFor:"label"===labelElement?htmlFor:void 0,mod:[{required:required},mod],onMouseDown:event=>{null==onMouseDown||onMouseDown(event),!event.defaultPrevented&&event.detail>1&&event.preventDefault()}}),others),children,required&&import_react5.default.createElement("span",__spreadProps(__spreadValues({},getStyles("required")),{"aria-hidden":!0})," *"))}));InputLabel.displayName="@raikou/core/InputLabel";var import_react6=__toESM(require("react")),import_core2=require("@raikou/core"),defaultProps2={},varsResolver2=(0,import_core2.createVarsResolver)(((_,{size:size})=>({error:{"--input-error-size":void 0===size?void 0:`calc(${(0,import_core2.getFontSize)(size)} - ${(0,import_core2.rem)(2)})`}}))),InputError=(0,import_core2.factory)(((_props,ref)=>{const props=(0,import_core2.useProps)("InputError",defaultProps2,_props),_a=props,{classNames:classNames,className:className,style:style,styles:styles,unstyled:unstyled,vars:vars,size:size,__staticSelector:__staticSelector,__inheritStyles:__inheritStyles=!0,variant:variant}=_a,others=__objRest(_a,["classNames","className","style","styles","unstyled","vars","size","__staticSelector","__inheritStyles","variant"]),_getStyles=(0,import_core2.useStyles)({name:["InputWrapper",__staticSelector],props:props,classes:Input_module_default,className:className,style:style,classNames:classNames,styles:styles,unstyled:unstyled,rootSelector:"error",vars:vars,varsResolver:varsResolver2}),ctx=useInputWrapperContext(),getStyles=__inheritStyles&&(null==ctx?void 0:ctx.getStyles)||_getStyles;return import_react6.default.createElement(import_core2.Box,__spreadValues(__spreadValues({component:"p",ref:ref,variant:variant,size:size},getStyles("error")),others))}));InputError.displayName="@raikou/core/InputError";var import_react7=__toESM(require("react")),import_core3=require("@raikou/core"),defaultProps3={},varsResolver3=(0,import_core3.createVarsResolver)(((_,{size:size})=>({description:{"--input-description-size":void 0===size?void 0:`calc(${(0,import_core3.getFontSize)(size)} - ${(0,import_core3.rem)(2)})`}}))),InputDescription=(0,import_core3.factory)(((_props,ref)=>{const props=(0,import_core3.useProps)("InputDescription",defaultProps3,_props),_a=(0,import_core3.useProps)("InputDescription",defaultProps3,props),{classNames:classNames,className:className,style:style,styles:styles,unstyled:unstyled,vars:vars,size:size,__staticSelector:__staticSelector,__inheritStyles:__inheritStyles=!0,variant:variant}=_a,others=__objRest(_a,["classNames","className","style","styles","unstyled","vars","size","__staticSelector","__inheritStyles","variant"]),ctx=useInputWrapperContext(),_getStyles=(0,import_core3.useStyles)({name:["InputWrapper",__staticSelector],props:props,classes:Input_module_default,className:className,style:style,classNames:classNames,styles:styles,unstyled:unstyled,rootSelector:"description",vars:vars,varsResolver:varsResolver3}),getStyles=__inheritStyles&&(null==ctx?void 0:ctx.getStyles)||_getStyles;return import_react7.default.createElement(import_core3.Box,__spreadValues(__spreadValues({component:"p",ref:ref,variant:variant,size:size},getStyles("description")),others))}));InputDescription.displayName="@raikou/core/InputDescription";var import_react8=__toESM(require("react")),import_core4=require("@raikou/core"),defaultProps4={},InputPlaceholder=(0,import_core4.factory)(((_props,ref)=>{const props=(0,import_core4.useProps)("InputPlaceholder",defaultProps4,_props),_a=(0,import_core4.useProps)("InputPlaceholder",defaultProps4,props),{classNames:classNames,className:className,style:style,styles:styles,unstyled:unstyled,vars:vars,__staticSelector:__staticSelector,variant:variant,error:error,mod:mod}=_a,others=__objRest(_a,["classNames","className","style","styles","unstyled","vars","__staticSelector","variant","error","mod"]),getStyles=(0,import_core4.useStyles)({name:["InputPlaceholder",__staticSelector],props:props,classes:Input_module_default,className:className,style:style,classNames:classNames,styles:styles,unstyled:unstyled,rootSelector:"placeholder"});return import_react8.default.createElement(import_core4.Box,__spreadValues(__spreadProps(__spreadValues({},getStyles("placeholder")),{mod:[{error:!!error},mod],component:"span",variant:variant,ref:ref}),others))}));InputPlaceholder.displayName="@raikou/core/InputPlaceholder";var import_react75=__toESM(require("react")),import_react9=require("react"),import_react10=require("react"),import_react11=require("react"),import_react12=require("react"),import_react13=require("react"),import_react14=require("react"),import_react15=require("react"),import_react16=require("react"),import_react17=require("react"),import_react18=require("react"),import_react19=require("react"),import_react20=require("react"),import_react21=require("react"),import_react22=require("react"),import_react23=require("react"),import_react24=__toESM(require("react"),1),import_react25=require("react"),import_react26=require("react"),import_react27=require("react"),import_react28=require("react"),import_react29=require("react"),import_react30=require("react"),import_react31=require("react"),import_react32=require("react"),import_react33=require("react"),import_react34=require("react"),import_react35=require("react"),import_react36=require("react"),import_react37=require("react"),import_react38=require("react"),import_react39=require("react"),import_react40=require("react"),import_react41=require("react"),import_react42=require("react"),import_react43=require("react"),import_react44=require("react"),import_react45=require("react"),import_react46=require("react"),import_react47=require("react"),import_react48=require("react"),import_react49=require("react"),import_react50=require("react"),import_react51=require("react"),import_react52=require("react"),import_react53=require("react"),import_react54=require("react"),import_react55=require("react"),import_react56=require("react"),import_react57=require("react"),import_react58=require("react"),import_react59=require("react"),import_react60=require("react"),import_react61=require("react"),import_react62=require("react"),import_react63=require("react"),import_react64=require("react"),import_react65=require("react"),import_react66=require("react"),import_react67=require("react"),import_react68=require("react"),import_react69=require("react"),import_react70=require("react"),import_react71=require("react"),import_react72=require("react"),import_react73=require("react"),import_react74=require("react");function randomId(){return`mantine-${Math.random().toString(36).slice(2,11)}`}var useIsomorphicEffect="undefined"!=typeof document?import_react17.useLayoutEffect:import_react17.useEffect,__useId=import_react24.default["useId".toString()]||(()=>{});function useReactId(){const id=__useId();return id?`mantine-${id.replace(/:/g,"")}`:""}function useId(staticId){const reactId=useReactId(),[uuid,setUuid]=(0,import_react23.useState)(reactId);return useIsomorphicEffect((()=>{setUuid(randomId())}),[]),"string"==typeof staticId?staticId:"undefined"==typeof window?reactId:uuid}function deserializeJSON(value){try{return value&&JSON.parse(value)}catch(e){return value}}function createStorageHandler(type){return{getItem:key=>{try{return window[type].getItem(key)}catch(error){return console.warn("use-local-storage: Failed to get value from storage, localStorage is blocked"),null}},setItem:(key,value)=>{try{window[type].setItem(key,value)}catch(error){console.warn("use-local-storage: Failed to set value to storage, localStorage is blocked")}},removeItem:key=>{try{window[type].removeItem(key)}catch(error){console.warn("use-local-storage: Failed to remove value from storage, localStorage is blocked")}}}}function readValue(type){const{getItem:getItem}=createStorageHandler(type);return function({key:key,defaultValue:defaultValue,deserialize:deserialize=deserializeJSON}){let storageBlockedOrSkipped;try{storageBlockedOrSkipped="undefined"==typeof window||!(type in window)||null===window[type]}catch(_e){storageBlockedOrSkipped=!0}if(storageBlockedOrSkipped)return defaultValue;const storageValue=getItem(key);return null!==storageValue?deserialize(storageValue):defaultValue}}var readLocalStorageValue=readValue("localStorage"),readSessionStorageValue=readValue("sessionStorage"),import_core5=require("@raikou/core");function getInputOffsets(inputWrapperOrder,{hasDescription:hasDescription,hasError:hasError}){const inputIndex=inputWrapperOrder.findIndex((part=>"input"===part)),aboveInput=inputWrapperOrder[inputIndex-1],belowInput=inputWrapperOrder[inputIndex+1];return{offsetBottom:hasDescription&&"description"===belowInput||hasError&&"error"===belowInput,offsetTop:hasDescription&&"description"===aboveInput||hasError&&"error"===aboveInput}}var defaultProps5={labelElement:"label",inputContainer:children=>children,inputWrapperOrder:["label","description","input","error"]},varsResolver4=(0,import_core5.createVarsResolver)(((_,{size:size})=>({label:{"--input-label-size":(0,import_core5.getFontSize)(size),"--input-asterisk-color":void 0},error:{"--input-error-size":void 0===size?void 0:`calc(${(0,import_core5.getFontSize)(size)} - ${(0,import_core5.rem)(2)})`},description:{"--input-description-size":void 0===size?void 0:`calc(${(0,import_core5.getFontSize)(size)} - ${(0,import_core5.rem)(2)})`}}))),InputWrapper=(0,import_core5.factory)(((_props,ref)=>{const props=(0,import_core5.useProps)("InputWrapper",defaultProps5,_props),_a=props,{classNames:classNames,className:className,style:style,styles:styles,unstyled:unstyled,vars:vars,size:size,variant:variant,__staticSelector:__staticSelector,inputContainer:inputContainer,inputWrapperOrder:inputWrapperOrder,label:label,error:error,description:description,labelProps:labelProps,descriptionProps:descriptionProps,errorProps:errorProps,labelElement:labelElement,children:children,withAsterisk:withAsterisk,id:id,required:required,__stylesApiProps:__stylesApiProps,mod:mod}=_a,others=__objRest(_a,["classNames","className","style","styles","unstyled","vars","size","variant","__staticSelector","inputContainer","inputWrapperOrder","label","error","description","labelProps","descriptionProps","errorProps","labelElement","children","withAsterisk","id","required","__stylesApiProps","mod"]),getStyles=(0,import_core5.useStyles)({name:["InputWrapper",__staticSelector],props:__stylesApiProps||props,classes:Input_module_default,className:className,style:style,classNames:classNames,styles:styles,unstyled:unstyled,vars:vars,varsResolver:varsResolver4}),sharedProps={size:size,variant:variant,__staticSelector:__staticSelector},idBase=useId(id),isRequired="boolean"==typeof withAsterisk?withAsterisk:required,errorId=(null==errorProps?void 0:errorProps.id)||`${idBase}-error`,descriptionId=(null==descriptionProps?void 0:descriptionProps.id)||`${idBase}-description`,inputId=idBase,hasError=!!error&&"boolean"!=typeof error,hasDescription=!!description,_describedBy=`${hasError?errorId:""} ${hasDescription?descriptionId:""}`,describedBy=_describedBy.trim().length>0?_describedBy.trim():void 0,labelId=(null==labelProps?void 0:labelProps.id)||`${idBase}-label`,_label=label&&import_react75.default.createElement(InputLabel,__spreadValues(__spreadValues({key:"label",labelElement:labelElement,id:labelId,htmlFor:inputId,required:isRequired},sharedProps),labelProps),label),_description=hasDescription&&import_react75.default.createElement(InputDescription,__spreadProps(__spreadValues(__spreadValues({key:"description"},descriptionProps),sharedProps),{size:(null==descriptionProps?void 0:descriptionProps.size)||sharedProps.size,id:(null==descriptionProps?void 0:descriptionProps.id)||descriptionId}),description),_input=import_react75.default.createElement(import_react75.default.Fragment,{key:"input"},inputContainer(children)),_error=hasError&&import_react75.default.createElement(InputError,__spreadProps(__spreadValues(__spreadValues({},errorProps),sharedProps),{size:(null==errorProps?void 0:errorProps.size)||sharedProps.size,key:"error",id:(null==errorProps?void 0:errorProps.id)||errorId}),error),content=inputWrapperOrder.map((part=>{switch(part){case"label":return _label;case"input":return _input;case"description":return _description;case"error":return _error;default:return null}}));return import_react75.default.createElement(InputWrapperProvider,{value:__spreadValues({getStyles:getStyles,describedBy:describedBy,inputId:inputId,labelId:labelId},getInputOffsets(inputWrapperOrder,{hasDescription:hasDescription,hasError:hasError}))},import_react75.default.createElement(import_core5.Box,__spreadValues(__spreadValues({ref:ref,variant:variant,size:size,mod:[{error:!!error},mod]},getStyles("root")),others),content))}));InputWrapper.displayName="@raikou/core/InputWrapper";var Input_module_default2={wrapper:"m-6c018570",input:"m-8fb7ebe7",section:"m-82577fc2",placeholder:"m-88bacfd0",root:"m-46b77525",label:"m-8fdc1311",required:"m-78a94662",error:"m-8f816625",description:"m-fe47ce59"},defaultProps6={variant:"default",leftSectionPointerEvents:"none",rightSectionPointerEvents:"none",withAria:!0,withErrorStyles:!0},varsResolver5=(0,import_core6.createVarsResolver)(((_,props,ctx)=>({wrapper:{"--input-margin-top":ctx.offsetTop?"calc(var(--raikou-spacing-xs) / 2)":void 0,"--input-margin-bottom":ctx.offsetBottom?"calc(var(--raikou-spacing-xs) / 2)":void 0,"--input-height":(0,import_core6.getSize)(props.size,"input-height"),"--input-fz":(0,import_core6.getFontSize)(props.size),"--input-radius":void 0===props.radius?void 0:(0,import_core6.getRadius)(props.radius),"--input-left-section-width":void 0!==props.leftSectionWidth?(0,import_core6.rem)(props.leftSectionWidth):void 0,"--input-right-section-width":void 0!==props.rightSectionWidth?(0,import_core6.rem)(props.rightSectionWidth):void 0,"--input-padding-y":props.multiline?(0,import_core6.getSize)(props.size,"input-padding-y"):void 0,"--input-left-section-pointer-events":props.leftSectionPointerEvents,"--input-right-section-pointer-events":props.rightSectionPointerEvents}}))),Input=(0,import_core6.polymorphicFactory)(((_props,ref)=>{const props=(0,import_core6.useProps)("Input",defaultProps6,_props),_a=props,{classNames:classNames,className:className,style:style,styles:styles,unstyled:unstyled,required:required,__staticSelector:__staticSelector,__stylesApiProps:__stylesApiProps,size:size,wrapperProps:wrapperProps,error:error,disabled:disabled,leftSection:leftSection,leftSectionProps:leftSectionProps,leftSectionWidth:leftSectionWidth,rightSection:rightSection,rightSectionProps:rightSectionProps,rightSectionWidth:rightSectionWidth,rightSectionPointerEvents:rightSectionPointerEvents,leftSectionPointerEvents:leftSectionPointerEvents,variant:variant,vars:vars,pointer:pointer,multiline:multiline,radius:radius,id:id,withAria:withAria,withErrorStyles:withErrorStyles,mod:mod,inputSize:inputSize}=_a,others=__objRest(_a,["classNames","className","style","styles","unstyled","required","__staticSelector","__stylesApiProps","size","wrapperProps","error","disabled","leftSection","leftSectionProps","leftSectionWidth","rightSection","rightSectionProps","rightSectionWidth","rightSectionPointerEvents","leftSectionPointerEvents","variant","vars","pointer","multiline","radius","id","withAria","withErrorStyles","mod","inputSize"]),{styleProps:styleProps,rest:rest}=(0,import_core6.extractStyleProps)(others),ctx=useInputWrapperContext(),stylesCtx={offsetBottom:null==ctx?void 0:ctx.offsetBottom,offsetTop:null==ctx?void 0:ctx.offsetTop},getStyles=(0,import_core6.useStyles)({name:["Input",__staticSelector],props:__stylesApiProps||props,classes:Input_module_default2,className:className,style:style,classNames:classNames,styles:styles,unstyled:unstyled,stylesCtx:stylesCtx,rootSelector:"wrapper",vars:vars,varsResolver:varsResolver5}),ariaAttributes=withAria?{required:required,disabled:disabled,"aria-invalid":!!error,"aria-describedby":null==ctx?void 0:ctx.describedBy,id:(null==ctx?void 0:ctx.inputId)||id}:{};return import_react76.default.createElement(import_core6.Box,__spreadProps(__spreadValues(__spreadValues(__spreadValues({},getStyles("wrapper")),styleProps),wrapperProps),{mod:[{error:!!error&&withErrorStyles,pointer:pointer,disabled:disabled,multiline:multiline,"data-with-right-section":!!rightSection,"data-with-left-section":!!leftSection},mod],variant:variant,size:size}),leftSection&&import_react76.default.createElement("div",__spreadValues(__spreadProps(__spreadValues({},leftSectionProps),{"data-position":"left"}),getStyles("section",{className:null==leftSectionProps?void 0:leftSectionProps.className,style:null==leftSectionProps?void 0:leftSectionProps.style})),leftSection),import_react76.default.createElement(import_core6.Box,__spreadValues(__spreadProps(__spreadValues(__spreadValues({component:"input"},rest),ariaAttributes),{ref:ref,required:required,mod:{disabled:disabled,error:!!error&&withErrorStyles},variant:variant,__size:inputSize}),getStyles("input"))),rightSection&&import_react76.default.createElement("div",__spreadValues(__spreadProps(__spreadValues({},rightSectionProps),{"data-position":"right"}),getStyles("section",{className:null==rightSectionProps?void 0:rightSectionProps.className,style:null==rightSectionProps?void 0:rightSectionProps.style})),rightSection))}));Input.classes=Input_module_default2,Input.Wrapper=InputWrapper,Input.Label=InputLabel,Input.Error=InputError,Input.Description=InputDescription,Input.Placeholder=InputPlaceholder,Input.displayName="@raikou/core/Input";var import_core7=require("@raikou/core");function useInputProps(component,defaultProps10,_props){const props=(0,import_core7.useProps)(component,defaultProps10,_props),_a=props,{label:label,description:description,error:error,required:required,classNames:classNames,styles:styles,className:className,unstyled:unstyled,__staticSelector:__staticSelector,__stylesApiProps:__stylesApiProps,errorProps:errorProps,labelProps:labelProps,descriptionProps:descriptionProps,wrapperProps:_wrapperProps,id:id,size:size,style:style,inputContainer:inputContainer,inputWrapperOrder:inputWrapperOrder,withAsterisk:withAsterisk,variant:variant,vars:vars}=_a,others=__objRest(_a,["label","description","error","required","classNames","styles","className","unstyled","__staticSelector","__stylesApiProps","errorProps","labelProps","descriptionProps","wrapperProps","id","size","style","inputContainer","inputWrapperOrder","withAsterisk","variant","vars"]),{styleProps:styleProps,rest:rest}=(0,import_core7.extractStyleProps)(others),wrapperProps=__spreadValues({label:label,description:description,error:error,required:required,classNames:classNames,className:className,__staticSelector:__staticSelector,__stylesApiProps:__stylesApiProps||props,errorProps:errorProps,labelProps:labelProps,descriptionProps:descriptionProps,unstyled:unstyled,styles:styles,size:size,style:style,inputContainer:inputContainer,inputWrapperOrder:inputWrapperOrder,withAsterisk:withAsterisk,variant:variant,id:id},_wrapperProps);return __spreadProps(__spreadValues({},rest),{classNames:classNames,styles:styles,unstyled:unstyled,wrapperProps:__spreadValues(__spreadValues({},wrapperProps),styleProps),inputProps:{required:required,classNames:classNames,styles:styles,unstyled:unstyled,size:size,__staticSelector:__staticSelector,__stylesApiProps:__stylesApiProps||props,error:error,variant:variant}})}var defaultProps7={__staticSelector:"InputBase",withAria:!0},InputBase=(0,import_core8.polymorphicFactory)(((props,ref)=>{const _a=useInputProps("InputBase",defaultProps7,props),{inputProps:inputProps,wrapperProps:wrapperProps}=_a,others=__objRest(_a,["inputProps","wrapperProps"]);return import_react77.default.createElement(Input.Wrapper,__spreadValues({},wrapperProps),import_react77.default.createElement(Input,__spreadProps(__spreadValues(__spreadValues({},inputProps),others),{ref:ref})))}));function parseItem(item){return"string"==typeof item?{value:item,label:item}:"value"in item&&!("label"in item)?{value:item.value,label:item.value,disabled:item.disabled}:"number"==typeof item?{value:item.toString(),label:item.toString()}:"group"in item?{group:item.group,items:item.items.map((i=>parseItem(i)))}:item}function getParsedComboboxData(data){return data?data.map((item=>parseItem(item))):[]}InputBase.displayName="@raikou/core/InputBase";var import_react78=__toESM(require("react")),import_core9=require("@raikou/core"),Combobox_module_default={dropdown:"m-88b62a41",options:"m-b2821a6e",option:"m-92253aa5",search:"m-985517d8",empty:"m-2530cd1d",header:"m-858f94bd",footer:"m-82b967cb",group:"m-254f3e4f",groupLabel:"m-2bb2e9e5",chevron:"m-2943220b",optionsDropdownOption:"m-390b5f4",optionsDropdownCheckIcon:"m-8ee53fc2"},defaultProps8={error:null},varsResolver6=(0,import_core9.createVarsResolver)(((_,{size:size})=>({chevron:{"--combobox-chevron-size":(0,import_core9.getSize)(size,"combobox-chevron-size")}}))),ComboboxChevron=(0,import_core9.factory)(((_props,ref)=>{const props=(0,import_core9.useProps)("ComboboxChevron",defaultProps8,_props),_a=props,{size:size,error:error,style:style,className:className,classNames:classNames,styles:styles,unstyled:unstyled,vars:vars,mod:mod}=_a,others=__objRest(_a,["size","error","style","className","classNames","styles","unstyled","vars","mod"]),getStyles=(0,import_core9.useStyles)({name:"ComboboxChevron",classes:Combobox_module_default,props:props,style:style,className:className,classNames:classNames,styles:styles,unstyled:unstyled,vars:vars,varsResolver:varsResolver6,rootSelector:"chevron"});return import_react78.default.createElement(import_core9.Box,__spreadProps(__spreadValues(__spreadValues({component:"svg"},others),getStyles("chevron")),{size:size,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",mod:["combobox-chevron",{error:error},mod],ref:ref}),import_react78.default.createElement("path",{d:"M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}));ComboboxChevron.classes=Combobox_module_default,ComboboxChevron.displayName="@raikou/core/ComboboxChevron";var import_react79=__toESM(require("react"));function isGroup(input){return"group"in input}function NativeSelectOption({data:data}){if(isGroup(data)){const items=data.items.map((item=>import_react79.default.createElement(NativeSelectOption,{key:item.value,data:item})));return import_react79.default.createElement("optgroup",{label:data.group},items)}const _a=data,{value:value,label:label}=_a,others=__objRest(_a,["value","label"]);return import_react79.default.createElement("option",__spreadValues({key:data.value,value:data.value},others),data.label)}NativeSelectOption.displayName="@raikou/core/NativeSelectOption";var defaultProps9={rightSectionPointerEvents:"none"},NativeSelect=(0,import_core10.factory)(((props,ref)=>{const _a=(0,import_core10.useProps)("NativeSelect",defaultProps9,props),{data:data,children:children,size:size,error:error,rightSection:rightSection}=_a,others=__objRest(_a,["data","children","size","error","rightSection"]),options=getParsedComboboxData(data).map(((item,index)=>import_react80.default.createElement(NativeSelectOption,{key:index,data:item})));return import_react80.default.createElement(InputBase,__spreadProps(__spreadValues({component:"select",ref:ref},others),{__staticSelector:"NativeSelect",size:size,pointer:!0,error:error,rightSection:rightSection||import_react80.default.createElement(ComboboxChevron,{size:size,error:error})}),children||options)}));NativeSelect.displayName="@raikou/core/NativeSelect";