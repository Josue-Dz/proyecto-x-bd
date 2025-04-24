import * as ActionTypes from "./ActionType";

const initialState = {
    user: null,
    loading: false,
    error: null,
    jwt: null,
}

export const authReducer = (state = initialState, action)=>{
    switch (action.type){

        case ActionTypes.LOGIN_USUARIO_REQUEST:
        case ActionTypes.REGISTER_USUARIO_REQUEST:
        case ActionTypes.GET_USUARIO_PERFIL_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            }
  
        case ActionTypes.LOGIN_USUARIO_SUCCESS:
        case ActionTypes.REGISTER_USUARIO_SUCCESS:
            return {
                ...state,
                loading: true,
                error: null
            }

        case ActionTypes.GET_USUARIO_PERFIL_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                user: action.payload
            }

        case ActionTypes.UPDATE_USUARIO_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                user: action.payload,
                updateUser: true
            }

        case ActionTypes.FIND_USUARIO_BY_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                findUser: action.payload
            }

        case ActionTypes.FOLLOW_USUARIO_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                findUser: action.payload
            }

        case ActionTypes.LOGOUT:
            return initialState;   

        case ActionTypes.LOGIN_USUARIO_FAILURE:
        case ActionTypes.REGISTER_USUARIO_FAILURE:
        case ActionTypes.GET_USUARIO_PERFIL_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                jwt: action.payload
            }
        default:
            return state;
    }
}