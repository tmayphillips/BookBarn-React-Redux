import React, {Component} from 'react'

export class UpdateBook extends Component {

  constructor() {
    super()
    this.state = {
      title: '',
      genre: '',
      publisher: '',
      year: '',
      imageURL: '',
      books: [],
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

  handleUpdateBook = (alterBook) => {
    fetch('http://localhost:8080/api/updateBook', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        alterBook: alterBook,
        title: this.state.title,
        genre: this.state.genre,
        publisher: this.state.publisher,
        year: this.state.year,
        imageURL: this.state.imageURL
      })
    })
  }

  handleAddBookTextBox = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
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
    let alterBook = this.props.match.params.id
    let bookItems = books.map((book,index) => {
      if (book.title == alterBook) {
        return (
          <div>
            <li key={index}>
              <h3>Title: <input name="title" onChange={this.handleAddBookTextBox} placeholder={book.title}></input></h3>
              <h5>Genre: <input name="genre" onChange={this.handleAddBookTextBox} placeholder={book.genre}></input></h5>
              <h5>Publisher: <input name="publisher" onChange={this.handleAddBookTextBox} placeholder={book.publisher}></input></h5>
              <h5>Year: <input name="year" onChange={this.handleAddBookTextBox} placeholder={book.year}></input></h5>
              <button onClick={() => this.handleUpdateBook(alterBook)}>Update</button>
            </li>
          </div>
        )
      }
    })

    return (
      <div>
        <h1>Update Book</h1>
        <ul>{bookItems}</ul>
      </div>
    )
  }
}
