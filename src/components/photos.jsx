import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";

const Photos = ({ register }) => {
  return (
    <div className="form-control">
      <label className="form-control">
        <div className="label">
          <span className="label-text-alt">Upload photos</span>
        </div>
        <input
          type="file"
          accept=".jpg"
          className="file-input file-input-bordered"
        />
      </label>

      <div className="divider">Or</div>

      <label className="input input-bordered flex items-center gap-2">
        <InsertLinkOutlinedIcon color="action" />
        <input
          className="grow"
          type="url"
          placeholder="Image link"
          {...register("fb")}
        />
      </label>
    </div>
  );
};

export default Photos;
