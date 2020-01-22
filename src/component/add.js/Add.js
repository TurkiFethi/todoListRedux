import React, { Component } from 'react'
import './add.css'

export default class Add extends Component {
    constructor(props){
        super(props)
            this.state={
                text:""

            }  
    }

    handleChange=(event)=>{
        this.setState({
            text:event.target.value,
            id:""
        })
    }
    render() {
        return (
            <div>
                 <div className="Head">
            <p className="titre">To-Do App!</p>
            <p className="sousTitre">Add new To-Do</p>
            <form className="w3-container">
               
                <input className="w3-input w3-border" name="first" placeholder="Enter new task" type="text" value={this.state.text} onChange={this.handleChange} />
                <input type="button"  className="add" value="ADD" onClick={()=>this.props.add(this.state.text)}/>
                
            </form>
            </div>
            <h2>Let's get some work done!</h2>
            </div>
        )
    }
}
