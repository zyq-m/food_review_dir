import { useState } from "react";
import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";
import AddPhotoAlternateRoundedIcon from "@mui/icons-material/AddPhotoAlternateRounded";

const Photos = ({ register }) => {
  const [preview, setPreview] = useState({});

  return (
    <div className="bg-base-100 px-4 py-5 rounded-lg">
      <div className="text-lg font-semibold">Photos</div>

      <div className="divider my-3"></div>

      <div className="form-control gap-4">
        <label className="form-control">
          <div className="label">
            <span className="label-text">Profile image</span>
          </div>
          <input
            className="input input-bordered"
            type="url"
            placeholder="Profile image link"
            {...register("profile_link")}
          />
        </label>
        <label className="form-control">
          <div className="label">
            <span className="label-text">Background image</span>
          </div>
          <input
            className="input input-bordered"
            type="url"
            placeholder="Background image link"
            {...register("bg_link")}
          />
        </label>
      </div>
    </div>
  );
};

export default Photos;
