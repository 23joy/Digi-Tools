import React, { useState } from 'react';
import { IoCheckmarkOutline } from 'react-icons/io5';
import { toast } from 'react-toastify';

const MainToolsCard = ({items,card,setcard}) => {
    const [buy,setBuy]=useState(false)
    const handleBuy=()=>{
        toast.success("Buying start");
        setBuy(true)
        setcard([...card,items])
    }
    return (
        <div className="card bg-base-100 shadow-sm ">
                    <div className=" p-6 space-y-5">
                        <div className='flex  justify-end items-end'>
                            <span className={` badge p-6 md:p-3 ${items.tagType==="popular" && "bg-fuchsia-200 text-fuchsia-500"}
                            ${items.tagType==="best seller" && "bg-orange-200 text-orange-500"}
                            ${items.tagType==="new" && "bg-emerald-200 text-emerald-500"}

                            `}>{items.tagType}</span>
                        </div>
                        <div className='space-y-2'>
                            <div>
                                <img className=' bg-[#F2F2F2] p-2 rounded-full' src={items.icon} alt="" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold">{items.name}</h2>
                                <p>{items.description}</p>
                            </div>
                            <div>
                                <span className="text-xl font-bold">${items.price}/{items.period}</span>
                            </div>
                        </div>
                        <ul>
                            {
                                items.features.map(item=><li className='flex gap-2'><IoCheckmarkOutline className='text-green-600'></IoCheckmarkOutline>{item}</li>)
                            }
                        </ul>
                        <div className="mt-6">
                        <button onClick={handleBuy} className="btn w-full rounded-full bg-linear-to-r from-indigo-600 to-fuchsia-600">{buy?"Buyed":"Buy now"}</button>
                        </div>
                    </div>
                    </div>
    );
};

export default MainToolsCard;