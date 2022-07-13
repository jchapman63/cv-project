import React, { Component } from "react";
import IntroEdit from "./components/Intro";
import Education from "./components/Education";
import ExperienceOrganizer from "./components/ExperienceOrganizer";

class App extends Component {
  constructor() {
    super();

    this.state = {
      editor: "edit",
    };
  }

  changeEdit = (e) => {
    e.preventDefault();

    if (this.state.editor === "edit") {
      this.setState({
        editor: "submit",
      });
    } else {
      this.setState({
        editor: "edit",
      });
    }
  };

  render() {
    let changer;
    if (this.state.editor === "edit") {
      changer = (
        <button className="changer" onClick={this.changeEdit}>
          Submit
        </button>
      );
    } else {
      changer = (
        <button className="changer" onClick={this.changeEdit}>
          Edit
        </button>
      );
    }
    return (
      <div>
        <IntroEdit editor={this.state.editor} />
        <hr />
        <Education editor={this.state.editor} />
        <hr />
        <ExperienceOrganizer editor={this.state.editor} />
        {changer}
      </div>
    );
  }
}

export default App;
