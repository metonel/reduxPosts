import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createPost } from "../actions/postActions";

class Postform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titlu: "",
      text: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const post = {
      title: this.state.titlu,
      body: this.state.text
    };
    //apelam action-ul pt a crea postu

    this.props.createPost(post);
  }

  render() {
    return (
      <div>
        <h1>adauga post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>titlu</label>
            <br />
            <input
              type="text"
              name="titlu"
              onChange={this.onChange}
              value={this.state.titlu}
            />
          </div>
          <div>
            <label>text</label>
            <br />
            <textarea
              name="text"
              onChange={this.onChange}
              value={this.state.text}
            />
          </div>
          <br />
          <button type="submit">salveaza</button>
        </form>
        <br />
      </div>
    );
  }
}

Postform.PropTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(
  null,
  { createPost }
)(Postform);
