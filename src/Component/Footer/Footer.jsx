import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { RiInstagramFill } from 'react-icons/ri';

const Footer = () => {
    return (
    <footer  className=" bg-[#101727]">
      <div  className="footer sm:footer-horizontal bg-[#101727] text-neutral-content grid-col-5 p-10">
        <nav>
          <h6 className="font-bold text-2xl">DigiTools</h6>
          <p className='text-[#FFFFFF]'>Premium digital tools for creators,<br /> professionals, and businesses. Work smarter <br /> with our suite of powerful tools.</p>
        </nav>
        <nav>
          <h6 className="font-bold text-xl">Product</h6>
          <a className="link link-hover">Features</a>
          <a className="link link-hover">Pricing</a>
          <a className="link link-hover">Templates</a>
          <a className="link link-hover">Integration</a>
        </nav>
        <nav>
          <h6 className="font-bold text-xl">company</h6>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Press</a>

        </nav>
        <nav>
          <h6 className="font-black text-xl">Reaources</h6>
          <a className="link link-hover">Documentation</a>
          <a className="link link-hover">Help Center</a>
          <a className="link link-hover">Counnunity</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="font-bold text-xl">Social Links</h6>
          <div className='flex justify-between gap-6'>
            <div className='bg-white text-black p-2 rounded-full'><RiInstagramFill/></div>
            <div className='bg-white text-black p-2 rounded-full'><FaFacebookF/></div>
            <div className='bg-white text-black p-2 rounded-full'><FaXTwitter/></div>
          </div>
        </nav>
      </div>
     <div className='flex justify-between items-center p-5 border border-t-white'>
      <p className='text-white '>© 2026 Digitools. All rights reserved.</p>
      <div className='text-white flex gap-6'>
        <a href="link link-hover">Privecy Policy</a>
        <a href="link link-hover">Terms of Service</a>
        <a href="link link-hover">Cookies</a>
      </div>
     </div>

</footer>
    );
};

export default Footer;