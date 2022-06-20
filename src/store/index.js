import axios from 'axios';
import {applyMiddleware, compose, createStore} from "redux";
import {rootReducer} from "./root-reducer";
import thunk from "redux-thunk";
import * as api from '../config'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(persistedReducer, composeEnhancers(
    applyMiddleware(
        thunk.withExtraArgument({
            client: axios,
            api,
        })
    )
))

export const persistor = persistStore(store)

window.store = store;