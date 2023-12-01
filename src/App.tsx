import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Sketchboard from "./components/sketchboard/Sketchboard";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import Links from "./pages/links/Links";
import Settings from "./pages/settings/Settings";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const navigators = [
  { to: "/about", name: "About" },
  { to: "/projects", name: "Projects" },
  { to: "/links", name: "Links" },
  { to: "/settings", name: "Settings" },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="h-full min-h-10 min-w-60 flex overflow-y-auto">
        <Navbar navigators={navigators} />
        <Outlet />
      </div>
    ),
    errorElement: <a className="p-30 text-orange50">Not Found</a>,
    children: [
      {
        path: "about",
        element: <About />,
      },
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

function App() {
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
        <Header />
        <RouterProvider router={router} />
        <Footer />
      </div>
      <div
        className="absolute h-full w-full overflow-hidden bg-transparent opacity-50 duration-500"
        transition="opacity"
        hover="opacity-90"
      >
        <Sketchboard />
      </div>
    </div>
  );
}

export default App;
