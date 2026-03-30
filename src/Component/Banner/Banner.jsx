import React from 'react';
import BannerImg from '../../assets/products/banner.png'
import { CiPlay1 } from 'react-icons/ci';

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                src={BannerImg}
                className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                    <div>
                        
                        <h2 className='text-fuchsia-800 text-[16px]'>  New: AI-Powered Tools Available</h2>
                    </div>
                <h1 className="text-5xl font-bold">
                   Supercharge Your <br/> Digital Workflow 
                </h1>
                <p className="py-6">
                    Access premium AI tools, design assets, templates, and productivity
                    software—all in one place. Start creating faster today.
                    Explore Products
                </p>
                <div className='flex gap-5'>
                <button className="btn bg-linear-to-r from-fuchsia-950 to-fuchsia-600 rounded-full text-white">Explore Products</button>
                <button className="btn border border-fuchsia-600 rounded-full text-fuchsia-800"><CiPlay1/> Watch Demo</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;