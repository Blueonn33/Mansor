import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import { LandingPage } from './components/LandingPage/LandingPage'
import { RegisterMenu } from './components/api-authorization/RegisterMenu';
import { Tasks } from './components/Tasks/Tasks';
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
    {
        path: '/tasks',
        element: <Tasks />
    },
    {
        path: '/groupsList',
        element: <TasksComponent />
    },
];

export default AppRoutes;

