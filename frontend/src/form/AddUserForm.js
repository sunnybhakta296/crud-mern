import React, { useState } from 'react'

const AddUserForm = (props) => {
    const initialState = {name: "", email: "", phone: "", image: "" }
    const [user, setUser] = useState(initialState)

    const handleInputChange = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value })
    }

    const submiUser=(event)=>{
        event.preventDefault()
        const {email, phone}=user
        var emailReg = /\S+@\S+\.\S+/;
        if(!emailReg.test(email)) {
            alert("Enter valid email")
            return false
        }      
        props.addUser(user)
    }
    return (
        <form onSubmit={submiUser}>
            <label>Name</label>
            <input type="text" name="name" value={user.name} onChange={handleInputChange}
            />
            <label>Email</label>
            <input type="text" name="email" value={user.email} onChange={handleInputChange}
            />
            <label>Phone</label>
            <input type="text" name="phone" value={user.phone} onChange={handleInputChange}
            />
            <label>Image</label>
            <input type="text" name="image" value={user.image} onChange={handleInputChange}
            />
            <button>Add new user</button>
        </form>
    )
}

export default AddUserForm