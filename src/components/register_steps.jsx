import { useState } from "react";
import { Register_restaurant, Photos, Social_media } from "../components";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";

const Register_steps = ({ onSubmit, register, handleSubmit }) => {
  const [form, setForm] = useState([
    {
      id: crypto.randomUUID(),
      step: "Register",
      active: true,
      selected: true,
      component: () => <Register_restaurant register={register} />,
    },
    {
      id: crypto.randomUUID(),
      step: "Social media",
      active: false,
      selected: false,
      component: () => <Social_media register={register} />,
    },
    {
      id: crypto.randomUUID(),
      step: "Photos",
      active: false,
      selected: false,
      component: () => <Photos register={register} />,
    },
  ]);
  const on_step = (id) => {
    setForm((prev) => {
      const prev_tmp = prev;

      prev_tmp.every((tmp, i) => {
        if (tmp.id === id) {
          tmp.active = true;
          tmp.selected = true;

          for (let e = i + 1; e < prev_tmp.length; e++) {
            prev_tmp[e].active = false;
            prev_tmp[e].selected = false;
          }

          return false;
        }

        tmp.active = true;
        tmp.selected = false;
        return true;
      });

      return prev_tmp.map((e) => e);
    });
  };

  const onNext = () => {
    const list = [...form];

    const item = list.find((e) => e.selected);
    const nextItem = list.findIndex((e) => e.selected) + 1;

    item.selected = false;
    list[nextItem].selected = true;
    list[nextItem].active = true;

    setForm(list);
  };

  return (
    <div className="px-4 pt-6 md:max-w-xl md:mx-auto">
      <div className="flex justify-center">
        <ul className="steps gap-4 cursor-pointer">
          {form.map((d) => {
            return (
              <li
                key={d.id}
                onClick={() => on_step(d.id)}
                className={`step ${d.active && "step-accent"}`}
              >
                {d.step}
              </li>
            );
          })}
        </ul>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-6">
          {form
            .filter((d) => d.selected)
            .map((e) => {
              return <e.component key={crypto.randomUUID()} />;
            })}
        </div>
        <button
          type="submit"
          className={`mt-4 btn btn-accent w-full ${
            form.filter((e) => e.selected && e.step == "Photos").length
              ? "block"
              : "hidden"
          }`}
        >
          Save
        </button>
        <button
          type="button"
          className={`mt-4 btn btn-accent w-full ${
            form.filter((e) => e.selected && e.step !== "Photos").length
              ? "block"
              : "hidden"
          }`}
          onClick={onNext}
        >
          Next
          <NavigateNextOutlinedIcon />
        </button>
      </form>
    </div>
  );
};

export default Register_steps;
