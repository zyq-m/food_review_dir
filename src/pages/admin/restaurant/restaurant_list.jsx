import { useEffect } from "react";
import { Layout } from "../../../components";
import { api } from "../../../service/api";
import { useRestaurantStore } from "../../../hooks";
import { Link } from "react-router-dom";
import { useLoading } from "../../../hooks";

const Restaurant_list = () => {
  const setRestaurant = useRestaurantStore((state) => state.set_restaurant);
  const restaurant = useRestaurantStore((state) => state.restaurant);
  const setLoading = useLoading((state) => state.setLoading);

  useEffect(() => {
    setLoading(true);
    api
      .get("/restaurant")
      .then((res) => {
        setRestaurant(res.data.restaurant);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <Layout>
      <div
        className="hero min-h-60"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/2878745/pexels-photo-2878745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="text-3xl font-bold">List of Restaurants</h1>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto px-4 pt-4">
        <table className="table table-pin-rows">
          <thead className="bg-inherit">
            <tr className="bg-inherit">
              <th></th>
              <th>Name</th>
              <th>Category</th>
              <th>Services</th>
            </tr>
          </thead>
          <tbody>
            {restaurant?.map((d, i) => {
              return (
                <tr key={d.id}>
                  <th>{i + 1}</th>
                  <td>{d.name}</td>
                  <td>{d.category}</td>
                  <td>{d.services}</td>
                  <td>
                    <button className="btn btn-ghost btn-xs">
                      <Link to={`/restaurant/${d.id}`}>Details</Link>
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-ghost btn-xs">
                      <Link to={`/update_restaurant/${d.id}`}>Update</Link>
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
