import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Modal from "./Modal";
import { countryCodeOptions, supervisors } from "../data";

const getSequence = (start, end) =>
  Array.from({ length: end - start }, (_, i) => i + start + 1);
const yearOptions = getSequence(2000, 2021).reverse();

const AdvisorCreate = ({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  agentCode,
  setAgentCode,
  gender,
  setGender,
  masRepNumber,
  setMasRepNumber,
  yearJoinedIncome,
  setYearJoinedIncome,
  phoneCountryCode,
  setPhoneCountryCode,
  phoneNumber,
  setPhoneNumber,
  email,
  setEmail,
  bio,
  setBio,
  image,
  setImage,
  supervisor,
  setSupervisor,
  isDisabled,
  isOpen,
  handleClickOpen,
  handleClose,
  submitTitle,
  submittingTitle,
  onSubmit,
  isSubmitting,
}) => {
  return (
    <>
      <form noValidate autoComplete="off" onSubmit={onSubmit}>
        <TextField
          required
          label="First Name"
          variant="outlined"
          size="small"
          fullWidth
          margin="normal"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
        <TextField
          label="Last Name"
          variant="outlined"
          size="small"
          fullWidth
          margin="normal"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
        <TextField
          label="Agent Code"
          variant="outlined"
          size="small"
          fullWidth
          margin="normal"
          value={agentCode}
          onChange={(event) => setAgentCode(event.target.value)}
        />
        <TextField
          select
          label="Gender"
          variant="outlined"
          size="small"
          fullWidth
          margin="normal"
          value={gender}
          onChange={(event) => setGender(event.target.value)}
        >
          {["Male", "Female"].map((genderOption, i) => (
            <MenuItem key={i} value={genderOption}>
              {genderOption}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="MAS Rep. No."
          variant="outlined"
          size="small"
          fullWidth
          margin="normal"
          value={masRepNumber}
          onChange={(event) => setMasRepNumber(event.target.value)}
        />
        <TextField
          select
          label="Year Joined Income"
          variant="outlined"
          size="small"
          fullWidth
          margin="normal"
          value={yearJoinedIncome}
          onChange={(event) => setYearJoinedIncome(event.target.value)}
        >
          {yearOptions.map((yearOption, i) => (
            <MenuItem key={i} value={yearOption}>
              {yearOption}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          label="Supervisor"
          variant="outlined"
          size="small"
          fullWidth
          margin="normal"
          value={supervisor}
          onChange={(event) => setSupervisor(event.target.value)}
        >
          {supervisors.map((supervisor, i) => (
            <MenuItem key={i} value={supervisor}>
              {supervisor}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          label="Country Code"
          variant="outlined"
          size="small"
          fullWidth
          margin="normal"
          value={phoneCountryCode}
          onChange={(event) => setPhoneCountryCode(event.target.value)}
        >
          {countryCodeOptions.map((countryCodeOption, i) => (
            <MenuItem key={i} value={countryCodeOption.dial_code}>
              {countryCodeOption.flag} {countryCodeOption.name} (
              {countryCodeOption.dial_code})
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="Phone Number"
          variant="outlined"
          size="small"
          fullWidth
          margin="normal"
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
        />
        <TextField
          label="Email"
          variant="outlined"
          size="small"
          fullWidth
          margin="normal"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          label="Bio"
          variant="outlined"
          size="small"
          multiline
          rows={4}
          fullWidth
          margin="normal"
          value={bio}
          onChange={(event) => setBio(event.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={isDisabled}
        >
          {isSubmitting ? submittingTitle : submitTitle}
        </Button>
      </form>
      <Modal
        isOpen={isOpen}
        handleClose={handleClose}
        title={submitTitle}
        text="Are you sure you want to add advisor X to the platform?"
        yesLabel="Yes, I want to add the advisor"
        noLabel="No"
      />
    </>
  );
};

export default AdvisorCreate;
