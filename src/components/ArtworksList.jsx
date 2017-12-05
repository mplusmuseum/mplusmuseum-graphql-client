import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import ArtworksListItem from './ArtworksListItem'

const artworksQuery = gql`query { artworks { id, title } }`

class ArtworksList extends Component {
  render() {
    if (this.props.data.loading) {
      return ( <p> Loading! </p> )
    } else {
      return (
        <ul>
          {
            this.props.data.artworks.map((artwork) => {
              return <ArtworksListItem key={artwork.id} title={artwork.title} />
            })
          }
        </ul>
      )
    }
  }
}

export default graphql(artworksQuery)(ArtworksList)
