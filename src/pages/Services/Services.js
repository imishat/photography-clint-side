import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllServices from './AllServices';

const Services = () => {
    const services=useLoaderData()
    console.log(services)
    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
           {
               services.map(service=><AllServices key={service._id} service={service}></AllServices>)
           }
        </div>
    );
};

export default Services;