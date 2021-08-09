import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Modal from "../../components/Modal";
import DeleteIcon from "@material-ui/icons/Delete";
import { AdvisorContext } from "../../context";
import Paper from "../../components/Paper";

const AdvisorUpdate = () => {
  const { advisorId } = useParams();
  const { advisorState, dispatch } = useContext(AdvisorContext);
  const advisor = advisorState.advisorsById[advisorId];

  // Modal
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (!!advisor) {
    }
  }, [advisor]);

  if (!advisor) {
    return <p>Advisor not found!</p>;
  }

  return (
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
  );
};

export default AdvisorUpdate;
