import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Button, Input, UncontrolledAlert } from 'reactstrap'
import * as actionCreators from '../store/actions/actionCreators'

class Search extends Component {

  constructor() {
    super()
    this.state = {
      searchTerm: '',
      bookID: '',
      Alerts: [
        {visible: false},
        {visible: false},
        {visible: false},
        {visible: false},
        {visible: false},
        {visible: false},
        {visible: false},
        {visible: false},
        {visible: false},
        {visible: false}
      ]
    }
    this.onDismiss = this.onDismiss.bind(this)
  }

  onDismiss(index) {
    this.setState({ visible: false })
  }

  handleAddBookTextBox = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmitSearch = (e) => {
    this.props.onBookFetched(this.state.searchTerm)
  }

  handleAddOwn = (singleBook,index) => {
    fetch('http://localhost:8080/api/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        bookID: singleBook
      })
    })
    this.changeActive(index)
  }

  handleAddFavorites = (singleBook,index) => {
    fetch('http://localhost:8080/api/favorites', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        bookID: singleBook
      })
    })
    this.changeActive(index)
  }

  handleAddWishlist = (singleBook,index) => {
    fetch('http://localhost:8080/api/wishlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        bookID: singleBook
      })
    })
    this.changeActive(index)
  }

  changeActive(index) {
    var alertArray = this.state.Alerts;
    for (var i = 0; i < this.state.Alerts.length; i++) {
      let visible = !alertArray[i].visible;
      if (index - 1 === index) {
        alertArray[i].visible = false;
      } else {
        alertArray[i].visible = true;
      }
    }
    this.setState({Alerts : alertArray});
  }


  render() {
    let books = this.props.bookList
    let bookItems = books.map((book,index) => {
      console.log(book);
      return (
        <div key={index}>
          <img src={book.volumeInfo.imageLinks.smallThumbnail} />
          <li>{book.volumeInfo.title}</li>
          <Button color="info" onClick={() => this.handleAddOwn(book.id,index)} type="button">Own It</Button>
          <Button color="info" onClick={() => this.handleAddFavorites(book.id)} type="submit">Favorites</Button>
          <Button color="info" onClick={() => this.handleAddWishlist(book.id)} type="submit">Wishlist</Button>
          <Button color="info" onClick={() => this.handleDetails(book.id)} type="submit">Details</Button>
          {/*<UncontrolledAlert color="info" isOpen={this.state.Alerts[index].visible} >
            The book has been added!
          </UncontrolledAlert>*/}
        </div>
      )
    })

    return(
      <div>
        <h1>Search Books</h1>
          <Input type="text" onChange={this.handleAddBookTextBox} placeholder="Search Title" name="searchTerm" />
          <Button color="danger" type="submit" onClick={this.handleSubmitSearch}>Search</Button>
          <ul>{bookItems}</ul>

      </div>
    )
  }
}

  const mapStateToProps = (state) => {
    return {
      //bookList: state.books.filter(p => p.userId == 1)
      bookList: state.booksReducer.books,
      searchTerm: state.booksReducer.searchTerm
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      onBookFetched: (searchTerm) => dispatch(actionCreators.bookFetched(searchTerm))
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Search)
