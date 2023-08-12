import * as zustand from 'zustand';

declare const store: zustand.StoreApi<any>;
declare const getState: () => any;
declare const setState: (partial: any, replace?: boolean | undefined) => void;
declare const subscribe: (listener: (state: any, prevState: any) => void) => () => void;

export { store as default, getState, setState, subscribe };
