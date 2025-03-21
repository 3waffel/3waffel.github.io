import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { lazy } from "react";

import Header from "./components/header";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
const SketchContainer = lazy(() => import("./components/sketchContainer"));

import Home from "./pages/home";
import Projects from "./pages/projects";
import Links from "./pages/links";
const Settings = lazy(() => import("./pages/settings"));

const navigators = [
  { to: "/projects", name: "Projects" },
  { to: "/links", name: "Links" },
  { to: "/settings", name: "Settings" },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <div className="h-full min-h-10 min-w-60 flex overflow-y-auto">
          <Navbar navigators={navigators} />
          <Outlet />
        </div>
        <Footer />
      </>
    ),
    errorElement: <a className="p-30 text-orange50">Not Found</a>,
    children: [
      { path: "", element: <Home /> },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "links",
        element: <Links />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
]);

export default function App() {
  return (
    <div
      className="overflow-hidden"
      bg="gray-9"
      h="screen"
      flex="~ justify-center"
    >
      <div
        className="z-1 m-3 min-w-40% bg-transparent"
        hover="animate-paused"
        flex="~ col"
      >
        <RouterProvider router={router} />
      </div>
      <div
        id="sketchboardContainer"
        className="absolute h-full w-full overflow-hidden bg-transparent opacity-50 duration-500"
        transition="opacity"
        hover="opacity-90"
      >
        <SketchContainer />
      </div>
    </div>
  );
}
