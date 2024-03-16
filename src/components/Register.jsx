import React from 'react';

const Register = () => {
    return (
        <div className="bg-gradient-to-r from-teal-400 to-blue-500 min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded-xl shadow-md max-w-md w-full">
                <h2 className="text-2xl mb-6 font-semibold text-center">Register to QuantaQue</h2>
                <form>
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
                        <button className="bg-gradient-to-r from-teal-400 to-blue-500 text-white px-4 py-2 rounded hover:opacity-90" type="submit">Register</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
