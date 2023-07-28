import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Navbar from "./components/navbar/Navbar";
import Sketchboard from "./components/sketchboard/Sketchboard";

const navigators = [
  { to: "/", name: "Home" },
  { to: "/about", name: "About" },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="flex min-w-60 min-h-10 h-full overflow-y-auto">
        <Navbar navigators={navigators} />
        <Outlet />
      </div>
    ),
    errorElement: <a className="text-orange50 p-30">Not Found</a>,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
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
        className="m-3 bg-transparent min-w-40% z-1"
        hover="animate-paused"
        flex="~ col"
      >
        <Header />
        <RouterProvider router={router} />
        <Footer />
      </div>
      <div className="absolute h-full w-full bg-transparent overflow-hidden opacity-30">
        <Sketchboard />
      </div>
    </div>
  );
}

export default App;
