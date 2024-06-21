import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAttendance } from '../../redux/actions/attendanceActions'; 
import Webcam from 'react-webcam';

const Attendance = () => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth); 
  const webcamRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImageSrc(imageSrc);
  };

  const handleMarkAttendance = () => {
    const imageData = imageSrc; 
    const userId = auth.user.id; 
    const attendanceData = {
      userId,
      imageData,
      timestamp: new Date().toISOString()
    };
    dispatch(markAttendance(attendanceData)); 
  };

  return (
    <div className="container mx-auto max-w-screen-lg px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Mark Attendance</h2>
      <div className="mb-4">
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          className="rounded shadow-md"
        />
      </div>
      {imageSrc && (
        <div className="mb-4">
          <img src={imageSrc} alt="Captured" className="rounded shadow-md" />
        </div>
      )}
      <div className="mb-4">
        <button onClick={capture} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Capture Image
        </button>
      </div>
      {imageSrc && (
        <div className="mb-4">
          <button onClick={handleMarkAttendance} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Mark Attendance
          </button>
        </div>
      )}
    </div>
  );
};

export default Attendance;
