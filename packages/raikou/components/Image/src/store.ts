import createStore from "pure-store";

export const useStore = createStore<{
  error: boolean;
}>({
  error: false,
});
