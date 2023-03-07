import {  Navigate } from "react-router-dom";
import { useSelector} from "react-redux";


const ProtectedRoute = ({children}) => {
  const isLoggedIn = useSelector((state) => state.signin.logInFlag);
  console.log(isLoggedIn, "iiiiiiiiiiiiiiiiii")
 
  return isLoggedIn ? (
    children
  ) : (
    <Navigate to="/login" />
  );
};
export default ProtectedRoute;
