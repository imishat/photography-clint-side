import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const Header = () => {

    const {user,logOut}=useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then()
            .catch();
    }

    const menuItems = <>
        <li className='font-semibold'><Link to='/blogs'>Blogs</Link></li>
        {
            user?.email ?
                <>
                    <li className='font-semibold'><Link to='/create'>ADD service</Link></li>
                    <li className='font-semibold'><Link to='/orders'>My reviews</Link></li>
                    
                    <li className='font-semibold'>
                        <button onClick={ handleLogOut } className='btn-ghost'>Sign Out</button>
                    </li>
                </>
                :
                <li className='font-semibold'><Link to='/login'>Login</Link></li>
        }
    </>
     
    return (
        <div className="navbar h-20 mb-12 pt-12 bg-base-100">
        <div className="navbar-start">
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {menuItems}
                </ul>
            </div>
            <Link to="/" className="btn btn-ghost normal-case text-xl">
                <img style={{ height: '70px' }} src='https://media.istockphoto.com/photos/digital-camera-picture-id1330178261?b=1&k=20&m=1330178261&s=170667a&w=0&h=lmOmWapMWbVHIpiPisliTO6W5W8sJx7uuDJLO1BenZI=' alt="" />
            </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
                {menuItems}
            </ul>
        </div>
        <div className="navbar-end">
            <button className="btn btn-outline btn-warning">Appointment</button>
        </div>
    </div>
    );
};

export default Header;