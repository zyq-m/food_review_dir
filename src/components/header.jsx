import { Link, NavLink, useNavigate } from "react-router-dom";
import { useUserStore } from "../hooks";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";

const Header = () => {
  const logout = useUserStore((state) => state.remove_user);
  const user = useUserStore((state) => state.user);
  const navigate = useNavigate();

  const onLogout = () => {
    window.localStorage.clear();
    logout();
    navigate("/login");
  };

  return (
    <header className="navbar bg-base-100 sticky top-0 z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <MenuRoundedIcon />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <HomeRoundedIcon /> Home
              </NavLink>
            </li>
            <Nav_link user={user} />
          </ul>
        </div>
      </div>

      <div className="navbar-center">
        <Link to="/" className="text-xl font-semibold">
          Lapor
        </Link>
      </div>

      <div className="navbar-end gap-3">
        <Link to="/">
          <SearchRoundedIcon />
        </Link>

        {user && (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="rounded-full">
                <AccountCircleRoundedIcon fontSize="large" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-10 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li className="px-3 py-2 font-semibold border-b">{user.email}</li>
              <li className="pt-2">
                <button onClick={onLogout}>
                  <LogoutRoundedIcon fontSize="small" />
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

const Nav_link = ({ user }) => {
  return (
    <>
      {user?.role.id == 1 && (
        <>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <DashboardRoundedIcon /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/add_restaurant">
              <AddCircleRoundedIcon /> Add restarant
            </NavLink>
          </li>
        </>
      )}
    </>
  );
};
