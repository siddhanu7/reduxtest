import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import StateCounter from "./components/StateCounter"
import { Provider } from 'react-redux'; //provider provides the data
import ReduxCounter from './components/ReduxCounter';
import { createStore } from 'redux'; //this will allow us to create the store
//the below gives the initial state
const initialState ={
  count: 0
};
// the reducer function will assign the initial state, take an action (action is a keyword in redux) and return the updated state
function reducer(state = initialState, action) {
  switch(action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1   //switch statement is a fancy if/else 
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    default:
      return state;  //this will all be passed back into the reducer and change the state
  }
}
const store = createStore(reducer);
ReactDOM.render(
  <React.StrictMode>
    <Provider store ={store}>
    {/* <StateCounter /> */}
    <ReduxCounter />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
