import { Link } from "react-router-dom";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import DirectionsRoundedIcon from "@mui/icons-material/DirectionsRounded";
import RoomServiceRoundedIcon from "@mui/icons-material/RoomServiceRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";

const Restaurant_info = ({ restaurant }) => {
  return (
    <div className="grid gap-4 px-4 py-3 bg-base-100 rounded-lg">
      <div className="text-lg font-semibold">Intro</div>
      <div className="text-center">{restaurant.description}</div>
      <div className="divider m-0"></div>
      <div className="flex gap-2">
        <InfoRoundedIcon />
        <Link
          className="link-hover"
          to={restaurant.social_links?.fb}
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
      {restaurant.social_links?.email ? (
        <div className="flex gap-2">
          <EmailRoundedIcon />
          {restaurant.social_links.email}
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
          <Link className="link-hover" to={restaurant.website} target="_blank">
            {restaurant.website}
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Restaurant_info;
