import React, { Component } from "react";
import "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      savedNotes: [
        {
          id: 1,
          title: "깔깔유머",
          content: "아이유는 뉘집 아이유? "
        },
        {
          id: 2,
          title: "이메일 관리",
          content: "이메일은 바로 답장하거나 지운다. 라이선스 같은 건 보관할 곳이 마땅치 않아서 보관 폴더를 만들어 보관한다. 지금 당장 답변이 곤란한 건 언제까지 답변을 주겠다는 답장을 보낸 후 지운다. 그리고 업무 일지에 TODO로 올려둔다. 즉, 할 일을 이메일로 두지 않는다."
        },
        {
          id: 3,
          title: "The Beauty of Structure",
          content: "Experienced designers often complain that design thinking is too structured and linear. And for them, that’s certainly true. But managers on innovation teams generally are not designers and also aren’t used to doing face-to-face research with customers, getting deeply immersed in their perspectives, co-creating with stakeholders, and designing and executing experiments. Structure and linearity help managers try and adjust to these new behaviors."
        }
      ]
    };
  }
  handleSubmit = (userInputTitle, userInputContent) => {
    const savedNotes = this.state.savedNotes;
    this.setState({
      savedNotes: [
        ...savedNotes,
        {
          id: savedNotes.length + 1,
          title: userInputTitle,
          content: userInputContent
        }
      ]
    });
  };
  render() {
    return (
      <div>
        <Writing submit={this.handleSubmit} />
        <div className="row">
          {this.state.savedNotes.map((note) => (
            <Note key={note.id} title={note.title} content={note.content} />
          ))}
        </div>
      </div>
    );
  }
}
class Writing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInputTitle: "",
      userInputContent: "",
    };
  }
  handleSubmit = e => {
    console.log("submitted");
    this.props.submit(this.state.userInputTitle, this.state.userInputContent);
    this.setState({userInputTitle: "", userInputContent: ""});
    console.log(e.target);
    e.preventDefault();
  };
  handleTitleChange = event => {
    this.setState({
      userInputTitle: event.target.value
    });
    console.log("userInputTitle is " + event.target.value);
  };
  handleContentChange = event => {
    this.setState({
      userInputContent: event.target.value
    });
    console.log("userInputContent is " + event.target.value);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}  style={{margin: 100}}>
          <div className="input-field">
            <input
              type="text"
              value={this.state.userInputTitle}
              onChange={this.handleTitleChange}
              placeholder="제목"
            />
            <textarea
              type="text"
              className="materialize-textarea"
              value={this.state.userInputContent}
              onChange={this.handleContentChange}
              placeholder="메모 내용"
            ></textarea>
          </div>
          <input style={{width: "100%"}} className="btn red" type="submit" value="메모하기"/>
        </form>
      </div>
    );
  }
}
class Note extends Component {
  render() {
    const title = this.props.title;
    const content = this.props.content;
    return (
      <div className="col s12 m6 l3">
        <div className="card yellow lighten-4">
          <div className="card-content black-text"> <h5>{title}</h5> </div>
          <div className="card-content black-text"> {content} </div>
        </div>
      </div>
    );
  }
}
export default App;
