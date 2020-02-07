import React, { Component } from 'react'
import './App.css';
import ContactManager from './components/ContactManager/ContactManager'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class App extends Component {
  render() {
    return (
      <div className="container-fluid row"> 
        <ContactManager />
      </div>
    )
  }
}
