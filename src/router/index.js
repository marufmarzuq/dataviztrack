import { Route, Routes } from "react-router-dom";
import AdminLayout from "./layout/AdminLayout";
import PrivateRoute from "./routeModel/PrivateRoute";

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <AdminLayout />
          </PrivateRoute>
        }
      >
        <Route path="" element={<>Welcome Home</>} />
        <Route path="design" element={<>Design Page</>} />
        <Route path="*" exact={true} element={<p>Not Found</p>} />
      </Route>
    </Routes>
  );
};

export default Router;
