import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";
import logo from './assets/banner-logo.png'; 
import Swal from "sweetalert2";


export default function Header() {
  const { setUserInfo, userInfo } = useContext(UserContext);

  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include'
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout() {
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null);
    Swal.fire({
      title: "You are logout",
      icon: "info"
    });
  }

  const username = userInfo?.username;
  return (
  <header>
    <div>
      <Link to="/" className="logo">
        <img src={logo} alt="Logo" style={{ height: '75px' }} />
      </Link>
    </div>
    <nav>
      {username ? (
        <>
          <h1>Hello, {username} </h1>
          <Link 
            to={`/user/${userInfo.id}`} 
            style={{ background: '#4CAF50', padding: '5px', borderRadius: '10px' }}
          >
            My Posts
          </Link>
          
          <Link 
            to="/create" 
            style={{ background: '#1DA1F2', padding: '5px', borderRadius: '10px' }}
          >
             Create New Post
          </Link>
          <a onClick={logout}>
            <button className="Btn">
              <div className="sign">
                <svg viewBox="0 0 512 512">
                  <path
                    d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
                  ></path>
                </svg>
              </div>
              <div className="text">Logout</div>
            </button>
          </a>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  </header>
);
}
