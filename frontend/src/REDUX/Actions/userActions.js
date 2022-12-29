import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAIL,
  HOME_SUCCESS,
  HOME_REQUEST,
  HOME_FAIL,
  USER_LOGOUT,
  USER_PROFILE_REQUEST,
  USER_PROFILE_FAIL,
  USER_PROFILE_SUCCESS,
  USER_IMAGE_REQUEST,
  USER_IMAGE_SUCCESS,
  USER_IMAGE_FAIL,
} from "../Constants/userConstants";
import axios from "axios";

export const userLogin = (email, password) => async (dispatch) => {
  console.log(email, password);
  try {
    dispatch({ type: USER_LOGIN_REQUEST });
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    console.log("hddd");
    const { data } = await axios.post(
      "http://localhost:5000/login",
      { email, password },
      config
    );
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response.data,
    });
  }
};

export const userSignup =
  (firstname, lastname, email, password) => async (dispatch) => {
    console.log(firstname);
    try {
      dispatch({ type: USER_SIGNUP_REQUEST });
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "http://localhost:5000/signup",
        { firstname, lastname, email, password },
        config
      );
      dispatch({ type: USER_SIGNUP_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: USER_SIGNUP_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.response.data,
      });
      console.log(error.response.data);
    }
  };

export const userHome = () => async (dispatch) => {
  try {
    dispatch({ type: HOME_REQUEST });

    const token = JSON.parse(localStorage.getItem("userInfo"));
    console.log(token.token);
    const config = {
      headers: {
        Authorization: "Bearer " + token.token,
      },
    };

    const { data } = await axios.get(
      "http://localhost:5000?id=" + token._id,
      config
    );
    dispatch({ type: HOME_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: HOME_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response.data,
    });
    console.log(error.response.data);
  }
};

export const userlogout = () => async (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_LOGOUT });
};

export const userprofileaction = () => async (dispatch) => {
  try {
    dispatch({ type: USER_PROFILE_REQUEST });

    const token = JSON.parse(localStorage.getItem("userInfo"));
    console.log(token.token);
    const config = {
      headers: {
        Authorization: "Bearer " + token.token,
      },
    };

    const { data } = await axios.get(
      "http://localhost:5000/profile?id=" + token._id,
      config
    );

    dispatch({ type: USER_PROFILE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_PROFILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response.data,
    });
  }
};

export const userImageAction = (photo) => async (dispatch) => {
  try {
    dispatch({ type: USER_IMAGE_REQUEST });

    const token = JSON.parse(localStorage.getItem("userInfo"));
    console.log(token._id + "THIS IS ID ID ID I DI DI ID I D");
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + token.token,
      },
    };
    console.log(photo + "THIS IS THE PHOTO");
    const { data } = await axios.post(
      "http://localhost:5000/profile-photo?id=" + token._id,
      { photo },
      config
    );
    console.log(data);
    dispatch({ type: USER_IMAGE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_IMAGE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response.data,
    });
  }
};
