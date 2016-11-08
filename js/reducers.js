var shopList = [
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
			];

const initialState = { 
						'items':shopList	
					};

/* Adding Reducers */

function addItemFunc(state, action){
	var objArr = state;
	objArr.items.unshift(action.item);
	return objArr;
}

function reduce(state = initialState, action){
	switch(action.type){
		case 'ADD_ITEM': 
			console.log("add Item",action);
			var newArr = new Array(action.item);
			var newList = newArr.concat(state.items);
			
			return Object.assign({}, state, {'items': newList});

		default: 
			// console.log("default");
			return state;
	}
	
}

module.exports = {addItemFunc, reduce};
