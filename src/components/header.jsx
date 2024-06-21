import { Link, NavLink } from "react-router-dom";
import { useUserStore } from "../hooks";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const Header = () => {
  const logout = useUserStore((state) => state.remove_user);
  const user = useUserStore((state) => state.user);

  const onLogout = () => {
    window.localStorage.clear();
    logout();
  };

  return (
    <header className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink
                to="/find_restaurant"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </li>
            {user?.role.id == 1 && (
              <>
                <li>
                  <NavLink
                    to="/dashboard"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/restaurant_list"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Restaurant
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/add_restaurant">Add restarant</NavLink>
                </li>
              </>
            )}
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => isActive && "active"}
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="navbar-center">
        <a className="btn btn-ghost text-xl">Lapor</a>
      </div>

      <div className="navbar-end gap-3">
        <Link to="/find_restaurant">
          <SearchRoundedIcon />
        </Link>

        {user && (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-10 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <button onClick={onLogout}>Logout</button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
