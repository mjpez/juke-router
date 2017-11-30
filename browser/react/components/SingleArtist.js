import React, { Component } from 'react';
import axios from 'axios';
import AllArtists from './AllArtists'
import AllAlbums from './AllAlbums';
import Songs from './Songs'
import { Link, Route, HashRouter, Switch } from 'react-router-dom'

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
    console.log(this.props)
    const artist = this.state.artist; // or however you've named it

    return (
      <div>
        <h3>{artist.name}</h3>
        <ul className="nav nav-tabs">
          <li><Link to={'/artists/' + artist.id + '/albums'}>ALBUMS</Link></li>
          <li><Link to={'/artists/' + artist.id + '/songs'}>SONGS</Link></li>
        </ul>
        <Switch>
          <Route path={this.props.location.pathname + '/albums'} render={() => (<AllAlbums albums={this.state.artistAlbums} />)} />
          <Route path='/artists/:artistId/songs' render={() => <Songs songs={this.state.artistSongs} />} />
        </Switch>
        </div>
    );
  }
}
