import * as ActionTypes from '../constants';

const initialState = { users: [], user: null };

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_USER :
      return {
        users: [{
          name: action.name,
          email: action.email,
          password: action.password,
          _id: action._id,
        }, ...state.users],
        user: state.user,
      };

    // case ActionTypes.CHANGE_SELECTED_POST :
    //   return {
    //     users: state.users,
    //     user: action.slug,
    //   };

    case ActionTypes.ADD_USERS :
      return {
        users: action.users,
        user: state.user,
      };

    // case ActionTypes.ADD_SELECTED_POST :
    //   return {
    //     user: action.user,
    //     users: state.users,
    //   };

    case ActionTypes.DELETE_USER :
      return {
        users: state.users.filter((user) => user._id !== action.user._id),
      };

    default:
      return state;
  }
};

export default userReducer;
