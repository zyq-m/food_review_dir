import { toast } from "react-toastify";

const notify = (message, success) => {
  if (success) {
    toast.success(message, {
      position: "top-center",
    });

    return;
  }

  toast.error(message, {
    position: "top-center",
  });

  return;
};

export default notify;
