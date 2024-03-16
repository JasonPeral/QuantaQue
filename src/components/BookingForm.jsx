import React from 'react';

const BookingForm = () => {
    return (
        <div className="bg-blue-100 py-40">
            <div className="container mx-auto text-center">
                <h1 className="text-3xl md:text-4xl mb-6 font-semibold">
                    Find the Best Services Near You
                </h1>

                <form className="space-y-4 md:flex md:space-x-4 md:space-y-0">
                    <input 
                        type="text" 
                        placeholder="Enter location/area" 
                        className="w-full md:w-1/3 px-4 py-2 border border-teal-400 rounded"
                    />

                    <select 
                        className="w-full md:w-1/3 px-4 py-2 border border-teal-400 rounded"
                    >
                        <option disabled selected>Type of work needed</option>
                        <option>Plumbing</option>
                        <option>Electrical</option>
                        <option>Landscaping</option>
                        <option>Floral Arrangements</option>
                        <option>Carpentry</option>
                        <option>Automotive Detailing</option>
                        <option>Automotive Repairs</option>

                    </select>

                    <button 
                        type="submit" 
                        className="w-full md:w-1/3 px-4 py-2 bg-gradient-to-r from-teal-400 to-blue-500 text-white font-semibold rounded hover:opacity-90"
                    >
                        Search
                    </button>
                </form>
            </div>
        </div>
    );
}

export default BookingForm;
