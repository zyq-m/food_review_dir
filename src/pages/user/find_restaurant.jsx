import { useEffect } from "react";
import { useRestaurantStore } from "../../hooks";
import { api } from "../../service/api";
import {
  Layout,
  Restaurant_card,
  Restaurant_filter,
  Restaurant_search,
} from "../../components";
import { useForm } from "react-hook-form";

const Find_restaurant = () => {
  const { register, handleSubmit } = useForm();
  const setRestaurant = useRestaurantStore((state) => state.set_restaurant);

  const onSearch = async (data) => {
    try {
      const params = {
        name: data.name,
        category: data.category,
        location: data.location,
      };
      const res = await api.get("/restaurant/search", {
        params: params,
      });

      setRestaurant(res.data.restaurant);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {}, []);

  return (
    <Layout>
      <div className="mb-7">
        <div
          className="hero min-h-[calc(100vh_-_42rem)] relative"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-4 text-3xl font-bold">Hello there</h1>
              <p>
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
          </div>
        </div>

        <Restaurant_search
          handleSubmit={handleSubmit}
          onSearch={onSearch}
          register={register}
        />
      </div>

      <Restaurant_filter
        handleSubmit={handleSubmit}
        onSearch={onSearch}
        register={register}
      />

      <Restaurant_card />
    </Layout>
  );
};

export default Find_restaurant;
