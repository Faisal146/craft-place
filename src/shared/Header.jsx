import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import logo from "../assets/logo.png" ;

const Header = () => {
  const {user, logOut} = useContext(AuthContext)

    const links = <>
                  <li>
                <NavLink to='/'>Home</NavLink>
               </li>
               <li>
                <NavLink to='/all'>All Items</NavLink>
              </li>
              
              
            
              {user && (
              <>
               <li>
                <NavLink to='/add'>Add Craft Item</NavLink>
              </li>
               <li>
                <NavLink to='/list'> My List</NavLink>
              </li>
                <li>
                  <NavLink to="/update-profile">Update Profile</NavLink>
                </li>
                <li>
                  <NavLink to="/profile">User Profile</NavLink>
                </li> 
              </>
            )}
               <li>
                <NavLink to='about'> About Us</NavLink>
              </li>
        </>
  return (
    <div className="bg-base-200">
      <div className="navbar max-w-6xl mx-auto justify-between">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to='/' className="btn btn-ghost md:text-xl text-md pl-0 ml-0"> <img src={logo} className="h-9 w-7 " alt="" /> Craft Place</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {links}
          </ul>
        </div>
        <div className="navbar-end md:w-1/2 w-auto">
         {user ? (
            <>
              {" "}
               {/* <div>{user.displayName}</div>  */}

              <div className="tooltip tooltip-left tooltip-info" data-tip={user.displayName}>
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} />
                </div>
              </label>
                 </div>
            
              <Link>
                <button className="btn btn-error btn-sm" onClick={logOut}>
                  Log Out
                </button>
              </Link>{" "}
            </>
          ) : (
            <ul className="menu menu-horizontal px-1 ">
              <li>
                
                <NavLink to="/login" className="  btn-primary btn">
                  Log In
                </NavLink>
              </li>
              <li>
                
                <NavLink to="/register" className=" ml-1 btn-secondary btn md:inline-flex hidden ">
                  Register
                </NavLink>
              </li>
            </ul>
          )} 
        </div>
      </div>
    </div>
  );
};

export default Header;