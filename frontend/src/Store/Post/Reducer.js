import * as ActionTypes from "./ActionType";

const initialSate = {
    loading: false,
    data: null,
    error: null,
    posts: [],
    post: null, 
}

export const PostReducer = (state = initialSate, action) => {

    switch (action.type) {
        case ActionTypes.POST_CREATE_REQUEST:
        case ActionTypes.USER_LIKE_POST_REQUEST:
        case ActionTypes.LIKE_POST_REQUEST:
        case ActionTypes.REPOST_POST_REQUEST:
        case ActionTypes.FIND_POST_BY_ID_REQUEST:
            return {...state, loading: true, error: null};

        case ActionTypes.POST_CREATE_FAILURE:
        case ActionTypes.USER_LIKE_POST_FAILURE:
        case ActionTypes.LIKE_POST_FAILURE:
        case ActionTypes.REPOST_POST_FAILURE:
        case ActionTypes.FIND_POST_BY_ID_FAILURE:
            return {...state, loading: true, error: action.payload};

        case ActionTypes.POST_CREATE_SUCCESS:
            return {...state, loading: true, error: null, posts: [action.payload, ...state.posts]};

        case ActionTypes.GET_ALL_POSTS_SUCCESS:
        case ActionTypes.GET_USERS_POSTS_SUCCESS:
            return {...state, loading: true, error: null, posts: action.payload};

        case ActionTypes.USER_LIKE_POST_SUCCESS:
            return {...state, loading: true, error: null, postsLikeados: action.payload};

        case ActionTypes.LIKE_POST_SUCCESS:
            return {...state, loading: true, error: null, like: action.payload};

        case ActionTypes.REPOST_POST_SUCCESS:
            return {...state, loading: true, error: null, repost: action.payload};

        case ActionTypes.FIND_POST_BY_ID_SUCCESS:
            return {...state, loading: true, error: null, post: action.payload};

        case ActionTypes.REPLY_POST_SUCCESS:
            return {...state, loading: true, error: null, comentario: action.payload};
    
        default:
            return state;
    }
}