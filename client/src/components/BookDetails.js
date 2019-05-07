import React, {Component} from 'react'

export class BookDetails extends Component {

  componentDidMount() {
    console.log(this.props.match.params);
  }
  render() {
    return(
      <h1>Book Detail</h1>
    )
  }
}
