import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { AdvisorContext } from "../../context";
import { updateAdvisor } from "../../reducers";
import AdvisorForm from "../../components/AdvisorForm";
import Paper from "../../components/Paper";

const AdvisorUpdate = () => {
  const { advisorId } = useParams();
  const { advisorState, dispatch } = useContext(AdvisorContext);
  const advisor = advisorState.advisorsById[advisorId];

  // Form fields
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

  // Modal
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);

  // Submit
  const [isUpdating, setIsUpdating] = useState(false);
  const onUpdate = (event) => {
    event.preventDefault();
    setIsUpdating(true);
    new Promise((resolve) => resolve())
      .then(() =>
        dispatch(
          updateAdvisor({
            id: advisorId,
            firstName,
            lastName,
            agentCode,
            gender,
            masRepNumber,
            yearJoinedIncome,
            phoneCountryCode,
            phoneNumber,
            email,
            bio,
            supervisor,
          })
        )
      )
      .catch(console.log)
      .finally(() => {
        setIsUpdating(false);
      });
  };

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

  if (!advisor) {
    return <p>Advisor not found!</p>;
  }

  return (
    <Paper title="Update advisor">
      <AdvisorForm
        // Form fields
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
        // Modal
        isOpen={isOpen}
        handleToggle={handleToggle}
        title="Onboard advisor"
        text="Are you sure you want to add advisor X to the platform?"
        yesLabel="Yes, I want to add the advisor"
        noLabel="No"
        // Submit
        submitTitle="Update advisor"
        submittingTitle="Updating advisor..."
        onSubmit={onUpdate}
        isSubmitting={isUpdating}
        isDisabled={!firstName}
      />
    </Paper>
  );
};

export default AdvisorUpdate;
