import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import BooksDetails from "./components/BooksDetails.jsx";
import Layout from "./components/Layout.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BrowseBooks from "./components/BrowseBooks.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import AddBook from "./components/AddBook.jsx";
import NotFound from "./components/NotFound.jsx";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/booksdetails/:id",
        element: <BooksDetails />,
      },
      {
        path: "/browse-books",
        element: <BrowseBooks />,
      },
      {
        path: "/books/:category",
        element: <BrowseBooks />,
      },
      {
        path: "/add",
        element: <AddBook />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
