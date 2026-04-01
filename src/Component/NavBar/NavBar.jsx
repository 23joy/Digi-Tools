import React from 'react';
import shoppingicon from '../../assets/products/shopping-cart.png'

const NavBar = ({card}) => {
    console.log(card)
    
    return (
    <div className="flex justify-between bg-base-100  w-[70%] mx-auto p-5">
        <div>
            <a className="btn btn-ghost text-xl  font-extrabold bg-linear-to-r from-purple-800 to-fuchsia-600 bg-clip-text text-transparent">DigiTools</a>
        </div>
        <div className="flex gap-5 items-center hidden md:hidden lg:flex  ">
            <a href="Products">Products</a>
            <a href="Features">Features</a>
            <a href="Pricing">Pricing</a>
            <a href="Testimonials">Testimonials</a>
            <a href="FAQ">FAQ</a>
        </div>
        <div className='flex gap-5 items-center relative'>
            <img className='font-bold' src={shoppingicon}alt="" />
            {card.length >0 && (<span className='absolute -top-0.5 right-42 bg-red-500 text-red text-xs px-2 py-0.5 rounded-full'>{card.length}</span>)}
            <a href="login">Login</a>
            <button className=' btn bg-linear-to-r from-fuchsia-950 to-fuchsia-600 rounded-full text-white'>Get Started</button>
        </div>
        
    </div>
    );
};

export default NavBar;