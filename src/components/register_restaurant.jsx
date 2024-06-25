import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import { useState } from "react";

const RESTAURANT_SERVICES = [
  { id: crypto.randomUUID(), label: "Dine-in" },
  { id: crypto.randomUUID(), label: "Takeout" },
  { id: crypto.randomUUID(), label: "Delivery" },
  { id: crypto.randomUUID(), label: "Reservation" },
  { id: crypto.randomUUID(), label: "Outdoor seating" },
  { id: crypto.randomUUID(), label: "Curbside pickup" },
  { id: crypto.randomUUID(), label: "In-store pickup" },
];

const RESTAURANT_CATEGORY = [
  { id: crypto.randomUUID(), label: "Cafe" },
  { id: crypto.randomUUID(), label: "Food & beverage" },
  { id: crypto.randomUUID(), label: "Restaurant" },
  { id: crypto.randomUUID(), label: "Family Style Restaurant" },
  { id: crypto.randomUUID(), label: "Health Food Restaurant" },
];

const Register_restaurant = ({ register, errors }) => {
  const [services, setServices] = useState(RESTAURANT_SERVICES);
  const [category, setCategory] = useState(RESTAURANT_CATEGORY);

  return (
    <div className="bg-base-100 px-4 py-5 rounded-lg">
      <div className="text-lg font-semibold">Restaurant details</div>
      <div className="divider my-3"></div>
      <div className="form-control gap-4">
        <div className="md:flex md:gap-4">
          <label className="form-control md:flex-1">
            <div className="label">
              <span className="label-text">Restaurant name</span>
            </div>
            <input
              className={`input input-bordered ${
                errors?.name?.message && "input-error"
              }`}
              type="text"
              placeholder="Restaurant name"
              {...register("name", {
                required: "Please enter restaurant name",
              })}
            />
          </label>
          <label className="form-control md:flex-1">
            <div className="label">
              <span className="label-text">Category</span>
            </div>
            <select
              className={`select select-bordered w-full ${
                errors?.category?.message && "select-error"
              }`}
              {...register("category", {
                required: "Please select restaurant category",
              })}
            >
              <option value="">Pick one</option>
              {category.map((d) => {
                return (
                  <option key={d.id} value={d.label}>
                    {d.label}
                  </option>
                );
              })}
            </select>
          </label>
        </div>

        <div className="form-control gap-3">
          <div className="label-text">Service provided</div>
          {services.map((d) => {
            return (
              <label key={d.id} className="flex gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="checkbox"
                  value={d.label}
                  {...register("services")}
                />
                <span className="label-text">{d.label}</span>
              </label>
            );
          })}
        </div>

        <label className="form-control">
          <div className="label">
            <span className="label-text">Phone no</span>
          </div>
          <input
            className="input input-bordered"
            type="tel"
            placeholder="Phone no"
            {...register("phone")}
          />
        </label>

        <label className="form-control">
          <div className="label">
            <span className="label-text">Location</span>
          </div>
          <textarea
            className={`textarea textarea-bordered ${
              errors?.location?.message && "input-error"
            }`}
            placeholder="Location"
            {...register("location", { required: true })}
          ></textarea>
        </label>

        <label className="form-control">
          <div className="label">
            <span className="label-text">Description</span>
          </div>
          <textarea
            className={`textarea textarea-bordered ${
              errors?.description?.message && "input-error"
            }`}
            placeholder="Restaurant description"
            {...register("description", { required: true })}
          ></textarea>
        </label>
      </div>
    </div>
  );
};

export default Register_restaurant;
