import React, { useState, useEffect } from 'react';
import { adminService } from '../services/adminService';
import Navbar from '../components/Navbar';
import AdminRoute from '../components/AdminRoute';

const AdminDashboard = () => {

  // STATE
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ username: '', password: '' });

  const [editingUserId, setEditingUserId] = useState(null);
  const [editingUserData, setEditingUserData] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  // Function : fetch all users 
  const fetchUsers = async () => {
    try {
      const data = await adminService.getAllUsers();
      setUsers(data);
    } catch (e) {
      console.log('error fetching users for adming dashboard', e);
    }
  }

  // Function : Add user
  const handleAddUser = async () => {
    try {
      await adminService.createUser(newUser);
      setNewUser({ username: "", password: "", role: "user"}); // clear form 
      fetchUsers();
    } catch (error) {
      console.log("handleAddUser: ", error);
    }
  };

  // Function : Start editing a user
  const handleEditUser = (user, index) => {
    setEditingUserId(user._id);
    setEditingUserData({ ... user });
  };

  // Function: Save user after editing
  const handleSaveEdit = async (index) => {
    const isConfirmed = window.confirm(`Are you sure you want to update ${users[index].username}'s details?`);
    if (!isConfirmed) {
      handleCancelEdit();
      return;
    }

    try {
      await adminService.updateUserAsAdmin(editingUserId, editingUserData);
      
      // Update the user in the list
      setUsers(users.map((user) => (user._id === editingUserId ? { ...user, ...editingUserData } : user)));

      // Reset editing state
      setEditingUserId(null);
      setEditingUserData(null)
      
    } catch (e) {
      console.log("handleSaveEdit: ", e);
    }
  };

  // Function : Cancel editing
  const handleCancelEdit = () => {
    setEditingUserId(null);
    setEditingUserData(null);
  }

  // Handle changes in the form fields
  const handleChange = (e, field, type) => {

    // EDIT
    if (type == 'edit') {
      setEditingUserData({ ...editingUserData, [field]: e.target.value });

    // NEW
    } else {
      setNewUser({ ...newUser, [field]: e.target.value });
    }
  };

  // Function : Delete user
  const handleDeleteUser = async (id) => {
    try {
      await adminService.deleteUserAsAdmin(id);
      setUsers(users.filter((user) => user._id !== id));
    } catch (e) {
      console.log("handleDeleteUser: ", e);
    }
  };

  return (
    <AdminRoute>
      <div className="admin-dashboard">
        <Navbar />
        <h1>Admin User Management</h1>
        
        {/* Create new user form */}
        <div className="user-form">
          <h3>Create New User</h3>
          <input
            type="text"
            placeholder="Username"
            value={newUser.username}
            onChange={(e) => handleChange(e, 'username', 'create')}
          />
          <input
            type="password"
            placeholder="Password"
            value={newUser.password}
            onChange={(e) => handleChange(e, 'password', 'create')}
          />
          <select
            value={newUser.role}
            onChange={(e) => handleChange(e, 'role', 'create')}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          <button onClick={handleAddUser}>Add User</button>
        </div>

        {/* Users Table */}
        <h3>User Accounts</h3>

        {/* No User */}
        {users?.length === 0 ? (
          <h4>No Users</h4>
        ) : (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>

                  {/* USER ID */}
                  <td>{index + 1}</td>
                  
                  {/* USERNAME */}
                  <td>
                    {editingUserId === user._id ? (
                      <input
                        type="text"
                        value={editingUserData.username}
                        onChange={(e) => handleChange(e, 'username', 'edit')}
                      />
                    ) : (
                      user.username
                    )}
                  </td>

                  {/* ROLE */}
                  <td>
                    {editingUserId === user._id ? (
                      <select
                        value={editingUserData.role}
                        onChange={(e) => handleChange(e, 'role', 'edit')}
                      >
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                      </select>
                    ) : (
                      user.role
                    )}
                  </td>

                  {/* ACTIONS */}
                  <td>
                    {editingUserId === user._id ? (
                      <>
                        <button onClick={() => handleSaveEdit(index)}>Save</button>
                        <button onClick={handleCancelEdit}>Cancel</button>
                      </>
                    ) : (
                      <>
                        <button onClick={() => handleEditUser(user)}>Edit</button>
                        <button onClick={() => handleDeleteUser(user._id)} className="delete">Delete</button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </AdminRoute>
  );
};

export default AdminDashboard;
