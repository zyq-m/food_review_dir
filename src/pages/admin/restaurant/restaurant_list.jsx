import { useEffect } from "react";
import { Layout } from "../../../components";
import { api } from "../../../service/api";
import { useRestaurantStore } from "../../../hooks";
import { Link } from "react-router-dom";

const Restaurant_list = () => {
  const setRestaurant = useRestaurantStore((state) => state.set_restaurant);
  const restaurant = useRestaurantStore((state) => state.restaurant);

  useEffect(() => {
    api
      .get("/restaurant/search", { params: { name: "" } })
      .then((res) => {
        setRestaurant(res.data.restaurant);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <Layout>
      <div className="overflow-x-auto px-4 pt-4">
        <table className="table table-pin-rows">
          <thead className="bg-inherit">
            <tr className="bg-inherit">
              <th></th>
              <th>Name</th>
              <th>Phone</th>
              <th>Category</th>
              <th>Services</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {restaurant.length &&
              restaurant.map((d, i) => {
                return (
                  <tr key={d.id}>
                    <th>{i + 1}</th>
                    <td>{d.name}</td>
                    <td>{d.phone}</td>
                    <td>{d.category}</td>
                    <td>{d.services}</td>
                    <td>{d.location}</td>
                    <td>
                      <button className="btn btn-ghost btn-xs">
                        <Link to={`/restaurant/${d.id}`}>Details</Link>
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default Restaurant_list;
