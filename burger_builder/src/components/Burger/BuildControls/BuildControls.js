import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = ["lettuce", "bacon", "cheese", "meat"];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current price: {props.price.toFixed(2)}</p>
        {controls.map((ctrl) => (
            <BuildControl
                key={ctrl}
                label={ctrl}
                added={() => props.ingredientAdded(ctrl)}
                removed={() => props.ingredientRemoved(ctrl)}
                disableLess={props.enableList.indexOf(ctrl) === -1}
            />
        ))}
        <button
            className={classes.OrderButton}
            disabled={props.enableList.length === 0}
            onClick={props.onOrdered}
        >
            ORDER NOW
        </button>
    </div>
);

export default buildControls;
