import React, { Component } from 'react'

class FetchOwn extends Component {
  constructor() {
    super()
    this.state = {
      booksOwn: []
    }
  }

  componentDidMount() {
    let url = 'http://localhost:8080/api/books'
    fetch(url)
    .then(response => response.json())
    .then(json => {
      console.log(json);
      let booksOwn = json.bookList.map((book) => {
        return (
          <div key={book.id}>
            <img src={book.bookurl}/>
            <p>{book.booktitle}</p>
            <button onClick={() => this.handleDeleteBook(book.id)} type="submit">Delete</button>
            <button onClick={() => this.handleBookDetails(book.id)} type="submit">Details</button>
          </div>
        )
      })
      this.setState({booksOwn: booksOwn})
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

  render() {
    return(
      <div>
        {this.state.booksOwn}
      </div>
    )
  }
}

export default FetchOwn
