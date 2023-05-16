import UserRoot from "../pages/User/UserRoot";
import Home from "../pages/User/Home";
import EmployeesUser from "../pages/User/EmployeesUser";
import AdminPanel from "../pages/User/AdminPanel";
import Basket from "../pages/User/Basket";
import EmployeeDetail from '../pages/User/EmployeeDetail';
import NotFound from "../pages/User/NotFound";


import AdminRoot from "../pages/Admin/AdminRoot";
import Dashboard from "../pages/Admin/Dashboard";
import EmployeesAdmin from "../pages/Admin/EmployeesAdmin";
import AddEmployee from "../pages/Admin/AddEmployee";
import EditEmployee from "../pages/Admin/EditEmployee";


export const ROUTES = [
    {
        path: '/',
        element: <UserRoot />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: 'employees',
                element: <EmployeesUser />
            },
            {
                path: 'adminpanel',
                element: <AdminPanel />
            },
            {
                path: 'basket',
                element: <Basket />
            },
            {
                path: 'employees/:id',
                element: <EmployeeDetail />
            },
            {
                path: '*',
                element: <NotFound />
            }

        ]
    },
    {
        path: '/admin',
        element: <AdminRoot />,
        children: [
            {
                path: '',
                element: <Dashboard />
            },
            {
                path: 'employees',
                element: <EmployeesAdmin />
            },
            {
                path: 'add-employee',
                element: <AddEmployee />
            },
            {
                path: 'employees/edit/:id',
                element: <EditEmployee />
            },

        ]

    }
]