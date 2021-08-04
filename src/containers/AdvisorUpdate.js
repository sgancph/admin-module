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
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Switch } from "@material-ui/core";
import Modal from "../components/Modal";
import DeleteIcon from "@material-ui/icons/Delete";
import { AdvisorContext } from "../context";
import AdvisorForm from "../components/AdvisorForm";
import Paper from "../components/Paper";
import { timeOptions } from "../data";

const TabPanel = ({ value, index, children, ...other }) => (
  <div hidden={value !== index} {...other}>
    {value === index && children}
  </div>
);

const AdvisorUpdate = () => {
  const { advisorId } = useParams();
  const { advisorsById, isLoading } = useContext(AdvisorContext);
  const [tab, setTab] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [agentCode, setAgentCode] = useState("");
  const [gender, setGender] = useState("");
  const [masRepNumber, setMasRepNumber] = useState("");
  const [yearJoinedIncome, setYearJoinedIncome] = useState("");
  const [phoneCountryCode, setPhoneCountryCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [image, setImage] = useState("");
  const [supervisor, setSupervisor] = useState("");
  const [temporaryLeave, setTemporaryLeave] = useState([]);
  const [temporaryLeaveDate, setTemporaryLeaveDate] = useState("");
  const [temporaryLeaveReason, setTemporaryLeaveReason] = useState("");
  const [openingHours, setOpeningHours] = useState([]);
  const isDisabled = !firstName;
  const advisor = advisorsById[advisorId];

  // Modal
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);
  const onClickUpdateOpeningHours = () => {};

  useEffect(() => {
    if (!!advisor) {
      setFirstName(advisor.firstName || "");
      setLastName(advisor.lastName || "");
      setAgentCode(advisor.agentCode || "");
      setGender(advisor.gender || "");
      setMasRepNumber(advisor.masRepNumber || "");
      setYearJoinedIncome(advisor.yearJoinedIncome || "");
      setPhoneCountryCode(advisor.phoneCountryCode || "");
      setPhoneNumber(advisor.phoneNumber || "");
      setEmail(advisor.email || "");
      setBio(advisor.bio || "");
      setSupervisor(advisor.supervisor || "");
      setTemporaryLeave([
        { date: "x", reason: "xxx" },
        { date: "y", reason: "yyy" },
      ]);
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
    <>
      <Tabs
        value={tab}
        onChange={(event, newValue) => setTab(newValue)}
        aria-label="simple tabs example"
      >
        <Tab label="Information" />
        <Tab label="Temporary Leave" />
        <Tab label="Opening Hours" />
        <Tab label="Performance" />
        <Tab label="Offboarding" />
      </Tabs>
      <TabPanel value={tab} index={0}>
        <Paper title="Update advisor">
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
            supervisor={supervisor}
            setSupervisor={setSupervisor}
            image={image}
            setImage={setImage}
            isDisabled={isDisabled}
            isOpen={isOpen}
            handleToggle={handleToggle}
            title="Onboard advisor"
            text="Are you sure you want to add advisor X to the platform?"
            yesLabel="Yes, I want to add the advisor"
            noLabel="No"
            submitTitle="Update advisor"
          />
        </Paper>
      </TabPanel>
      <TabPanel value={tab} index={1}>
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
      </TabPanel>
      <TabPanel value={tab} index={2}>
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
      </TabPanel>
      <TabPanel value={tab} index={3}>
        <Paper title="Performance">
          <p>
            # of reach-outs within SLA time / # of reach-outs within SLA + # of
            leads lost outside of working hours = x%
          </p>
        </Paper>
      </TabPanel>
      <TabPanel value={tab} index={4}>
        <Paper title="Offboard advisor">
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
            handleToggle={handleToggle}
            title="Are you sure you want to offboard advisor X?"
            text="When you are offboarding advisor X, you will remove him/her from Android and Nylas. Their leads will be redistributed to Y. They will remain active in i-Sprint for access to other platforms."
            yesLabel="Yes, I want to remove the advisor"
            noLabel="No"
          />
        </Paper>
      </TabPanel>
    </>
  );
};

export default AdvisorUpdate;
