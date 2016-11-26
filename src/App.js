import React, { Component } from 'react';
import {connect} from 'react-redux'
import logo from './logo.svg';
import './App.css';
import ShoppingList from './ShoppingList';

const connector = connect()
const connectedComponent = connector(App)

export default connectedComponent;

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React Shopping List</h2>
        </div>
        <ShoppingList items={this.props.shoppingListItems} />
      </div>
    );
  }
}

function mapStateToProps(state){
  return {shoppingListItems: state.shoppingListItems}
}

//export default App;
