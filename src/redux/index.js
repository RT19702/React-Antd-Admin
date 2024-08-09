import { legacy_createStore as createStore, applyMiddleware, compose, combineReducers } from 'redux';
// redux-persist 是一个用于将 Redux 状态持久化到本地存储（如 localStorage 或 sessionStorage）的库
import { persistStore, persistReducer } from "redux-persist";
// redux-persist 的存储引擎，默认为 localStorage
import storage from "redux-persist/lib/storage";
// redux-thunk 是一个用于处理异步 action 的中间件
import { thunk } from 'redux-thunk';
// redux-promise 是一个用于处理异步 action 的中间件
import reduxPromise from 'redux-promise';
import global from './modules/global/reducer';
import menu from './modules/menu/reducer';

const reducer = combineReducers({
	global,
	menu
});

// redux 持久化配置
const persistConfig = {
	key: "redux-state",
	storage: storage
};

// 创建持久化 reducer
const persistReducerConfig = persistReducer(persistConfig, reducer)

// 使用 redux 中间件
const middleWares = applyMiddleware(thunk, reduxPromise);

// 配置 composeEnhancers 以便使用 Redux DevTools Extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 创建 store
const store = createStore(persistReducerConfig, composeEnhancers(middleWares));

// 创建持久化 store
const persistor = persistStore(store);

export { store, persistor };