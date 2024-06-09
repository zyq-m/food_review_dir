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
import FilterAltRoundedIcon from "@mui/icons-material/FilterAltRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";

const View_restaurant = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState({});

  useEffect(() => {
    api
      .get(`/restaurant/${id}`)
      .then((res) => {
        setRestaurant(res.data.restaurant);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <Layout>
      <>
        <div className="bg-base-100">
          <div className="mb-4 pb-4 text-3xl text-center font-semibold">
            {restaurant.name}
          </div>
        </div>

        <div className="grid gap-4 px-4">
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

          <div className="flex justify-between items-center px-4 py-3 bg-base-100 rounded-lg">
            <div className="text-lg font-semibold">Reviews</div>
            <div>
              <button className="btn btn-ghost btn-sm">
                <FilterAltRoundedIcon fontSize="small" />
                Filters
              </button>
            </div>
          </div>

          <div className="grid gap-4">
            {restaurant.reviews?.map((d) => {
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
      </>
    </Layout>
  );
};

export default View_restaurant;
