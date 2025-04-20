import axios from "axios";
import { api, API_URL } from '../../config/api';
import { GET_USERS_POSTS_FAILURE, GET_USERS_POSTS_SUCCESS } from "./ActionType";


export const obtenerTodosPosts = () => async(dispatch) => {

    try{
        const {data} = await api.get("/api/posts/obtenerTodosLosPost");
        console.log("Obtener todos los post", data);

        dispatch({
            type: GET_ALL_POSTS_REQUEST,
            payload: data
        })

    }catch(error){

        console.log("Error al obtener todos los post", error);
        dispatch({
            type: GET_ALL_POSTS_FAILURE,
            payload: error.message
        })
    }
}

export const obtenerPostsPorUsuario = (id) => async(dispatch) => {

    try{
        const {data} = await api.get("/api/posts/obtenerPostPorUsuario");
        console.log("Obtener post usuario", data);

        dispatch({
            type: GET_USERS_POSTS_SUCCESS,
            payload: data
        })

    }catch(error){

        console.log("Error al obtener todos los post", error);
        dispatch({
            type: GET_USERS_POSTS_FAILURE,
            payload: error.message
        })
    }
}
