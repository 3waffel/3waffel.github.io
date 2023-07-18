import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Home />
        </div>
      ),
    },
  ]);

  return (
    <div
      className="overflow-hidden grid justify-center content-center"
      bg="gray-9"
      h="screen"
    >
      <div
        m="3"
        // bg="white opacity-80"
        // animate="shake-x count-infinite duration-1s ease"
        hover="animate-paused"
      >
        <Header />
        <div className="flex">
          <Navbar />
          <RouterProvider router={router} />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
