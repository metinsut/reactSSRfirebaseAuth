import axios from "axios";

export const FETCH_USER = "fetch_users";
export const FETCH_POSTS = "fetch_posts";

export const fetchUsers = () => async dispatch => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    dispatch({
        type: FETCH_USER,
        payload: res
    });
};

export const fetchPosts = () => async dispatch => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    dispatch({
        type: FETCH_POSTS,
        payload: res
    });
};