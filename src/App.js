import React, {Component} from 'react';
import './App.css';
import Dashboard from "./Components/Dashboard"
import Form from "./Components/Form"
import Header from "./Components/Header"
import axios from 'axios'


class App extends Component {
  constructor() {
    super()

      this.state = {
        inputValue1: '',
        inputValue2: '',
        inputValue3: '',
        inventoryList: []
        
  }
}
componentDidMount() {
  axios.get('/api/inventory').then(res => {
    this.setState({
      inventoryList: res.data
    })
  }).catch(function() {
    console.log('SQL table not found. Alert the authorities'); // "oh, no!"
  })
}
  render(){
      return (
        <div className="App">
        <Dashboard inventoryList={this.state.inventoryList}/>
        <Form />
        <Header />
        </div>
      );
    }
  }


export default App;
