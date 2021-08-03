import { Link as LinkRouter } from "react-router-dom";
import Link from "@material-ui/core/Link";

const LinkComponent = ({ ...props }) => (
  <Link component={LinkRouter} {...props} />
);

export default LinkComponent;
