import RestaurantMenuOutlinedIcon from "@mui/icons-material/RestaurantMenuOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";

const Register_restaurant = ({ register }) => {
  return (
    <div className="form-control gap-4">
      <label className="input input-bordered flex items-center gap-2">
        <RestaurantMenuOutlinedIcon color="action" />
        <input
          className="grow"
          type="text"
          placeholder="Restaurant name"
          {...register("name")}
        />
      </label>

      <select className="select select-bordered w-full">
        <option>Category</option>
        <option>Han Solo</option>
        <option>Greedo</option>
      </select>

      <div className="form-control gap-3">
        <div>Service provided</div>
        <label className="flex gap-2 cursor-pointer">
          <input type="checkbox" className="checkbox" />
          <span className="label-text">Service 1</span>
        </label>
        <label className="flex gap-2 cursor-pointer">
          <input type="checkbox" className="checkbox" />
          <span className="label-text">Service 2</span>
        </label>
        <label className="flex gap-2 cursor-pointer">
          <input type="checkbox" className="checkbox" />
          <span className="label-text">Service 3</span>
        </label>
      </div>

      <label className="input input-bordered flex items-center gap-2">
        <LocalPhoneOutlinedIcon color="action" />
        <input
          className="grow"
          type="tel"
          placeholder="Phone no"
          {...register("phone_no")}
        />
      </label>

      <textarea
        className="textarea textarea-bordered"
        placeholder="Location"
      ></textarea>
    </div>
  );
};

export default Register_restaurant;
