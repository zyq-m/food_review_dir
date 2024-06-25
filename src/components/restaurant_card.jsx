import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import ReviewsRoundedIcon from "@mui/icons-material/ReviewsRounded";
import { Link } from "react-router-dom";
import { useRestaurantStore } from "../hooks";

const Restaurant_card = () => {
  const restaurant = useRestaurantStore((state) => state.restaurant);

  return (
    <div className="grid gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4 md:gap-9">
      {restaurant?.map((d) => {
        return (
          <div key={d.id}>
            <Link to={`/restaurant/${d.id}`}>
              <div
                className="min-h-64 bg-slate-50 rounded-lg bg-no-repeat bg-cover bg-center"
                style={{ backgroundImage: `url(${d.photos?.profile.link})` }}
              ></div>
              <div className="flex justify-between items-center mt-1 px-1 text-sm">
                <div className="font-semibold">{d.name}</div>
                <div className="inline-flex gap-2">
                  <div className="flex items-center gap-1">
                    <FavoriteRoundedIcon
                      color="action"
                      fontSize="small"
                      className="hover:text-pink-400"
                    />
                    {d.positive_review}
                  </div>
                  <div className="flex items-center gap-1">
                    <ReviewsRoundedIcon fontSize="small" color="action" />
                    {d.no_review}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Restaurant_card;
