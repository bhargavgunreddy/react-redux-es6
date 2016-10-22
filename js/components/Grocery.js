/*  Grocery Item */
import { connect } from 'react-redux';

class GroceryList extends React.Component{
	constructGroceryItem(item, index){
		return <tr key={index}>
					<td>{item.name}</td>
					<td>{item.quantity}</td>
				</tr>

	}

	render(){
		// console.log("GL props - >", this.props);
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
	// console.log("GL - >", state);
  return {
    items: state ? state: []
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (item) => {
    	// console.log("dispatch -->", item);
      dispatch(addItem(item))
    }
  }
}

GroceryList = connect(
						mapStateToProps,
					  	mapDispatchToProps
					)(GroceryList);

module.exports = GroceryList;