import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Leaderboard } from './components/pages/Leaderboard';
import { Home } from './components/pages/Home';
import { Bonuses } from './components/pages/Bonuses';
import { Cases } from './components/pages/Cases';
import { Profile } from './components/pages/Profile';
import { Store } from './components/pages/Store';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/bonuses',
    element: <Bonuses />
  },
  {
    path: '/leaderboard',
    element: <Leaderboard />
  },
  {
    path: '/cases',
    element: <Cases />
  },
  {
    path: '/profile',
    element: <Profile />
  },
  {
    path: '/store',
    element: <Store />
  },
]);
function App() {

  return <RouterProvider router={router} />;

}

export default App
