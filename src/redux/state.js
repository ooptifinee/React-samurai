import {rerenderEntireTree} from "../render";

let state = {
    postData: [
        {message: 'Hi', likesCount: '12'},
        {message: 'It\'s my first post', likesCount: '10'},
    ],
    newPostChange: '',
    dialogsData: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'user2'},
        {id: 3, name: 'user3'},
        {id: 4, name: 'user4'}
    ],
    messagesData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hi'},
        {id: 3, message: 'Hi'},
        {id: 4, message: 'Hi'}
    ]
}

window.state = state;

export let addPost = () => {
    let newPost = {
        message: state.newPostChange,
        likesCount: 0
    }
    state.postData.push(newPost);
    state.newPostChange = '';
    rerenderEntireTree(state)
}

export let updateNewPostText = (newText) => {
    state.newPostChange = newText;
    rerenderEntireTree(state)
}

export default state;