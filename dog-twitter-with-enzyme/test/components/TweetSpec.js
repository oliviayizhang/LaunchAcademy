import Tweet from '../../src/components/Tweet'
import { mount } from 'enzyme' //returns React Wrapper
import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react'

describe('Tweet', () => {
  let image, //define variables here, so they are accessible to all of the 'it' statement. Properly scope the variables
      name,
      text,
      handleClick,
      wrapper

  beforeEach(() => {
    jasmineEnzyme()
    handleClick = jasmine.createSpy('handleClick spy');
    wrapper = mount(
      <Tweet
        userPhoto='http://images2.fanpop.com/image/quiz/400000/400752_1271413686448_431_300.jpg'
        name='Todo'
        text="This doesn't look like Kansas"
        handleClick={handleClick} //can also define a variable 'onClick' instead 'handleClick', then here will be onClick={handleClick}
      />
    )
  })

  it('should render an span tag', () => {
    expect(wrapper.find('span')).toBePresent()
  });

  it('should render an p tag with the text property value', () => {
    expect(wrapper.find('p').text()).toBe("This doesn't look like Kansas");
  });

  it('should render an img tag with the specific props', () => {
    expect(wrapper.find('img').props()).toEqual({
      src: 'http://images2.fanpop.com/image/quiz/400000/400752_1271413686448_431_300.jpg'
    });
  });

  it('should invoke the onClick function from props when clicked', () => {
   wrapper.simulate('click');
   expect(handleClick).toHaveBeenCalled();
  }); //remeber the function name should be the prop's key, not Onclick in this case

})
