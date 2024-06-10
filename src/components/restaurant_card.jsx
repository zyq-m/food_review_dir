import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import ReviewsRoundedIcon from "@mui/icons-material/ReviewsRounded";
import { Link } from "react-router-dom";
import { useRestaurantStore } from "../hooks";

const img =
  "https://scontent.fkul18-2.fna.fbcdn.net/v/t39.30808-6/412739099_957654862509117_2333875650662258444_n.png?stp=dst-png_s960x960&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=SwUak0WC_y8Q7kNvgG408pv&_nc_ht=scontent.fkul18-2.fna&oh=00_AYC_PBZ5fyzgGBA2w_uQqRCQvC1CAdTY74TM4SjuxVC1Cg&oe=666B6167";

const Restaurant_card = () => {
  const restaurant = useRestaurantStore((state) => state.restaurant);

  return (
    <div className="grid gap-6 px-6 ">
      {restaurant?.map((d) => {
        return (
          <div key={d.id}>
            <Link to={`/restaurant/${d.id}`}>
              <div
                className="h-[calc(100vh_-_46rem)] bg-slate-50 rounded-lg bg-no-repeat bg-cover bg-center"
                style={{ backgroundImage: `url(${img})` }}
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
                    70
                  </div>
                  <div className="flex items-center gap-1">
                    <ReviewsRoundedIcon fontSize="small" color="action" />
                    70
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
