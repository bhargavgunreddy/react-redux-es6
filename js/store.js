
import { createStore } from 'redux';
import addItem from './actions.js';
import {reduce} from './reducers.js';

let store = createStore(reduce);

let unsubscribe = store.subscribe(() =>
   console.log("store conTENT:: ",store.getState())
)

unsubscribe();


console.log("store created == ", store.getState());

var sampleItem = {"name": "Curd", "quantity": "2"};
store.dispatch(addItem(sampleItem));

 console.log("store updated == ", store.getState());

module.exports = store;
