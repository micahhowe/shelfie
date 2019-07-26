import React, { Component } from 'react'
import Product from "./Product"

export default class Dashboard extends Component {
    constructor(props) {
        super(props)
        
        }

    render (){
        //console.log(this.props)
        return (
        <div className="dashboard">
        {this.props.inventoryList.map(el => (
            <Product
            id={el.id}
            name={el.name}
            image_url={el.image_url}
            price={el.price}
            key={el.product_id} 
            deleteProduct={this.props.deleteProduct}
            //I need to pass down everything that might need to be used by the meme component
            />
))}         </div>
      )
    }
}