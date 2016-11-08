import { connect } from 'react-redux';
import GroceryList from './../components/Grocery';


const mapStateToProps = (state) => {
	 console.log("GL - >", state);
  return {
    items: state ? state.items: []
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

var GroceryContainer = connect(	mapStateToProps,
					  	mapDispatchToProps
					)(GroceryList);

module.exports = GroceryContainer;