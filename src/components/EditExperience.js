import React, { Component } from "react";
import "./styles/EditExperience.css";

class EditExperience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.id,
      editor: this.props.editor,
      company: "",
      position: "",
      description: "",
      startDate: "",
      endDate: "",
      checkBox: "",
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      company: document.getElementById("company" + this.state.id).value,
      position: document.getElementById("position" + this.state.id).value,
      description: document.getElementById("description" + this.state.id).value,
      startDate: document.getElementById("startDate" + this.state.id).value,
      endDate: document.getElementById("endDate" + this.state.id).value,
      checkBox: document.getElementById("checkBox" + this.state.id).checked,
    });
  };

  EditMode = () => {
    let remover;
    if (!this.props.beginner) {
      remover = (
        <button
          className="deleteButton"
          onClick={(e) => {
            e.preventDefault();
            this.props.remover(this.state.id);
          }}
        >
          Delete
        </button>
      );
    } else {
      remover = <></>;
    }
    return (
      <div className="ex-cont">
        <form action="">
          <div className="job-form">
            <div className="comp-pos">
              <ul>
                <li>
                  <label htmlFor="company">Company</label>
                  <input
                    type="text"
                    id={"company" + this.state.id}
                    defaultValue={this.state.company}
                    onChange={this.handleChange}
                  />
                </li>
                <li>
                  <label htmlFor="title">Position</label>
                  <input
                    type="text"
                    id={"position" + this.state.id}
                    defaultValue={this.state.position}
                    onChange={this.handleChange}
                  />
                </li>
              </ul>
            </div>

            <div className="time-frame">
              <ul>
                <li>
                  <label htmlFor="start">Start Date</label>
                  <input
                    type="date"
                    name=""
                    id={"startDate" + this.state.id}
                    defaultValue={this.state.startDate}
                    onChange={this.handleChange}
                  />
                </li>
                <li>
                  <label htmlFor="end">End Date</label>
                  <input
                    className="end"
                    type="date"
                    defaultValue={this.state.endDate}
                    onChange={this.handleChange}
                    id={"endDate" + this.state.id}
                  />
                </li>

                <label htmlFor="current">Currently Hold Position</label>
                <input
                  type="checkbox"
                  name=""
                  id={"checkBox" + this.state.id}
                  defaultValue={this.state.checkBox}
                  onChange={this.handleChange}
                />
              </ul>
            </div>

            <div className="desc-cont">
              <label htmlFor="description">
                Description of Responsibilities
              </label>
              <textarea
                name=""
                id={"description" + this.state.id}
                cols="30"
                rows="10"
                defaultValue={this.state.description}
                onChange={this.handleChange}
              ></textarea>
            </div>

            {remover}
          </div>
        </form>
      </div>
    );
  };

  SubmittedMode = () => {
    let endDate;
    if (this.state.checkBox) {
      endDate = "Currently Held Position";
    } else {
      endDate = this.state.endDate;
    }
    return (
      <div className="submitted-exs ex-cont">
        <h1 className="company">{this.state.company}</h1>
        <h2>{this.state.position}</h2>
        <p>
          {this.state.startDate} - {endDate}
        </p>
        <label htmlFor="">Description of Responsibilities</label>
        <div className="desc-sub-cont">
          <p className="description-sub">{this.state.description}</p>
        </div>
      </div>
    );
  };

  render() {
    if (this.props.editor === "edit") {
      return <this.EditMode />;
    } else {
      return <this.SubmittedMode />;
    }
  }
}

export default EditExperience;
