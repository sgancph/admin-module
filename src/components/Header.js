import { NavLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

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
}));

const Header = () => {
  const classes = useStyles();

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
        <nav>
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
      </Toolbar>
    </AppBar>
  );
};

export default Header;
