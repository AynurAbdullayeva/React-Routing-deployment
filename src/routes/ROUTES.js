import UserRoot from "../pages/User/UserRoot";
import Home from "../pages/User/Home";
import About from "../pages/User/About";
import Contact from "../pages/User/Contact";
import Register from "../pages/User/Register";
import Services from "../pages/User/Services";
import Login from "../pages/User/Login";
import NotFound from "../pages/User/NotFound";



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
                path: 'about',
                element: <About/>
            },
            {
                path: 'contact',
                element: <Contact/>

            },
            {
                path: 'register',
                element: <Register/>

            },
            {
                path: 'services',
                element: <Services/>
            },
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: '*',
                element: <NotFound/>
            }

        ]
    

    }
]