import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/home";
import About from "./pages/about";
import loggingMiddleware from "./middleware/loggingMiddleware";
import Loader from "./loader/productloader";
import { HomeBoundary } from "./errorBoundary/homeboundary";
import Login from "./pages/login/login";
import AdminLayout from "./layouts/dashboard/adminLayout";
import Dummy from "./pages/dummy/dummy";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      loader: Loader,
      Component: Home,
      middleware: [loggingMiddleware],
      ErrorBoundary: HomeBoundary,
      children: [
        {
          path: "",
          middleware: [loggingMiddleware],
        },
      ],
    },
    {
      path: "/about",
      Component: About,
      middleware: [loggingMiddleware],
    },
    {
      path: "/login",
      Component: Login,
    },
    {
      path: "/dashboard",
      Component: AdminLayout,
      middleware: [loggingMiddleware],
      children: [
        {
          path: "dummy",
          Component: Dummy,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
