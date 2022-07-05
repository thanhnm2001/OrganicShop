import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const middleware = [thunk];
const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['changeView', 'productAll']

};
const pReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
    pReducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
export const persistor = persistStore(store);