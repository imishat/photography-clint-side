import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blogs = () => {
    useTitle('Blogs')
    return (
        <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1  gap-5'>
            <div className="border-solid border-2 border-sky-500 p-5 bg-yellow-300">
                <h2 className='text-5xl font-bold'>Difference between SQL and NoSQL</h2>
                <p className='text-xl my-2'>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
            </div>
            <div className="border-solid border-2 border-sky-500 p-5 bg-yellow-300">
                <h2 className='text-5xl font-bold'>What is JWT, and how does it work?</h2>
                <p className='text-xl my-2'>JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.

                    It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP)</p>
            </div>
            <div className="border-solid border-2 border-sky-500 p-5 bg-yellow-300">
                <h2 className='text-5xl font-bold'>What is the difference between javascript and NodeJS?</h2>
                <p className='text-xl my-2'>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
            </div>
            <div className="border-solid border-2 border-sky-500 p-5 bg-yellow-300">
                <p className='text-5xl font-bold'>How does NodeJS handle multiple requests at the same time?</p>
                <p className='text-xl my-2'>How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
            </div>
        </div>
    );
};

export default Blogs;