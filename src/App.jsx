import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Leaderboard } from './components/pages/Leaderboard';
import { Home } from './components/pages/Home';
import { Bonuses } from './components/pages/Bonuses';
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
]);
function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
