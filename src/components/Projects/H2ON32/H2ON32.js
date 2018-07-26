import classes from "./H2ON32.css";
import H2ON32 from "../../../assets/images/H2ON32.jpg";
import React from "react"

const h2ON32 = (props) => {
  return (
      <div className={classes.H2ON32}>
        <img className={classes.H2ON32Image} src={H2ON32}
             alt="NoResultImage"/>
        <h3>This is my lovely girlfriend</h3>
        <p>I love her so much  💕</p>
      </div>
  );
};

export default h2ON32;