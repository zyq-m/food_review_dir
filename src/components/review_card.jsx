import dayjs from "dayjs";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

const Review_card = ({ review }) => {
  return (
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
  );
};

export default Review_card;
