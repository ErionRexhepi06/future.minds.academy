import './css/fma-general.css';
import './css/fma-responsive.css';
import './css/style-responsive.css';
import './css/style.css';

import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import Home from './pages/HomePage';
import About from './pages/AboutPage';

const router = createBrowserRouter([
  {path: '/', element: <Home />},
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  
  );
}

export default App;
