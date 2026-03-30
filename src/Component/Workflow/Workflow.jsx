import React from 'react';

const Workflow = () => {
    return (
        <div className='bg-linear-to-r from-blue-600 to-fuchsia-600 p-60'>
            <div className='text-center mb-10'>
                <h2 className='text-[40px] font-extrabold text-[#FFFFFF]'>Ready to Transform Your Workflow?</h2>
                <p className='text-[16px] text-[#FFFFFF]'>Join thousands of professionals who are already using Digitools to work smarter. <br /> Start your free trial today.</p>
            </div>
            <div className='flex gap-4 justify-center'>
                <button className='btn rounded-full text-fuchsia-700 '>Explore Products</button>
                <button className='border border-white rounded-full p-2 text-white'>View Pricing</button>
            </div>
            <p className='flex justify-center mt-2 text-white'>14-day free trial • No credit card required • Cancel anytime</p>
        </div>
    );
};

export default Workflow;