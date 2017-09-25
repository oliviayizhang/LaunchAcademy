### Getting Started

This challenge is designed to step you through creating a multi-component React application from the ground up.

### Setup

From your challenges directory, run the following:

```sh
$ et get react-marathon
$ cd react-marathon
$ npm install
$ npm start
```

If you go to <http://localhost:8080>, there will be nothing displayed on the page and there should be no errors in your console.

### Step 1

**Note: You will not see your Playlists listed in localhost:8080 until after Step 3**

The first step is to create the architecture for our list of playlists, of which the component will be named `PlaylistCollection` (trust me, this is better than `PlaylistList`).

Create a `<div>` tag that resides within the div `"App"` in our `App.js` file. Within this div, we need:

* A header tag, indicating that this is the playlist portion of our application.
* A `PlaylistCollection` component, which has not yet been created.

The playlists within the `PlaylistCollection` component will be populated from the `data` variable. We will need to pass in `playlists` as a property to this component.

This portion of the app will take a half of the page. Use the [Foundation Grid](http://foundation.zurb.com/sites/docs/grid.html) to achieve the desired visual effect.

### Step 2

Create a `PlaylistCollection.js` component in the `src/components` folder of the application. This component will _eventually_ have state and accept `props` passed from `App.js`. With this in mind, use JavaScript `class` syntax to inherit from `React.Component`.

Now, we can use the data from `playlists`. We'll need to iterate over each playlist object using `.map` and create a `Playlist` component for each element. These we will need to store in a `playlists` array. Each `Playlist` component should have the key and the playlist data passed in as properties.

The `PlaylistList.js` component will return a `<ul>` element that solely returns the `playlists` array (housing our newly created `Playlist` components) at the end of the `render()` method.

Don't forget to import React and export `PlaylistCollection` from this component!

### Step 3

We're going to render a few `Playlist` components in the `PlaylistCollection` component, so let's build the structure of our `Playlist` component. Create a `/src/components/Playlist.js` file and create a stateless component `Playlist` that will take in `props` and render the name of the playlist in an `<li>` tag.

**Note: After this step, you should see your Playlists listed in localhost:8080**

### Step 4

**Note: You will not see your Songs listed in localhost:8080 until after Step 6**

Let's work on getting the songs to appear for a given playlist. Let's go back to `src/components/App.js` and prepare our `SongCollection` component, which will be similar to the `PlaylistCollection` component. Keep in mind that these will not be all the songs from data, but only the songs listed in a given playlist. (Can you spot the variable that we can pass into props instead of `data.songs`?)

### Step 5

Continuing with the list of songs, let's create the `SongCollection` component. This will also take in props given from `App.js`, map them into `Song` components, and return a `<ul>` element with the list of our `Song` components in an array called `songs`.

### Step 6

Create the `Song` component. This will be very similar to our `Playlist` component, taking in props and returning an `<li>` element with the respective song name and artist separated by a `-`.

**Note: After this step, you should see your Songs listed in localhost:8080**

### Step 7

We need to visually see which song is being played. `data` will tell us which song is playing.

In `App.js`, `selectedSongId` should be passed into `SongCollection` as a new property.

In `SongCollection.js`, in our map function, create a variable `className` and change it to `"selected"` if the song in question's id matches the `selectedSongId`. This variable should be passed into the `Song` component as a property.

Finally, the `className` of the `<li>` tag should be set to the className variable passed from `SongList.` If done correctly, you should see the selected song be highlighted at <http://localhost:8080>.

### Step 8

Do the same as Step 7 but for `selectedPlaylistId`

### Step 9

Getting the selected song to be highlighted is pretty cool. But you know what would be even cooler? Let's add an `onClick` event handler for each Song, so that the highlighted song changes to the song that is clicked.

- The `App.js` constructor needs state. We need to keep track of the `selectedSongId`, which should initially be set to the `selectedSongId` from `props.data`.
- We need to define a function, `handleSongSelect`, that should take in an id and change `selectedSongId` with `this.setState({})`.
- Bind the `handleSongSelect` method in the constructor.
- Modify the props passed into the `SongCollection` component so that `selectedSongId` now depends on state instead of props. The `handleSongSelect` function should be passed in as another property.
- In `SongCollection.js`, `handleSongSelect` should be defined for each individual song as an arrow function set to the function passed in through props with the song id as the argument.
- `handleSongSelect` now should be passed in to each `Song` component as a property.
- In `Song.js`, the `handleSongSelect` passed down as a property should be set to an `onClick` attribute on the `<li>` tag.

### Step 10

Do the same thing as Step 9 but for changing Playlists! There are two main differences from Step 9.

- `selectedPlaylistSongIds` should depend on state instead of props.
- Changing the `selectedPlaylistId` in state should also cause the `selectedSongId` in state to change, either to a random song from the selected playlist or the first song from the selected playlist (take a look at `constants/data.js` to see where the relationship between songs and playlists exits.)

### Step 11

Refactor any components that do not utilize state to use the `const` arrow function syntax instead of `class` syntax.
