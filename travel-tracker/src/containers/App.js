import React, { Component } from 'react';
import data from '../constants/data'
import styles from '../stylesheets/index.css'
import Destination from './Destination'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: []
    }
    this.crossOut = this.crossOut.bind(this)
  }

  crossOut(id) {
    // if (!this.state.selectedId.includes(id)) {
    //   this.state.selectedId.push(id)
    // }
    let newSelectedId = this.state.selectedId.filter((id) => {
      return !this.state.selectedId.includes(id)
    })
    this.setState( {selectedId: newSelectedId}) //the 1st selectedId is just a key that I assigned to the new state, it doesn't need to be same as it's original state's key name
  }

  render() {
    console.log(this.state);
    let destinations = this.props.data.places.map((destination) => {
      let className = this.state.selectedId.includes(destination.id) ? 'selected' : null
      return(
        <Destination
          key={destination.id}
          id={destination.id}
          name={destination.name}
          className={className}
          handleClick={()=> this.crossOut(destination.id)}
        />
      )
    })

    return (
      <div id="wishlist-div">
        <div className="row">
          <div className="small-12 small-centered columns text-center">
            <h3>Wanderlust Wishlist</h3>
            {destinations}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
