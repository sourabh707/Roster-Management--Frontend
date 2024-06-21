import axios from 'axios';
import { setRoster, updateStaff } from '../reducers/rosterReducer';

export const fetchRoster = () => async dispatch => {
  try {
    const res = await axios.get('http://localhost:5001/api/roster', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    dispatch(setRoster(res.data));
  } catch (error) {
    console.error('Fetch roster error:', error);
  }
};

export const editStaff = (staff) => async dispatch => {
  try {
    const res = await axios.put(`http://localhost:5001/api/roster/${staff.id}`, staff, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    dispatch(updateStaff(res.data));
  } catch (error) {
    console.error('Edit staff error:', error);
  }
};
