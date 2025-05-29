import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AuthRoute from "./AuthRoute";
import Signin from "../pages/Signin";
import IsAuthenticatedRoute from "./IsAuthenticatedRoute";
import ProtectedLayout from "../layout/ProtectedLayout";

const AppRoutes = () => {
  const routesItems = [
    {
      path: "",
      element: <Home />,
      index: true,
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/signin"
          element={
            <IsAuthenticatedRoute>
              <Signin />
            </IsAuthenticatedRoute>
          }
        />

        <Route path="/" element={<AuthRoute />}>
          {routesItems.map(({ path, element, index }, i) => (
            <Route
              key={i}
              path={path}
              element={<ProtectedLayout>{element}</ProtectedLayout>}
              index={index}
            />
          ))}
        </Route>

        <Route path="*" element={<strong>Page not Found</strong>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
