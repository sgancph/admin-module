import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "../../components/Paper";
import { UserContext } from "../../context";

const Login = () => {
  const history = useHistory();
  const { user, setUser } = useContext(UserContext);
  const [userId, setUserId] = useState("demo");
  const [password, setPassword] = useState("demo");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const isDisabled = isLoggingIn;

  const onSubmit = (event) => {
    event.preventDefault();
    setIsLoggingIn(true);
    new Promise((resolve) => resolve())
      .then(() => setUser({ token: "token" }))
      .catch(console.log)
      .finally(() => {
        setIsLoggingIn(false);
        history.push("/");
      });
  };

  if (!!user) {
    return <p>Already logged in</p>;
  }

  return (
    <Paper title="Login">
      <form onSubmit={onSubmit}>
        <TextField
          required
          label="User ID"
          variant="outlined"
          size="small"
          fullWidth
          margin="normal"
          value={userId}
          onChange={(event) => setUserId(event.target.value)}
          disabled={isDisabled}
        />
        <TextField
          required
          type="password"
          label="Password"
          variant="outlined"
          size="small"
          fullWidth
          margin="normal"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          disabled={isDisabled}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={isDisabled}
        >
          {isLoggingIn ? "Logging in..." : "Log in"}
        </Button>
      </form>
    </Paper>
  );
};

export default Login;
