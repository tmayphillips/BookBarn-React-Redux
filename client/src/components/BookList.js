import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export class BookList extends Component {

  constructor() {
    super()
    this.state = {
      title: '',
      genre: '',
      publisher: '',
      year: '',
      imageURL: '',
      books: [],
      book: ''
    }
  }

  componentDidMount() {
    let url = 'http://localhost:8080/api/books'
    fetch(url)
    .then(response => response.json())
    .then(json => {
      this.setState({
        books: json
      })
    })
  }

  handleDeleteBook = (bookID) => {
    fetch('http://localhost:8080/api/deleteBook', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        bookID: bookID
      })
    })
  }

  handleUpdateBook = (book) => {
    this.props.history.push(`/update-books/${alterBook}`)
  }

  render() {
    let url = 'http://localhost:8080/api/books'
    fetch(url)
    .then(response => response.json())
    .then(json => {
      this.setState({
        books: json
      })
    })

    let books = this.state.books
    let bookItems = books.map((book,index) => {
      let alterBook = book
      return (
        <div>
          <li key={index}>
            <img src={book.bookURL} />
            <h3>Title: {book.bookTitle}</h3>
            <button onClick={() => this.handleDeleteBook(book.bookID)}>Delete</button>
            <button onClick={() => this.handleUpdateBook(book.bookID)}>Update</button>
            <button><Link to='/books/${book.bookID}'>Book Detail</Link></button>
          </li>
        </div>
      )
    })

    return (
      <div>
        <h1>Book List</h1>
        <ul>{bookItems}</ul>
      </div>
    )
  }
}
