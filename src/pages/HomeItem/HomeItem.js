import React from 'react';
import { Link } from 'react-router-dom';

const HomeItem = ({item}) => {
    const {name,titel,balance
        ,picture}=item
    return (
        <div className="card w-96 bg-base-100 shadow-xl ">
                <figure><img src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{titel.slice(0, 100)+"......"}</p>
                    <div className="card-actions justify-between">
                        <div className="btn btn-outline btn-warning">Price: $ {balance}</div>
                        <div className="btn btn-primary">
                            <Link to='/services'>Learn more!</Link>
                            
                            </div>
                    </div>
                </div>
            </div>
    );
};

export default HomeItem;