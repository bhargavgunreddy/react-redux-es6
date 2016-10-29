
// import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import addItem from './actions.js';
import ChildComp from './components/ChildComponent';
import GroceryList from './components/Grocery';


class Shop extends React.Component{

	render(){
		 console.log("Shop --> ",this.props);
		return <div>
					<ChildComp/>
					<GroceryList />	
				</div>;
	}
}

/* */

var shopList = {
					'groceries': [
									{
										"name": "Dal",
										"quantity": 10
									},
										{
										"name": "Bread",
										"quantity": 2
									},	{
										"name": "Rice",
										"quantity": 5
									}
								 ]
			};

const initialState = shopList;	
					

/* Adding Reducers */

function reduce(state, action){

	state = state ? state : initialState ;

	switch(action.type){
		case 'ADD_ITEM': 
			console.log("add Item -->", state);
			var itemsList = state.groceries;//
			itemsList.unshift(action.item);
			return Object.assign({}, state, {'groceries':itemsList});
			
		default: 
			console.log("default -->");
			return state;
	}
	
}

/* create Store */


let store = createStore(reduce);

console.log("store == ", store);

var sampleItem = {"name": "Curd", "quantity": "2"};
store.dispatch(addItem(sampleItem));

 console.log("store == ", store.getState());

// let unsubscribe = store.subscribe(() =>
//    console.log(store.getState())
// )

// unsubscribe();

export default store;


ReactDOM.render(
  <Provider store={store}>
    <Shop />
  </Provider>,
  document.getElementById('shop')
);

