import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './components/Home'; 
import Contact from './components/Contact'; 
import Result from './components/Result'; 
import './index.css'; 

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '',
                element: <Home />,
            },
            {
                path: 'contact',
                element: <Contact />,
            },
            {
                path: 'result',
                element: <Result />,
            },
        ],
    },
]);

const root = createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <RouterProvider router={appRouter} />
    </React.StrictMode>
);





