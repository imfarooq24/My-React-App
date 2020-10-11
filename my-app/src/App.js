import React, { Component } from 'react';
import './App.css';
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
    const myStyle = {
      backgroundColor:'green',
      color:'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer'
    };
    let person =null;

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
         myStyle.backgroundColor='red'
      }
          const classes = [];

          if(this.state.person.length<3){
            classes.push('red');
          }
          if(this.state.person.length<2){
            classes.push('bold');
          }

    return (
      <div id="root">
        <div className="App">
          <h1>Hey im a react app</h1>
          <p className={classes.join(' ')}>This is really working</p>
          <button 
          style={myStyle}
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


          /* <PersonComp name={this.state.person[0].name}
          age={this.state.person[0].age}
          inputName={this.inputNameHandler }/>
  
          <PersonComp name={this.state.person[1].name}
          age={this.state.person[1].age}
          inputName={this.inputNameHandler }/>
  
          <PersonComp name={this.state.person[2].name}
          inputName={this.inputNameHandler }
          age={this.state.person[2].age}/>
  
          <PersonComp name={this.state.person[3].name}
          age={this.state.person[3].age}
          inputName={this.inputNameHandler }/> */
          /*{ {
            this.state.show === true ?
            <div>
              <PersonComp name={this.state.person[0].name}
              age={this.state.person[0].age}
              inputName={this.inputNameHandler }/>

              <PersonComp name={this.state.person[1].name}
              age={this.state.person[1].age}
              inputName={this.inputNameHandler }/>

              <PersonComp name={this.state.person[2].name}
              inputName={this.inputNameHandler }
              age={this.state.person[2].age}/>

              <PersonComp name={this.state.person[3].name}
              age={this.state.person[3].age}
              inputName={this.inputNameHandler }/>
            </div> : null
          } }*/