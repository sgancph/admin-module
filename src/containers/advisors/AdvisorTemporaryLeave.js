import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import { AdvisorContext } from "../../context";
import Paper from "../../components/Paper";

const AdvisorUpdate = () => {
  const { advisorId } = useParams();
  const { advisorsById, isLoading } = useContext(AdvisorContext);
  const [temporaryLeave, setTemporaryLeave] = useState([]);
  const [temporaryLeaveDate, setTemporaryLeaveDate] = useState("");
  const [temporaryLeaveReason, setTemporaryLeaveReason] = useState("");
  const advisor = advisorsById[advisorId];

  useEffect(() => {
    if (!!advisor) {
      setTemporaryLeave([
        { date: "x", reason: "xxx" },
        { date: "y", reason: "yyy" },
      ]);
    }
  }, [advisor]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!advisor) {
    return <p>Advisor not found!</p>;
  }

  return (
    <Paper title="Temporary leave">
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Reason</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {temporaryLeave.map((day, i) => (
              <TableRow key={i} hover>
                <TableCell>{day.date}</TableCell>
                <TableCell>{day.reason}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<DeleteIcon />}
                    onClick={() => {}}
                    fullWidth
                    size="small"
                  >
                    Delete leave
                  </Button>
                </TableCell>
              </TableRow>
            ))}
            <TableRow hover>
              <TableCell>
                <TextField
                  label="Date"
                  variant="outlined"
                  size="small"
                  fullWidth
                  value={temporaryLeaveDate}
                  onChange={(event) => {
                    setTemporaryLeaveDate(event.target.value);
                  }}
                />
              </TableCell>
              <TableCell>
                <TextField
                  label="Reason"
                  variant="outlined"
                  size="small"
                  fullWidth
                  value={temporaryLeaveReason}
                  onChange={(event) => {
                    setTemporaryLeaveReason(event.target.value);
                  }}
                />
              </TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {}}
                  fullWidth
                  size="small"
                >
                  Add leave
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default AdvisorUpdate;
