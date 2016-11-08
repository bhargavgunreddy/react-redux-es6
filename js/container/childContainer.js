import { connect } from 'react-redux';
import ChildComp from './../components/ChildComponent';
import addItem from './../actions.js';


// var ChildContainer = connect()(ChildComp)


const mapStateToProps = (state) => {
	// console.log("GL - >", state);
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

var ChildContainer = connect(	mapStateToProps,
					  	mapDispatchToProps
					)(ChildComp);



module.exports = ChildContainer;