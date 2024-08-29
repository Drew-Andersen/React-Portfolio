// Import React Router
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Import css
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// Import pages the router will use to conditionally show the appropriate views
import App from './App';
import About from './pages/About';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Home from './pages/Home';

// Defining the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      }
    ]
  }
])

// Render the RouterProvider component
const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />
);