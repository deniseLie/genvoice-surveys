import React, { useState, useEffect } from 'react';
import { adminService } from '../services/adminService';
import Navbar from '../components/Navbar';

const AdminDashboard = () => {

  // STATE
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ username: '', password: '' });
  const [editingUser, setEditingUser] = useState(null);

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
      const res = await adminService.createUser(newUser.username, newUser.password);
      setNewUser({ username: "", password: ""}); // clear form 
      
      await fetchUsers();
    } catch (error) {
      console.log("handleAddUser: ", error);
    }
  };

  const handleEditUser = (id) => {
    const userToEdit = users.find((user) => user.id === id);
    setEditingUser(userToEdit);
  };

  // Function: Save user after editing
  const handleSaveEdit = async () => {
    try {
      const data = {
        username: editingUser.username,
        password: editingUser.password,
        role    : editingUser.role
      }

      await adminService.updateUserAsAdmin(editingUser.id, data);
      setUsers(users.map((user) =>
        user.id === editingUser.id ? editingUser : user
      ));
      setEditingUser(null);
    } catch (e) {
      console.log("handleSaveEdit: ", e);
    }
  };


  // Function : Delete user
  const handleDeleteUser = async (id) => {
    try {
      await adminService.deleteUserAsAdmin(id);
      setUsers(users.filter((user) => user.id !== id));
    } catch (e) {
      console.log("handleDeleteUser: ", e);
    }
  };

  // Handle changes in the form fields
  const handleChange = (e, field) => {
    if (editingUser) {
      setEditingUser({ ...editingUser, [field]: e.target.value });
    } else {
      setNewUser({ ...newUser, [field]: e.target.value });
    }
  };

  return (
    <div>
      <Navbar />
      <h1>Admin User Management</h1>
      
      {/* Create new user form */}
      <div>
        <h3>Create New User</h3>
        <input
          type="text"
          placeholder="Username"
          value={newUser.username}
          onChange={(e) => handleChange(e, 'username')}
        />
        <input
          type="password"
          placeholder="Password"
          value={newUser.password}
          onChange={(e) => handleChange(e, 'password')}
        />
        <select
          value={newUser.role}
          onChange={(e) => handleChange(e, 'role')}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button onClick={handleAddUser}>Add User</button>
      </div>

      {/* Users Table */}
      <h3>User Accounts</h3>
      {users?.length == 0 ? (
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
            {users.map((user) => (
              <tr key={user.id}>

                {/* USER ID */}
                <td>{user.id}</td>
                
                {/* USERNAME */}
                <td>
                  {editingUser && editingUser.id === user.id ? (
                    <input
                      type="text"
                      value={editingUser.username}
                      onChange={(e) => handleChange(e, 'username')}
                    />
                  ) : (
                    user.username
                  )}
                </td>

                {/* ROLE */}
                <td>
                  {editingUser && editingUser.id === user.id ? (
                    <select
                      value={editingUser.role}
                      onChange={(e) => handleChange(e, 'role')}
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
                  {editingUser && editingUser.id === user.id ? (
                    <button onClick={handleSaveEdit}>Save</button>
                  ) : (
                    <>
                      <button onClick={() => handleEditUser(user.id)}>Edit</button>
                      <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminDashboard;
