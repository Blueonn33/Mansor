import React, { Component } from 'react';
import AppRoutes from './AppRoutes';
import { RegisterMenu } from './components/api-authorization/RegisterMenu';
import { LandingPage } from './components/LandingPage/LandingPage';
//import { Tasks } from './components/Tasks/Tasks';
import { Layout } from './components/Layout';
//import { TasksComponent } from './components/TasksComponent/TasksComponent';
import { Route, Routes } from "react-router-dom";
import './custom.css';
import TaskGroupsComponent from './components/TaskGroupsComponent/TaskGroupsComponent';
import { Notes } from './components/Notes/Notes';
import TasksComponent from './components/TasksComponent/TasksComponent';

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
                    {/*   <Route path='/tasks/:id' element={<Tasks />} />*/}
                    <Route path='/taskGroups/:id' element={<TasksComponent />} />
                    <Route path='/taskGroups' element={<TaskGroupsComponent />} />
                    <Route path='/notes' element={<Notes />} />
                </Routes>
            </Layout>
        );
    }
}

