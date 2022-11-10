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
            fetch(`https://pothoserver-imishat.vercel.app/review/${id}`, {
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
    //update
    const handleStatusUpdate = id => {
        fetch(`https://pothoserver-imishat.vercel.app/review/${id}`, {
            method: 'PATCH', 
            headers: {
                'content-type': 'application/json'
            },
        
            body: JSON.stringify({status: 'Approved'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0) {
                const remaining = review.filter(rev => rev._id !== id);
                const approving = review.find(rev => rev._id === id);
                approving.status = 'Approved'

                const newReview = [approving, ...remaining];
                setReview(newReview);
            }
        })
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
                                handleStatusUpdate={handleStatusUpdate}
                            ></EmailReview>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OwnReview;