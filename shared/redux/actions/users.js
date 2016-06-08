import * as ActionTypes from '../constants'
import config from '../../config'
import fetch from 'isomorphic-fetch'

const baseURL = typeof window === 'undefined' ? process.env.BASE_URL || (`http://localhost:${config.port}`) : '';

export function addUser(user) {
  return {
    type: ActionTypes.ADD_USER,
    name: user.name,
    email: user.email,
    password: user.password,
    _id: user._id,
  };
}

// export function changeSelectedPost(slug) {
//   return {
//     type: ActionTypes.CHANGE_SELECTED_POST,
//     slug,
//   };
// }

export function addUserRequest(user) {
  return (dispatch) => {
    fetch(`${baseURL}/api/addUser`, {
      method: 'post',
      body: JSON.stringify({
        user: {
          name: user.name,
          email: user.email,
          password: user.password,
        },
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    }).then((res) => res.json()).then(res => dispatch(addUser(res.user)));
  };
}

// export function addSelectedPost(post) {
//   return {
//     type: ActionTypes.ADD_SELECTED_POST,
//     post,
//   };
// }

// export function getPostRequest(post) {
//   return (dispatch) => {
//     return fetch(`${baseURL}/api/getPost?slug=${post}`, {
//       method: 'get',
//       headers: new Headers({
//         'Content-Type': 'application/json',
//       }),
//     }).then((response) => response.json()).then(res => dispatch(addSelectedPost(res.post)));
//   };
// }

export function deleteUser(user) {
  return {
    type: ActionTypes.DELETE_USER,
    user,
  };
}

// export function addPosts(posts) {
//   return {
//     type: ActionTypes.ADD_POSTS,
//     posts,
//   };
// }

export function fetchUsers() {
  return (dispatch) => {
    return fetch(`${baseURL}/api/getUsers`).
      then((response) => response.json()).
      then((response) => dispatch(addUsers(response.users)));
  };
}

export function deleteUserRequest(user) {
  return (dispatch) => {
    fetch(`${baseURL}/api/deleteUser`, {
      method: 'post',
      body: JSON.stringify({
        userId: user._id,
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    }).then(() => dispatch(deleteUser(user)));
  };
}
