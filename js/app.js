
// import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import ChildContainer from './container/ChildContainer';
import GroceryContainer from './container/GroceryContainer';
import store from './store.js';


class Shop extends React.Component{

	render(){
		console.log("Shop --> ",this.props);
		return <div>
					<ChildContainer/>
					<GroceryContainer />	
				</div>;
	}
}



ReactDOM.render(
  <Provider store={store}>
    <Shop />
  </Provider>,
  document.getElementById('shop')
);

