import React, { useEffect , useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRoster } from '../../redux/actions/rosterActions';
import { logoutUser } from '../../redux/actions/authActions';

const ManagerDashboard = () => {
  const dispatch = useDispatch();
  const roster = useSelector((state) => state.roster.staff);
  
  const [editMode, setEditMode] = useState(false);
  const [editStaff, setEditStaff] = useState({ name: '', email: '', shift: '' })
  useEffect(() => {
    dispatch(fetchRoster());
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const handleEdit = (index) => {
    
  };

  const handleDelete = (index) => {
   
  };
  const demoRoster = [
    { name: 'John Doe', email: 'john@example.com', shift: 'Morning' },
    { name: 'Jane Smith', email: 'jane@example.com', shift: 'Afternoon' },
    { name: 'Bob Johnson', email: 'bob@example.com', shift: 'Evening' }
  ];

  const dataToDisplay = roster.length > 0 ? roster : demoRoster;
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Manager Dashboard</h1>
          <button onClick={handleLogout} className="px-4 py-2 bg-red-600 text-white rounded">Logout</button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-2">Current Roster</h2>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2">Name</th>
                <th className="py-2">Email</th>
                <th className="py-2">Shift</th>
                <th className="py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {dataToDisplay.map((staff, index) => (
                <tr key={index} className="text-center">
                  <td className="py-2">{staff.name}</td>
                  <td className="py-2">{staff.email}</td>
                  <td className="py-2">{staff.shift}</td>
                  <td className="py-2">
                    <button 
                      onClick={() => handleEdit(index)} 
                      className="px-2 py-1 bg-blue-500 text-white rounded mr-2"
                    >
                      Edit
                    </button>
                    <button 
                      onClick={() => handleDelete(index)} 
                      className="px-2 py-1 bg-red-500 text-white rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {editMode && (
          <div className="bg-white p-6 rounded-lg shadow-md mt-6">
            <h2 className="text-2xl font-bold mb-2">Edit Staff</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                <input
                  type="text"
                  value={editStaff.name}
                  onChange={(e) => setEditStaff({ ...editStaff, name: e.target.value })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                <input
                  type="email"
                  value={editStaff.email}
                  onChange={(e) => setEditStaff({ ...editStaff, email: e.target.value })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Shift</label>
                <input
                  type="text"
                  value={editStaff.shift}
                  onChange={(e) => setEditStaff({ ...editStaff, shift: e.target.value })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleSave}
                  className="px-4 py-2 bg-green-500 text-white rounded"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setEditMode(false)}
                  className="px-4 py-2 bg-gray-500 text-white rounded ml-2"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManagerDashboard;
