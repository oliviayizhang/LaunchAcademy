import React from 'react'
import TextField from './TextField'

class ReviewForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      rating: 20,
      content: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    }) //event.target.name = 'name' refers to the input attribute 'name'; "[]"is a new es6 sytax,
  }

  handleFormSubmit(event) {
    event.preventDefault()
    console.log(this.props.selectedId)
    let formPayLoad = { //we can't pass "this.state" to addReviews method
      name: this.state.name,
      rating: this.state.rating,
      content: this.state.content,
      restaurant_id: this.props.selectedId //Don't forget to link id to the new state
    }
    this.setState({this.props.addReviews(formPayLoad)})
    this.setState({ //clear form
      name:'',
      rating: 20,
      content:''
    })
  }

  render() {
    return(
      <form onSubmit={this.handleFormSubmit}>
      {this.state.restaurant_id}
        <h3>Please submit your reviews:</h3>
        <TextField
          name={this.state.name}
          rating={this.state.rating}
          content={this.state.content}
          handleInputChange={this.handleInputChange}
        />

        <div>
          <input type='submit' value='Submit!' />
        </div>
      </form>
    )
  }
}

export default ReviewForm
