import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import { Switch } from "@material-ui/core";
import { AdvisorContext } from "../../context";
import Paper from "../../components/Paper";
import { timeOptions } from "../../data";

const AdvisorUpdate = () => {
  const { advisorId } = useParams();
  const { advisorsById, isLoading } = useContext(AdvisorContext);
  const [openingHours, setOpeningHours] = useState([]);
  const advisor = advisorsById[advisorId];

  // Modal
  const onClickUpdateOpeningHours = () => {};

  useEffect(() => {
    if (!!advisor) {
      setOpeningHours([
        { start: "1.15 am", end: "2.00 am" },
        { start: "2.15 am", end: "3.15 am" },
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
    <Paper title="Opening hours">
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Weekday</TableCell>
              <TableCell>Start Time</TableCell>
              <TableCell>End Time</TableCell>
              <TableCell>Enable</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ].map((day, i) => (
              <TableRow key={i} hover>
                <TableCell>{day}</TableCell>
                <TableCell>
                  <TextField
                    label="Start time"
                    select
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={!!openingHours[i] ? openingHours[i].start : ""}
                    // onChange={(event) => {}}
                  >
                    {timeOptions.map((timeOption, i) => (
                      <MenuItem key={i} value={timeOption}>
                        {timeOption}
                      </MenuItem>
                    ))}
                  </TextField>
                </TableCell>
                <TableCell>
                  <TextField
                    label="End time"
                    select
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={!!openingHours[i] ? openingHours[i].end : ""}
                    // onChange={(event) => {}}
                  >
                    {timeOptions.map((timeOption, i) => (
                      <MenuItem key={i} value={timeOption}>
                        {timeOption}
                      </MenuItem>
                    ))}
                  </TextField>
                </TableCell>
                <TableCell>
                  <Switch value={true} onChange={(event) => {}} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        variant="contained"
        color="primary"
        onClick={onClickUpdateOpeningHours}
      >
        Update opening hours
      </Button>
    </Paper>
  );
};

export default AdvisorUpdate;
