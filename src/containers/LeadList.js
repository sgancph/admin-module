import { useContext } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "../components/Paper";
import Link from "../components/Link";
import formatDistance from "date-fns/formatDistance";
import { LeadContext } from "../context";

const LeadList = () => {
  const { leadsById, isLoading } = useContext(LeadContext);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Paper title="Leads">
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Lead ID</TableCell>
              <TableCell>Lifecycle Stage</TableCell>
              <TableCell>Advisor</TableCell>
              <TableCell>Date Created</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.values(leadsById).map((lead, i) => (
              <TableRow key={i} hover>
                <TableCell>
                  <Link to={`/leads/${lead.id}`}>{lead.id}</Link>
                </TableCell>
                <TableCell>{lead.lifecycleStage}</TableCell>
                <TableCell>{lead.advisorId}</TableCell>
                <TableCell>
                  {formatDistance(lead.createdAt, new Date(), {
                    addSuffix: true,
                  })}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default LeadList;
