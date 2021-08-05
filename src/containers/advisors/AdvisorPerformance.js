import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { AdvisorContext } from "../../context";
import Paper from "../../components/Paper";

const AdvisorUpdate = () => {
  const { advisorId } = useParams();
  const { advisorsById, isLoading } = useContext(AdvisorContext);
  const advisor = advisorsById[advisorId];

  useEffect(() => {
    if (!!advisor) {
    }
  }, [advisor]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!advisor) {
    return <p>Advisor not found!</p>;
  }

  return (
    <Paper title="Performance">
      <p>
        # of reach-outs within SLA time / # of reach-outs within SLA + # of
        leads lost outside of working hours = x%
      </p>
    </Paper>
  );
};

export default AdvisorUpdate;
