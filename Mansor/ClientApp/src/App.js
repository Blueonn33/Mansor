import React, { Component, useState } from 'react';
import AppRoutes from './AppRoutes';
import { RegisterMenu } from './components/api-authorization/RegisterMenu';
import { LandingPage } from './components/LandingPage/LandingPage';
import { Layout } from './components/Layout';
import { Route, Routes } from "react-router-dom";
import './custom.css';
import TaskGroupsComponent from './components/TaskGroupsComponent/TaskGroupsComponent';
import { Notes } from './components/Notes/Notes';
import TasksComponent from './components/TasksComponent/TasksComponent';
import { TasksCalendar } from './components/TasksCalendar/TasksCalendar';

//export default class App extends Component {
//    static displayName = App.name;

//    render() {
//        return (
//            <Layout>
//                <Routes>
//                    {/*{AppRoutes.map((route, index) => {*/}
//                    {/*  const { element, ...rest } = route;*/}
//                    {/*  return <Route key={index} {...rest} element={element} />;*/}
//                    {/*})}*/}

//                    <Route path='/' element={<LandingPage />} />
//                    <Route path='/register' element={<RegisterMenu />} />
//                    {/*   <Route path='/taskGroups/:id' element={<Tasks />} />*/}
//                    <Route path='/taskItems/:id' element={<TasksComponent />} />
//                    <Route path='/taskGroups' element={<TaskGroupsComponent />} />
//                    <Route path='/calendar' element={<TasksCalendar />} />
//                    <Route path='/notes' element={<Notes />} />
//                </Routes>
//            </Layout>
//        );
//    }
//}


function App() {
    const [token, setToken] = useState();

    if (!token) {
        return <RegisterMenu setToken={setToken} />
    }
    return (
        <Layout>
            <Routes>
                {/*{AppRoutes.map((route, index) => {*/}
                {/*  const { element, ...rest } = route;*/}
                {/*  return <Route key={index} {...rest} element={element} />;*/}
                {/*})}*/}

                <Route path='/' element={<LandingPage />} />
                <Route path='/register' element={<RegisterMenu />} />
                {/*   <Route path='/taskGroups/:id' element={<Tasks />} />*/}
                <Route path='/taskItems/:id' element={<TasksComponent />} />
                <Route path='/taskGroups' element={<TaskGroupsComponent />} />
                <Route path='/calendar' element={<TasksCalendar />} />
                <Route path='/notes' element={<Notes />} />
            </Routes>
        </Layout>
    );
}

export default App;