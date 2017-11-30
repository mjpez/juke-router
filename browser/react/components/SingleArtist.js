import React, { Component } from 'react';
import axios from 'axios';
import AllArtists from './AllArtists'
import AllAlbums from './AllAlbums';
import Songs from './Songs'

export default class SingleArtist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      artist: {},
      artistAlbums: [],
      artistSongs: []
    }
  }


  componentDidMount() {
    const artistId = this.props.match.params.artistId;

    axios.get(`/api/artists/${artistId}`)
      .then(res => res.data)
      .then(artist => {
        this.setState({ artist })
        return axios.get(`/api/artists/${artistId}/albums`)
      })
      .then(res => res.data)
      .then(artistAlbums => {
        console.log(artistAlbums)
        this.setState({ artistAlbums })
        return axios.get(`/api/artists/${artistId}/songs`)
      })
      .then(res => res.data)
      .then(artistSongs => {
        this.setState({ artistSongs })
      })
      .catch(console.error);

    // return Promise.all([artist, albums, songs])
    // .then(() => console.log('it works!'))
    // .catch(console.error)

  }

  render() {
    console.log(this.state)
    return (
      <div>
        <h3>{this.state.artist.name}</h3>
        <AllAlbums albums={this.state.artistAlbums} />
        <Songs songs={this.state.artistSongs}/>
      </div>
    )
  }
}
