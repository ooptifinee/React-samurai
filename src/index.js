import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
import state from "./redux/state";
// import {updateNewPostText} from "./redux/state"
import {rerenderEntireTree} from "./render";

rerenderEntireTree(state)