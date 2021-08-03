import React from "react";
import store from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>

            <App state={store._state}
                 dispatch={store.dispatch.bind(store)}
                 store={store}/>

        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);