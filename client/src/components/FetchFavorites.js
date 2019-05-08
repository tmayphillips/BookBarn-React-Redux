import React, { Component } from 'react'

class FetchFavorites extends Component {
  constructor() {
    super()
    this.state = {
      booksOwn: []
    }
  }

  componentDidMount() {
    let url = 'http://localhost:8080/api/favorites'
    fetch(url)
    .then(response => response.json())
    .then(json => {
      console.log(json);
      let booksOwn = json.bookList.map((book) => {
        return (
          <div key={book.bookid}>
            <img src={book.bookurl}/>
            <p>{book.booktitle}</p>

          </div>
        )
      })
      this.setState({booksOwn: booksOwn})
      console.log("state", this.state.booksOwn);


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

export default FetchFavorites
