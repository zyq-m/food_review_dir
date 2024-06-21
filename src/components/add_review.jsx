import { useId } from "react";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { useForm } from "react-hook-form";

const Add_review = ({ restaurant }) => {
  const id = useId();
  const { register, handleSubmit } = useForm();

  const openModal = () => document.getElementById(id).showModal();
  const closeModal = () => document.getElementById(id).close();

  const onPost = async () => {};

  return (
    <>
      <div className="px-4 py-3 bg-base-100 rounded-lg mb-4">
        <div className="text-lg font-semibold">
          Do you recommend {restaurant?.name}
        </div>
        <div className="flex gap-3 mt-3">
          <button className="btn flex-1" type="button" onClick={openModal}>
            Yes
          </button>
          <button className="btn flex-1" type="button" onClick={openModal}>
            No
          </button>
        </div>
      </div>
      <dialog id={id} className="modal">
        <form className="modal-box" onSubmit={handleSubmit(onPost)}>
          <button
            className="btn btn-sm btn-circle absolute right-2 top-2"
            type="button"
            onClick={closeModal}
          >
            ✕
          </button>
          <h3 className="font-bold text-lg text-center">
            How can {restaurant?.name} improve?
          </h3>
          <div className="divider"></div>
          <div className="flex">
            <div>
              <AccountCircleRoundedIcon fontSize="large" />
            </div>
            <div className="flex-1">
              <textarea
                className="textarea w-full focus-within:outline-none border-none"
                placeholder={`Leave you feedback for ${restaurant?.name}`}
                {...register("review")}
              ></textarea>
            </div>
          </div>
          <div className="divider"></div>
          <div className="flex justify-end">
            <button className="btn" type="submit">
              Post
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
};

export default Add_review;
