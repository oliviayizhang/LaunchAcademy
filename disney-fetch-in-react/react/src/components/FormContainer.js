import React from 'react'
import TextField from './TextField'

class FormContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      release_year: '',
      runtime: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleInputChange(event) {
    let name = event.target.name
    let value = event.target.value

    this.setState({[name]: value})
    //name refers to the "name" attribute of the input
  }

  handleFormSubmit(event) {
    event.preventDefault()
    let formPayLoad = { //In order to post these info to data, the states here should match the key in the data
      title: this.state.title,
      release_year: parseInt(this.state.release_year), //for database
      runtime: parseInt(this.state.runtime)
    }
    this.props.addMovies(formPayLoad)
  }

  render() {
    console.log(this.state);
    return(
      <form onSubmit={this.handleFormSubmit}>
        <h3>Add your favorite Movie!</h3>
        {/*pass props into input fields three times make more sense*/}
        <TextField
          label='Movie Name'
          value={this.state.title}
          handleInputChange={this.handleInputChange}
          name='title'
        />
        <TextField
          label='Movie Release Year'
          value={this.state.release_year}
          handleInputChange={this.handleInputChange}
          name='release_year'
        />
        <TextField
          label='Movie Run Time'
          value={this.state.runtime}
          handleInputChange={this.handleInputChange}
          name='runtime'
        />

        <input type='submit' value='Add your favorite movie!' />
      </form>

    )
  }
}
export default FormContainer
