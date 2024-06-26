import "./App.scss";

import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

import WelcomePage from "./pages/welcomePage/WelcomePage";
import HomePage from "./pages/homePage/HomePage";
import AboutPage from "./pages/aboutPage/AboutPage";
import ProjectPage from "./pages/projectPage/ProjectPage";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";

import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

function App() {
  const scrollTo = (el) => {
    const element = document.getElementById(el);
    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  };

  const Root = (el, navFoot = true) => (
    <>
      {navFoot && <Navbar scrollTo={scrollTo} />}
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            border: "1px solid #414141",
            padding: "15px 100px",
            fontSize: "16px",
            color: "#fff",
            backgroundColor: "rgb(27, 27, 27)",
          },
        }}
      />
      {el}
      {navFoot && <Footer />}
    </>
  );

  const router = createBrowserRouter([
    { path: "/", element: Root(<WelcomePage />, false), errorElement: Root(<NotFoundPage />) },
    { path: "/home", element: Root(<HomePage scrollTo={scrollTo} />), errorElement: Root(<NotFoundPage />) },
    { path: "/about-me", element: Root(<AboutPage scrollTo={scrollTo} />) },
    { path: "/projects/:id", element: Root(<ProjectPage />) },
  ]);

  return (
    <div className="App">
      <Analytics />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
