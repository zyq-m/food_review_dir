import { useId, useState } from "react";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { useForm } from "react-hook-form";
import { api } from "../service/api";
import { useParams } from "react-router-dom";
import notify from "../utils/notify";
import { ToastContainer } from "react-toastify";
import { useRefresh } from "../hooks";

const Add_review = ({ restaurant }) => {
  const modal_id = useId();
  const { id } = useParams();
  const { register, handleSubmit } = useForm();
  const [recommend, setRecommend] = useState(true);
  const setCounter = useRefresh((s) => s.setCounter);

  const openModal = () => document.getElementById(modal_id).showModal();
  const closeModal = () => document.getElementById(modal_id).close();

  const onRecommend = (value) => {
    openModal();
    setRecommend(value);
  };

  const onPost = async (data) => {
    data.restaurant_id = id;
    data.sentiment = recommend;

    try {
      const res = await api.post("/review", data);
      closeModal();
      notify(res.data.message, true);
      setCounter();
    } catch (err) {
      notify(err.response.data.message);
    }
  };

  return (
    <>
      <div className="px-4 py-3 bg-base-100 rounded-lg mb-4">
        <div className="text-lg font-semibold">
          Do you recommend {restaurant?.name}
        </div>
        <div className="flex gap-3 mt-3">
          <button
            className="btn flex-1"
            type="button"
            onClick={() => onRecommend(true)}
          >
            Yes
          </button>
          <button
            className="btn flex-1"
            type="button"
            onClick={() => onRecommend(false)}
          >
            No
          </button>
        </div>
      </div>
      <dialog id={modal_id} className="modal">
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
      <ToastContainer />
    </>
  );
};

export default Add_review;
