import ReactDOM from 'react-dom/client';
import './global.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/LoginForm';
import PrivateLayout from './components/PrivateLayout'; // Import the PrivateLayout component
import { listenToAuthChanges } from '@/store'; // Import the auth listener

// Initialize auth listener
listenToAuthChanges();

// Router Configuration
const router = createBrowserRouter([
  {
    path: '/',
    element: <PrivateLayout />, // Wrap protected routes with PrivateLayout
    children: [
      {
        path: '', // Default path ("/")
        element: <Home />,
      },
      // Add more private routes here
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  // You can add more public routes here
]);

// Render Application
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
