import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom'

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-item'>
                    <Route path='/profile' render={() => <Profile postData={props.state.postData}
                                                                  newPostChange={props.state.newPostChange}
                                                                  addPost={props.addPost}
                                                                  updateNewPostText={props.updateNewPostText}/>}/>
                    <Route path='/dialogs'
                           render={() => <Dialogs chatMesData={props.state.messagesData}
                                                  chatDialData={props.state.dialogsData}/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}
export default App;