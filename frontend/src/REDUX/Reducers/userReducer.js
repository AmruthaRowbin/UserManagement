import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_SIGNUP_FAIL,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  HOME_REQUEST,
  HOME_SUCCESS,
  HOME_FAIL,
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAIL,
  USER_IMAGE_REQUEST,
  USER_IMAGE_SUCCESS,
  USER_IMAGE_FAIL,
} from "../Constants/userConstants";

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userSignupReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNUP_REQUEST:
      return { loading: true };
    case USER_SIGNUP_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_SIGNUP_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const userHomeReducer = (state = {}, action) => {
  switch (action.type) {
    case HOME_REQUEST:
      return { loading: true };
    case HOME_SUCCESS:
      return { loading: false, homedata: action.payload };
    case HOME_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userprofilereduer = (state = {}, action) => {
  switch (action.type) {
    case USER_PROFILE_REQUEST:
      return { loading: true };

    case USER_PROFILE_SUCCESS:
      return { loading: false, profiledata: action.payload };

    case USER_PROFILE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userImageUplaodReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_IMAGE_REQUEST:
      return { imageloading: true };

    case USER_IMAGE_SUCCESS:
      return { imageloading: false, userimage: action.payload };

    case USER_IMAGE_FAIL:
      return { imageloading: false, error: action.payload };
    default:
      return state;
  }
};
