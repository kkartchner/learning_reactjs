import React from "react";

import Button from "../../UI/Button/Button";

const orderSummary = (props) => {
    let ingredientSummary = null;
    if (props.ingredients.length > 0) {
        const ingredientCounts = {};
        props.ingredients.forEach((el) => {
            ingredientCounts[el] =
                el in ingredientCounts ? ingredientCounts[el] + 1 : 1;
        });
        ingredientSummary = Object.keys(ingredientCounts).map((ingr) => (
            <li key={ingr}>
                <span style={{ textTransform: "capitalize" }}>
                    {ingr} X {ingredientCounts[ingr]}{" "}
                </span>
            </li>
        ));
    }

    return (
        <React.Fragment>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients</p>
            <ul>{ingredientSummary}</ul>
            <p><strong>Total Price: {props.totalPrice}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>
                CANCEL
            </Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>
                CONTINUE
            </Button>
        </React.Fragment>
    );
};

export default orderSummary;
