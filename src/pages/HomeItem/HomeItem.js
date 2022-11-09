import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const HomeItem = ({item}) => {
    const {name,titel,balance
        ,picture}=item
        useTitle('Home')
    return (
        <div className="card w-96 bg-base-100 shadow-xl ">
                <figure>
                <PhotoProvider>
        
        <PhotoView src={picture}>
           <img src={picture} style={{ objectFit: 'cover',height:'300px' }} alt="" />
           
          
          </PhotoView>
        </PhotoProvider>

                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{titel?.slice(0, 100)+"......"}</p>
                    <div className="card-actions justify-between">
                        <div className="btn btn-outline btn-warning">Price: $ {balance}</div>
                        <div className="btn btn-primary">
                            <Link to='/services'>SEE ALL</Link>
                            
                            </div>
                    </div>
                </div>
            </div>
    );
};

export default HomeItem;