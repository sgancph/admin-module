import { useState } from "react";
import AdvisorForm from "../../components/AdvisorForm";
import Paper from "../../components/Paper";

const AdvisorCreate = () => {
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
  const [supervisor, setSupervisor] = useState("");
  const [image, setImage] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);
  const isDisabled = !firstName;

  return (
    <Paper title="Onboard advisor">
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
        submitTitle="Onboard advisor"
      />
    </Paper>
  );
};

export default AdvisorCreate;
