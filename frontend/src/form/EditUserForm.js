import React, { useEffect, useState } from 'react'

const EditUserForm = (props) => {
    // alert(JSON.stringify(props.user))
    console.log("FOrm....", props.user)
    const [user, setUser] = useState(props.user)
    useEffect(()=>{
        setUser(props.user)
    },[props.user])
    const handleInputChange = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value })
    }

    const updateUser=(event)=>{
        event.preventDefault()
        const {email}=user
        var emailReg = /\S+@\S+\.\S+/;
        if(!emailReg.test(email)) {
            alert("Enter valid email")
            return false
        }      
        props.updateUser(user)
    }
    return (
        <form onSubmit={updateUser}>
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
            <button>Update User</button>
            <button onClick={()=>{props.cancelEdit()}}>Cancel Edit</button>
        </form>
    )
}

export default EditUserForm