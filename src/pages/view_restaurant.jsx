import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { api } from "../service/api";
import { Layout } from "../components";
import dayjs from "dayjs";

import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import DirectionsRoundedIcon from "@mui/icons-material/DirectionsRounded";
import RoomServiceRoundedIcon from "@mui/icons-material/RoomServiceRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import FilterListRoundedIcon from "@mui/icons-material/FilterListRounded";
import { useForm } from "react-hook-form";

const bg_img =
  "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const profile_img =
  "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=400";

const View_restaurant = () => {
  const { id } = useParams();
  const { register, handleSubmit } = useForm();
  const [restaurant, setRestaurant] = useState({});
  const [review, setReview] = useState([]);
  const [click, setClick] = useState(false);

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

  useEffect(() => {
    api
      .get(`/restaurant/${id}`)
      .then((res) => {
        setRestaurant(res.data.restaurant);
        setReview(res.data.restaurant.reviews);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <Layout>
      <>
        <div className="bg-base-100">
          <div className="relative mb-20">
            <div
              className="hero min-h-64 rounded-b-lg"
              style={{
                backgroundImage: `url(${bg_img})`,
              }}
            ></div>
            <div
              className="hero w-40 h-40 rounded-full mx-auto absolute -bottom-[4.5rem] right-0 left-0 ring ring-base-100"
              style={{
                backgroundImage: `url(${profile_img})`,
              }}
            ></div>
          </div>
          <div className="mb-4 pb-4 text-2xl text-center font-bold">
            {restaurant.name}
            <span className="block text-sm font-normal text-gray-400">
              4k loves • 4.5k reviews
            </span>
          </div>
        </div>

        <div className="grid gap-4 px-4 md:grid-cols-[0.7fr_1fr] md:grid-w md:max-w-5xl md:mx-auto">
          <div className="grid gap-4 px-4 py-3 bg-base-100 rounded-lg">
            <div className="text-lg font-semibold">Intro</div>
            <div className="text-center">{restaurant.description}</div>
            <div className="divider m-0"></div>
            <div className="flex gap-2">
              <InfoRoundedIcon />
              <Link
                className="link-hover"
                to={restaurant.social_links?.[0].fb}
                target="_blank"
              >
                Page · {restaurant.category}
              </Link>
            </div>
            <div className="flex gap-2">
              <DirectionsRoundedIcon />
              {restaurant.location}
            </div>
            {restaurant.phone ? (
              <div className="flex gap-2">
                <LocalPhoneRoundedIcon />
                {restaurant.phone}
              </div>
            ) : (
              ""
            )}
            {restaurant.social_links?.[1] ? (
              <div className="flex gap-2">
                <EmailRoundedIcon />
                {restaurant.social_links?.[1]?.email}
              </div>
            ) : (
              ""
            )}
            <div className="flex gap-2">
              <RoomServiceRoundedIcon />
              {restaurant.services}
            </div>
            {restaurant.website ? (
              <div className="flex gap-2">
                <LanguageRoundedIcon />
                <Link
                  className="link-hover"
                  to={restaurant.website}
                  target="_blank"
                >
                  {restaurant.website}
                </Link>
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="md:row-span-2">
            <div className="px-4 py-3 bg-base-100 rounded-lg mb-4">
              <div className="flex justify-between items-center ">
                <div className="text-lg font-semibold">Reviews</div>
                <div>
                  <button
                    className="btn btn-ghost btn-sm gap-1"
                    onClick={() => setClick((prev) => !prev)}
                  >
                    <FilterListRoundedIcon fontSize="small" />
                    Filters
                  </button>
                </div>
              </div>
              {click && (
                <form onSubmit={handleSubmit(filter_review)}>
                  <div className="divider my-3"></div>
                  <label className="form-control w-full">
                    <div className="label">
                      <span className="label-text-alt">Comment</span>
                    </div>
                    <select
                      className="select select-bordered select-ghost"
                      {...register("date")}
                    >
                      <option value="desc">Latest</option>
                      <option value="asc">Oldest</option>
                    </select>
                  </label>
                  <label className="form-control w-full">
                    <div className="label">
                      <span className="label-text-alt">Comment expression</span>
                    </div>
                    <select
                      className="select select-bordered select-ghost"
                      {...register("sentiment")}
                    >
                      <option value="">Pick one</option>
                      <option value="positive">Positive</option>
                      <option value="natural">Natural</option>
                      <option value="negative">Negative</option>
                    </select>
                  </label>
                  <button type="submit" className="btn btn-primary w-full mt-4">
                    Apply
                  </button>
                </form>
              )}
            </div>

            <div className="grid gap-4">
              {review?.map((d) => {
                return (
                  <div key={d.id} className="px-4 py-3 bg-base-100 rounded-lg">
                    <div className="grid grid-cols-[auto_1fr] gap-x-2 items-end mb-2">
                      <div className="col-span-1 row-span-2">
                        <AccountCircleRoundedIcon fontSize="large" />
                      </div>
                      <div className="font-semibold">{d.reviewer}</div>
                      <div className="text-xs text-gray-400">
                        {dayjs(d.date).format("D MMM YYYY")}
                      </div>
                    </div>
                    <div>
                      <p>{d.review}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
};

export default View_restaurant;
