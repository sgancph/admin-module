import { useState } from "react";
import Paper from "@material-ui/core/Paper";
import AdvisorForm from "../components/AdvisorForm";
import Title from "../components/Title";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
  },
}));

const AdvisorCreate = () => {
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
  const [isOpen, setIsOpen] = useState(false);
  const handleClickOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const isDisabled = !firstName;

  return (
    <Paper className={classes.paper}>
      <Title>Onboard advisor</Title>
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
        submitTitle="Onboard advisor"
      />
    </Paper>
  );
};

export default AdvisorCreate;
