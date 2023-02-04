import React, { Component } from 'react';
import AppRoutes from './AppRoutes';
import { RegisterMenu } from './components/api-authorization/RegisterMenu';
import { LandingPage } from './components/LandingPage/LandingPage';
import { Tasks } from './components/Tasks/Tasks';
import { Layout } from './components/Layout';
import { Route, Routes } from "react-router-dom";
import './custom.css';

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Routes>
                    {/*{AppRoutes.map((route, index) => {*/}
                    {/*  const { element, ...rest } = route;*/}
                    {/*  return <Route key={index} {...rest} element={element} />;*/}
                    {/*})}*/}
                    <Route path='/' element={<LandingPage />} />
                    <Route path='/register' element={<RegisterMenu />} />
                    <Route path='/tasks' element={<Tasks />} />
                    <Route path='/tasksList/:taskGroupID' element={<Tasks />} />
                </Routes>
            </Layout>
        );
    }
}

