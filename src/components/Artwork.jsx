import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import artworkQueries from '../queries/artworkQueries'

class Artwork extends Component {
  render() {
    if (this.props.data.loading) {
      return (<p>Loading!</p>)
    } else {
      const artwork = this.props.data.artwork

      return (
        <div>
          <h1>{artwork.title[0].text}</h1>
        </div>
      )
    }
  }
}

export default graphql(
  artworkQueries.artworkById,
  {
    options: (props) => ({
      variables: {
        id: props.match.params.id
      }
    })
  }
)(Artwork)
