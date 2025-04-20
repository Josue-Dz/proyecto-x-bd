import axios from 'axios';
import { API_URL } from '../../config/api';

export const loginUsuario = (loginData) => async (dispatch) => {

    try {
        
        const {data} = await axios.post(`${API_URL}/api/auth/acceso`, loginData);
        console.log("Respuesta Backend", data);
        
        if (data.jwt){
            localStorage.setItem('jwtToken', data.jwt);
        }

        dispatch({
            type: 'LOGIN_USUARIO_SUCCESS',
            payload: data.jwt
        })
    }catch (error) {
        console.log("error", error);
        dispatch({
            type: 'LOGIN_USUARIO_FAILURE',
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
            type: 'REGISTER_USUARIO_SUCCESS',
            payload: data.jwt
        })
    }catch (error) {
        console.log("error", error);
        dispatch({
            type: 'REGISTER_USUARIO_FAILURE',
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
            type: 'GET_USUARIO_PERFIL_SUCCESS',
            payload: data
        })
    }catch (error) {
        console.log("error", error);
        dispatch({
            type: 'REGISTER_USUARIO_FAILURE',
            payload: error.message
        })
    }
}