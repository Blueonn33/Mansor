import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import { LandingPage } from './components/LandingPage/LandingPage'
import { RegisterMenu } from './components/api-authorization/RegisterMenu';
//import { Tasks } from './components/Tasks/Tasks';
import { Notes } from './components/Notes/Notes';
import TaskGroupsComponent from "./components/TaskGroupsComponent/TaskGroupsComponent";
import TasksComponent from "./components/TasksComponent/TasksComponent";

const AppRoutes = [
    {
        index: true,
        element: <Home />
    },
    {
        path: '/',
        element: <LandingPage />
    },
    {
        path: '/counter',
        element: <Counter />
    },
    {
        path: '/fetch-data',
        element: <FetchData />
    },
    {
        path: '/register',
        element: <RegisterMenu />
    },
    //{
    //    path: '/taskGroups/:id',
    //    element: <Tasks />
    //},
    {
        path: '/taskItems/:id',
        element: <TasksComponent />
    },
    {
        path: '/taskGroups',
        element: <TaskGroupsComponent />
    },
    {
        path: '/notes',
        element: <Notes />
    },
];

export default AppRoutes;

