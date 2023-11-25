import rootReducer from "./reducers/rootReducer";

const { createStore } = require("redux");

const store = createStore(rootReducer);

export default store;