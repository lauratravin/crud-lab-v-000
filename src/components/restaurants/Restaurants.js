import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
    const { restaurants, deleteRestaurant } = this.props; //destructuring

    const restaurantsAll= restaurants.map( restaurant => {
         return(
             <Restaurant restaurant={restaurant} deleteRestaurant={deleteRestaurant} key={restaurant.id}/> //Id is inside restaurant
         )
      }  
    )
    return(<ul> {restaurantsAll} </ul>)
  }
};

export default Restaurants;