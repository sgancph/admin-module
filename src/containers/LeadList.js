import { useContext } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Link from "../components/Link";
import formatDistance from "date-fns/formatDistance";
import { lifecycleStageOptions } from "../data";
import { LeadContext } from "../context";

const LeadList = () => {
  const { leads, isLoading } = useContext(LeadContext);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <TableContainer component={Paper}>
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
            {leads.map((lead, i) => (
              <TableRow key={i} hover>
                <TableCell>
                  <Link to={`/leads/${lead.id}`}>{lead.id}</Link>
                </TableCell>
                <TableCell>
                  {lifecycleStageOptions
                    .map((lifecycleStageOption, i) => (
                      <span key={i}>
                        {lifecycleStageOption.label}{" "}
                        {lifecycleStageOption.value === lead.lifecycleStage &&
                          "(active)"}
                      </span>
                    ))
                    .reduce((prev, curr) => [prev, " -> ", curr])}
                </TableCell>
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
    </>
  );
};

export default LeadList;
