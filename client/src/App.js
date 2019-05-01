import React from 'react';
import './App.css';
import {BookList} from './components/BookList'
import { useAlert } from 'react-alert'
import Alert from './components/Alert'


if (typeof window !== 'undefined') {
    window.React = React;
}

const App = () => {
  const alert = useAlert()

  return (
    <div>
      <h1>Home Page</h1>
    </div>
  )
}

export default App
