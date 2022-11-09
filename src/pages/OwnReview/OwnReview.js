import React, { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthProvider';
import EmailReview from './EmailReview';

const OwnReview = () => {
    const {user}=useContext(AuthContext)
    const [review,setReview]=useState([])
    useEffect(() => {
        fetch(`https://pothoserver.vercel.app/review?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [user?.email])


    //delete
    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure, you want to cancel this Review');
        if(proceed){
            fetch(`https://pothoserver.vercel.app/review/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0){
                    toast.success("delete review")
                    const out = review.filter(odr => odr._id !== id);
                    setReview(out);
                }
            })
        }
    }

    return (
        <div>
            <h2 className="text-5xl">You have {review.length}Review
            </h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th>REVIEW</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {
                            review.map(r=><EmailReview key={r._id} r={r}
                                handleDelete={handleDelete}
                            ></EmailReview>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OwnReview;