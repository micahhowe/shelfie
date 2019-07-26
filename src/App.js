import React from 'react';
import './App.css';
import Dashboard from "./Components/Dashboard"
import Product from "./Components/Product"
import Form from "./Components/Form"
import Header from "./Components/Header"

function App() {
  return (
    <div className="App">
     <Dashboard />
     <Product />
     <Form />
     <Header />
    </div>
  );
}

export default App;
