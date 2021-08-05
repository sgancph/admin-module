import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { AdvisorContext } from "../../context";
import AdvisorForm from "../../components/AdvisorForm";
import Paper from "../../components/Paper";

const AdvisorUpdate = () => {
  const { advisorId } = useParams();
  const { advisorsById, isLoading } = useContext(AdvisorContext);
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
  const isDisabled = !firstName;
  const advisor = advisorsById[advisorId];

  // Modal
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);

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
    }
  }, [advisor]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!advisor) {
    return <p>Advisor not found!</p>;
  }

  return (
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
  );
};

export default AdvisorUpdate;
