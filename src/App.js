import React, {Component} from 'react';
import './App.css';
import Dashboard from "./Components/Dashboard"
import Product from "./Components/Product"
import Form from "./Components/Form"
import Header from "./Components/Header"

class App extends Component {
  constructor() {
    super()

      this.state = {
        inputValue1: '',
        inputValue2: '',
        inputValue3: ''
      }
  }
  render(){
      return (
        <div className="App">
        <Dashboard />
        <Product />
        <Form />
        <Header />
        </div>
      );
    }
  }


export default App;
