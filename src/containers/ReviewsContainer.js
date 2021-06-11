import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import { connect } from 'react-redux'


class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        {/* it is call by each reastaurant and restauraid is sent */}
        <ReviewInput  addReview={this.props.addReview} restaurantId={this.props.restaurant.id}/> 
        <Reviews reviews={this.props.reviews}
          restaurantId={this.props.restaurant.id}
          deleteReview={this.props.deleteReview} />
      </div>
    )
  }
}


const mapStateToProps = state => ({reviews: state.reviews})

// const mapStateToProps = ({reviews}) => {
//   return {reviews}
// }
 
//when the action.js does not exist you do this way
const mapDispatchToProps = dispatch => ({
 addReview: review => dispatch({type: 'ADD_REVIEW', review}),
 deleteReview: id => dispatch({type: 'DELETE_REVIEW', id})
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
