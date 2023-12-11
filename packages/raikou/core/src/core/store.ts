import createStore from "pure-store";
import { RaikouTheme } from "./RaikouProvider";

export const useStore = createStore<RaikouTheme | null>(null);
