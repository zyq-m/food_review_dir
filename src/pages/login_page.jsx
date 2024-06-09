import { useForm } from "react-hook-form";
import { api } from "../service/api";
import { jwtDecode } from "jwt-decode";
import useUserStore from "../hooks/useUserStore";
import { useNavigate } from "react-router-dom";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import KeyOutlinedIcon from "@mui/icons-material/KeyOutlined";

const Login_page = () => {
  const { register, handleSubmit } = useForm();
  const set_user = useUserStore((state) => state.set_user);
  const navigate = useNavigate();

  const on_login = async (data) => {
    try {
      const res = await api.post("/login", data);
      const token = res.data;
      const { sub } = jwtDecode(token.access_token);
      sub.isAuth = true;

      set_user(sub);
      window.localStorage.setItem("access_token", token.access_token);
      window.localStorage.setItem("refresh_token", token.refresh_token);
      navigate("/restaurant_list");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center px-4 min-h-screen">
      <div className="flex-1">
        <h1 className="mb-6 text-center text-2xl font-semibold">
          Welcome Back
        </h1>
        <form className="form-control gap-4" onSubmit={handleSubmit(on_login)}>
          <label className="input input-bordered flex items-center gap-2">
            <EmailOutlinedIcon color="action" />
            <input
              className="grow"
              type="email"
              placeholder="Email"
              {...register("email")}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <KeyOutlinedIcon color="action" />
            <input
              className="grow"
              type="password"
              placeholder="Password"
              {...register("password")}
            />
          </label>
          <button type="submit" className="btn btn-info">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login_page;
