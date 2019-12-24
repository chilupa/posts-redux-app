import React from "react";
import "./App.css";
import PostForm from "./components/PostForm";
import Post from "./components/Post";

import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PostForm />
        <hr />
        <Post />
      </div>
    </Provider>
  );
}

export default App;
