## Introduction

In this challenge, you will build a single-page app, similar to Yelp, for
reviewing restaurants.

## Getting Started

```no-highlight
$ et get restaurant-recommendations
$ cd restaurant-recommendations
$ npm install
$ npm start
```

## Instructions

![Restaurant Recommendations App](https://s3.amazonaws.com/horizon-production/images/restaurant-recommendations.png)

We have provided you a web application with a two-column layout. One column
contains a list of Restaurants, displaying their title, location, and a
small picture. Only one restaurant in this column can be selected at a time.

Another column displays the reviews for that restaurant.

### Part One

Build a form so that people can add a review. The form should prompt the user
for the following information:

* Name
* Rating (one to five stars)
* The text content of their review of the restaurant

We will need a hidden field for the `restaurant_id`, so we can keep track of
which restaurant this review is tied to. Display the form at the bottom of the reviews
for the selected restaurant. You do not need to validate your form inputs.

### Part Two

Handle the form submission by saving the restaurant review in the **state** of
the application. If you have built your React single-page application correctly,
a change in state should signal a page update, and you will see the new review
in your application.

### Part Three (optional)

Users shouldn't be constrained to this small list of restaurants! Add a second form to allow users to add restaurants to the list. As with the reviews form, the data should be saved to your App's state so the new additions are immediately rendered on the page.

You never know when your site could come under attack by malicious users. Add code to validate your inputs to help protect your site.
