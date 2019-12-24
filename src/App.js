import React from "react";
import "./App.css";
import PostForm from "./components/PostForm";
import Post from "./components/Post";

function App() {
  return (
    <div className="App">
      <PostForm />
      <hr />
      <Post />
    </div>
  );
}

export default App;
