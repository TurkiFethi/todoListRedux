// import React from 'react';
// import './todoitem.css';

// export default class Todoitem extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             isToggleOn: true,
//             task: []

//         }
//         this.add = this.add.bind(this);
//         this.CompleteClick = this.CompleteClick.bind(this);
//         this.deleteClick=this.deleteClick.bind(this);
//     }
   
//     add (){
//         if (this.nameTextInput !== null) {
//           this.setState({
//             task: this.state.task.concat(this.nameTextInput.value)
    
//           });
//           console.log(this.state.task)
//         }
//       }

//       CompleteClick() {
//         this.setState(prevState => ({
//           isToggleOn: !prevState.isToggleOn
//         }));
//       }

//       deleteClick(index){
//         const tasks = this.state.task
//         tasks.splice(index, 1)    
//         this.setState({tasks})
//       }
//     render() {
//         let tasks = this.state.task.map((tache,index) => {
//             return <li>
//                       <ul className="liste"> 
//                       <button className="button" onClick={this.CompleteClick}>{this.state.isToggleOn ? 'Complete' : 'Undo'}</button>
//                       <input type="button"  className="button" value="Delete" onClick={event=>this.deleteClick(index,event)}/>
//                       {tache}
//                      </ul>
//                    </li>
//                   });
//         return (
//             <div>
//             <div className="Head">
//             <p className="titre">To-Do App!</p>
//             <p className="sousTitre">Add new To-Do</p>
//             <form className="w3-container">
//                 <p>
//                 <input className="w3-input w3-border" name="first" placeholder="Enter new task" type="text" ref={(ref) => this.nameTextInput = ref}/>
//                 </p>
//                 <p>
//                 <input type="button"  className="add" value="ADD" onClick={this.add}/>
//                 </p>
//             </form>
//             </div>
//             <h2>Let's get some work done!</h2>
//             <div className="response">
                
//                <ul>{tasks}
               
//                </ul>
//             </div>
//         </div>
//         )
//     }
// }



