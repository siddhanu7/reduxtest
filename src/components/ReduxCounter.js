import React from 'react';
import { connect } from 'react-redux'; //needed to use react redux
//This is the same counter but with redux
class ReduxCounter extends React.Component {
  increment = () => {
    this.props.dispatch({type: 'INCREMENT'});
  }
//both of the statements above and below tie to index.js (keep action names in all caps "INCREMENT" and "DECREMENT")
  decrement = () => {
    this.props.dispatch({type: 'DECREMENT'});
  }
  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    )
  }
}
// the below function is the middle man between redux store and the component trying to access the state
function mapStateToProps(state) {
    return {
      count: state.count
    };
  }
  export default connect(mapStateToProps)(ReduxCounter);
