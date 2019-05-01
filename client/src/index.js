import React from 'react'
import ReactDOM from 'react-dom'
import {render} from 'react-dom'
import {transitions, positions, Provider as AlertProvider } from 'react-alert'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import {BaseLayout} from './components/BaseLayout'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {AddBook} from './components/AddBook'
import {BookList} from './components/BookList'
import {UpdateBook} from './components/UpdateBook'
import {BookDetail} from './components/BookDetail'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createStore } from 'redux'
import rootReducer from './store/reducer'
import { Provider } from 'react-redux'
import { devToolsEnhancer } from 'redux-devtools-extension'

const store = createStore(rootReducer, /* preloadedState, */
  devToolsEnhancer(
    // Specify custom devTools options
  ))

ReactDOM.render(
  <Provider store = {store}>
  <BrowserRouter>
  <BaseLayout>
    <Switch>
      <Route path="/view-all-books" component={BookList}/>
      <Route path="/add-book" component={AddBook} />
      <Route path="/update-books/:id" component={UpdateBook}/>
      <Route path="/" exact component={App} />
      <Route path="/books/:bookId" component={BookDetail}/>
    </Switch>
  </BaseLayout>
  </BrowserRouter>
  </Provider>

  ,document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
