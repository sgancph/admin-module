import { useContext } from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "../components/Title";
import { AdvisorContext, LeadContext } from "../context";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(3),
  },
}));

const Home = () => {
  const classes = useStyles();
  const { advisorsById, isLoading: isLoadingAdvisors } =
    useContext(AdvisorContext);
  const { leadsById, isLoading: isLoadingLeads } = useContext(LeadContext);

  if (isLoadingAdvisors || isLoadingLeads) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Paper className={classes.paper}>
        <Title>General statistics</Title>
        <p>
          {Object.keys(leadsById).length} leads and{" "}
          {Object.keys(advisorsById).length} advisors
        </p>
      </Paper>
      <Paper className={classes.paper}>
        <Title>Funnel</Title>
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Lifecycle Stage</TableCell>
                <TableCell># of leads in this lifecycle stage</TableCell>
                <TableCell># of advisors with leads in this stage</TableCell>
                <TableCell>Date range</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow hover>
                <TableCell>Assigned</TableCell>
                <TableCell>20</TableCell>
                <TableCell>4</TableCell>
                <TableCell>XX-YY</TableCell>
              </TableRow>
              <TableRow hover>
                <TableCell>Successful Contact</TableCell>
                <TableCell>20</TableCell>
                <TableCell>4</TableCell>
                <TableCell>XX-YY</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
};

export default Home;
