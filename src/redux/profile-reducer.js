const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT:
            state.newPostChange = action.newText;
            return state;
        case ADD_POST:
            let newPost = state.newPostChange
            state.newPostChange = ""
            state.postData.push({
                    message: newPost,
                    likesCount: 1
                });
            return state;
        default:
            return state;
    }
}

export default profileReducer;