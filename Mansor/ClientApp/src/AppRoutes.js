import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import { LandingPage } from './components/LandingPage/LandingPage'
import TaskGroupsComponent from "./components/TaskGroupsComponent/TaskGroupsComponent";
import TasksComponent from "./components/TasksComponent/TasksComponent";
import { TasksCalendar } from "./components/TasksCalendar/TasksCalendar";
import { RegisterMenu } from "./components/RegisterMenu/RegisterMenu";
import Notes from "./components/Notes/Notes";
import { NotesComponent } from "./components/NotesComponent/NotesComponent";
import ApiAuthorizationRoutes from "./components/api-authorization/ApiAuthorizationRoutes";
import { ApplicationPaths } from './components/api-authorization/ApiAuthorizationConstants';

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
    {
        path: '/addNote',
        element: <NotesComponent />
    },
    {
        path: {ApplicationPaths},
        element: <ApiAuthorizationRoutes />
    },
];

export default AppRoutes;

