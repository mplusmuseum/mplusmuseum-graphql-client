import React, { Component } from 'react'

import ArtworksList from './components/ArtworksList'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">M+ Collection Spelunker</h1>
          <h3>A work in progress</h3>
        </header>
        <ArtworksList />
      </div>
    )
  }
}

export default App
