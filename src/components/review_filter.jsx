import { useState } from "react";
import FilterListRoundedIcon from "@mui/icons-material/FilterListRounded";

const Review_filter = ({ filter_review, handleSubmit, register }) => {
  const [click, setClick] = useState(false);

  return (
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
  );
};

export default Review_filter;
