const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const PORT = 8080

app.use(cors())
app.use(bodyParser.json())

let books = [
  {title: 'Ulysses', genre: 'horror', publisher: 'cable', year: '2001', imageURL: 'https://en.wikipedia.org/wiki/Ulysses_(novel)#/media/File:JoyceUlysses2.jpg'}
]

app.post('/api/books',(req,res) => {
  let title = req.body.title
  let genre = req.body.genre
  let publisher = req.body.publisher
  let year = req.body.year
  let imageURL = req.body.imageURL

  books.push({title: title, genre: genre, publisher: publisher, year: year, imageURL: imageURL})
  res.json({message: 'Book added successfully'})
})

app.get('/api/books',(req,res) => {
  res.json(books)
})


app.post('/api/deleteBook',(req,res) => {
  console.log("Delete Book");
  let alterBook = req.body.alterBook
  console.log(alterBook)

  books = books.filter((book) => {
    return book.title != alterBook
  })
  res.json(books)
})

app.get('/api/deleteBook',(req,res) => {
  res.json(books)
})

app.post('/api/updateBook',(req,res) => {
  console.log("Update Book");
  let alterBook = req.body.alterBook
  let title = req.body.title
  let genre = req.body.genre
  let publisher = req.body.publisher
  let year = req.body.year
  let imageURL = req.body.imageURL
  console.log(alterBook);
  let updatedBooks = books.map((book) => {
    if (book.title == alterBook) {
      if (title == '') {
        book.title = book.title
      }
        else {
        book.title = title
        }
      if (genre == '') {
        book.genre = book.genre
      }
        else {
        book.genre = genre
        }
      if (publisher == '') {
        book.publisher = book.publisher
      }
        else {
        book.publisher = publisher
        }
      if (year == '') {
        book.year = book.year
      }
        else {
        book.year = year
        }
      if (imageURL == '') {
        book.imageURL = book.imageURL
      }
        else {
        book.imageURL = imageURL
        }
    }
    else if (book.title != alterBook.title) {
      book.title = book.title
      book.genre = book.genre
      book.publisher = book.publisher
      book.year = book.year
      book.imageURL = book.imageURL
    }
  })
  res.json(updatedBooks)
})

app.get('/books/:bookId',(req,res) => {
  let bookId = req.params.bookId
})

app.listen(PORT,() => {
  console.log('Server is running')
})
