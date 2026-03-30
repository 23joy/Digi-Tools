import React from 'react';
import { toast } from 'react-toastify';

const Card = ({card,setcard}) => {
    console.log(card);
    const totalPrice=card.reduce((sum,item)=>sum+item.price,0)
    const handleProcced=()=>{
        setcard([]);
        toast.success("Successfully Procced")
    }
    return (
        <div className='bg-[rgba(255,255,255,0.7)] rounded-2xl  container mx-auto p-5 space-y-4 mb-20'>
            <h1 className='font-bold text-[24px] text-[#101727]'>Your Cart</h1>
            {
            card.map(items=> <div className='bg-[#F9FAFC] p-6 '>
                    <div className='flex justify-between items-center'>
                        <div className='flex  gap-4 items-center'>
                            <h2>{items.id}</h2>
                            <div>
                            <h2 className='font-semibold text-[20px]'>{items.name}</h2>
                            <p className='font-medium tect-[16px] text-[#627382]'>${items.price}</p>
                        </div>
                        </div>
                        <div>
                            <button className='text-pink-600' >Remove</button>
                        </div>
                    </div>
                </div>
                )
            }

            {
                card.length===0?
                (<div className='bg-gray-100 p-30 rounded-2xl'><h2 className='text-center font-bold'>Please Buy any Card</h2></div>):
                (<>
                <div className='flex justify-between items-center'>
                <p>Total</p>
                <p>${totalPrice}</p>
            </div>
            <button onClick={handleProcced} className='w-full btn bg-linear-to-r from-indigo-800 to-fuchsia-500 rounded-full'>Proceed To Checkout</button></>)
            }
        </div>
    );
};

export default Card;