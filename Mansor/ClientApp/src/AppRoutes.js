import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import { LandingPage } from './components/LandingPage/LandingPage'
import { RegisterMenu } from './components/api-authorization/RegisterMenu';
import { Notes } from './components/Notes/Notes';
import TaskGroupsComponent from "./components/TaskGroupsComponent/TaskGroupsComponent";
import TasksComponent from "./components/TasksComponent/TasksComponent";
import { TasksCalendar } from "./components/TasksCalendar/TasksCalendar";

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
        path: '/taskItems/:id',
        element: <TasksComponent />
    },
    {
        path: '/taskGroups',
        element: <TaskGroupsComponent />
    },
    {
        path: '/calendar',
        element: <TasksCalendar />
    },
    {
        path: '/notes',
        element: <Notes />
    },
];

export default AppRoutes;

