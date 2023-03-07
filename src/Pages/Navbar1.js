import { Link } from "react-router-dom";
import logo from "./download.png"
import { useSelector , useDispatch} from "react-redux";
import {setlogInFlag} from "../redux/logInSlice"
const Navbar1 = () => {

  const isLoggedIn = useSelector(state=>state.signin.logInFlag)
   const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setlogInFlag(false));
};


  return (
    <nav className="flex justify-between items-center py-4">
      <Link to="/">
        <img className="h-12 w-12 ml-4" src={logo} alt="Logo" />
      </Link>
      <div className="mr-4">
        <Link
          className="px-4 py-2 text-gray-800 hover:bg-gray-200 rounded"
          to="/"
        >
          Home
        </Link>
        {isLoggedIn ? (
          <>
            <Link
              className="px-4 py-2 text-gray-800 hover:bg-gray-200 rounded"
              to="/about"
            >
              About
            </Link>
            <Link
              className="px-4 py-2 text-gray-800 hover:bg-gray-200 rounded"
              to="/contact"
            >
              Contact
            </Link>
            <button
              className="px-4 py-2 text-gray-800 hover:bg-gray-200 rounded"
              onClick={()=>handleLogout()}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              className="px-4 py-2 text-gray-800 hover:bg-gray-200 rounded"
              to="/login"
            >
              Login
            </Link>
            <Link
              className="px-4 py-2 text-gray-800 hover:bg-gray-200 rounded"
              to="/signup"
            >
              Sign up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar1;





// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import logo from "./download.png"
// const Navbar1 = () => {
//   const [loggedIn, setLoggedIn] = useState(false);

//   const handleLogout = () => {
//     // perform logout logic here
//     setLoggedIn(false);
//   };

//   return (
//     <nav className="bg-gray-800 py-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <div>
//           <NavLink
//             to="/"
//             exact
//             activeClassName="text-white"
//             className="text-gray-300 hover:text-white mr-4"
//           >
//             Home
//           </NavLink>
//           {loggedIn && (
//             <>
//               <NavLink
//                 to="/about"
//                 activeClassName="text-white"
//                 className="text-gray-300 hover:text-white mr-4"
//               >
//                 About
//               </NavLink>
//               <NavLink
//                 to="/contact"
//                 activeClassName="text-white"
//                 className="text-gray-300 hover:text-white mr-4"
//               >
//                 Contact
//               </NavLink>
//             </>
//           )}
//         </div>
//         <div>
//           {!loggedIn && (
//             <>
//               <NavLink
//                 to="/signup"
//                 activeClassName="text-white"
//                 className="text-gray-300 hover:text-white mr-4"
//               >
//                 Sign Up
//               </NavLink>
//               <NavLink
//                 to="/signin"
//                 activeClassName="text-white"
//                 className="text-gray-300 hover:text-white mr-4"
//               >
//                 Sign In
//               </NavLink>
//             </>
//           )}
//           {loggedIn && (
//             <button
//               onClick={handleLogout}
//               className="text-gray-300 hover:text-white"
//             >
//               Logout
//             </button>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar1;
