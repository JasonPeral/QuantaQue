import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    // State to manage mobile menu visibility
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="bg-gradient-to-r from-teal-400 to-blue-500 p-5 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                
                <a href="/" className="text-2xl text-white font-semibold">
                    QuantaQue
                </a>

                {/* Desktop menu */}
                <div className="hidden md:flex space-x-4">
                    <Link to="/" className="text-white">Home</Link>
                    <Link to="/bookings" className="text-white">Bookings</Link>
                    <Link to="/contact" className="text-white">Contact</Link>
                    <Link to="/login" className="text-white font-bold">Login</Link>
                    <Link to="/register" className="text-white hover:underline font-bold">Register</Link>


                </div>

                {/* Hamburger button */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
                        ☰
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden container mx-auto mt-2">
                    <a href="/" className="block py-2 text-white border-t border-white">Home</a>
                    <a href="/bookings" className="block py-2 text-white border-t border-white">Bookings</a>
                    <a href="/contact" className="block py-2 text-white border-t border-white">Contact</a>
                    <a href="/login" className="block py-2 text-white border-t border-white">Login</a>
                    <a href="/register" className="block py-2 text-white border-t border-white">Register</a>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
