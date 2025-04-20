import { 
    LOGIN_USUARIO_REQUEST, 
    LOGIN_USUARIO_SUCCESS, 
    LOGIN_USUARIO_FAILURE, 
    REGISTER_USUARIO_REQUEST, 
    REGISTER_USUARIO_SUCCESS, 
    REGISTER_USUARIO_FAILURE, 
    GET_USUARIO_PERFIL_REQUEST, 
    GET_USUARIO_PERFIL_SUCCESS, 
    GET_USUARIO_PERFIL_FAILURE, 
    LOGOUT
  } from './ActionType';


const initialState = {
    user: null,
    loading: false,
    error: null,
    jwt: null,
}

export const authReducer = (state = initialState, action)=>{
    switch (action.type){

        case LOGIN_USUARIO_REQUEST:
        case REGISTER_USUARIO_REQUEST:
        case GET_USUARIO_PERFIL_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            }
  
        case LOGIN_USUARIO_SUCCESS:
        case REGISTER_USUARIO_SUCCESS:
            return {
                ...state,
                loading: true,
                error: null
            }

        case GET_USUARIO_PERFIL_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                user: action.payload
            }

        case LOGOUT:
            return initialState;   

        case LOGIN_USUARIO_FAILURE:
        case REGISTER_USUARIO_FAILURE:
        case GET_USUARIO_PERFIL_FAILURE:
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