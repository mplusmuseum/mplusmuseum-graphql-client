import gql from 'graphql-tag'

const artworkQueries = {
  allArtworks: gql`query {
    artworks {
      id
      tms_id
      title {
        language
        text
      }
    }
  }`,
  artworkById: gql`
    query($id: ID!) {
      artwork(id:$id) {
        id
        tms_id
        title {
          language
          text
        }
      }
    }
  `
}

export default artworkQueries
