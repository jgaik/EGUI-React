import React, { Component } from 'react';
import Notes from './components/Notes';
import Filter from './components/Filter';
import './App.css';

class App extends Component {

  constructor() {
    super();
  }
  
  componentDidMount() {
    this.clearFilter();
  }

  render() {
    return (
      <div className="App">
      </div>
    );
  }

  clearFilter = () => {
    this.setState( { 
      filter : {
        category: '<Any>',
        dateFrom: new Date(),
        dateTo: new Date(),
      } 
    });
  }
}

export default App;
