import {
  UserContextProvider,
  AdvisorContextProvider,
  LeadContextProvider,
} from "./context";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/users/Login";
import AdvisorList from "./containers/advisors/AdvisorList";
import AdvisorCreate from "./containers/advisors/AdvisorCreate";
import AdvisorUpdate from "./containers/advisors/AdvisorUpdate";
import LeadList from "./containers/leads/LeadList";
import LeadUpdate from "./containers/leads/LeadUpdate";
import NotFound from "./containers/NotFound";
import AuthRoute from "./components/AuthRoute";
import Header from "./components/Header";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3, 0),
  },
}));

function App() {
  const classes = useStyles();

  return (
    <UserContextProvider>
      <AdvisorContextProvider>
        <LeadContextProvider>
          <Router>
            <CssBaseline />
            <Header />
            <Container className={classes.container}>
              <Switch>
                <Route path="/login">
                  <Login />
                </Route>
                <AuthRoute path="/advisors/add-advisor">
                  <AdvisorCreate />
                </AuthRoute>
                <AuthRoute path="/advisors/:advisorId">
                  <AdvisorUpdate />
                </AuthRoute>
                <AuthRoute path="/advisors">
                  <AdvisorList />
                </AuthRoute>
                <AuthRoute path="/leads/:leadId">
                  <LeadUpdate />
                </AuthRoute>
                <AuthRoute path="/leads">
                  <LeadList />
                </AuthRoute>
                <AuthRoute path="/" exact>
                  <Home />
                </AuthRoute>
                <AuthRoute>
                  <NotFound />
                </AuthRoute>
              </Switch>
            </Container>
          </Router>
        </LeadContextProvider>
      </AdvisorContextProvider>
    </UserContextProvider>
  );
}

export default App;
