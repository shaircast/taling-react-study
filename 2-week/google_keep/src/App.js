import React, { Component } from 'react';
import './App.css';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css'

class App extends Component {

  constructor(props){
    super(props)

    this.state ={
      savedNotes: ["sampleNote1", "sampleNote2", "sampleNote3"],
    }
  }

  handleSave = (writing) => {
    console.log('saved')
    const savedNotes = this.state.savedNotes
    this.setState({
      savedNotes: [
        ...savedNotes, // '...' unfolds folded items.
        writing
      ]
    })  
  }

  render() {
    return (
      <div>
        <Writing save={this.handleSave} />
        {this.state.savedNotes.map((note, index) => {
          return (<Note key={index} content={note}/>);
        })}
      </div>
    );
  }
}



class Writing extends Component{

  constructor(props){
    super(props)
    this.state ={
      writingNote: "placeholder",
    }
  }

  save = () => {
    console.log('saved')
  }

  handleSubmit = (event) => {
    this.props.save(this.state.writingNote);
    event.preventDefault(); // prevent default action. at this point: refreshing the page.
  }

  handleChange = (event) => {
    this.setState({
      writingNote: event.target.value
    })
    console.log(this.state.writingNote)
  }

  render(){
    return(
      <div>
        Writing
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange}/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}



class Note extends Component{

  render(){
    const content = this.props.content
    return(
      <div className="row">
        <div className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{content}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default App;