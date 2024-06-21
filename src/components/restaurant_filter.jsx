import { useState } from "react";
import FilterListRoundedIcon from "@mui/icons-material/FilterListRounded";

const Restaurant_filter = ({ register, handleSubmit, onSearch }) => {
  const [click, setClick] = useState(false);

  return (
    <div className="mb-6">
      <div className="flex justify-between px-6">
        <select
          className="select select-sm select-bordered select-ghost"
          {...register("other")}
        >
          <option value="most_love">Most loved</option>
          <option value="most_review">Most review</option>
        </select>
        <button
          className="btn btn-outline btn-sm gap-1 rounded-full border-neutral-300"
          onClick={() => setClick((prev) => !prev)}
        >
          <FilterListRoundedIcon fontSize="small" />
          Filters
        </button>
      </div>
      {click && (
        <form className="px-6 pb-2 mt-4" onSubmit={handleSubmit(onSearch)}>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text-alt">
                What is the restaurant name??
              </span>
            </div>
            <input
              type="text"
              className="input input-bordered input-ghost w-full"
              {...register("name")}
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text-alt">
                Pick the restaurant category
              </span>
            </div>
            <select
              className="select select-bordered select-ghost"
              {...register("category")}
            >
              <option value="">Pick one</option>
              <option>Star Wars</option>
              <option>Harry Potter</option>
              <option>Lord of the Rings</option>
              <option>Planet of the Apes</option>
              <option>Star Trek</option>
            </select>
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text-alt">Where is the place?</span>
            </div>
            <input
              type="text"
              placeholder="Kuala Terengganu"
              className="input input-bordered input-ghost w-full"
              {...register("location")}
            />
          </label>
          <button type="submit" className="btn btn-primary w-full mt-4">
            Apply
          </button>
        </form>
      )}
    </div>
  );
};

export default Restaurant_filter;
