import React, { Component } from 'react'
// import { graphql } from 'react-apollo'
// import gql from 'graphql-tag'

class ArtworksListItem extends Component {
  render() {
    return (
      <li>{this.props.title}</li>
    )
  }
}

export default ArtworksListItem
