import React from 'react';
import shoppingicon from '../../assets/products/shopping-cart.png'

const NavBar = ({card}) => {
    return (
    <div className="flex justify-between bg-base-100  w-[70%] mx-auto p-5">
        <div>
            <a className="btn btn-ghost text-xl  bg-linear-to-r from-purple-800 to-purple-600 bg-clip-text text-transparent">daisyUI</a>
        </div>
        <div className="flex gap-3 items-center">
            <a href="Products">Products</a>
            <a href="Features">Features</a>
            <a href="Pricing">Pricing</a>
            <a href="Testimonials">Testimonials</a>
            <a href="FAQ">FAQ</a>
        </div>
        <div className='flex gap-5 items-center'>
            <img src={shoppingicon}alt="" />
            <a href="login">Login</a>
            <button className=' btn bg-linear-to-r from-fuchsia-950 to-fuchsia-600 rounded-full text-white'>Get Started</button>
        </div>
    </div>
    );
};

export default NavBar;