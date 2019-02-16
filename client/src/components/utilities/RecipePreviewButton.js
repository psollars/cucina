import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

export default withStyles({
  label: {
    display: "flex",
    flexDirection: "column",
    textTransform: "none",
    fontWeight: 300
  }
})(Button);
