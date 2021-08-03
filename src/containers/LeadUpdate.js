import { useState, useContext, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import AccountCircle from "@material-ui/icons/AccountCircle";
import InputAdornment from "@material-ui/core/InputAdornment";
import formatDistance from "date-fns/formatDistance";
import { AdvisorContext, LeadContext } from "../context";
import Title from "../components/Title";
import Modal from "../components/Modal";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(3),
  },
}));

const LeadUpdate = () => {
  const classes = useStyles();
  const { leads, isLoading: isLoadingLeads } = useContext(LeadContext);
  const { advisors, isLoading: isLoadingAdvisors } = useContext(AdvisorContext);
  const lead = leads[0];
  const [isOpen, setIsOpen] = useState(false);
  const handleClickOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  useEffect(() => {}, []);

  if (isLoadingLeads || isLoadingAdvisors) {
    return <p>Loading...</p>;
  }

  const leadId = 32;

  return (
    <>
      <Paper className={classes.paper}>
        <div>
          <Title>Identify lead</Title>
          <TextField
            label="Lead ID"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            variant="outlined"
            fullWidth
            size="small"
            margin="dense"
            value={leadId}
            disabled
          />
        </div>
        <div>
          <p>Date created</p>
          <p>
            {formatDistance(lead.createdAt, new Date(), {
              addSuffix: true,
            })}
          </p>
        </div>
      </Paper>
      <Paper className={classes.paper}>
        <Title>Lifecycle stage</Title>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Lifecycle stage</TableCell>
                <TableCell>Start</TableCell>
                <TableCell>End</TableCell>
                <TableCell>Duration</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {lead.lifecycleStages.map((lifecycleStage, i) => (
                <TableRow hover>
                  <TableCell>{lifecycleStage.lifecycleStage}</TableCell>
                  <TableCell>{lifecycleStage.start}</TableCell>
                  <TableCell>{lifecycleStage.end}</TableCell>
                  <TableCell>{lifecycleStage.duration}</TableCell>
                  <TableCell>
                    {lifecycleStage.isActive ? "Active" : "Not active"}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <Paper className={classes.paper}>
        <Title>Reassign lead</Title>
        <form>
          <TextField
            select
            label="Advisor"
            variant="outlined"
            size="small"
            margin="dense"
            fullWidth
            value={lead.advisorId}
            onChange={(event) => handleClickOpen()}
          >
            {advisors.map((advisor, i) => (
              <MenuItem key={i} value={advisor.id}>
                {advisor.firstName} {advisor.lastName}
              </MenuItem>
            ))}
          </TextField>
        </form>
        <Modal
          isOpen={isOpen}
          handleClose={handleClose}
          title="Reassign lead to advisor"
          text="Are you sure you want to reassign lead X from advisor Y to advisor Z?"
          yesLabel="Yes, I want to reassign"
          noLabel="No"
        />
      </Paper>
    </>
  );
};

export default LeadUpdate;
