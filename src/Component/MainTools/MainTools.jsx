import React, { use } from 'react';
import { FaCheck } from 'react-icons/fa';

import MainToolsCard from './MainToolsCard';

const MainTools = ({digitoolsPromise,card,setcard}) => {
    //console.log(digitoolsPromise);
    const digitool=use(digitoolsPromise)
    //console.log(digitool)

    return (
        <div className=''>
            <div className='grid grid-cols-3 gap-8 container mx-auto'>
             {
                digitool.map(items=><MainToolsCard key={items.id} items={items} setcard={setcard} card={card}></MainToolsCard>)
             } 
        </div>
        </div>
    );
};

export default MainTools;