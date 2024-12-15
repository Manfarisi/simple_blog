import { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { UserContext } from "./UserContext";
import logo from "./assets/banner-logo.png";
import Swal from "sweetalert2";

export default function Header() {
  const { setUserInfo, userInfo } = useContext(UserContext);
  const location = useLocation();

  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout() {
    fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
    Swal.fire({
      title: "You are logout",
      icon: "info",
    });
  }

  const username = userInfo?.username;
  return (
    <>
      <nav className="navbar bg-slate-500 mb-4">
        <div className="flex justify-between items-center w-full px-4">
          {/* Logo Section */}
          <div className="flex-1 mb-4">
            <Link to="/" className="logo">
              <img src={logo} alt="Logo" style={{ height: "75px" }} />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-4">
            {username ? (
              <>
                <h1 className="text-lg font-medium text-white">
                  Hello, {username}
                </h1>

                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="avatar online placeholder">
                      <div className="bg-neutral text-neutral-content w-10 rounded-full">
                        <span className="text-xl"></span>
                      </div>
                    </div>
                  </div>

                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                  >
                    <li>
                      <Link
                        to="/create"
                        className={
                          location.pathname === "/create" ? "active-link" : ""
                        }
                      >
                        Create New Post
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={`/user/${userInfo.id}`}
                        className={
                          location.pathname === `/user/${userInfo.id}`
                            ? "active-link"
                            : ""
                        }
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <a onClick={logout}>Logout</a>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <div className="flex space-x-4">
                <Link
                  to="/login"
                  className={`px-4 py-2 rounded-lg text-white bg-blue-500 ${
                    location.pathname === "/login"
                      ? "bg-blue-600 shadow-md"
                      : "bg-gray-400 hover:bg-blue-500"
                  }`}
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className={`px-4 py-2 rounded-lg text-white bg-green-500 ${
                    location.pathname === "/register"
                      ? "bg-green-600 shadow-md"
                      : "bg-gray-400 hover:bg-green-500"
                  }`}
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

{
  /* <nav className="navbar bg-base-100 shadow-md">
<div className="flex justify-between items-center w-full px-4">
  
  <div>

  </div>

 
  <div className="flex items-center space-x-4">
    {username ? (
      <>
        

        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="User Avatar"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
           
            </li>
            <li>
              
            </li>
            <li>
              <a onClick={logout}>Logout</a>
            </li>
          </ul>
        </div>
      </>
    ) : (
      <>
        <Link
          to="/login"
          className={
            location.pathname === "/login" ? "active-link" : ""
          }
        >
          Login
        </Link>

        <Link
          to="/register"
          className={
            location.pathname === "/register" ? "active-link" : ""
          }
        >
          Register
        </Link>
      </>
    )}
  </div>
</div>
</nav> */
}
