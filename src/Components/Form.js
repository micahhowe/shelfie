import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props)
            
        this.state = {
            image_url: '',
            name: '',
            price: ''
          }
        }
    addProduct() {
            const body = {
              image_url: this.state.image_url,
              name: this.state.name,
              price: this.state.price
            }
            this.props.addProduct(body)
            this.resetText()
            //this.setState({ toggle: true })
          }
    handleImgChange(e) {
        this.setState({ image_url: e.target.value })
        console.log(e.target.value)
    }
    handleNameChange(e) {
        this.setState({ name: e.target.value })
        console.log(e.target.value)
    }
    handlePriceChange(e) {
        this.setState({ price: e.target.value })
        console.log(e.target.value)
    }
    resetText() {
        let text = document.getElementById('text')
        let text1 = document.getElementById('text1')
        let text2 = document.getElementById('text2')
        text.value = ''
        text1.value = ''
        text2.value = ''
    }
    
    render (){
        
        return (
        <div className="form">
                         <input id="text" onChange={e => this.handleImgChange(e)} type='text' placeholder="IMG" />
                         <input id="text1" onChange={e => this.handleNameChange(e)} type='text' placeholder="Product Name"/>
                         <input id="text2" onChange={e => this.handlePriceChange(e)} type='text' placeholder="Price"/>
                         <button onClick={() => this.resetText()}>Cancel</button>
                         <button onClick={() => this.addProduct()}>Add to Inventory</button>
        </div>
      )
    }
}