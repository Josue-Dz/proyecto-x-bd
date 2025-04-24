import { api, API_URL } from '../../config/api';
import { FIND_POST_BY_ID_FAILURE, FIND_POST_BY_ID_SUCCESS, GET_ALL_POSTS_FAILURE, GET_ALL_POSTS_REQUEST, GET_ALL_POSTS_SUCCESS, GET_USERS_POSTS_FAILURE, GET_USERS_POSTS_SUCCESS, LIKE_POST_FAILURE, LIKE_POST_SUCCESS, POST_CREATE_FAILURE, POST_CREATE_SUCCESS, REPLY_POST_FAILURE, REPLY_POST_SUCCESS, REPOST_POST_FAILURE, REPOST_POST_SUCCESS, USER_LIKE_POST_FAILURE, USER_LIKE_POST_SUCCESS } from "./ActionType";


export const obtenerTodosLosPost = () => async(dispatch) => {

    try{
        const {data} = await api.get("/api/posts/");
        console.log("Obtener todos los post ", data);

        dispatch({
            type: GET_ALL_POSTS_SUCCESS,
            payload: data
        })

    }catch(error){

        console.log("Error al obtener todos los post ", error);
        dispatch({
            type: GET_ALL_POSTS_FAILURE,
            payload: error.message
        })
    }
}

export const obtenerPostsPorUsuario = (codigoUsuario) => async(dispatch) => {

    try{
        const {data} = await api.get(`/api/posts/usuario/${codigoUsuario}`);
        console.log("Obtener post usuario ", data);

        dispatch({
            type: GET_USERS_POSTS_SUCCESS,
            payload: data
        })

    }catch(error){

        console.log("Error al obtener todos los post ", error);
        dispatch({
            type: GET_USERS_POSTS_FAILURE,
            payload: error.message
        })
    }
}

export const obtenerPostsLikeadosPorUsuario = (codigoUsuario) => async(dispatch) => {

    try{
        const {data} = await api.get(`/api/posts/usuario/${codigoUsuario}/likes`);
        console.log("Obtener posts likeados por usuario ", data);

        dispatch({
            type: USER_LIKE_POST_SUCCESS,
            payload: data
        })

    }catch(error){

        console.log("Error al obtener todos los post ", error);
        dispatch({
            type: USER_LIKE_POST_FAILURE,
            payload: error.message
        })
    }
}

export const obtenerPostPorId = (codigoPost) => async(dispatch) => {

    try{
        const {data} = await api.get(`/api/posts/${codigoPost}`);
        console.log("Obtener posts por id ", data);

        dispatch({
            type: FIND_POST_BY_ID_SUCCESS,
            payload: data
        })

    }catch(error){

        console.log("Error al obtener todos los post ", error);
        dispatch({
            type: FIND_POST_BY_ID_FAILURE,
            payload: error.message
        })
    }
}

export const crearPost = (postData) => async(dispatch) => {

    try{
        console.log("Post que se enviará:", postData);
        const {data} = await api.post(`/api/posts/crearPost`, postData);
        console.log("Post creado: ", data);

        dispatch({
            type: POST_CREATE_SUCCESS,
            payload: data
        })

    }catch(error){

        console.log("Error al crear post ", error);
        dispatch({
            type: POST_CREATE_FAILURE,
            payload: error.message
        })
    }
}

export const contestarPost = (comentarioData) => async(dispatch) => {

    try{
        console.log("valores: ", comentarioData);
        const {data} = await api.post(`/api/posts/contestarPost`, comentarioData);
        console.log("Comentario creado:", data);

        dispatch({
            type: REPLY_POST_SUCCESS,
            payload: data
        })

    }catch(error){

        console.log("Error al crear comentario ", error);
        dispatch({
            type: REPLY_POST_FAILURE,
            payload: error.message
        })
    }
}

export const repostearPost = (codigoPost) => async(dispatch) => {

    try{
        const {data} = await api.put(`/api/posts/${codigoPost}/repostearPost`);
        console.log("Repost:", data);

        dispatch({
            type: REPOST_POST_SUCCESS,
            payload: data
        })

    }catch(error){

        console.log("Error al repostear ", error);
        dispatch({
            type: REPOST_POST_FAILURE,
            payload: error.message
        })
    }
}

export const repostearComentario = (codigoComentario) => async(dispatch) => {

    try{
        const {data} = await api.put(`/api/posts/${codigoComentario}/repostearPost`);
        console.log("Repost: ", data);

        dispatch({
            type: REPOST_POST_SUCCESS,
            payload: data
        })

    }catch(error){

        console.log("Error al repostear ", error);
        dispatch({
            type: REPOST_POST_FAILURE,
            payload: error.message
        })
    }
}

export const darleLikeAPost = (codigoPost) => async(dispatch) => {

    try{
        const {data} = await api.post(`/api/likes/${codigoPost}/likePost`);
        console.log("Like: ", data);

        dispatch({
            type: LIKE_POST_SUCCESS,
            payload: data
        })

    }catch(error){

        console.log("Error al dar like ", error);
        dispatch({
            type: LIKE_POST_FAILURE,
            payload: error.message
        })
    }
}

export const darleLikeAComentario = (codigoComentario) => async(dispatch) => {

    try{
        const {data} = await api.post(`/api/likes/${codigoComentario}/likeComentario`);
        console.log("Like: ", data);

        dispatch({
            type: LIKE_POST_SUCCESS,
            payload: data
        })

    }catch(error){

        console.log("Error al dar like ", error);
        dispatch({
            type: LIKE_POST_FAILURE,
            payload: error.message
        })
    }
}
