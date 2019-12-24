import React, { Component } from "react";
import PropTypes from "prop-types";
import "../styles/Post.scss";

import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";

class Post extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }
  render() {
    return (
      <div>
        <h1>Posts</h1>
        {this.props.posts.map((post, index) => (
          <div key={index} className="Card">
            <b>{post.title}</b>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

Post.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
};

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
});

export default connect(mapStateToProps, { fetchPosts })(Post);
