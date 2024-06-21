import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRoster, editStaff } from '../../redux/actions/rosterActions';

const Roster = () => {
  const dispatch = useDispatch();
  const roster = useSelector((state) => state.roster.staff);
  const [editing, setEditing] = useState(null);
  const [editForm, setEditForm] = useState({ name: '', email: '', shift: '' });

  useEffect(() => {
    dispatch(fetchRoster());
  }, [dispatch]);

  const handleEditClick = (staff) => {
    setEditing(staff.id);
    setEditForm({ name: staff.name, email: staff.email, shift: staff.shift });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    dispatch(editStaff({ ...editForm, id: editing }));
    setEditing(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Roster Management</h1>
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
              {roster.map((staff) => (
                <tr key={staff.id} className="text-center">
                  {editing === staff.id ? (
                    <td colSpan={4}>
                      <form onSubmit={handleEditSubmit} className="space-y-4">
                        <div>
                          <label className="block text-sm">Name</label>
                          <input
                            type="text"
                            value={editForm.name}
                            onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                          />
                        </div>
                        <div>
                          <label className="block text-sm">Email</label>
                          <input
                            type="email"
                            value={editForm.email}
                            onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                          />
                        </div>
                        <div>
                          <label className="block text-sm">Shift</label>
                          <input
                            type="text"
                            value={editForm.shift}
                            onChange={(e) => setEditForm({ ...editForm, shift: e.target.value })}
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                          />
                        </div>
                        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Save</button>
                      </form>
                    </td>
                  ) : (
                    <>
                      <td className="py-2">{staff.name}</td>
                      <td className="py-2">{staff.email}</td>
                      <td className="py-2">{staff.shift}</td>
                      <td className="py-2">
                        <button onClick={() => handleEditClick(staff)} className="px-4 py-2 bg-yellow-400 text-white rounded">Edit</button>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Roster;
