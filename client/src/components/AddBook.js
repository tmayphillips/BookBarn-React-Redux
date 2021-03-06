import React, {Component} from 'react'
import { UncontrolledAlert } from 'reactstrap'
import {BookList} from './BookList'
import { Button, Input } from 'reactstrap'
import { connect } from 'react-redux'
import { incCounter, decCounter, addNewBook } from '../store/actions/actionCreators'


export class AddBook extends Component {

  constructor() {
    super()
    this.state = {
      title: '',
      genre: '',
      publisher: '',
      year: '',
      imageURL: '',
      books: [],
      visible: false
    }
    this.onDismiss = this.onDismiss.bind(this)
  }

  onDismiss() {
    this.setState({ visible: false })

  }

  handleAddBookTextBox = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleAddBookSubmit = (e) => {

    fetch('http://localhost:8080/api/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: this.state.title,
        genre: this.state.genre,
        publisher: this.state.publisher,
        year: this.state.year,
        imageURL: this.state.imageURL
      })
    })
    this.setState({ visible: true })
    setTimeout(() => this.props.history.push('/view-all-books'),1000)
    e.preventDefault()
  }


  render() {
    return(
      <div>
        <h1>Add New Books</h1>
        <form onSubmit = {this.handleAddBookSubmit}>
          <Input type="text" onChange={this.handleAddBookTextBox} placeholder="Title" name="title" />
          <Input type="text" onChange={this.handleAddBookTextBox} placeholder="Genre" name="genre" />
          <Input type="text" onChange={this.handleAddBookTextBox} placeholder="Publisher" name="publisher" />
          <Input type="text" onChange={this.handleAddBookTextBox} placeholder="Year" name="year" />
          <Input type="text" onChange={this.handleAddBookTextBox} placeholder="Image URL" name="imageURL" />
          <Button color="danger" type="submit">Save</Button>
          <UncontrolledAlert color="info" isOpen={this.state.visible}>
            The book has been added!
          </UncontrolledAlert>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ctr: state.ctr.counter, // this.props.ctr (ctr = counter)
    books: state.books.books
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch(incCounter()),
    onDecrementCounter: () => dispatch(decCounter()),  // this.props.onIncrementCounter
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddBook)
