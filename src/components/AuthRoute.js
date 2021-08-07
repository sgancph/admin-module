import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "../context";

const AuthRoute = (props) => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Redirect to="/login" />;
  }

  return <Route {...props} />;
};

export default AuthRoute;
