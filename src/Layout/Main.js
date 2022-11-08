import React from 'react';
import { Outlet } from 'react-router-dom';
import useTitle from '../hooks/useTitle';
import Footer from '../pages/Home/Shard/Footer';
import Header from '../pages/Home/Shard/Header';

const Main = () => {
   
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
           
            
        </div>
    );
};

export default Main;