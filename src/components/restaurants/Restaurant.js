import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer';

class Restaurant extends Component {

  handleOnClick(e){
    this.props.deleteRestaurant(this.props.restaurant.id)
  }

  render() {
    const { restaurant } = this.props;

    return (
      <div>
        <li>
          {restaurant.text}
          <button onClick={(e) => this.handleOnClick(e) }> X </button>
          <ReviewsContainer restaurant={restaurant}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;
