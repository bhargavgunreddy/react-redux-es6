/*  Grocery Item */
import { connect } from 'react-redux';
import addItem from './../actions.js';

class GroceryList extends React.Component{
	constructGroceryItem(item, index){
		return <tr key={index}>
					<td>{item.name}</td>
					<td>{item.quantity}</td>
				</tr>

	}

	render(){
		console.log("GL props - >", this.props);
		return <table>
					<thead>
						<tr>
							<th> Item Name </th>
							<th> Item Quantity </th>
						</tr>
					</thead>
					<tbody>
						{this.props.items.map(this.constructGroceryItem)};
					</tbody>
					
				</table>;
	
	}

}

GroceryList.PropTypes = {
	items: React.PropTypes.Array
}


const mapStateToProps = (state) => {
	 console.log("GL updated - >", state);
  return {
    items: state ? state.groceries: []
  }
}

// const mapDispatchToProps = (dispatch) => {
// 	console.log(" ---> ", dispatch);
//   return {
//     onTodoClick: (item) => {
//     	 console.log("dispatch -->", item, dispatch);
//       dispatch(addItem(item))
//     }
//   }
// }

GroceryList = connect(mapStateToProps)(GroceryList);

module.exports = GroceryList;