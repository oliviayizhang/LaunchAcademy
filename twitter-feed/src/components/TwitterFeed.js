import React from 'react';
import Tweet from './Tweet'

const TwitterFeed = props => {

  let info = props.data.map((tweet) => {
    return(
      <Tweet
      key={tweet.id_str}
      userName={tweet.user.name}
      userText={tweet.text}
      userImage={tweet.user.profile_image_url}
      userScreenName={tweet.user.screen_name}
      retweetedCount={tweet.retweet_count}
      favoriteCount={tweet.favorite_count}
      time={tweet.timestamp_ms}
      tweet={tweet}
      />
    )
  })

  return (
  <ul>
   {info}
  </ul>
  )
}

export default TwitterFeed;
