import TwitterFeed from '../../src/containers/TwitterFeed';
import Tweet from '../../src/components/Tweet';
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react';

describe('TwitterFeed', () => {
  let wrapper;
  let data = [{
    id: 1,
    text: "This doesn't look like Kansas",
    user: {
       name: 'Todo',
       profile_image_url: 'http://images2.fanpop.com/image/quiz/400000/400752_1271413686448_431_300.jpg'
    }
  }]

  beforeEach(() => {
    jasmineEnzyme()
    spyOn(TwitterFeed.prototype, 'handleSelectedTweet').and.callThrough();
    wrapper = mount(
      <TwitterFeed
        data={data}
      />
    )
  });

  it('should should have the specified initial state', () => {
     expect(wrapper.state().selectedTweetId).toEqual(null);
   });

   it('should render an Tweet Component', () => {
    expect(wrapper.find(Tweet)).toBePresent();
  });

  it('should render the Tweet Component with specific props when selectedTweetId is 1', () => {
   wrapper.setState({ selectedTweetId: 1 });
   expect(wrapper.find(Tweet).props().text).toEqual('This doesn\'t look like Kansas');
  });

})
