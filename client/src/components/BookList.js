import React, {Component} from 'react'
import {Link, NavLink} from 'react-router-dom'

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

  handleDeleteBook = (alterBook) => {
    fetch('http://localhost:8080/api/deleteBook', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        alterBook: alterBook
      })
    })
  }

  handleUpdateBook = (alterBook) => {
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
            <h3>Title: {book.title}</h3>
            <h5>Publisher: {book.publisher}</h5>
            <h5>Year: {book.year}</h5>
            <button onClick={() => this.handleDeleteBook(alterBook.title)}>Delete</button>
            <button onClick={() => this.handleUpdateBook(alterBook.title)}>Update</button>
            <button><Link to='/books/${alterBook.title}'>Book Detail</Link></button>
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
