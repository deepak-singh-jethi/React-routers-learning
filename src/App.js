import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Root from "./pages/Root";
import Error from "./pages/Error/Error.js";

/* //! old method of defining routes


const routeDefinitions = createRoutesFromElements(
  <Route>
    <Route path="/" element={<Home></Home>}></Route>
    <Route path="/products" element={<Products></Products>}></Route>
  </Route>
);

const router = createBrowserRouter(routeDefinitions); */

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/products",
        element: <Products />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
