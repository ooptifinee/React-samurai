const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

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
         if (action.type === ADD_POST){
             let newPost = {
                 message: this._state.newPostChange,
                 likesCount: 1
             }
             this._state.postData.push(newPost);
             this._state.newPostChange = '';
             this._callSubscriber(this._state)
         }
         else if (action.type === UPDATE_NEW_POST_TEXT){
             this._state.newPostChange = action.newText;
             this._callSubscriber(this._state)
         }
    }
}

export const addPostActionCreator = () => {
    let ADD_POST = 'ADD-POST';
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

//store - OOP
window.state = store;
export default store;