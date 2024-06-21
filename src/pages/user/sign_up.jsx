import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import KeyOutlinedIcon from "@mui/icons-material/KeyOutlined";
import { useForm } from "react-hook-form";
import Person2RoundedIcon from "@mui/icons-material/Person2Rounded";
import { api } from "../../service/api";
import { Link } from "react-router-dom";

const Sign_up = () => {
  const { handleSubmit, register } = useForm();

  const on_signup = async (data) => {
    try {
      await api.post("/sign_up", data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex items-center px-4 min-h-screen md:max-w-md md:mx-auto">
      <div className="flex-1">
        <h1 className="mb-6 text-center text-2xl font-semibold">
          Sign Up Account
        </h1>
        <form className="form-control gap-4" onSubmit={handleSubmit(on_signup)}>
          <label className="input input-bordered flex items-center gap-2">
            <EmailOutlinedIcon color="action" />
            <input
              className="grow"
              type="email"
              placeholder="Email"
              {...register("email")}
            />
          </label>
          <div className="flex gap-2">
            <label className="input input-bordered flex items-center gap-2">
              <Person2RoundedIcon color="action" />
              <input
                className="grow"
                type="text"
                placeholder="First Name"
                {...register("first_name")}
              />
            </label>
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
          <label className="input input-bordered flex items-center gap-2">
            <KeyOutlinedIcon color="action" />
            <input
              className="grow"
              type="password"
              placeholder="Password"
              {...register("password")}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <KeyOutlinedIcon color="action" />
            <input
              className="grow"
              type="password"
              placeholder="Confirm Password"
              {...register("con_password")}
            />
          </label>
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
    </div>
  );
};

export default Sign_up;
