import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    //! & 是sass的语法，表示上一层的元素(父元素)
    // !整体的意思就是：选择：父元素下面的所有直属子元素
    "& > *": {
      margin: theme.spacing(1),
      border: "1px solid red",
    },
  },
}));

const ContainedButtons: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained">Default</Button>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" color="primary" href="#contained-buttons">
        Link
      </Button>
    </div>
  );
};

export default ContainedButtons;
