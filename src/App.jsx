import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Leaderboard } from './components/pages/Leaderboard';
import { Home } from './components/pages/Home';
import { Bonuses } from './components/pages/Bonuses';
import { Cases } from './components/pages/Cases';
import { Profile } from './components/pages/Profile';
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
]);
function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
