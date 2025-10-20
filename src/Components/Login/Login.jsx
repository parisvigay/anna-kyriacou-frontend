import './Login.css';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import { useState } from 'react';

export default function Login({ showModal, setShowModal, setLoggedIn }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    async function handleLogin(event) {
        event.preventDefault();
        
        try {
            const response = await fetch ('http://localhost:1337/api/auth/local', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    identifier: username,
                    password: password
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Error logging in');
            }
    
            const data = await response.json();
            localStorage.setItem('token', data.jwt);
            setLoggedIn(true); // Update the loggedIn state
            setShowModal(false); // Close the login modal
            setUsername("");
            setPassword("");

        } catch (error) {
            console.error(error.message);
        }

        if (!showModal) {
            return null;
          }
    }


    const handleUsername = (e) => {
        setUsername(e.target.value);
        console.log(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        console.log(e.target.value);
    }

  return (
    <Modal show={showModal} fullscreen={false} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton className="modalHeader">
        </Modal.Header>
        <Modal.Body>
            <Form className="loginForm">
                <Form.Group className="formGroup" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                        className="loginInput" 
                        type="text"
                        name="username" 
                        value={username}
                        onChange={handleUsername} 
                    />
                </Form.Group>
                <Form.Group className="formGroup" controlId="formBasicEmail">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        className="loginInput" 
                        // type="password"
                        name="password" 
                        value={password}
                        onChange={handlePassword}  
                    />
                </Form.Group>
                <button 
                    className="loginSubmitBtn"
                    type="submit" 
                    onClick={handleLogin}>Submit
                </button>
            </Form>
        </Modal.Body>
    </Modal>
  )
}
