import React, { Component } from 'react';

import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
    lettuce: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {
    state = {
        ingredients: [],
        totalPrice: 4
    }
    render() {
        return (
            <React.Fragment>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    enableList={this.state.ingredients}
                    price={this.state.totalPrice}
                />
            </React.Fragment>
        )
    }

    addIngredientHandler = (type) => {
        let updatedIngredients = [...this.state.ingredients];
        updatedIngredients.unshift(type);

        let updatedPrice = this.state.totalPrice + INGREDIENT_PRICES[type]
        this.setState({ ingredients: updatedIngredients, totalPrice: updatedPrice })
    }

    removeIngredientHandler = (type) => {
        let typeIndex = this.state.ingredients.indexOf(type)
        if (typeIndex === -1) {
            return; // If an ingredient of <type> was not found
        }

        let updatedIngredients = [...this.state.ingredients];
        updatedIngredients.splice(typeIndex, 1);

        let updatedPrice = this.state.totalPrice - INGREDIENT_PRICES[type]
        this.setState({ ingredients: updatedIngredients, totalPrice: updatedPrice })
    }
}

export default BurgerBuilder;