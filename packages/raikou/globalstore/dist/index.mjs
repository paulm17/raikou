
import createStore from"pure-store";var useStore=createStore({});function createTheme(config){return config.raikouTheme;}
var{getState,update:setState}=useStore;export{createTheme,getState,setState,useStore};