import React, { Component } from 'react';
import data from '../constants/data'
import styles from '../stylesheets/index.css'
import Destination from './Destination'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: null
    }
    this.crossOut = this.crossOut.bind(this)
  }

  crossOut(id) {
    this.setState( {selectedId: id})
  }

  render() {
    console.log(this.state);
    let destinations = this.props.data.places.map((destination) => {
      let className = destination.id === this.state.selectedId ? 'selected' : null
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
