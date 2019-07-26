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
        inputValue3: '',
        inventoryList: [
          { name:"runningShoes",
            price: 29.99,
            image: "http://www.ireknit.com/images/product/zxflux-0617-02_2.jpg"
          },
          { name:"dressShoes",
            price: 25.99,
            image: "https://anthonysfashion-v1539209467.websitepro-cdn.com/wp-content/uploads/shoes-placeholder-300x300.jpg"
          },
          { name:"Moccies",
            price: 19.99,
            image: "https://cdn.shopify.com/s/files/1/0329/8469/products/womens-embossed-floral-moccasin-shoes-1.jpg?v=1483026666"
          }
        ]
  }
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
