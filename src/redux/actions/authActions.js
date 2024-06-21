import axios from 'axios';
import { setAuthData, logout } from '../reducers/authReducer';

export const login = (email, password, navigate) => async dispatch => {
  try {
    const res = await axios.post('http://localhost:5001/api/auth/login', { email, password });
    dispatch(setAuthData({ user: res.data.user, token: res.data.token }));
    localStorage.setItem('token', res.data.token);
    const user = res.data.user;
    const userRole = user.role;

    if (userRole === 'Manager' || userRole === 'manager') {
      navigate('/manager');
    } else if (userRole === 'Staff' || userRole === 'staff') {
      navigate('/staff');
    } else {
      console.error('Unknown role:', userRole);
    }
    
  }
   catch (error) {
    if (error.response) {
      if (error.response.status === 409) {
        alert('User with this email does not exists. Please register');
      } else if (error.response.status === 410) {
        alert('Invalid Credentials');
      } 
      else {
        console.error('Login error:', error.response.data);
      }
    } else if (error.request) {
      console.error('No response received:', error.request);
    } else {
      console.error('Error setting up the request:', error.message);
    }
  }
};

export const register = (name, email, password, role, navigate) => async dispatch => {
  try {
    await axios.post('http://localhost:5001/api/auth/register', { name, email, password, role });
    alert('Registration successful. Please login.');
    navigate('/login');
  } catch (error) {
    if (error.response) {
      if (error.response.status === 409) {
        dispatch({ type: 'REGISTER_ERROR', payload: 'User already exists' });
      } else {
        console.error('Registration error:', error.response.data);
      }
    } else if (error.request) {
      console.error('No response received:', error.request);
    } else {
      console.error('Error setting up the request:', error.message);
    }
  }
};

export const logoutUser = () => dispatch => {
  localStorage.removeItem('token');
  dispatch(logout());
  alert('Logged Out ');
};
