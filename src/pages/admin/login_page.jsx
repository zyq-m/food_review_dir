import { useForm } from "react-hook-form";
import { api } from "../../service/api";
import { jwtDecode } from "jwt-decode";
import useUserStore from "../../hooks/useUserStore";
import { useNavigate } from "react-router-dom";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import KeyOutlinedIcon from "@mui/icons-material/KeyOutlined";
import { ToastContainer } from "react-toastify";
import notify from "../../utils/notify";

const Login_page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
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

      if (sub?.role.id == 1) {
        navigate("/dashboard");
      } else {
        navigate("/");
      }
    } catch (error) {
      notify(error.response.data.message);
    }
  };

  return (
    <div className="flex items-center px-4 min-h-screen md:max-w-md md:mx-auto">
      <div className="flex-1">
        <h1 className="mb-6 text-center text-2xl font-semibold">
          Welcome Back
        </h1>
        <form className="form-control gap-4" onSubmit={handleSubmit(on_login)}>
          <label
            className={`input input-bordered flex items-center gap-2 ${
              errors?.email?.message && "input-error"
            }`}
          >
            <EmailOutlinedIcon color="action" />
            <input
              className="grow"
              type="email"
              placeholder="Email"
              {...register("email", { required: "Please enter your email" })}
            />
          </label>
          <label
            className={`input input-bordered flex items-center gap-2 ${
              errors?.password?.message && "input-error"
            }`}
          >
            <KeyOutlinedIcon color="action" />
            <input
              className="grow"
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Please enter your password",
              })}
            />
          </label>
          <button type="submit" className="btn btn-info">
            Login
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login_page;
