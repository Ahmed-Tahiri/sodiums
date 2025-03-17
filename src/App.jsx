import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Bonuses } from "./components/pages/Bonuses";
import { Cases } from "./components/pages/Cases";
import { Home } from "./components/pages/Home";
import { Leaderboard } from "./components/pages/Leaderboard";
import { Profile } from "./components/pages/Profile";
import { Store } from "./components/pages/Store";
import Snowfall from "./components/Snowfall";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/bonuses", element: <Bonuses /> },
  { path: "/leaderboard", element: <Leaderboard /> },
  { path: "/cases", element: <Cases /> },
  { path: "/profile", element: <Profile /> },
  { path: "/store", element: <Store /> },
]);

function App() {
  useEffect(() => {
    AOS.init({ duration: 700 });
  }, []);

  return (
    <>
      <Snowfall />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
