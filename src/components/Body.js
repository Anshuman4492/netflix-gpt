import Browse from "./Browse";
import Login from "./Login";
import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
const Body = () => {
  // const user = auth.currentUser;
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
