import { useState } from "react";
import FilterAltRoundedIcon from "@mui/icons-material/FilterAltRounded";

const Restaurant_filter = ({ register, handleSubmit, onSearch }) => {
  const [click, setClick] = useState(false);

  return (
    <div className="mb-6">
      <div className="flex justify-end px-6">
        <button
          className="btn btn-outline btn-sm gap-1 rounded-full border-gray-400"
          onClick={() => setClick((prev) => !prev)}
        >
          <FilterAltRoundedIcon fontSize="small" />
          Filters
        </button>
      </div>
      {click && (
        <form className="px-6 pb-6" onSubmit={handleSubmit(onSearch)}>
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
              <option>Pick one</option>
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
        </form>
      )}
    </div>
  );
};

export default Restaurant_filter;
