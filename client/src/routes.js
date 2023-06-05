import { createBrowserRouter, Navigate } from 'react-router-dom';
import Products from './Products';
import ProductOverview from './ProductOverview';

export const routes = createBrowserRouter ([
    {
        path: '/user',
        element: <div>User Component</div>,
    },
    {
        path: '/products',
        element: <Products />,
    },
    {
        path: '/products/:id',
        element: <ProductOverview />,
    },
    {
        path: '/*',
        element: <Navigate to='/products'/>
    }
]);
