import React from 'react';
import './App.css';
import {BookList} from './components/BookList'
import { useAlert } from 'react-alert'
import Alert from './components/Alert'
import { Button, Input, UncontrolledAlert } from 'reactstrap'
import Search from './components/Search'
import Category from './components/Category'


if (typeof window !== 'undefined') {
    window.React = React
}

const App = () => {
  const alert = useAlert()

  return (
    <div>
      <Category />
      <Search />

    </div>
  )
}

export default App
