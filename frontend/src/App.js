import { createBrowserRouter, Navigation } from "react-router-dom";
import "./App.css";
import Public from "./Pages/Public";
import Admin from "./Pages/Admin";
import Layout from "./Pages/Layout";
import './App.css';
import { RouterProvider } from "react-router";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigation to="/kezdolap" replace />,
      },
      {
        path: "kezdolap",
        element: <Public />,
      },
      {
        path: "Admin",
        element: <Admin />,
      },
    ],
  },
  {
    path: "*",
    element: (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h1>404 - Az oldal nem található</h1>
        <a href="/">Vissza a főoldalra</a>
      </div>
    ),
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
