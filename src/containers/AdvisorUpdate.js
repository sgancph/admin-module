import { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Modal from "../components/Modal";
import DeleteIcon from "@material-ui/icons/Delete";
import AdvisorForm from "../components/AdvisorForm";
import Title from "../components/Title";
import { Switch } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(3),
  },
}));

const timeOptions = [
  "1.00 am",
  "1.15 am",
  "1.30 am",
  "1.45 am",
  "2.00 am",
  "2.15 am",
  "2.30 am",
  "2.45 am",
  "3.00 am",
  "3.15 am",
];

const AdvisorUpdate = () => {
  const classes = useStyles();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [agentCode, setAgentCode] = useState("");
  const [gender, setGender] = useState("");
  const [masRepNumber, setMasRepNumber] = useState("");
  const [yearJoinedIncome, setYearJoinedIncome] = useState("");
  const [phoneCountryCode, setPhoneCountryCode] = useState("65");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [image, setImage] = useState("");
  const [temporaryLeave, setTemporaryLeave] = useState([]);
  const [openingHours, setOpeningHours] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const handleClickOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const isDisabled = !firstName;
  const onClickUpdateOpeningHours = () => {};

  useEffect(() => {
    setTemporaryLeave([
      { date: "x", reason: "xxx" },
      { date: "y", reason: "yyy" },
    ]);
    setOpeningHours([
      { start: "1.15 am", end: "2.00 am" },
      { start: "2.15 am", end: "3.15 am" },
    ]);
  }, []);

  return (
    <>
      <Paper className={classes.paper}>
        <Title>Update advisor</Title>
        <AdvisorForm
          firstName={firstName}
          setFirstName={setFirstName}
          lastName={lastName}
          setLastName={setLastName}
          agentCode={agentCode}
          setAgentCode={setAgentCode}
          gender={gender}
          setGender={setGender}
          masRepNumber={masRepNumber}
          setMasRepNumber={setMasRepNumber}
          yearJoinedIncome={yearJoinedIncome}
          setYearJoinedIncome={setYearJoinedIncome}
          phoneCountryCode={phoneCountryCode}
          setPhoneCountryCode={setPhoneCountryCode}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          email={email}
          setEmail={setEmail}
          bio={bio}
          setBio={setBio}
          image={image}
          setImage={setImage}
          isDisabled={isDisabled}
          isOpen={isOpen}
          handleClose={handleClose}
          title="Onboard advisor"
          text="Are you sure you want to add advisor X to the platform?"
          yesLabel="Yes, I want to add the advisor"
          noLabel="No"
          submitTitle="Update advisor"
        />
      </Paper>
      <Paper className={classes.paper}>
        <Title>Temporary leave</Title>
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
                    value=""
                    onChange={(event) => {}}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    label="Reason"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value=""
                    onChange={(event) => {}}
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
      <Paper className={classes.paper}>
        <Title>Opening hours</Title>
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
                      value={!!openingHours[i] && openingHours[i].start}
                      onChange={(event) => {}}
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
                      value={!!openingHours[i] && openingHours[i].end}
                      onChange={(event) => {}}
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
      <Paper className={classes.paper}>
        <Title>Offboard advisor</Title>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<DeleteIcon />}
          onClick={() => {}}
        >
          Offboard advisor
        </Button>
        <Modal
          isOpen={isOpen}
          handleClose={handleClose}
          title="Are you sure you want to offboard advisor X?"
          text="When you are offboarding advisor X, you will remove him/her from Android and Nylas. Their leads will be redistributed to Y. They will remain active in i-Sprint for access to other platforms."
          yesLabel="Yes, I want to remove the advisor"
          noLabel="No"
        />
      </Paper>
    </>
  );
};

export default AdvisorUpdate;
