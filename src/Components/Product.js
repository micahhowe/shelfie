import React, { Component } from 'react'

export default class Product extends Component {
    constructor(props) {
        super(props)
        
    }
    
    render (){
        //console.log(deleteProduct)
        let { deleteProduct } = this.props
        return (
        <div className="product">
             <div className="img">
                <img src={this.props.image_url} alt="Fancy Shoes" />
            </div>
            <div className="product-info">
                <h2>{this.props.name}</h2>
                <p>{this.props.price}</p>
                <button onClick={() => deleteProduct(this.props.id)}>Delete</button>
            </div>
        </div>
      )
    }
}