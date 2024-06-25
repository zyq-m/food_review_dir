import { useForm } from "react-hook-form";
import {
  Layout,
  Register_restaurant,
  Photos,
  Social_media,
} from "../../../components";
import { api } from "../../../service/api";
import { ToastContainer } from "react-toastify";
import notify from "../../../utils/notify";

const Add_restaurant = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onRegister = async (data) => {
    try {
      const res = await api.post("/restaurant", data);
      notify(res.data.message, true);
    } catch (err) {
      notify(err.response.data.message);
    }
  };

  return (
    <Layout>
      <div
        className="hero min-h-60 mb-4"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/2878745/pexels-photo-2878745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="text-3xl font-bold">Restaurant Registration</h1>
            <p>Fill the form below to register a restaurant</p>
          </div>
        </div>
      </div>
      <div className="md:max-w-5xl md:mx-auto">
        <form
          className="form-control gap-4 px-4 md:grid md:grid-cols-2 "
          onSubmit={handleSubmit(onRegister)}
        >
          <div className="md:col-span-2">
            <Register_restaurant register={register} errors={errors} />
          </div>
          <Social_media register={register} />
          <Photos register={register} />
          <div className="md:flex md:justify-end md:col-span-2">
            <button type="submit" className="btn btn-accent">
              Done
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </Layout>
  );
};

export default Add_restaurant;
