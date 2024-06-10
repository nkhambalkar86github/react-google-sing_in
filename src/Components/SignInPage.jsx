import { GoogleLogin } from "@react-oauth/google";
import { useState } from "react";
import { Button, Col } from "react-bootstrap";
import { Form } from "react-router-dom";


const clientId = 'YOUR_GOOGLE_CLIENT_ID'; // Replace with your Google Client ID

const SignInPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [googleError, setGoogleError] = useState(null);

    const handleEmailChange = (event) => setEmail(event.target.value);
    const handlePasswordChange = (event) => setPassword(event.target.value);

    const handleGoogleLogin = (response) => {
        // Handle successful Google login response (access token, profile data)
        console.log('Google login successful:', response);

        // Implement your backend logic to authenticate/register user using Google data
    };

    const handleGoogleLoginError = (error) => {
        setGoogleError(error);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Implement your backend logic for form submission (email/password login)
        console.log('Form submitted:', email, password);

        // Reset form after submission
        setEmail('');
        setPassword('');
    };

    return (
        <>
        <Form onSubmit={handleSubmit}>
            <Form.Row>
                <Col>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            placeholder="Enter email"
                        />
                    </Form.Group>
                </Col>
            </Form.Row>
            <Form.Row>
                <Col>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            onChange={handlePasswordChange}
                            placeholder="Password"
                        />
                    </Form.Group>
                </Col>
            </Form.Row>
            <Button variant="primary" type="submit">
                Sign In
            </Button>
            <br />
            <GoogleLogin
                clientId={clientId}
                buttonText="Sign in with Google"
                onSuccess={handleGoogleLogin}
                onError={handleGoogleLoginError}
                cookiePolicy="single_host_origin"
            />
            {googleError && (
                <div className="text-danger">Google Login Error: {googleError.message}</div>
            )}
        </Form>
        </>
    );
};

export default SignInPage;
