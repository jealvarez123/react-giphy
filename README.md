# React Giphy

**See Headers Below For Step By Step Outline**

> **Note**: each step has a corresponding commit with the implemented actions on the solution branch of this repo.

### Step 0: Examine the Solution

Fork and clone to get a local copy of the app.


Check out to the solution branch to see what's ahead. Or alternatively, push forward into uncharted territory without a map!

```
npm install
npm start
```

Spend time playing around with the completed exercise.  Look at `index.js`.  Think about how you would separate your different components and functionality. 

A solution with giphy gif searching is available in a [react-giphy-solution](https://github.com/sf-wdi-labs/react-giphy-solution) repo.


### Step 1: Set up a `HelloWorld` Component

Move back to the `master` branch to build out the app yourself! Remove your `node_modules` folder manually, since it's included in `.gitingore`.   Re-`npm install` any packages you will need.

Before we start building our React app, let's create a `hello world` component just to make sure that we've tied everything together properly.  This time we are using some boilerplate, but a little less than is generated using create-react-app. Let's get more intimate with the boilerplate code. 

- In your `/src` directory, configure your `App.js` and `index.js` files to render a `App` component. Make the component simple display 'hello world' in a h1 tag.  We'll use that as a base for our app. 
- Run `npm start` and make sure everything is working.

### Step 2: Add UI for Home

- Rename `App.js` to `Home.js` to better indicate the purpose of the file. Make sure to update references to this file elsewhere in your application accordingly.
- Make the Home component return a container `<div>` element, which should in turn contain a `<h1>` element.
- Render that component to the DOM in your app's main `index.js` file

### Step 3: Add UI for Search

- Create a new file for your `Search` component.
- Define a `Search` component that renders a search form. This can be a simple form with a single input and submit button.
- Import the `Search` file to your `Home` file.
- Render the `Search` component in the `Home` component.

### Step 4: Wire up the Search Button

- Define your `Search` component's initial state. It should have a `query` value that corresponds to a search term.
- Define a function that is triggered whenever the user submits the Search form. Start by just logging `"searched!"` to make sure it works.
  - Use an event listener to attach this function to your form. Try googling `onSubmit`.
- Define a function that updates your `query` value in state whenever a change is made to the input field. You can do this using an `onInput` function on your text box, or by using `ref`.
- Update your submit function so that it now logs the `query` value in state.
- **hint:** Check out the [React docs for forms](https://reactjs.org/docs/forms.html)

### Step 5: Move search logic to a `SearchContainer` component

- Create a new `SearchContainer` component that that renders the `Search` component. This `SearchContainer` will also handle search results. 
- Refactor your `Search` component so that it only renders a UI. It should use properties passed into the Search component.
- Move all of the business logic related to state for the search into the `SearchContainer` component. The `SearchContainer` component should still render the `Search` component, with any necessary properties.

### Step 6: When a User Searches...

- Define a `Results` component that will take in a collection of gif objects and render each one's `source` url as well as a fixed height image.  Go ahead an look at the [Giphy search documentation](https://github.com/Giphy/GiphyAPI#search-endpoint) to see the structure of the JSON it sends.
- Update your `SearchContainer` component's state to include whether the user has submitted a search.
- Update `SearchContainer`'s state to include a list of results.
- If a user has searched, instead of rendering the `Search` component, render a `Results` component with hard coded data.
- This is starting to look like a single page app, but we don't have routing yet. If you'd like, update the component so that the search bar and any results are always displayed on the page, and clear out old results when a new search is submitted. 


<details><summary>click for simplified hard-coded gif data you could use</summary>

```js
{
  "data": [
    {
      "type": "gif",
      "id": "iuHaJ0D7macZq",
      "url": "http://giphy.com/gifs/cat-day-tomorrow-iuHaJ0D7macZq",
      "source": "https://www.reddit.com/r/CatGifs/comments/5f0h9a/tomorrow_is_legs_day/",
      "rating": "pg",
      "images": {
        "fixed_height": {
          "url": "http://media4.giphy.com/media/iuHaJ0D7macZq/200.gif"
        }
      }
    },
    {
      "type": "gif",
      "id": "Z1kpfgtHmpWHS",
      "url": "http://giphy.com/gifs/cat-way-make-Z1kpfgtHmpWHS",
      "source": "http://shewhoseeks.blogspot.com/2016/03/cat-gifs-that-make-me-laugh-way-more.html",
      "rating": "g",
      "images": {
        "fixed_height": {
          "url": "http://media4.giphy.com/media/Z1kpfgtHmpWHS/200.gif"
        }
      }
    }
  ],
  "meta": {
    "status": 200,
    "msg": "OK"
  },
  "pagination": {
    "total_count": 1947,
    "count": 25,
    "offset": 0
  }
}
```

</details>


## Bonus


### Step 7: Search the Giphy API

- With the API we're using, you need to register for an API key, but luckily, it is free. You will find this is the case for many free to use APIs. Go ahead and look at the [documentation](https://github.com/Giphy/GiphyAPI) to determine the API's proper usage.
- We're going to be searching the giphy API based on a word or phrase to return a collection of results.
- Load in jQuery, and use it to make an HTTP request to the API search endpoint using the user's query.
- Pass the data to the Results component to be displayed.

### Step 8: Add Styles to your React app

- Load in Bootstrap CDN in `index.html`.
- Modify UI to include Bootstrap classes.
- Create a `styles` directory and make a file for your CSS rule definitions - this will be written in Javascript!.
- Load in that file in any component and then use that to apply inline styling.

### Step 9: Add a single result detail component

- Create a `Details` component that renders information about a single gif.
- When a user clicks on a  gif in the results view, render the detail UI.
