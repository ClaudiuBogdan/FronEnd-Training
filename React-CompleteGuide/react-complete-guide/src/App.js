import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
class App extends Component {
  state = {
    persons: [
      {
        name: "Emanuel",
        age: "33"
      },
      {
        name: "Beatris",
        age: 24
      },
      {
        name: "Vlad",
        age: 18
      }
    ]
  };

  switchNameHandler = () => {
    // console.log("Clicked!");
    const indexArr = this.getRandomIndex(3);
    this.setState({
      persons: [
        {
          name: this.state.persons[indexArr[0]].name,
          age: this.state.persons[indexArr[0]].age
        },
        {
          name: this.state.persons[indexArr[1]].name,
          age: this.state.persons[indexArr[1]].age
        },
        {
          name: this.state.persons[indexArr[2]].name,
          age: this.state.persons[indexArr[2]].age
        }
      ]
    }); //state.persons[0].name = "Maximilian";
  };

  getRandomIndex = range => {
    let numberSequence = [...Array(range).keys()];
    for (let i = numberSequence.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [numberSequence[i], numberSequence[j]] = [
        numberSequence[j],
        numberSequence[i]
      ];
    }
    return numberSequence;
  };
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react app!</h1>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
