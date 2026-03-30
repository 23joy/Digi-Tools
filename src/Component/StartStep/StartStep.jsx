import React from 'react';
import Account from '../../assets/products/user.png'
import Products from '../../assets/products/package.png'
import rocket from '../../assets/products/rocket.png'

const StartStep = () => {
    return (
        <div className='text-center bg-[#F9FAFC] p-10 space-y-10'>
            <div>
                <h2 className='text-[48px] font-extrabold'>Get Started in 3 Steps</h2>
                <p className='text-[#627382] text-[16px]'>Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className='grid grid-cols-3 items-center justify-center'>
                <div className='p-6 bg-[#FFFFFF] shadow-[#F1F1F1] rounded-2xl'>
                    <div className='flex justify-center items-center bg-linear-to-r from-fuchsia-200 to-fuchsia-100 rounded-full h-10 w-10 p-2 mx-auto' ><img src={Account}  alt="" /></div>
                    <h2 className='text-[24px] font-bold'>Create Account</h2>
                    <p className='text-[16px] text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>
                </div>
                <div className='m-5 p-6 bg-[#FFFFFF] shadow-[#F1F1F1] rounded-2xl'>
                    <div className='flex justify-center items-center bg-linear-to-r from-fuchsia-200 to-fuchsia-100 rounded-full h-10 w-10 p-2 mx-auto' ><img src={Products} alt="" /></div>
                    <h2 className='text-[24px] font-bold'>Choose Products</h2>
                    <p className='text-[16px] text-[#627382]'>Browse our catalog and select the tools that fit your needs.</p>
                </div>
                <div className='m-5 p-6 bg-[#FFFFFF] shadow-[#F1F1F1] rounded-2xl'>
                    <div className='flex justify-center items-center bg-linear-to-r from-fuchsia-200 to-fuchsia-100 rounded-full h-10 w-10 p-2 mx-auto' ><img src={rocket} alt="" /></div>
                    <h2 className='text-[24px] font-bold'>Start Creating</h2>
                    <p className='text-[16px] text-[#627382]'>Download and start using your premium  tools immediately.</p>
                </div>
            </div>
        </div>
    );
};

export default StartStep;