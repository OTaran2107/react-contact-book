import React, { Component } from 'react'
import './App.css';
import { contacts } from './data'
import ContactBook from './components/ContactBook'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class App extends Component {
  state = {
    contactList: contacts
  };

  render() {
    return (
      <div className="container-fluid">
        <h2 className="text-center">Contact Book</h2>
        <ContactBook list={this.state.contactList} />
      </div>
    )
  }
}