import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import AccountCircle from "@material-ui/icons/AccountCircle";
import InputAdornment from "@material-ui/core/InputAdornment";
import formatDistance from "date-fns/formatDistance";
import { AdvisorContext, LeadContext } from "../context";
import Paper from "../components/Paper";
import Modal from "../components/Modal";

const LeadUpdate = () => {
  const { leadId } = useParams();
  const { leadsById, isLoading: isLoadingLeads } = useContext(LeadContext);
  const { advisorsById, isLoading: isLoadingAdvisors } =
    useContext(AdvisorContext);
  const [advisorId, setAdvisorId] = useState("");
  const [lifecycleStages, setLifecycleStages] = useState([]);
  const lead = leadsById[leadId];

  // Modal
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (!!lead) {
      setAdvisorId(lead.advisorId || "");
      setLifecycleStages(lead.lifecycleStages || []);
    }
  }, [lead]);

  if (isLoadingLeads || isLoadingAdvisors) {
    return <p>Loading...</p>;
  }

  if (!lead) {
    return <p>Lead not found!</p>;
  }

  return (
    <>
      <Paper title="Identify lead">
        <div>
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
            margin="normal"
            value={leadId}
            disabled
          />
        </div>
        <div>
          <TextField
            label="Date created"
            defaultValue={formatDistance(lead.createdAt, new Date(), {
              addSuffix: true,
            })}
            variant="outlined"
            fullWidth
            size="small"
            margin="normal"
            disabled
          />
        </div>
      </Paper>
      <Paper title="Lifecycle stage">
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
              {lifecycleStages.map((lifecycleStage, i) => (
                <TableRow key={i} hover>
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
      <Paper title="Reassign lead">
        <form>
          <TextField
            select
            label="Advisor"
            variant="outlined"
            size="small"
            margin="normal"
            fullWidth
            value={advisorId}
            onChange={(event) => setAdvisorId(event.target.value)}
          >
            {Object.keys(advisorsById).map((advisorId, i) => (
              <MenuItem key={i} value={advisorId}>
                {`${advisorsById[advisorId].firstName} ${advisorsById[advisorId].lastName}`}
              </MenuItem>
            ))}
          </TextField>
          <Button variant="contained" color="secondary" onClick={() => {}}>
            Reassign lead
          </Button>
        </form>
        <Modal
          isOpen={isOpen}
          handleToggle={handleToggle}
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
