import React,{ Component } from 'react';
import HomePage from './page/HomePage/HomePage';

const routes = [
    {
        path : '/',
        exact : true,
        main : () => <HomePage />
    }
];
export default routes;