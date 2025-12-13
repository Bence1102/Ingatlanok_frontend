import { createBrowserRouter, Navigate } from "react-router-dom";
import "./App.css";
import PublicPage from "./Pages/Public";
import AdminPage from "./Pages/Admin";
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
        element: <Navigate to="/kezdolap" replace />,
      },
      {
        path: "kezdolap",
        element: <PublicPage />,
      },
      {
        path: "Admin",
        element: <AdminPage />,
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
    <RouterProviderovider router={router} />
  );
}

export default App;
