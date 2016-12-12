import { createStore , combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import appReducer from './reducer';
import mainMenuReducer from './header/reducer'

const reducer = combineReducers ({
    reducer: appReducer,
    mainMenu: mainMenuReducer
})

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);

export default store;