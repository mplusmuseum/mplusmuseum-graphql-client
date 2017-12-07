import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ArtworksListItem extends Component {
  render() {
    return (
      <li><Link to={`/collection/objects/${this.props.id}`}>{this.props.title}</Link></li>
    )
  }
}

export default ArtworksListItem
