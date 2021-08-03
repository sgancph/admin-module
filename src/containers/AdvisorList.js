import { useContext } from "react";
import { AdvisorContext } from "../context";
import Link from "../components/Link";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import formatDistance from "date-fns/formatDistance";

const AdvisorList = () => {
  const { advisors, isLoading } = useContext(AdvisorContext);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Link to={`/advisors/add-advisor`}>Onboard new advisor</Link>
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Agent Code</TableCell>
              <TableCell># of Leads</TableCell>
              <TableCell>Date Created</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {advisors.map((advisor, i) => (
              <TableRow key={i} hover>
                <TableCell>
                  <Link to={`/advisors/${advisor.id}`}>
                    {advisor.firstName} {advisor.lastName}
                  </Link>
                </TableCell>
                <TableCell>{advisor.agentCode}</TableCell>
                <TableCell>{0}</TableCell>
                <TableCell>
                  {formatDistance(advisor.createdAt, new Date(), {
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

export default AdvisorList;
