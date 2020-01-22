import React, { Component } from 'react'
import Add from './component/add.js/Add'
import ListTodo from './component/listTodo/ListTodo'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        isToggleOn: true,
        task: []

    }
}
add=(newTodo)=>{
  if (newTodo !== null) {
    this.setState({
      task: this.state.task.concat({todo:newTodo,id:Date.now(),isToggleOn:this.state.isToggleOn})

    });
    console.log(this.state.task)
  }
}
deleteClick=(index)=>{
  const tasks = this.state.task
  tasks.splice(index, 1)    
  this.setState({tasks})
}
togleHandler = (indice)=>{
  let arr=this.state.task
  arr.map((el,i)=>indice===i?el.isToggleOn=!el.isToggleOn:el)
  this.setState({task: arr})
}
  render() {
    return (
      <div>
        <Add add={this.add}/>
        <ListTodo tabTask={this.state.task} deleteClick={this.deleteClick} tgl={this.togleHandler}/>
      </div>
    )
  }
}
