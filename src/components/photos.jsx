import { useState } from "react";
import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";
import AddPhotoAlternateRoundedIcon from "@mui/icons-material/AddPhotoAlternateRounded";

// import { FilePond, registerPlugin } from "react-filepond";
// import FilePondPluginImageCrop from "filepond-plugin-image-crop";
// import FilePondPluginImagePreview from "filepond-plugin-image-preview";

// import "filepond/dist/filepond.min.css";
// import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// registerPlugin(FilePondPluginImageCrop, FilePondPluginImagePreview);

const Photos = ({ register }) => {
  const [preview, setPreview] = useState({});

  return (
    <div className="form-control gap-4">
      <label className="form-control">
        <div className="label">
          <span className="label-text-alt">Profile photos</span>
        </div>

        {!preview?.profile_img ? (
          <div className="flex gap-1 justify-center items-center border-4 border-accent border-dashed text-center text-accent text-lg font-bold py-4 rounded-full w-36 h-36">
            Upload
            <AddPhotoAlternateRoundedIcon color="inherit" fontSize="medium" />
            <input
              type="file"
              accept="image/*"
              className="hidden"
              {...register("profile_img", {
                onChange: (e) => {
                  setPreview((prev) => ({
                    ...prev,
                    profile_img: URL.createObjectURL(e.target.files[0]),
                  }));
                },
              })}
            />
          </div>
        ) : (
          <div className="relative w-36 h-36 rounded-full overflow-hidden">
            <button
              className="btn btn-xs btn-circle absolute right-2 top-14"
              type="button"
              onClick={() =>
                setPreview((prev) => ({ ...prev, profile_img: null }))
              }
            >
              ✕
            </button>
            <img
              src={preview?.profile_img}
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </label>

      <label className="form-control">
        <div className="label">
          <span className="label-text-alt">Background photos</span>
        </div>

        {!preview?.bg_img ? (
          <div className="flex gap-1 justify-center items-center border-4 border-accent border-dashed text-center text-accent text-lg font-bold py-4 rounded-xl">
            Upload
            <AddPhotoAlternateRoundedIcon color="inherit" fontSize="medium" />
            <input
              type="file"
              accept="image/*"
              className="hidden"
              {...register("bg_img", {
                onChange: (e) => {
                  setPreview((prev) => ({
                    ...prev,
                    bg_img: URL.createObjectURL(e.target.files[0]),
                  }));
                },
              })}
            />
          </div>
        ) : (
          <div className="relative">
            <button
              className="btn btn-xs btn-circle absolute right-2 top-2 z-50"
              type="button"
              onClick={() => setPreview((prev) => ({ ...prev, bg_img: null }))}
            >
              ✕
            </button>
            <img src={preview?.bg_img} />
          </div>
        )}
      </label>

      <div className="divider">Or</div>

      <label className="input input-bordered flex items-center gap-2">
        <InsertLinkOutlinedIcon color="action" />
        <input
          className="grow"
          type="url"
          placeholder="Profile image link"
          {...register("profile_link")}
        />
      </label>

      <label className="input input-bordered flex items-center gap-2">
        <InsertLinkOutlinedIcon color="action" />
        <input
          className="grow"
          type="url"
          placeholder="Background image link"
          {...register("bg_link")}
        />
      </label>
    </div>
  );
};

export default Photos;
