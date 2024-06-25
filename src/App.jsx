import { Route, Routes } from "react-router-dom";
import * as Pages from "./pages";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Pages.Find_restaurant />} />
      <Route path="/login" element={<Pages.Login_page />} />
      <Route path="/sign_up" element={<Pages.Sign_up />} />
      <Route path="/restaurant/:id" element={<Pages.View_restaurant />} />

      <Route element={<ProtectedRoute role={[1]} />}>
        <Route path="/dashboard" element={<Pages.Restaurant_list />} />
        <Route path="/add_restaurant" element={<Pages.Add_restaurant />} />
        <Route
          path="/update_restaurant/:restaurant_id"
          element={<Pages.Update_restaurant />}
        />
      </Route>
    </Routes>
  );
};

export default App;

import { Navigate, Outlet, useNavigate } from "react-router-dom";
import useUserStore from "./hooks/useUserStore";

export const ProtectedRoute = ({ role }) => {
  const user = useUserStore((state) => state.user);
  const navigate = useNavigate();

  if (user?.isAuth) {
    if (!role?.includes(user.role.id)) {
      return (
        <div className="grid place-content-center h-screen">
          <div>
            <h2 className="text-3xl mb-4">
              You are not allow to access this page!
            </h2>
            <button
              className="btn btn-primary btn-sm"
              onClick={() => navigate(-1)}
            >
              Go back
            </button>
          </div>
        </div>
      );
    }

    return <Outlet />;
  }

  return <Navigate to="/login" />;
};
