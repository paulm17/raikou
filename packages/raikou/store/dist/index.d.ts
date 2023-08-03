type RaikouStoreSubscriber<Value> = (value: Value) => void;
type SetStateCallback<Value> = (value: Value) => Value;
interface RaikouStore<Value> {
    getState(): Value;
    setState(value: Value | SetStateCallback<Value>): void;
    updateState(value: Value | SetStateCallback<Value>): void;
    initialize(value: Value): void;
    subscribe(callback: RaikouStoreSubscriber<Value>): () => void;
}
type RaikouStoreValue<Store extends RaikouStore<any>> = ReturnType<Store["getState"]>;
declare function createStore<Value extends Record<string, any>>(initialState: Value): RaikouStore<Value>;
declare function useStore<Store extends RaikouStore<any>>(store: Store): ReturnType<Store["getState"]>;

export { RaikouStore, RaikouStoreSubscriber, RaikouStoreValue, createStore, useStore };
