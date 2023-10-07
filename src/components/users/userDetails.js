import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
 function UserDetails() {
    const params = useParams();
    const id = params.id;
    const [user,setUser] = useState({});
    const getUserDetails = async () => {
        try {
            const resp = await axios.get('http://localhost:5000/users/' + id);
            setUser(resp.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getUserDetails();
    },[]);
    return ( <>
    <h1>User Details</h1>
    <ul className='list-group'>
        <li className='list-group-item'>Id: {user.id}</li>
        <li className='list-group-item'>Name: {user.name}</li>
        <li className='list-group-item'>Email: {user.email}</li>
        <li className='list-group-item'>Department: {user.department}</li>
    </ul>
    </> );
 }
 
 export default UserDetails;