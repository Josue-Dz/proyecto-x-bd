import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import { thunk } from 'redux-thunk';
import { authReducer } from './Auth/Reducer';
import { PostReducer } from './Post/Reducer';

const rootReducers = combineReducers({

    auth: authReducer,
    post: PostReducer

});

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk));