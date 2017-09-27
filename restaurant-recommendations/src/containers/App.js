import React, { Component } from 'react'

import Restaurant from '../components/Restaurant'
import Reviews from '../components/Reviews'

import restaurants from '../constants/restaurants'
import reviews from '../constants/reviews'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurants,
      reviews,
      selectedId: restaurants[0].id
    }
    this.restaurantClick = this.restaurantClick.bind(this)
    this.addReviews = this.addReviews.bind(this)
  }

  restaurantClick(event) {
    event.preventDefault()
    this.setState({selectedId: event.target.id}) //Question: restaurantClick(id)...
  }

  selectedRestaurant() {
    return this.state.restaurants.find((restaurant) =>
      (restaurant.id === this.state.selectedId)
    )
  }

  addReviews(review) {
    this.setState({reviews: this.state.reviews.concat(review)})
  }

  render() {
    let restaurantComponents = restaurants.map((restaurant) => {
      return (
        <Restaurant
          key={restaurant.id}
          data={restaurant}
          isSelected={this.state.selectedId === restaurant.id}
          handleClick={this.restaurantClick}
        />
      )
    })

    let relevantReviews = this.state.reviews.filter((review) =>
      (this.state.selectedId === review.restaurant_id)
    )

    return(
      <div>
        <div className="row">
          <div className="small-3 columns">
            <h1>Restaurant</h1>

            {restaurantComponents}

          </div>

          <div className="small-9 columns">
            <h2>Reviews for {this.selectedRestaurant().name}</h2>

            <Reviews
              data={relevantReviews}
              addReviews={this.addReviews}
              selectedId={this.state.selectedId}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App
