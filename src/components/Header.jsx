import { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import defaultPlaceholder from '../assets/Default_Placeholder.webp';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
  const [clicked, setClicked] = useState(false);

  const { user, loading, logoutUser } = useContext(AuthContext);

  const userLogout = () => {
    logoutUser()
      .then(() => {
        console.log('logged out user');
        toast.success('successfully logged out', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
      })
      .catch((error) => console.log(error));
  };
  return (
    <header className="container mx-auto font-gsans overflow-x-clip">
      <div className="navbar bg-base-100">
        <div className="navbar-start items-center">
          <div className="dropdown">
            <div tabIndex={0} role="button" onClick={() => setClicked(!clicked)} className="btn btn-ghost lg:hidden p-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            {clicked && (
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-20 p-2 shadow bg-base-100 rounded-box w-52 text-neutral-600 font-semibold">
                <li className="hover:text-neutral-900">
                  <NavLink className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'bg-primary text-white hover:bg-primary' : '')} to="/">
                    Home
                  </NavLink>
                </li>
                <li className="hover:text-neutral-900">
                  <NavLink className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'bg-primary text-white hover:bg-primary' : '')} to="/all-art&craft-items">
                    All Art & Craft Items
                  </NavLink>
                </li>
                {user && (
                  <li className="hover:text-neutral-900">
                    <NavLink className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'bg-primary text-white hover:bg-primary' : '')} to="/add-craft-item">
                      Add Craft Item
                    </NavLink>
                  </li>
                )}
                {user && (
                  <li className="hover:text-neutral-900">
                    <NavLink className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'bg-primary text-white hover:bg-primary' : '')} to="/my-art&craft_list">
                      My Art & Craft List
                    </NavLink>
                  </li>
                )}
              </ul>
            )}
          </div>
          <NavLink
            to="/"
            className="btn btn-ghost text-2xl sm:text-3xl text-transparent bg-gradient-to-br from-indigo-600 via-blue-600 to-secondary bg-clip-text font-black font-kufam tracking-tight max-sm:-ml-3">
            CRAFT_STUDIO
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal px-1 text-base font-semibold gap-2 font-gsans text-base-content">
            <li>
              <NavLink
                className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'bg-primary text-white hover:bg-primary py-2 px-4 rounded-lg' : 'py-2 px-4')}
                to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'bg-primary text-white hover:bg-primary py-2 px-4 rounded-lg' : 'py-2 px-4')}
                to="/all-art&craft-items">
                All Art & Craft Items
              </NavLink>
            </li>
            {user && (
              <li>
                <NavLink
                  className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'bg-primary text-white hover:bg-primary py-2 px-4 rounded-lg' : 'py-2 px-4')}
                  to="/add-craft-item">
                  Add Craft Item
                </NavLink>
              </li>
            )}
            {user && (
              <li className="hover:text-neutral-900">
                <NavLink
                  className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'bg-primary text-white hover:bg-primary py-2 px-4 rounded-lg' : 'py-2 px-4')}
                  to="/my-art&craft_list">
                  My Art & Craft List
                </NavLink>
              </li>
            )}
          </ul>
        </div>
        <div className="navbar-end flex items-center">
          {loading && <span className="loading loading-infinity loading-lg mr-4"></span>}
          {user ? (
            <div className="relative group flex items-center">
              <div className="tooltip tooltip-left cursor-pointer -mb-1" data-tip={user.displayName}>
                <div className="avatar">
                  <div className="w-12 rounded-full mr-2">
                    <img src={user.photoURL || defaultPlaceholder} referrerPolicy="no-referrer" />
                  </div>
                </div>
              </div>

              {/* <div className="absolute transform translate-x-48  bg-red-400 p-10 transition-all duration-300 group-hover:-translate-x-40 ">
                <h1>sdksad</h1>
              </div> */}

              <button onClick={userLogout} className="btn btn-primary lg:px-6 font-bold lg:text-base ml-2">
                Sign Out
              </button>
            </div>
          ) : (
            <div className="group relative ">
              <Link to="/login" className="btn btn-primary btn-outline lg:px-6 font-bold lg:text-base">
                Login
              </Link>
              <Link to="/register" className="btn btn-primary lg:px-6 font-bold lg:text-base ml-2">
                Register
              </Link>
            </div>
          )}
          <label className="swap swap-rotate ml-4">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" className="theme-controller" value="dark" />

            {/* sun icon */}
            <svg className="swap-off fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg className="swap-on fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>
      </div>
    </header>
  );
};

export default Header;
