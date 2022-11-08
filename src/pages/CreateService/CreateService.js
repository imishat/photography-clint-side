import React from 'react';
import { toast } from 'react-toastify';
import useTitle from '../../hooks/useTitle';

const CreateService = () => {
    useTitle('careate service')
    const create=(event)=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const title=form.title.value;
        const price=form.price.value;
        const potho=form.potho.value;
        console.log(name,title,price,potho)
        

        const add={
            price,
            name,
            title,
            potho
        }
        fetch('http://localhost:5000/add', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                
            },
            body: JSON.stringify(add)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                   
                    toast.success('add new item')
                    form.reset();
                    
                }
            })
            .catch(er => console.error(er));

    }



    return (
        <form onSubmit={create}>
            <input name='name' type="text" placeholder="Service name" className="input input-bordered input-success w-full " />
            <input name='title' type="text" placeholder="title" className="input input-bordered input-success w-full" />
            <input name='price' type="text" placeholder="price" className="input input-bordered input-success w-full" />
            <input name='potho' type="text" placeholder="potho url" className="input input-bordered input-success w-full" />
            <input className='btn' type="submit" value="Place Your Order" />

        </form>
    );
};

export default CreateService;