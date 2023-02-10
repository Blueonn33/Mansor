import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import { LandingPage } from './components/LandingPage/LandingPage'
import { RegisterMenu } from './components/api-authorization/RegisterMenu';
import { Tasks } from './components/Tasks/Tasks';
import { TaskGroupsComponent } from "./components/TaskGroupsComponent/TaskGroupsComponent";

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
        path: '/taskGroups',
        element: <TaskGroupsComponent />
    },
];

export default AppRoutes;

