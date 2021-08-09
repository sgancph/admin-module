import { useState, useContext, useEffect } from "react";
import { AdvisorContext } from "../../context";
import { fetchAdvisors } from "../../reducers";
import { Link as LinkRouter } from "react-router-dom";
import Link from "../../components/Link";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import Paper from "../../components/Paper";
import formatDistance from "date-fns/formatDistance";

const AdvisorList = () => {
  const { advisorState, dispatch } = useContext(AdvisorContext);
  const [isLoading, setIsLoading] = useState(false);
  const advisors = Object.values(advisorState.advisorsById);
  const numAdvisors = advisors.length;

  useEffect(() => {
    // setIsLoading(true);
    // new Promise((resolve) => resolve())
    //   .then(() => dispatch(fetchAdvisors([])))
    //   .catch(console.log)
    //   .finally(() => {
    //     setIsLoading(false);
    //   });
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Paper title="Advisors">
        {!numAdvisors && <p>No advisors</p>}
        {!!numAdvisors && (
          <TableContainer>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Agent Code</TableCell>
                  <TableCell># of Leads</TableCell>
                  <TableCell>Supervisor</TableCell>
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
                    <TableCell>{advisor.numLeads}</TableCell>
                    <TableCell>{advisor.supervisor}</TableCell>
                    <TableCell>
                      {advisor.createdAt
                        ? formatDistance(advisor.createdAt, new Date(), {
                            addSuffix: true,
                          })
                        : ""}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
        <Button
          component={LinkRouter}
          to={`/advisors/add-advisor`}
          variant="contained"
          color="default"
        >
          Onboard new advisor
        </Button>
      </Paper>
    </>
  );
};

export default AdvisorList;
