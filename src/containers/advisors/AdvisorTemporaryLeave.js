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
import { addTemporaryLeave, removeTemporaryLeave } from "../../reducers";
import Paper from "../../components/Paper";

const AdvisorUpdate = () => {
  const { advisorId } = useParams();
  const { advisorState, dispatch } = useContext(AdvisorContext);
  const advisor = advisorState.advisorsById[advisorId];

  // Form fields
  const [temporaryLeave, setTemporaryLeave] = useState([]);
  const [temporaryLeaveDate, setTemporaryLeaveDate] = useState("");
  const [temporaryLeaveReason, setTemporaryLeaveReason] = useState("");

  // Submit
  const [isAdding, setIsAdding] = useState(false);

  // Fetch advisor
  useEffect(() => {
    if (!!advisor) {
      setTemporaryLeave(advisor.temporaryLeave || []);
    }
  }, [advisor]);

  // Add
  const onAdd = (event) => {
    event.preventDefault();
    setIsAdding(true);
    new Promise((resolve) => resolve())
      .then(() =>
        dispatch(
          addTemporaryLeave(advisorId, temporaryLeaveDate, temporaryLeaveReason)
        )
      )
      .catch(console.log)
      .finally(() => {
        setTemporaryLeaveDate("");
        setTemporaryLeaveReason("");
        setIsAdding(false);
      });
  };

  // Remove
  const onRemove = (i) => {
    new Promise((resolve) => resolve())
      .then(() => dispatch(removeTemporaryLeave(advisorId, i)))
      .catch(console.log);
  };

  if (!advisor) {
    return <p>Advisor not found!</p>;
  }

  return (
    <Paper title="Temporary leave">
      <form onSubmit={onAdd}>
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
                      onClick={() => onRemove(i)}
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
                    disabled={isAdding}
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
                    disabled={isAdding}
                  />
                </TableCell>
                <TableCell>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={() => {}}
                    fullWidth
                    size="small"
                    disabled={
                      isAdding || !temporaryLeaveDate || !temporaryLeaveReason
                    }
                  >
                    {isAdding ? "Adding leave..." : "Add leave"}
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </form>
    </Paper>
  );
};

export default AdvisorUpdate;
