import React from 'react'
import ReactDOM from 'react-dom'
import {render} from 'react-dom'
import {transitions, positions, Provider as AlertProvider } from 'react-alert'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import BaseLayout from './components/BaseLayout'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {AddBook} from './components/AddBook'
import {BookList} from './components/BookList'
import {BookDetails} from './components/BookDetails'
import Register from './components/Register'
import Login from './components/Login'
import Search from './components/Search'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import counterReducer from './store/reducers/counter'
import booksReducer from './store/reducers/books'
import reducer from './store/reducers/reducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { setAuthenticationHeader } from './utils/authenticate'
import requireAuth from './components/requireAuth'

const rootReducer = combineReducers({
  ctrReducer: counterReducer,
  booksReducer: booksReducer,
  reducer: reducer
})

// composeEnhancers is only for debugging purposes
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,composeEnhancers(
    applyMiddleware(thunk)
  ))

setAuthenticationHeader(localStorage.getItem('jsonwebtoken'))


ReactDOM.render(
  <Provider store = {store}>
    <BrowserRouter>
      <BaseLayout>
        <Switch>
          <Route path="/view-all-books" exact component={BookList} />
          <Route path="/books/details/:id" component={BookDetails} />
          <Route path="/" exact component={App} />
          <Route path="/books/search" exact component={Search} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
        </Switch>
      </BaseLayout>
    </BrowserRouter>
  </Provider>

  ,document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
