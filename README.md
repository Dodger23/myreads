# MyReads Project

This is a practice project on React from the Udacity Nanodegree  where you can categorize books on "shelves" of ["currently raeding", "want to read" or "read"].
You can also search new books and add them to your shelves.

## TL;DR

To get started:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── Book.js # A component that holds a book
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── BookShelf.hs # A component that holds the books in a shelf    
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
    ├── Search.js # A component that holds the search page
    └── Rate.js # A component that holds the rating 
```

## Tasks
#### The main page
- [x] Show three categories (or "bookshelves")
    - currently reading
    - want to read
    - read
- [x] Allow users to move books between shelves
- [x] Keeps information presist between page refreshes

#### The serach page
- [x] Have a search input that lets users search for books
- [x] Search results allow a user to categorize a book as
    - currently reading
    - want to read
    - read
- [x] Selections made on the search page show up on the main page

#### Routing
- [x] Main page links to search page
- [x] Search page links to main page

#### Code functionality
- [x] Project code handles state management appropiately
- [x] Code runs without errors
- [x] Code is free of warnings that resulted from not following the best practices listed in the documentation


## Extra Work
- [x] Show rating for the books


## Backend Server

The file [`BooksAPI.js`](src/BooksAPI.js) contains the methods will be needed to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(id, shelf)
```

* id: `<string>` containing the id of the book
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
