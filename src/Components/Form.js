import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props)
            
        this.state = {
            inputValue1: ' ',
            inputValue2: ' ',
            inputValue3: ' '
          }
        }
    handleChange(e) {
        this.setState({ inputValue1: e.target.value })
        //console.log(e.target.value) // I was using this to showcase the onchange 
    }
    
    render (){
        return (
        <div className="form">
                         <input onChange={e => this.handleChange(e)} type='text' />
                         <input onChange={e => this.handleChange(e)} type='text' />
                         <input onChange={e => this.handleChange(e)} type='text' />
        </div>
      )
    }
}