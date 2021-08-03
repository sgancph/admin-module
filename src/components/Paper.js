import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Title from "./Title";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(3),
  },
}));

const PaperComponent = ({ title, children }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Title>{title}</Title>
      {children}
    </Paper>
  );
};

export default PaperComponent;
