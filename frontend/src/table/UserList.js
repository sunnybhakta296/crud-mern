const UserList = (props) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {props.users && props.users.length > 0 && props.users.map((user) => (                  
                    <tr key={user._id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>
                            <button onClick={()=>props.editUser(user)}>Edit</button>
                            <button onClick={()=>props.deleteUser(user._id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default UserList