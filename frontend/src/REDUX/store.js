import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  userHomeReducer,
  userImageUplaodReducer,
  userLoginReducer,
  userprofilereduer,
  userSignupReducer,
} from "./Reducers/userReducer";
import thunk from "redux-thunk";
import {
  adminBlockReducer,
  adminDeleteReducer,
  adminHomeReducer,
  adminLoginReducer,
  adminSearchReducer,
} from "./Reducers/adminReducer";
const reducer = combineReducers({
  userLogin: userLoginReducer,
  userSignup: userSignupReducer,
  userHome: userHomeReducer,
  adminLogin: adminLoginReducer,
  adminHome: adminHomeReducer,
  adminBlock: adminBlockReducer,
  adminDelete: adminDeleteReducer,
  adminSearch: adminSearchReducer,
  userProfile: userprofilereduer,
  userImage: userImageUplaodReducer,
});

let userinfo = JSON.parse(localStorage.getItem("userInfo"));

const initialstate = {
  userLogin: { userinfo: userinfo },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialstate,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
