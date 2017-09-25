import React from 'react'

let clickReply = (event) => {
  alert('reply')
}

const Tweet = props => {
  return(
    <li>
      <img src={props.userImage} className="profile_pic"/>
      <span>{props.userName}</span> @{props.userScreenName} {props.time}
      <br />
      {props.userText.replace({}, "")}
      <br />

      {props.tweet.entities.media ?
        <img src={props.tweet.entities.media[0].media_url} /> : null
      }

      <i className="fa fa-reply icon_color" aria-hidden="true" onClick={clickReply}></i>
      <i className={"fa fa-retweet " + (props.tweet.retweeted ? 'turn_green' : 'icon_color')} aria-hidden="true"></i>
      {props.retweetedCount}
      <i className={"fa fa-heart " + (props.tweet.favorited ? 'turn_red' : 'icon_color')} aria-hidden="true"></i>
      {props.favoriteCount}
      <i className="fa fa-ellipsis-h icon_color" aria-hidden="true"></i>
    </li>
  )
}


export default Tweet;
