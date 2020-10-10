import React, { Component } from 'react';
import './App.css';
import ValidationComp from './ValidationComponent/ValidationComp';
import CharComp from './CharComp/CharComp';


class App extends Component {

  state = {
    userInput: ''
  }

  inputChangeHandler = (event) =>  {
    this.setState({userInput:event.target.value});
  }
  deleteCharHandler=(index)=>{
    const text = this.state.userInput.split('');
    text.splice(index,1);
    const updatedText = text.join('');
    this.setState({userInput:updatedText});
  }
  render() {
    const charList = this.state.userInput.split('').map((ch,index) => {
      return <CharComp 
        character={ch} 
        key={index}
        clicked={() => this.deleteCharHandler(index)} />
    }); 

    return (

      <div className="App">
        <h2>Welcome to Task-2</h2>
        <input 
         type="text" 
         onChange={this.inputChangeHandler}
         value={this.state.userInput}/>
      
        <p> {this.state.userInput } </p>
      
        <ValidationComp inputLength={this.state.userInput.length} />
      
        {charList}
      </div>  
    )
  }
}

export default App;