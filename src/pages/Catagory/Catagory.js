import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import Reviews from '../RewiewPages/Reviews';

const Catagory = () => {
    const{name,titel,balance,picture,_id}=useLoaderData()
    useTitle('catagory')
    const [reviews, setReviews] = useState([])


    const handlReview = event => {
      event.preventDefault()
      const form = event.target;
      const review = form.review.value;
      form.reset()
      console.log(review)
      fetch('https://pothoserver.vercel.app/review', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({review}),
      })
          .then(res => res.json())
          .then(data => console.log(data))
          .catch(err => console.error(err))


  }
  useEffect(() => {
      fetch('https://pothoserver.vercel.app/review')
          .then(res => res.json())
          .then(data => setReviews(data))
  }, [reviews])
    return (
      <div>
            <h2 className='text-4xl font-bold text-center my-5'>Service Detalis</h2>
            <div className="lg:w-1/2 sm:w-full lg:mx-auto">
                <figure className="px-10 pt-10">
                    <img src={picture} alt="Shoes" className="rounded-xl mx-auto" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title"> {name}</h2>
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <p>{titel}</p>

                    <div className="card-actions justify-between">
                        <div className="btn btn-outline btn-warning">price: $ {balance}</div>
                        
                    </div>

                    <div className='w-full'>
                        <h2 className='text-5xl font-bold text-center my-5'>All Review</h2>
                        {
                            reviews.map(review => <Reviews key={review._id} reviews={review}></Reviews>)
                        }


                        <form onSubmit={handlReview} className="card-body bg-primary">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-bold text-xl">Comment</span>
                                </label>
                                <textarea className="textarea textarea-bordered" name='review' placeholder="Describe Your Experience..."></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-outline btn-warning" type="submit" value="Add Review" />
                            </div>
                        </form>
                    </div>


                </div>
            </div>

        </div>

        
    );
};

export default Catagory;
