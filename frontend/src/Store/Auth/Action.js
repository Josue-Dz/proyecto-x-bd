import axios from 'axios';
import { api, API_URL } from '../../config/api';
import { FIND_USUARIO_BY_ID_FAILURE, FIND_USUARIO_BY_ID_SUCCESS, FOLLOW_USUARIO_FAILURE, FOLLOW_USUARIO_SUCCESS, GET_USUARIO_PERFIL_FAILURE, GET_USUARIO_PERFIL_SUCCESS, LOGIN_USUARIO_FAILURE, LOGIN_USUARIO_SUCCESS, REGISTER_USUARIO_FAILURE, REGISTER_USUARIO_SUCCESS, UPDATE_USUARIO_FAILURE, UPDATE_USUARIO_SUCCESS } from "./ActionType";

export const loginUsuario = (loginData) => async (dispatch) => {

    try {
        
        const {data} = await axios.post(`${API_URL}/api/auth/acceso`, loginData);
        console.log("Respuesta Backend", data);
        
        if (data.jwt){
            localStorage.setItem('jwtToken', data.jwt);
        }

        dispatch({
            type: LOGIN_USUARIO_SUCCESS,
            payload: data.jwt
        })
    }catch (error) {
        console.log("error", error);
        dispatch({
            type: LOGIN_USUARIO_FAILURE,
            payload: error.message
        })
    }
}

export const cerrarSesion = () => async (dispatch) => {
 
        localStorage.removeItem('jwtToken');
        
        dispatch({
            type: 'LOGOUT',
            payload: null
        })

}

export const registroUsuario = (registroData) => async (dispatch) => {

    try {
        const {data} = await axios.post(`${API_URL}/api/auth/registro`, registroData);
        
        if (data.jwt){
            localStorage.setItem("jwtToken", data.jwt);
        }

        dispatch({
            type: REGISTER_USUARIO_SUCCESS,
            payload: data.jwt
        })
    }catch (error) {
        console.log("error", error);
        dispatch({
            type: REGISTER_USUARIO_FAILURE,
            payload: error.message
        })
    }
}

export const obtenerPerfilUsuario = (jwt) => async (dispatch) => {

    console.log("Llegue aca", jwt)

    try {
        const {data} = await axios.get(`${API_URL}/api/usuarios/perfil`, {
            headers: {
                "Authorization": `Bearer ${jwt}`
            }
        });

        console.log("Respuesta2 Backend", data);
        
        dispatch({
            type: GET_USUARIO_PERFIL_SUCCESS,
            payload: data
        })
    }catch (error) {
        console.log("error", error);
        dispatch({
            type: GET_USUARIO_PERFIL_FAILURE,
            payload: error.message
        })
    }
}

export const obtenerUsuarioPorId = (codigoUsuario) => async (dispatch) => {

    try {
        const {data} = await api.get(`/api/usuarios/${codigoUsuario}`); 
        console.log("Obtener usuario por id: ", data);
        dispatch({
            type: FIND_USUARIO_BY_ID_SUCCESS,
            payload: data
        })
    }catch (error) {
        console.log("error", error);
        dispatch({
            type: FIND_USUARIO_BY_ID_FAILURE,
            payload: error.message
        })
    }
}

export const actualizarUsuario = (usuarioData) => async (dispatch) => {

    try {
        const {data} = await api.put(`/api/usuarios/editar`, usuarioData); 
        console.log("Usuario: ", data);
        dispatch({
            type: UPDATE_USUARIO_SUCCESS,
            payload: data
        })
    }catch (error) {
        console.log("error", error);
        dispatch({
            type: UPDATE_USUARIO_FAILURE,
            payload: error.message
        })
    }
}

export const seguirUsuario = (idUsuarioASeguir) => async (dispatch) => {

    try {
        const {data} = await api.put(`/api/usuarios/seguir/${idUsuarioASeguir}`); 
        console.log("Usuario: ", data);
        dispatch({
            type: FOLLOW_USUARIO_SUCCESS,
            payload: data
        })
    }catch (error) {
        console.log("error", error);
        dispatch({
            type: FOLLOW_USUARIO_FAILURE,
            payload: error.message
        })
    }
}