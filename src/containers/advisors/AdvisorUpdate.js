import { useEffect, useContext } from "react";
import {
  Switch,
  Route,
  NavLink,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Toolbar from "@material-ui/core/Toolbar";
import AdvisorInformation from "./AdvisorInformation";
import AdvisorOpeningHours from "./AdvisorOpeningHours";
import AdvisorTemporaryLeave from "./AdvisorTemporaryLeave";
import AdvisorPerformance from "./AdvisorPerformance";
import AdvisorOffboard from "./AdvisorOffboard";
import { AdvisorContext } from "../../context";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ".active": {
      color: "red",
    },
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
}));

const AdvisorUpdate = () => {
  const classes = useStyles();
  const { advisorId } = useParams();
  const { path, url } = useRouteMatch();
  const { advisorsById, isLoading } = useContext(AdvisorContext);
  const advisor = advisorsById[advisorId];

  useEffect(() => {
    if (!!advisor) {
    }
  }, [advisor]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!advisor) {
    return <p>Advisor not found!</p>;
  }

  return (
    <>
      <Toolbar>
        <Link component={NavLink} to={`${url}`} exact className={classes.link}>
          Advisor Profile
        </Link>
        <Link
          component={NavLink}
          to={`${url}/opening-hours`}
          exact
          className={classes.link}
        >
          Opening Hours
        </Link>
        <Link
          component={NavLink}
          to={`${url}/temporary-leave`}
          exact
          className={classes.link}
        >
          Temporary Leave
        </Link>
        <Link
          component={NavLink}
          to={`${url}/performance`}
          exact
          className={classes.link}
        >
          Advisor Performance
        </Link>
        <Link
          component={NavLink}
          to={`${url}/offboard-advisor`}
          exact
          className={classes.link}
        >
          Offboard Advisor
        </Link>
      </Toolbar>
      <Switch>
        <Route exact path={path}>
          <AdvisorInformation />
        </Route>
        <Route path={`${path}/opening-hours`}>
          <AdvisorOpeningHours />
        </Route>
        <Route path={`${path}/temporary-leave`}>
          <AdvisorTemporaryLeave />
        </Route>
        <Route path={`${path}/performance`}>
          <AdvisorPerformance />
        </Route>
        <Route path={`${path}/offboard-advisor`}>
          <AdvisorOffboard />
        </Route>
      </Switch>
    </>
  );
};

export default AdvisorUpdate;
