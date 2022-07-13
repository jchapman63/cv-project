import React, { Component } from "react";
import "./styles/education.css";

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editor: "edit",
      editSections: 1,
      schools: [],
      majors: [],
      startDates: [],
      endDates: [],
      school: "",
      major: "",
      startDate: "",
      endDate: "",
    };
  }

  validateDate = (e) => {
    var startDate = document.getElementById("start").value;
    var endDate = document.getElementById("end").value;

    var startYear = parseInt(startDate.slice(0, 4));
    // var startMonth = parseInt(startDate.slice(5, 7));
    // var startDay = parseInt(startDate.slice(8, 10));

    var endYear = parseInt(endDate.slice(0, 4));
    // var endMonth = parseInt(endDate.slice(5, 7));
    // var endDay = parseInt(endDate.slice(8, 10));

    if (startYear >= endYear) {
      return false;
    }
    return true;
  };

  handleChange = (e) => {
    this.setState({
      school: document.getElementById("school").value,
      major: document.getElementById("major").value,
      startDate: document.getElementById("start").value,
      endDate: document.getElementById("end").value,
    });
  };

  EditEducation = () => {
    return (
      <div className="EditEducation-Cont">
        <form className="education-form" action="">
          <div>
            <ul className="education-first-list">
              <li>
                <label htmlFor="school">School</label>
                <input
                  onChange={this.handleChange}
                  type="text"
                  name="school"
                  id="school"
                  defaultValue={this.state.school}
                />
              </li>

              <li>
                <label htmlFor="major">Area of Study</label>
                <input
                  onChange={this.handleChange}
                  type="text"
                  name="major"
                  id="major"
                  defaultValue={this.state.major}
                />
              </li>
            </ul>
          </div>
          <div>
            <ul className="dates-list">
              <li>
                <label htmlFor="start">Start</label>
                <input
                  onChange={this.handleChange}
                  type="date"
                  name="start"
                  id="start"
                  defaultValue={this.state.startDate}
                />
              </li>

              <li>
                <label htmlFor="end">End</label>
                <input
                  onChange={this.handleChange}
                  type="date"
                  name="end"
                  id="end"
                  defaultValue={this.state.endDate}
                />
              </li>
            </ul>
          </div>
        </form>
      </div>
    );
  };

  SubmittedEducation = () => {
    return (
      <div className="sub-wrapper">
        <div className="school">
          <h1>{this.state.school}</h1>
          <div className="dates">
            <p>
              {this.state.startDate} - {this.state.endDate}
            </p>
          </div>
          <h2>{this.state.major}</h2>
        </div>
      </div>
    );
  };

  render() {
    if (this.props.editor === "edit") {
      return (
        <div>
          <h1 className="header">Education</h1>
          <this.EditEducation />
        </div>
      );
    } else {
      return (
        <div>
          <h1 className="header">Education</h1>
          <this.SubmittedEducation />
        </div>
      );
    }
  }
}

export default Education;
