import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function UserList() {

    const[users, setUsers] = useState([]);
    const navigate = useNavigate();
    const getUsers = async () => {
        try {
            const resp = await axios.get('http://localhost:5000/users');
            setUsers(resp.data);
        } catch (error) {
            console.log(error);
        }
    }
    const viewUser = (id) => {
        navigate('/userdetails/'+id);
    }
    useEffect(() => {
        getUsers();
    },[]);
    return ( <>
    <h1>User's List</h1>
    <table className="table table-bordered table-striped">
        <thead>
            <tr><th>ID</th><th>Name</th><th>Email</th><th>Department</th><th>Operations</th></tr>
        </thead>
        <tbody>
            {
                users.map((item) => {
                    return(
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.department}</td>
                            <td><button className="btn btn-primary" onClick={() => {viewUser(item.id)}}>view</button></td>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>
    </> );
}

export default UserList;