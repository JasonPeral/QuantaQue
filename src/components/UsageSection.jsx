import React from 'react';

const UsageSection = () => {
    return (
        <section className="bg-blue-50 py-20">
            <div className="container mx-auto flex flex-wrap items-center">
                
                <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                    <h2 className="text-2xl md:text-3xl mb-6 font-semibold">
                        How to Use QuantaQue
                    </h2>
                    <ol className="list-decimal list-inside text-gray-700">
                        <li>Enter your location and the type of work you need.</li>
                        <li>Browse through the list of top professionals near you.</li>
                        <li>Select a provider and choose a suitable date and time.</li>
                        <li>Confirm your booking and wait for the magic!</li>
                    </ol>
                </div>
                
                <div className="w-full md:w-1/2 flex justify-center">
                    <div className=" w-66 flex items-center justify-center">
                       <img className="text-gray-400 text-xl" src="./Handshake.webp" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default UsageSection;
