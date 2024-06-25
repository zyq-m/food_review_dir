import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import KeyOutlinedIcon from "@mui/icons-material/KeyOutlined";
import { useForm } from "react-hook-form";
import Person2RoundedIcon from "@mui/icons-material/Person2Rounded";
import { api } from "../../service/api";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import notify from "../../utils/notify";

const Sign_up = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    getValues,
  } = useForm();

  const on_signup = async (data) => {
    try {
      const res = await api.post("/sign_up", data);
      notify(res.data?.message, true);
    } catch (err) {
      notify(err.response.data.message);
    }
  };

  return (
    <div className="flex items-center px-4 min-h-screen md:max-w-md md:mx-auto">
      <div className="flex-1">
        <h1 className="mb-6 text-center text-2xl font-semibold">
          Sign Up Account
        </h1>
        <form className="form-control gap-4" onSubmit={handleSubmit(on_signup)}>
          <div>
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
            <div className="text-error-content">
              <span className="label-text-alt text-error">
                {errors?.email?.message}
              </span>
            </div>
          </div>

          <div className="flex gap-2">
            <div>
              <label
                className={`input input-bordered flex items-center gap-2 ${
                  errors?.first_name?.message && "input-error"
                }`}
              >
                <Person2RoundedIcon color="action" />
                <input
                  className="grow"
                  type="text"
                  placeholder="First Name"
                  {...register("first_name", {
                    required: "Please enter first name",
                  })}
                />
              </label>
              <div className="text-error-content">
                <span className="label-text-alt text-error">
                  {errors?.first_name?.message}
                </span>
              </div>
            </div>
            <label className="input input-bordered flex items-center gap-2">
              <Person2RoundedIcon color="action" />
              <input
                className="grow"
                type="text"
                placeholder="Last Name"
                {...register("last_name")}
              />
            </label>
          </div>

          <div>
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
            <div className="text-error-content">
              <span className="label-text-alt text-error">
                {errors?.password?.message}
              </span>
            </div>
          </div>

          <div>
            <label
              className={`input input-bordered flex items-center gap-2 ${
                errors?.con_password?.message && "input-error"
              }`}
            >
              <KeyOutlinedIcon color="action" />
              <input
                className="grow"
                type="password"
                placeholder="Confirm Password"
                {...register("con_password", {
                  required: "Please enter confirm password",
                  validate: (match) => {
                    const password = getValues("password");
                    return match === password || "Passwords should match!";
                  },
                })}
              />
            </label>
            <div className="text-error-content">
              <span className="label-text-alt text-error">
                {errors?.con_password?.message}
              </span>
            </div>
          </div>
          <button type="submit" className="btn btn-info">
            Sign up
          </button>
        </form>
        <div className="text-center mt-4">
          Have an account? Login{" "}
          <Link to="/login" className="link-primary">
            here
          </Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Sign_up;
