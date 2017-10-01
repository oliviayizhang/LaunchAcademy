## Getting Started

This challenge is designed to step you through implementing a multi-page Sinatra-and-React portfolio site (for `Jane Jupiter, Developer`) using React Router. We have provided the React components. It's up to you to set up the routes!

## Setup

From your challenges directory, run the following:

```sh
$ et get react-router-challenge
$ cd react-router-challenge
$ bundle install
$ bundle exec ruby app.rb -o 0.0.0.0
```

Then, in another terminal tab, run:

```sh
$ npm install
$ npm start
```

Navigate to localhost:4567. You should see a blank page and no errors in your console.

## Requirements

* Create a navigation bar component with links to "Jane's Resume" and "Jane's Projects."
* The nav bar should also include a Back Button (utilizing `browserHistory`) that takes you to the previous page.
* The navigation bar should display on every page.

* When you first navigate to the site, you should see the "About Jane" page, rendered by the `About` component.
* The `/resume` path should display the `Resume` component.
* The `/projects` path should display the `ProjectsIndexContainer`.
* The `/projects/:id` path should display the `ProjectShowContainer`.

* On the "Jane's Projects" page, clicking on a project's name should send you to the show page for that project. Create dynamic links (using `<Link />`) for each project.

* The categories ("Skills", "Past Work", "Education", and "Volunteer Experiences") listed at the top of Jane's Resume should link to the appropriate _sub-sections_ of that page.

_Hint_: This part may not actually require work in Router itself!

* Everything should be nicely styled! This is a portfolio site, after all. Use your knowledge of CSS to make things pretty, and feel free to strip out the initial styling. The Foundation framework and Font Awesome have also been provided to you via a CDN.

## Pro Tips

* We have created most of the components and containers you need, but you will need to set up an `<App />` component and define your routes in there.
* You will need to finish the (already existing) `Layout.js` and `BackButton.js` components.
* You will need to add code to your `main.js` file.
* Utilize nested routes to share UI across different pages.
