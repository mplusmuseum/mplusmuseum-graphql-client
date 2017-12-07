import React, { Component } from 'react'
import { graphql } from 'react-apollo'

import ArtworksListItem from './ArtworksListItem'

import artworkQueries from '../queries/artworkQueries'

class ArtworksList extends Component {
  render() {
    if (this.props.data.loading) {
      return ( <p> Loading! </p> )
    } else {
      return (
        <ul>
          {
            this.props.data.artworks.map((artwork) => {
              return <ArtworksListItem key={artwork.id} id={artwork.id} title={artwork.title[0].text} />
            })
          }
        </ul>
      )
    }
  }
}

export default graphql(artworkQueries.allArtworks)(ArtworksList)
