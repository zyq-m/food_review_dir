import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";

const Social_media = ({ register }) => {
  return (
    <div className="form-control gap-4">
      <label className="input input-bordered flex items-center gap-2">
        <EmailRoundedIcon color="action" />
        <input
          className="grow"
          type="url"
          placeholder="Email"
          {...register("email")}
        />
      </label>

      <label className="input input-bordered flex items-center gap-2">
        <LanguageRoundedIcon color="action" />
        <input
          className="grow"
          type="url"
          placeholder="Website link"
          {...register("website")}
        />
      </label>

      <label className="input input-bordered flex items-center gap-2">
        <InsertLinkOutlinedIcon color="action" />
        <input
          className="grow"
          type="url"
          placeholder="Facebook page"
          {...register("fb")}
        />
      </label>

      <label className="input input-bordered flex items-center gap-2">
        <InsertLinkOutlinedIcon color="action" />
        <input
          className="grow"
          type="url"
          placeholder="Instagram"
          {...register("ig")}
        />
      </label>
    </div>
  );
};

export default Social_media;
