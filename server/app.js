const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const jwt = require('jsonwebtoken')
const sequelize = require('sequelize')
const bcrypt = require('bcrypt')
const models = require('./models')
const PORT = 8080

app.use(cors())
app.use(bodyParser.json())
app.use(express.static('public'))

let books = []
let favorites = []
let wishlist = []

app.post('/api/books',(req,res) => {
  let userID = req.body.userID
  let bookID = req.body.bookID
  let bookTitle = req.body.bookTitle
  let bookURL = req.body.bookURL

  books.push({userID: userID, bookID: bookID, bookTitle: bookTitle, bookURL: bookURL})
  res.json({message: 'Book added successfully'})
})

app.get('/api/books',(req,res) => {
  res.json(books)
})

app.post('/api/favorites',authenticate,(req,res) => {
  let bookID = req.body.bookID

  favorites.push({bookID: bookID})
  res.json({message: 'Book added successfully'})
})

app.get('/api/favorites',authenticate,(req,res) => {
  res.json(favorites)
})

app.post('/api/wishlist',authenticate,(req,res) => {
  let bookID = req.body.bookID

  wishlist.push({bookID: bookID})
  res.json({message: 'Book added successfully'})
})

app.get('/api/wishlist',(req,res) => {
  res.json(wishlist)
})

app.post('/api/deleteBook',(req,res) => {
  console.log("Delete Book");
  let bookID = req.body.bookID
  console.log(bookID);
  console.log(books);

  books = books.filter((book) => {
    return book.id != bookID
  })
  console.log(books);
  res.json(books)
})

app.post('/api/deleteFavorite',authenticate,(req,res) => {
  console.log("Delete Favorite Book");
  let alterFavorite = req.body.alterBook
  console.log(alterFavorite)

  favorites = favorites.filter((favorite) => {
    return favorite.title != alterFavorite
  })
  res.json(favorites)
})

app.get('/api/deleteFavorite',authenticate,(req,res) => {
  res.json(favorites)
})

app.post('/api/deleteWishlist',authenticate,(req,res) => {
  console.log("Delete Wishlist Book");
  let alterWishlist = req.body.alterBook
  console.log(alterWishlist)

  wishlist = wishlist.filter((book) => {
    return booke.title != alterWishlist
  })
  res.json(wishlist)
})

app.get('/api/deleteWishlist',authenticate,(req,res) => {
  res.json(wishlist)
})

app.get('/books/:bookId',(req,res) => {
  let bookId = req.params.bookId
})

app.post('/login',(req,res) => {
  let username = req.body.username
  let password = req.body.password

  models.User.findOne({
  where: {
    username: username,
  }
})
.then(function(user) {
  if (user == null) {
    console.log("user does not exist")
    res.redirect('/login')
  }
  else {
    bcrypt.compare(password, user.password, function(err, result) {
      if(result) {
        if(user) {
          jwt.sign({ userID: user.id},
          'secret',
          function(err, token) {
            if(token) {
              res.json({token: token, userID: user.id})
            } else {
              res.status(401).json({message: 'Unable to generate token'})
            }
          })
        }
      }
    })
  }
})
})

app.post('/register',(req,res) => {
  console.log("register post started");
  let username = req.body.username
  let password = req.body.password

  console.log("username and password assigned");

  bcrypt.hash(password, 6, function(err, hash) {
    let user = {
      username : username,
      password : hash
    }

    console.log("bcrypt user created");
    models.User.create(user).then(user => {
      console.log("model created");
      console.log(user)
    })
  })
})

app.get('/register',(req,res) => {
  res.status(200).send()
})

function authenticate(req,res,next) {
  let headers = req.headers['authorization']
  let token = headers.split(' ')[1]
  console.log(token)
  jwt.verify(token,'secret',(err,decoded) => {
    if(decoded) {
      if(decoded.username) {
        next()
      } else {
        res.status(401).json({message: 'Token Invalid'})
      }
    } else {
      res.status(401).json({message: 'Token Invalid'})
    }
    console.log(decoded);
  })
}


app.listen(PORT,() => {
  console.log('Server is running')
})
