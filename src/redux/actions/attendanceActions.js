import axios from 'axios';
import { setAttendance } from '../reducers/attendanceReducer';

const fetchAttendance = () => async dispatch => {
  try {
    const res = await axios.get('http://localhost:5001/api/attendance', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    dispatch(setAttendance(res.data));
  } catch (error) {
    console.error('Fetch attendance error:', error);
  }
};

export default fetchAttendance;
