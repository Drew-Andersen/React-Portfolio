// Import React Router
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Import css
import 'bootstrap/dist/css/bootstrap.min.css'

// Import pages the router will use to conditionally show the appropriate views
import App from './App';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Error from './pages/Error';
import Portfolio from './pages/portfolio/Portfolio';

// Defining the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <About />
      },
      {
        path: '/portfolio',
        element: <Portfolio />
      },
      {
        path: '/contact',
        element: <Contact />
      }
    ]
  }
])

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
