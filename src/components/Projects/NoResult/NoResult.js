import classes from "./NoResult.css";
import noResultImg from "../../../assets/images/panda.png";
import React from "react";


const noResult = (props) => {
    return (
        <div className={classes.NoResultContainer}>
            <img className={classes.NoResultImage} src={noResultImg}
                 alt="NoResultImage"/>
            <h3 className={classes.NoResultText}>No results found</h3>
            <p>Try different keywords or remove search filters</p>
        </div>
    );
};

export default noResult