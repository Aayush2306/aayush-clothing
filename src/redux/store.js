import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./rootSaga";
const sagaMiddileware = createSagaMiddleware();

const middlewares = [sagaMiddileware];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

sagaMiddileware.run(rootSaga);

//export default { store, persistStore };
