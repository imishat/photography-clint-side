import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Catagory = () => {
    const{name,titel,balance,picture,_id}=useLoaderData()
    return (

        <div className="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
  <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={picture} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{titel}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden mt-3">ADD REVIEW</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
       Sidebar content her
     <h1>add commnrt</h1>
    </ul>
  
  </div>
</div>
    );
};

export default Catagory;
