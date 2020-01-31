import React, { Component } from 'react'
import './App.css';
import ContactList from './components/ContactList/ContactList'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class App extends Component {
  render() {
    return (
      <div className="container-fluid row"> 
        <ContactList />
      </div>
    )
  }
}
