import { useContext } from "react";
import Paper from "../components/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { AdvisorContext, LeadContext } from "../context";

const Home = () => {
  const { advisorsById, isLoading: isLoadingAdvisors } =
    useContext(AdvisorContext);
  const { leadsById, isLoading: isLoadingLeads } = useContext(LeadContext);

  if (isLoadingAdvisors || isLoadingLeads) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Paper title="General statistics">
        <p>
          {Object.keys(leadsById).length} leads and{" "}
          {Object.keys(advisorsById).length} advisors
        </p>
      </Paper>
      <Paper title="Funnel">
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
