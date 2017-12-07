import React, { Component } from 'react'

import { Link, Switch, Route } from 'react-router-dom'

import ArtworksList from './components/ArtworksList'
import Artwork from './components/Artwork'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">M+ Collection Spelunker</h1>
          <h3>A work in progress</h3>
        </header>
        <nav>
          <Link to="/collection">Collection</Link>
        </nav>
        <div>
          <Switch>
            <Route exact path="/collection" component={ArtworksList} />
            <Route path="/collection/objects/:id" component={Artwork} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
