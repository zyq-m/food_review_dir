import PersonRoundedIcon from "@mui/icons-material/PersonRounded";

const Review = ({ register }) => {
  return (
    <div className="form-control gap-4">
      <label className="input input-bordered flex items-center gap-2">
        <PersonRoundedIcon color="action" />
        <input
          className="grow"
          type="text"
          placeholder="Reviewer name"
          {...register("name")}
        />
      </label>

      <textarea
        className="textarea textarea-bordered"
        placeholder="Comment"
        {...register("review")}
      ></textarea>
    </div>
  );
};

export default Review;
