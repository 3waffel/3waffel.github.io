import { lazy } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Footer from "./components/footer";
import Header from "./components/header";
import Navbar from "./components/navbar";

const SketchContainer = lazy(() => import("./components/sketchContainer"));

import Home from "./pages/home";
import Links from "./pages/links";
import Projects from "./pages/projects";

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
        <div className="h-full w-full flex">
          <Navbar navigators={navigators} />
          <Outlet />
        </div>
        <Footer />
      </>
    ),
    errorElement: (
      <a className="p-30 text-orange50" href="/">
        Not Found
      </a>
    ),
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
        className="z-1 m-3 min-w-full bg-transparent"
        md="min-w-60%"
        xl="min-w-40%"
        hover="animate-paused"
        flex="~ col"
      >
        <RouterProvider router={router} />
      </div>
      <div
        id="sketchContainer"
        className="absolute h-full w-full overflow-hidden bg-transparent opacity-50 duration-500"
        transition="opacity"
        hover="opacity-100"
      >
        <SketchContainer />
      </div>
    </div>
  );
}
