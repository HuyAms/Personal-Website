import classes from "./NoResult.css";
import noResultImg from "../../../assets/images/panda.png";
import Aux from '../../../hoc/ReactAux/ReactAux';
import React from "react";


const noResult = (props) => {
    return (
        <div className={classes.NoResultContainer}>
            <img className={classes.NoResultImage} src={noResultImg}
                 alt="No Result Image"/>
            <h3 className={classes.NoResultText}>No results found</h3>
            <p>Try different keywords or remove search filters</p>
        </div>
    );
};

export default noResult