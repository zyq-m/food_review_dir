const Social_media = ({ register }) => {
  return (
    <div className="bg-base-100 px-4 py-5 rounded-lg">
      <div className="text-lg font-semibold">Social media link</div>

      <div className="divider my-3"></div>

      <div className="form-control gap-4">
        <label className="form-control">
          <div className="label">
            <span className="label-text">Email</span>
          </div>
          <input
            className="input input-bordered"
            type="email"
            placeholder="Email"
            {...register("email")}
          />
        </label>

        <label className="form-control">
          <div className="label">
            <span className="label-text">Website</span>
          </div>
          <input
            className="input input-bordered"
            type="url"
            placeholder="Website link"
            {...register("website")}
          />
        </label>

        <label className="form-control">
          <div className="label">
            <span className="label-text">Facebook page</span>
          </div>
          <input
            className="input input-bordered"
            type="url"
            placeholder="Facebook page"
            {...register("fb")}
          />
        </label>

        <label className="form-control">
          <div className="label">
            <span className="label-text">Instagram</span>
          </div>
          <input
            className="input input-bordered"
            type="url"
            placeholder="Instagram"
            {...register("ig")}
          />
        </label>
      </div>
    </div>
  );
};

export default Social_media;
