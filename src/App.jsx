import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Views
import HomeView from './views/HomeView';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomeView />
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
