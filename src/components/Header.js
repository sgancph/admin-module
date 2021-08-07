import { useContext } from "react";
import { NavLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { UserContext } from "../context";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ".active": {
      color: "red",
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    marginRight: theme.spacing(3),
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  main: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  const { user, setUser } = useContext(UserContext);

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      className={classes.appBar}
    >
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" noWrap className={classes.toolbarTitle}>
          Admin
        </Typography>
        {!!user && (
          <>
            <nav className={classes.main}>
              <Link component={NavLink} to="/" exact className={classes.link}>
                Home
              </Link>
              <Link component={NavLink} to="/advisors" className={classes.link}>
                Advisors
              </Link>
              <Link component={NavLink} to="/leads" className={classes.link}>
                Leads
              </Link>
            </nav>
            <nav>
              <Button
                onClick={() => setUser(null)}
                className={classes.link}
                size="small"
              >
                Log out
              </Button>
            </nav>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
