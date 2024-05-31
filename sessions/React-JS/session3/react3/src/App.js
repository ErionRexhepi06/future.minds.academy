

import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import Spring from './pages/Spring';
import Winter from './pages/Winter';
import Summer from './pages/Summer';
import Fall from './pages/Fall';

const router = createBrowserRouter([
  {path: '/', element: <Spring />},
  {path: '/summer', element: <Summer />},
  {path: '/fall', element: <Fall />},
  {path: '/winter', element: <Winter />}
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  
  );
}

export default App;

