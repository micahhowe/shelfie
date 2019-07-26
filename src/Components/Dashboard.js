import React, { Component } from 'react'
import Product from "./Product"

export default class Dashboard extends Component {
    
    render (){
        return (
        <div className="dashboard">
        {this.props.inventoryList.map(el => (
            <Product
            name={el.name}
            image={el.image_url}
            price={el.price}
            key={el.product_id} 
            //I need to pass down everything that might need to be used by the meme component
    
            />
))}         </div>
      )
    }
}