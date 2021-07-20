// import {rerenderEntireTree} from "../render";

let store = {
    _state: {
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
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {

    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action){
         if (action.type === 'ADD-POST'){
             let newPost = {
                 message: this._state.newPostChange,
                 likesCount: 1
             }
             this._state.postData.push(newPost);
             this._state.newPostChange = '';
             this._callSubscriber(this._state)
         }
         else if (action.type === 'UPDATE-NEW-POST-TEXT'){
             this._state.newPostChange = action.newText;
             this._callSubscriber(this._state)
         }
    }
}

//store - OOP
window.state = store;
export default store;