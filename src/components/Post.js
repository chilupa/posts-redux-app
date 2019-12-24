import React, { Component } from "react";
import "../styles/Post.scss";

class Post extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    console.log("Post component mounted");
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => this.setState({ posts: data }));
  }
  render() {
    return (
      <div>
        <h1>Posts</h1>
        {this.state.posts.map((post, index) => (
          <div key={index} className="Card">
            <b>{post.title}</b>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Post;
