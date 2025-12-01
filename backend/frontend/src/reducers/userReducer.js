import { createSlice } from '@reduxjs/toolkit';
import userService from '../services/user';
import loginService from '../services/login'
import bookingService from "../services/bookings"
import teacherService from "../services/teachers"
import { clearBookings } from './bookingReducer';

const userSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    setUser(state, action) {
      return action.payload;
    },
    removeUser(state, action) {
      return null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export const initializeUser = (info) => {
  return async (dispatch) => {
    try {
      const user = await loginService.login(info);
      window.localStorage.setItem('loggedAppUser', JSON.stringify(user));
      dispatch(setUser(user));
      bookingService.setToken(user.token)
      userService.setToken(user.token)
      if (user.role === "admin") { teacherService.setToken(user.token) }
      return true
    } catch {
      alert("Wrong username or password")
      return false
    }
  };
};

export const getUser = () => {
  return async (dispatch) => {
    const loggedUserJson = window.localStorage.getItem('loggedAppUser');
    if (loggedUserJson) {
      const user = JSON.parse(loggedUserJson);
      dispatch(setUser(user));
      bookingService.setToken(user.token)
      userService.setToken(user.token)
      if (user.role === "admin") { teacherService.setToken(user.token) }
    }
  };
};

export const createUser = (info) => {
    return async (dispatch) => {
      try {
        await userService.create(info)
        alert("Registered successfully")
        return true
      } catch (exception) {
        alert(`${exception.response.data.error}`)
        return false
      }
    }
}

export const updateUser = (score) => {
  return async (dispatch) => {
    const updatedUser = await userService.update(score)
    window.localStorage.setItem('loggedAppUser', JSON.stringify(updatedUser))
    bookingService.setToken(updatedUser.token)
    userService.setToken(updatedUser.token)
    if (updatedUser.role === "admin") { teacherService.setToken(updatedUser.token) }
    dispatch(setUser(updatedUser))
    return updatedUser
  }
}

export const logOut = () => {
  return async (dispatch) => {
    window.localStorage.clear();
    dispatch(removeUser());
    dispatch(clearBookings())
  };
};

export default userSlice.reducer