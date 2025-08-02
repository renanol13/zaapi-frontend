import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AuthRoute from "./AuthRoute";
import Signin from "../pages/Signin";
import IsAuthenticatedRoute from "./IsAuthenticatedRoute";
import ProtectedLayout from "../layout/ProtectedLayout";
import FormRegister from "../pages/Register/FormRegister";
import Profile from "../pages/Profile";

const AppRoutes = () => {
  const routesItems = [
    {
      path: "/",
      element: <Home />,
      index: true,
    },
    {
      path: "/profile",
      element: <Profile />,
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

        <Route
          path="/register"
          element={
            <IsAuthenticatedRoute>
              <FormRegister />
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

        <Route
          path="*"
          element={
            <ProtectedLayout>
              <strong>Page not Found</strong>
            </ProtectedLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
