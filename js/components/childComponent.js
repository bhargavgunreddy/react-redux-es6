/* Sample form which displays list of groceries needed
*/
import { connect } from 'react-redux';
import addItem from './../actions.js';

class ChildComp extends React.Component{

	constructor(dispatch, props, b){
		// console.log(arguments);
		super(dispatch, props, b);
		this.dispatch = dispatch;
	}

	handleAddItem(){
		var name = this.refs.item_name.value;
		var quantity = this.refs.item_quantity.value;

		// console.log("- n > ", name);
		// console.log("- q > ", quantity);
		this.dispatch.dispatch(addItem({"name": name, "quantity": quantity}));
	}

	render(){
		return <div>
			Item Name<input ref = "item_name" type = "text"/>
			Item Quantity<input ref = "item_quantity" type = "text"/>
			<button onClick = {this.handleAddItem.bind(this)}>SUBMIT</button>
		</div>;
	}
}

ChildComp = connect()(ChildComp)


module.exports = ChildComp;