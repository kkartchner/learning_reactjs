import React, { Component } from 'react';

import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component {
    state = {
        ingredients: ["lettuce", "bacon", "cheese", "meat", "bacon", "cheese", "meat", "lettuce"]
    }
    render() {
        return (
            <React.Fragment>
                <Burger ingredients={this.state.ingredients} />
                <div>Build Controls</div>
            </React.Fragment>
        )
    }
}

export default BurgerBuilder;