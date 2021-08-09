import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import AdvisorForm from "../../components/AdvisorForm";
import Paper from "../../components/Paper";
import { AdvisorContext } from "../../context";
import { addAdvisor } from "../../reducers";

const AdvisorCreate = () => {
  const history = useHistory();
  const { advisorState, dispatch } = useContext(AdvisorContext);

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
  const [supervisor, setSupervisor] = useState("");
  const [image, setImage] = useState("");

  // Modal
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);

  // Submit
  const [isCreating, setIsCreating] = useState(false);
  const isDisabled = !firstName;
  const onSubmit = (event) => {
    event.preventDefault();
    setIsCreating(true);
    const id =
      Math.max(...Object.keys(advisorState.advisorsById).map(Number)) + 1;
    new Promise((resolve) => resolve())
      .then(() =>
        dispatch(
          addAdvisor({
            id,
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
        setIsCreating(false);
        history.push(`/advisors/${id}`);
      });
  };

  return (
    <Paper title="Onboard advisor">
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
        submitTitle="Onboard advisor"
        submittingTitle="Onboarding advisor..."
        onSubmit={onSubmit}
        isSubmitting={isCreating}
        isDisabled={isDisabled}
      />
    </Paper>
  );
};

export default AdvisorCreate;
