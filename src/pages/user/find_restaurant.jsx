import { useEffect } from "react";
import { useLoading, useRestaurantStore } from "../../hooks";
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
  const setLoading = useLoading((state) => state.setLoading);

  const onSearch = async (data) => {
    setLoading(true);
    try {
      const res = await api.get("/restaurant/search", {
        params: data,
      });

      setRestaurant(res.data.restaurant);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    setLoading(true);
    api
      .get("/restaurant")
      .then((res) => {
        setRestaurant(res.data.restaurant);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <Layout>
      <div className="mb-7">
        <div
          className="hero min-h-80 relative"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="text-3xl font-bold">Discover Delightful Dining</h1>
              <p>Your Plate’s Perfect Match Awaits!</p>
            </div>
          </div>
        </div>

        <Restaurant_search
          handleSubmit={handleSubmit}
          onSearch={onSearch}
          register={register}
        />
      </div>

      <div className="md:max-w-screen-xl md:mx-auto">
        <Restaurant_filter
          handleSubmit={handleSubmit}
          onSearch={onSearch}
          register={register}
        />

        <Restaurant_card />
      </div>
    </Layout>
  );
};

export default Find_restaurant;
