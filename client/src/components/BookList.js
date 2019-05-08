import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import FetchOwn from './FetchOwn'

export class BookList extends Component {

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
  render() {
    return (
      <div>
        <h1>Book List</h1>
        <FetchOwn />
      </div>
    )
  }
}
