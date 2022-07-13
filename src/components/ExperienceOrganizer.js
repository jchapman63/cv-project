import React, { Component } from "react";
import uniqid from "uniqid";
import EditExperience from "./EditExperience";
import "./styles/ExperienceOrganizer.css";

class ExperienceOrganizer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editor: "edit",
      job: {
        id: uniqid(),
        component: <EditExperience editor={this.props.editor} id={uniqid()} />,
      },
      jobs: [],
    };
  }

  add = (e) => {
    e.preventDefault();
    this.setState({
      job: {
        component: <EditExperience editor={this.props.editor} id={uniqid()} />,
        id: uniqid(),
      },
      jobs: this.state.jobs.concat(this.state.job),
    });
  };

  deleteJob = (id) => {
    const newList = this.state.jobs.filter((job) => job.id !== id);
    this.setState({
      jobs: newList,
    });
  };

  render() {
    let adder;
    if (this.props.editor === "edit") {
      adder = <button onClick={this.add}>Add Job</button>;
    } else {
      console.log("changed");
      adder = <></>;
    }
    return (
      <div className="exp-cont">
        <h1 className="section-title">Work Experience</h1>
        {adder}
        <EditExperience
          editor={this.props.editor}
          id={uniqid()}
          beginner={true}
        />
        {this.state.jobs.map((job) => {
          return (
            <div className="job-form" key={job.id}>
              {/* {job.component} */}
              <EditExperience
                editor={this.props.editor}
                id={job.id}
                beginner={false}
                remover={this.deleteJob}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default ExperienceOrganizer;
