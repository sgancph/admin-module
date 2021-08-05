import { AdvisorContextProvider, LeadContextProvider } from "./context";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import AdvisorList from "./containers/advisors/AdvisorList";
import AdvisorCreate from "./containers/advisors/AdvisorCreate";
import AdvisorUpdate from "./containers/advisors/AdvisorUpdate";
import LeadList from "./containers/leads/LeadList";
import LeadUpdate from "./containers/leads/LeadUpdate";
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
    <AdvisorContextProvider>
      <LeadContextProvider>
        <Router>
          <CssBaseline />
          <Header />
          <Container className={classes.container}>
            <Switch>
              <Route path="/advisors/add-advisor">
                <AdvisorCreate />
              </Route>
              <Route path="/advisors/:advisorId">
                <AdvisorUpdate />
              </Route>
              <Route path="/advisors">
                <AdvisorList />
              </Route>
              <Route path="/leads/:leadId">
                <LeadUpdate />
              </Route>
              <Route path="/leads">
                <LeadList />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Container>
        </Router>
      </LeadContextProvider>
    </AdvisorContextProvider>
  );
}

export default App;
