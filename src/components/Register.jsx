import React from 'react';
const apiUrl = import.meta.env.VITE_API_URL;
import { Navigate } from 'react-router-dom';
// import {useState} from 'react';

const Register = () => {
    // const [redirectToLogin, setRedirectToLogin] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevents the default form submission behavior

        const formData = {
            username: document.getElementById('username').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            // confirmPassword is used for client-side validation only
        };


        // Submit the data to the backend using fetch
        try {
            const response = await fetch(`${apiUrl}/api/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const result = await response.json();
                console.log(result); 
                // setRedirectToLogin(true);
            } else {
                console.error('Failed to register'); // Handle errors, e.g., showing an error message
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
        // if (redirectToLogin) {
        //     return <Navigate to="/login" replace />;
        // }
    };

    return (
        <div className="bg-gradient-to-r from-teal-400 to-blue-500 min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded-xl shadow-md max-w-md w-full">
                <h2 className="text-2xl mb-6 font-semibold text-center">Register to QuantaQue</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="username">Username</label>
                        <input className="w-full p-2 border rounded" type="text" id="username" placeholder="Username" required />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="email">Email Address</label>
                        <input className="w-full p-2 border rounded" type="email" id="email" placeholder="you@example.com" required />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="password">Password</label>
                        <input className="w-full p-2 border rounded" type="password" id="password" placeholder="Password" required />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="confirmPassword">Confirm Password</label>
                        <input className="w-full p-2 border rounded" type="password" id="confirmPassword" placeholder="Confirm Password" required />
                    </div>

                    <div className="flex justify-center items-center mt-6">
                        <button type="submit" className="bg-gradient-to-r from-teal-400 to-blue-500 text-white px-4 py-2 rounded hover:opacity-90">Register</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;


