import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    border: "1px solid red",
    display: "flex",

    flexDirection: "row",
    width: "100%",
  },

  auto: {
    flexGrow: 1, //!用于设置弹性盒子的扩展比率,一旦设置后，设置的元素将铺满整行
  },
}));

const ContainedButtons: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained">Default</Button>
      <Button variant="contained" className={classes.auto}>
        Default
      </Button>
      <Button variant="contained">Default</Button>
    </div>
  );
};

export default ContainedButtons;
