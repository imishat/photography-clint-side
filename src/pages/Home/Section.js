import React, { useEffect, useState } from 'react';
import HomeItem from '../HomeItem/HomeItem';

const Section = () => {
    const[item,setItem]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res=>res.json())
        .then(data=>setItem(data))

    },[])
    return (
        <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 mx-auto' >
            {
                item.map(i=><HomeItem key={i._id} item={i}></HomeItem>)
            }
            
        </div>
    );
};

export default Section;