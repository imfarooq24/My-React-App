import React, { Component } from 'react';
import classes from './App.css';
import PersonComp from './PersonComp/PersonComp';


class App extends Component {
  state ={ 
    person: [
      {id:'1',name: "Clara",age:21},
      {id:'2',name: "Ash",age:22},
      {id:'3',name: "Jenny",age:23},
      {id:'4',name: "Messi",age:24}
    ], 
    show: false
  } 
  inputNameHandler = (event,id) =>{ 
    const personIndex = this.state.person.findIndex(p =>{
      return p.id === id;
      });

      const findPerson = {
        ...this.state.person[personIndex]
      };
      findPerson.name=event.target.value;

      const person = [...this.state.person];
      person[personIndex]=findPerson;

      this.setState({person:person});
  }
  ToggleNameHandler = () => {
    const doesShow = this.state.show;
    this.setState({show: !doesShow})
  }
  DeleteNameHandler = (personIndex) => {
    const person = [...this.state.person];
    person.splice(personIndex,1);
    this.setState({person:person});
  }

  render() {

    let person =null;
    let btnClass='';

    if(this.state.show) {
      person = (
        <div>
          {
            this.state.person.map((singlePerson,index) => {
              return <PersonComp
                name={singlePerson.name}
                key={singlePerson.id}
                age={singlePerson.age}
                inputName={(event) => this.inputNameHandler(event,singlePerson.id)}
                click={() => this.DeleteNameHandler(index)}/>
          })
        }
        </div>
        );
        btnClass=classes.Red;
      }
          const assignedClasses = [];

          if(this.state.person.length<3){
            assignedClasses.push(classes.red);
          }
          if(this.state.person.length<2){
            assignedClasses.push(classes.bold);
          }

    return (
        <div id="root">
          <div className={classes.App} >
            <h1>Hey im a react app</h1>
            <p className={assignedClasses.join(' ')}>This is really working</p>
            <button 
              className={btnClass}
              onClick={this.ToggleNameHandler}>
                Change Names
            </button>
            {person}
          </div>
        </div>
    );  
  }
}

export default App;