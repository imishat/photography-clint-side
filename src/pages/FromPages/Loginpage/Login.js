import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import { FcGoogle } from 'react-icons/fa';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const {login,googleSignIn }=useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    useTitle('Login')

    const from = location.state?.from?.pathname || '/';
    const GoogleProvider=new GoogleAuthProvider()
    const googleLogin = () => {
        googleSignIn(GoogleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from,{replace:true})
            })
            .catch(err => console.log(err))
    }


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
       
        login(email,password)
        .then(result => {
            const user = result.user;
            const currentUser = {
                email: user.email
            }

          

            // get jwt token
            fetch('https://pothoserver-imishat.vercel.app/jwt', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                   
                    localStorage.setItem('Click-token',data.token);
                    navigate(from, { replace: true });
                });
           
           
        })
        .catch(err => console.error(err));

    
    
    
    
    
    
    
    
    }

    return (
        <div className="hero w-full my-20">
        <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
            <div className="text-center lg:text-left">
                <img className='w-3/4' src='https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=2000' alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                <h1 className="text-5xl text-center font-bold">Login</h1>
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='email' placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            
                        </label>
                        
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary" type="submit" value="Login" />
                    </div>
                </form>
                <p className='text-center'>Go To SINGUP PAGES <Link className='text-orange-600 font-bold' to="/singup">Sign Up</Link> </p>
                <div className="form-control mt-6">
                <button onClick={googleLogin} className="btn btn-outline btn-accent">Google</button>
                    </div>
                    
            </div>
        </div>
    </div>
    );
};

export default Login;