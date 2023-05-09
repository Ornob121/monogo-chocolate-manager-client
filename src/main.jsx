import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Chocolate from "./components/Chocolate.jsx";
import AddChocolate from "./components/AddChocolate.jsx";
import EditChocolate from "./components/EditChocolate.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Chocolate></Chocolate>,
        loader: () => fetch("http://localhost:5000/chocolates"),
      },
      {
        path: "addChocolate",
        element: <AddChocolate></AddChocolate>,
      },
      {
        path: "/editChocolate/:id",
        element: <EditChocolate></EditChocolate>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/chocolates/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
