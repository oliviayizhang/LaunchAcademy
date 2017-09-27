import React from 'react'

const TextField = props => {
  return(
    <div>
      <label>
        Name:
        <input type='text' name='name' value={props.name} onChange={props.handleInputChange} />
      </label>

      <label>
        Rating:
        { /*<input type='text' name='rating' value={props.rating} onChange={props.handleInputChange} /> */}
        <select name='rating' value={props.rating} onChange={props.handleInputChange}>
          <option value={20}>1 star</option> {/*numbers should be in {} in JSX*/}
          <option value={40}>2 stars</option>
          <option value={60}>3 stars</option>
          <option value={80}>4 stars</option>
          <option value={100}>5 stars</option>
        </select>
      </label>

      <label>
        Review:
        <input type='text' name='content' value={props.content} onChange={props.handleInputChange} />
      </label>
    </div>
  )
}




export default TextField
