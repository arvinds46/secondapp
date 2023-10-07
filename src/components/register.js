import axios from 'axios';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate();
    const [newUser, setNewUser] = useState({ id: '', name: '', email: '', department: '' });
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const resp = await axios.post("http://localhost:5000/users", newUser);
            console.log(resp);
            alert("User Registered Successfully")
            navigate('/userlist');
        } catch (error) {
            console.log(error);
        }
    }
    return ( <>
    <h1>Registration</h1>
    <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="id">
        <Form.Label>Id</Form.Label>
        <Form.Control type="number" placeholder="56"
            value={newUser.id}
            onChange={(e) => setNewUser({ ...newUser, id: e.target.value })} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="John Doe"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="name@example.com"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="dept">
        <Form.Label>Department</Form.Label>
        <Form.Control type="text" placeholder="banking"
            value={newUser.department}
            onChange={(e) => setNewUser({ ...newUser, department: e.target.value })} />
        </Form.Group>
        <button className='btn btn-success' type='submit'>Register</button>
    </Form>
    </> );
}

export default Register;