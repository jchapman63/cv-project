import React, { Component } from "react";
import "./styles/intro.css";

class IntroEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      name: "",
      phone: "",
      email: "",
      website: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      name: document.getElementById("name").value,
      title: document.getElementById("title").value,
      phone: document.getElementById("phone").value,
      email: document.getElementById("email").value,
      website: document.getElementById("website").value,
    });
  };

  EditIntro = () => {
    return (
      <div>
        <form
          onSubmit={this.toSubmit}
          className="intro-form"
          action="editIntro"
        >
          <div className="intro-name-edit">
            <ul className="intro-ul">
              <li>
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  onChange={this.handleChange}
                  type="text"
                  defaultValue={this.state.name}
                />
              </li>
              <li>
                <label htmlFor="name">Title</label>
                <input
                  id="title"
                  onChange={this.handleChange}
                  type="text"
                  defaultValue={this.state.title}
                />
              </li>
            </ul>
          </div>
          <div className="intro-contact-edit">
            <ul className="intro-ul">
              <li>
                <label htmlFor="phone">Phone Number</label>
                <input
                  id="phone"
                  onChange={this.handleChange}
                  type="number"
                  defaultValue={this.state.phone}
                />
              </li>
              <li>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  onChange={this.handleChange}
                  type="text"
                  defaultValue={this.state.email}
                />
              </li>
              <li>
                <label htmlFor="website">Website</label>
                <input
                  id="website"
                  onChange={this.handleChange}
                  type="text"
                  defaultValue={this.state.website}
                />
              </li>
            </ul>
          </div>
        </form>
      </div>
    );
  };

  Submitted = () => {
    return (
      <div className="intro-section">
        <div className="intro-name-submitted">
          <h1 className="submitted-header">{this.state.name}</h1>
          <h2>{this.state.title}</h2>
        </div>
        <div className="intro-contact-submitted">
          <p>Phone: {this.state.phone}</p>
          <p>Email: {this.state.email}</p>
          <p>Website: {this.state.website}</p>
        </div>
      </div>
    );
  };

  render() {
    if (this.props.editor === "edit") {
      return <this.EditIntro />;
    } else {
      return <this.Submitted />;
    }
  }
}

export default IntroEdit;
