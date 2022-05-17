import screenObserver from "./modules/screenObserver";
import { createStore, createLogger } from "vuex";

const debug = process.env.NODE_ENV !== "production";

export default createStore({
    modules: {
        screenObserver,
    },
    strict: debug,
    plugins: debug ? [createLogger()] : [],
});
