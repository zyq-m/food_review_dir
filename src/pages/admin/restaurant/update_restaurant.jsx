import { useForm } from "react-hook-form";
import {
  Layout,
  Register_restaurant,
  Social_media,
  Photos,
} from "../../../components";
import { api } from "../../../service/api";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useLoading } from "../../../hooks";
import { ToastContainer } from "react-toastify";
import notify from "../../../utils/notify";

const Update_restaurant = () => {
  const { restaurant_id } = useParams();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const setLoading = useLoading((state) => state.setLoading);

  const onUpdate = async (data) => {
    try {
      const res = await api.put(`/restaurant/${restaurant_id}`, data);
      notify(res.data.message, true);
    } catch (err) {
      notify(err.response.data.message);
    }
  };

  useEffect(() => {
    setLoading(true);
    api
      .get(`/restaurant/${restaurant_id}`)
      .then((res) => {
        const data = res.data.restaurant;
        const services = data.services.split(" · ");
        const social = data.social_links;
        setLoading(false);

        setValue("name", data.name);
        setValue("description", data.description);
        setValue("category", data.category);
        setValue("phone", data.phone);
        setValue("location", data.location);
        setValue("services", services);
        setValue("website", data.website);
        setValue("email", social.email);
        setValue("fb", social.fb);
        setValue("ig", social.ig);
        setValue("bg_img", data.photos.bg.img);
        setValue("bg_link", data.photos.bg.link);
        setValue("profile_img", data.photos.profile.img);
        setValue("profile_link", data.photos.profile.link);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [restaurant_id]);

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
            <h1 className="text-3xl font-bold">Update Restaurant Info</h1>
            <p>Keep your restaurant update!</p>
          </div>
        </div>
      </div>
      <div className="md:max-w-5xl md:mx-auto">
        <form
          className="form-control gap-4 px-4 md:grid md:grid-cols-2 "
          onSubmit={handleSubmit(onUpdate)}
        >
          <div className="md:col-span-2">
            <Register_restaurant register={register} errors={errors} />
          </div>
          <Social_media register={register} errors={errors} />
          <Photos register={register} errors={errors} />
          <div className="md:flex md:justify-end md:col-span-2">
            <button type="submit" className="btn btn-accent">
              Save
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </Layout>
  );
};

export default Update_restaurant;
