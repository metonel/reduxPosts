import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux"; //conecteaza componenta de store-ul redux provenita din componenta Provider
import { fetchPosts } from "../actions/postActions";

class Posts extends Component {
  componentWillMount() {
    //life cycle methon care se executa cand componenta e mount-uite
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    //life cycle methon care se executa cand componenta primeste proprietati noi (la noi, postul nou din redux)
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }
  render() {
    const postari = this.props.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    )); //cand facem loop prin elemente tre sa dam un key altfel react da eroare
    return (
      <div>
        <h1>posturi</h1>
        {postari}
      </div>
    );
  }
}

Posts.PropTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
};

const mapStateToProps = state => ({
  //nu mai are constructor, deci nici state pt a comunica cu componenta, si aici legam din redux in loc de state-ul componentei, la proprietati. (si nu mai folosim ca in react this.state ci this.props)
  posts: state.posts.items, //posts vine din reducer(roorReducer) in index.js
  newPost: state.posts.item //asta ii din componenta postform, si cu redux-ul e adusa si aici
});

export default connect(
  mapStateToProps,
  { fetchPosts }
)(Posts); //conectarea componentei(Posts) la store-ul redux
