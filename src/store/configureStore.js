import { createStore } from 'redux';
import { PokerReducer } from './reducers';
import { devToolsEnhancer } from 'redux-devtools-extension';

const store = createStore(PokerReducer,devToolsEnhancer());

export default store;
