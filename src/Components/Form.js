import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props)
            
        this.state = {
            imgUrl: '',
            productName: '',
            price: ''
          }
        }
    handleImgChange(e) {
        this.setState({ imgUrl: e.target.value })
        //console.log(e.target.value)
    }
    handleNameChange(e) {
        this.setState({ product: e.target.value })
        console.log(e.target.value)
    }
    handlePriceChange(e) {
        this.setState({ price: e.target.value })
        console.log(e.target.value)
    }
    
    render (){
        
        return (
        <div className="form">
                         <input onChange={e => this.handleImgChange(e)} type='text' placeholder="IMG" />
                         <input onChange={e => this.handleNameChange(e)} type='text' placeholder="Product Name"/>
                         <input onChange={e => this.handlePriceChange(e)} type='text' placeholder="Price"/>
                         <button>Cancel</button>
                         <button>Add to Inventory</button>
        </div>
      )
    }
}