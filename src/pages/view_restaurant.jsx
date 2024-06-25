import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../service/api";
import {
  Add_review,
  Layout,
  Restaurant_info,
  Review_card,
  Review_filter,
} from "../components";

import { useForm } from "react-hook-form";
import { useLoading, useRefresh } from "../hooks";

const View_restaurant = () => {
  const { id } = useParams();
  const { register, handleSubmit } = useForm();
  const [restaurant, setRestaurant] = useState({});
  const [review, setReview] = useState([]);
  const setLoading = useLoading((state) => state.setLoading);
  const counter_refresh = useRefresh((s) => s.counter);

  const filter_review = async (data) => {
    try {
      const res = await api.get(`/review/restaurant/${id}/sort`, {
        params: data,
      });
      setReview(res.data.reviews);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(counter_refresh);

  useEffect(() => {
    setLoading(true);
    api
      .get(`/restaurant/${id}`)
      .then((res) => {
        setRestaurant(res.data.restaurant);
        setReview(res.data.restaurant.reviews);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id, counter_refresh]);

  return (
    <Layout>
      <>
        <div className="bg-base-100">
          <div className="relative mb-20">
            <div
              className="hero min-h-64 rounded-b-lg"
              style={{
                backgroundImage: `url(${restaurant.photos?.bg.link})`,
              }}
            ></div>
            <div
              className="hero w-40 h-40 rounded-full mx-auto absolute -bottom-[4.5rem] right-0 left-0 ring ring-base-100"
              style={{
                backgroundImage: `url(${restaurant.photos?.profile.link})`,
              }}
            ></div>
          </div>
          <div className="mb-4 pb-4 text-2xl text-center font-bold">
            {restaurant.name}
            <span className="block text-sm font-normal text-gray-400">
              {`${restaurant?.positive_review} loves • ${restaurant?.no_review} reviews`}
            </span>
          </div>
        </div>

        <div className="grid gap-4 px-4 md:grid-cols-[0.7fr_1fr] md:grid-w md:max-w-5xl md:mx-auto">
          <div className="md:sticky md:top-20">
            <Restaurant_info restaurant={restaurant} />
          </div>

          <div className="md:row-span-2">
            <Add_review restaurant={restaurant} />
            <Review_filter
              filter_review={filter_review}
              handleSubmit={handleSubmit}
              register={register}
            />

            <Review_card review={review} />
          </div>
        </div>
      </>
    </Layout>
  );
};

export default View_restaurant;
