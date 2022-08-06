import React, { useEffect, useState } from "react"
import axios from "axios";

import './App.css';
import UserList from './table/UserList';
import AddUserForm from "./form/AddUserForm";
import EditUserForm from "./form/EditUserForm"

function App() {
  const [users, setUsers] = useState()  
  const [editing, setEditing] = useState(false)
  const [currentUser, setCurrentUser] = useState({ _id: null, name: "", email: "", phone: "", image: "" })

  const deleteUser = (id) => {
    axios.delete(`http://localhost:3001/delete-user/${id}`)
      .then(res => {
        setUsers(users.filter((user) => {
          return user._id != id
        }))
      }).catch(err => {
        alert('error in deleting user')
      })
  }

  const addUser = (user) => {
    axios.post(`http://localhost:3001/add-user`, user)
      .then(res => {
        alert("user added")
        setUsers([...users, user]);
      }).catch(err => {
        console.log(err)
        alert('error is adding user')
      })
  }

  const updateUser = (user) => {
    axios.put(`http://localhost:3001/update-user/${user._id}`, user)
      .then(res => {
        alert("user edited")
        var res=users.map((userdata) => {
          if (userdata._id.toString() == user._id.toString()) {
            return { ...userdata,...user }
          }else {
            return userdata
          }
        })
        console.log(res, "kkkkkkkkkkkkkkkkkk")
        setUsers(res)
      }).catch(err => {
        console.log(err,"eeeeeeeeeeeeeeeeeeeeeeeee")
        alert('error is editing user')
      })
  }

  const getUsers = () => {
    axios.get("http://localhost:3001/list-user")
      .then(response => response.data)
      .then((data) => {
        setUsers(data)
      });
  }

  const editUser = (user) => {
    setEditing(true)  
    setCurrentUser(user)
  }

  const cancelEdit = () => {
    setEditing(false)
    setCurrentUser({})
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className="container">
      <div className="flex-row">
        <div className="flex-large">
          {!editing && (
            <>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser} />
            </>
          )}

          {editing && (<>
            <h2>Edit User</h2>
            <EditUserForm cancelEdit={cancelEdit} user={currentUser} updateUser={updateUser} />
          </>)}

        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserList users={users} deleteUser={deleteUser} editUser={editUser} />
        </div>
      </div>
    </div>

  );
}

export default App;
