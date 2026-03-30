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
        <div className="card bg-base-100 shadow-sm">
                    <div className="card-body">
                        <span className="flex justify-end badge badge-soft">{items.tagType}</span>
                        <div>
                            <div>{items.icon}</div>
                        <h2 className="text-3xl font-bold">{items.name}</h2>
                        <p>{items.description}</p>
                        <span className="text-xl font-bold">$29/mo</span>
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