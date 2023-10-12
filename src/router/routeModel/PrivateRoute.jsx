import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();

  if (auth?.token) {
    return children;
  } else navigate("login");
};

export default PrivateRoute;
