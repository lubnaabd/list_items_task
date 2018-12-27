import React, { Component } from 'react';
import ItemList from './Component/ItemList';
import appStore from './Store';
import './App.css';

class App extends Component {
  state = {}

  // render Component ItemList
  render() {
    return (
      <div>
        <h1 className="header"> List Of Items</h1>
        <ItemList store={appStore} />
      </div>
    );
  }
}

export default App;
