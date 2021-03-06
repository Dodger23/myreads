import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf'
import Search from './Search'
import { Switch , Route, Link } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: [],
    matchedBooks: [],
  }


  /**
  * @description Gets all books from the API after the component rendered and put them in the state
  * @constructor
  */
  componentDidMount() {
    BooksAPI.getAll()
      .then(allBooks => this.setState({
        books: allBooks
      }));
  }

  /**
  * @description Checks if the user changed a book's shelf to rerender the main component
  * @param {object} nextState: The new state
  * @constructor
  */
  shouldComponentUpdate(nextState) {
    return this.state.books !== nextState.books;
  }

  component
  /**
  * @description Updates the book shelf in the database 
  * @constructor
  * @param {string} id - The id of the book
  * @param {string} shelf - The clicked book new shelf
  */
  updateShelvesInDB(id, shelf) {
    BooksAPI.update(id, shelf);
  }
  
  /**
  * @description Updates the book shelf in the state
  * @constructor
  * @param {string} id - The id of the book
  * @param {string} newShelf - The new shelf of the book 
  */
  updateShelfInState(id, newShelf) {
  
    let newBooks = [...this.state.books];

    newBooks.forEach(book => {
      if (book.id === id) {
        book.shelf = newShelf;
      }
    })

    this.setState({
      books: [...newBooks],
    })
  }
  
  /**
  * @description Handles the changing of a specific book shelf
  * @constructor
  * @param {string} id - The id of the book
  * @param {object} event - The clicked book event
  */
  handleChangeShelf(id, event) {

    let newShelf = event.target.value;

    this.updateShelfInState(id, newShelf);
    
    this.updateShelvesInDB(id, newShelf);

  }

  /**
  * @description Searched books by query text form the BooksAPI and sets them in the state matchedBooks to be represented
  * @constructor
  * @param {object} event - The search input field chanfed value event
  */
  queryBooks(event) {
    if (event.target.value !== "")
    {
      BooksAPI.search(event.target.value)
      .then(res => this.setState({
        matchedBooks: res.length > 0 ? res : [],
      }))
    }
    else {
      this.setState({
        matchedBooks: [],
      })
    }
    
  }

  render() {

    return (
      <div className="app">
      <Switch>

        <Route exact path="/">
            <div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
            <div className="list-books-content">
              
              <div>
                  <BookShelf
                    shelfTitle= "Currently Reading"
                    books={this.state.books.filter(book => book.shelf === "currentlyReading")}
                    chnageShelf={(id , event)=> this.handleChangeShelf(id , event)} />
                  
                  <BookShelf
                    shelfTitle="Want to read"
                    books={this.state.books.filter(book => book.shelf === "wantToRead")}
                    chnageShelf={(id , event)=> this.handleChangeShelf(id , event)}/>
                  
                  <BookShelf
                    shelfTitle="Read"
                    books={this.state.books.filter(book => book.shelf === "read")}
                    chnageShelf={(id , event)=> this.handleChangeShelf(id , event)} />
              </div>
              
            </div>
              
            <div className="open-search">
                <Link to="/search">
                  <button>Add a book</button>
                </Link>
            </div>
            
          </div>
        </Route>

        <Route path="/search">
            <Search
              queryBooks={(event) => this.queryBooks(event)}
              books= {this.state.books}
              matchedBooks={this.state.matchedBooks}
              chnageShelf = {(id , event) => this.handleChangeShelf(id , event) } />
        </Route>
        
      </Switch>
      
        
      </div>
    )
  }
}

export default BooksApp
