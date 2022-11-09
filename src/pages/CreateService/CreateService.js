import React from 'react';
import { toast } from 'react-toastify';
import useTitle from '../../hooks/useTitle';

const CreateService = () => {
    useTitle('careate service')
    const create=(event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.title.value;
        const picture = form.image.value;
        const price = form.price.value;
        const titel = form.description.value;

       

        const add = {
            titel,
            price,
            picture,
            name
        
        }
        
        fetch('https://pothoserver.vercel.app/service', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                
            },
            body: JSON.stringify(add)
        })
            .then(res => res.json())
            .then(data => {
               
                if(data.acknowledged){
                   
                    toast.success('add new item')
                    form.reset();
                    
                }
            })
            .catch(er => console.error(er));

    }



    return (
        <div className="hero w-full my-20">
        <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
            <div className="text-center lg:text-left">
                <img className='w-3/4' src='https://www.creative-tim.com/blog/content/images/wordpress/2020/11/19362653-1024x683.jpg' alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                <h1 className="text-5xl text-center font-bold">New Service Add</h1>
                <form onSubmit={create} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Service Title</span>
                        </label>
                        <input type="text" name='title' placeholder="title" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image Url</span>
                        </label>
                        <input type="text" name='image' placeholder="Image Url" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">price</span>
                        </label>
                        <input type="text" name='price' placeholder="price" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">description</span>
                        </label>
                        <textarea className="textarea textarea-bordered" name='description' placeholder="description" required></textarea>
                        {/* <input type="text" name='description' placeholder="description" className="input input-bordered" required /> */}

                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary" type="submit" value="ADD SERVICE" />
                    </div>
                </form>

            </div>
        </div>
    </div>
    );
};

export default CreateService;