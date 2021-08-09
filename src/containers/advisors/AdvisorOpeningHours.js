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
import { updateOpeningHours } from "../../reducers";
import Paper from "../../components/Paper";
import { timeOptions } from "../../data";

const AdvisorUpdate = () => {
  const { advisorId } = useParams();
  const { advisorState, dispatch } = useContext(AdvisorContext);
  const advisor = advisorState.advisorsById[advisorId];
  const [openingHours, setOpeningHours] = useState([]);

  useEffect(() => {
    if (!!advisor) {
      setOpeningHours(advisor.openingHours || []);
    }
  }, [advisor]);

  // Submit
  const [isUpdating, setIsUpdating] = useState(false);
  const onUpdate = (event) => {
    event.preventDefault();
    setIsUpdating(true);
    new Promise((resolve) => resolve())
      .then(() => dispatch(updateOpeningHours(advisorId, openingHours)))
      .catch(console.log)
      .finally(() => {
        setIsUpdating(false);
      });
  };

  if (!advisor) {
    return <p>Advisor not found!</p>;
  }

  return (
    <Paper title="Opening hours">
      <form onSubmit={onUpdate}>
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
                      disabled={isUpdating}
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
                      disabled={isUpdating}
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
                    <Switch
                      value={!!openingHours[i] && openingHours[i].isEnabled}
                      onChange={(event) => {}}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={isUpdating}
        >
          {isUpdating ? "Updating opening hours..." : "Update opening hours"}
        </Button>
      </form>
    </Paper>
  );
};

export default AdvisorUpdate;
