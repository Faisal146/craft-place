import React from 'react';
import Header from '../shared/header';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';

const Root = () => {
    return (
        <div>
            <Header></Header>

            <Outlet></Outlet>

            <Footer></Footer>
        </div>
    );
};

export default Root;