import React, { Component } from 'react';
// import AllAlbums from './AllAlbums';
import StatefulAlbums from './StatefulAlbums'
import SingleAlbum from './SingleAlbum';
import AllArtists from './AllArtists'
import Sidebar from './Sidebar';
import Player from './Player';
import { HashRouter, Route, Link, Switch } from 'react-router-dom';
import SingleArtist from './SingleArtist';

export default class Main extends Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <HashRouter>
        <div id="main" className="container-fluid">
          <div className="col-xs-2">
            <Sidebar deselectAlbum={this.deselectAlbum} />
          </div>
          <div className="col-xs-10">
              <Route exact path='/albums/:albumId' component={SingleAlbum} />
              <Route exact path='/albums' component={StatefulAlbums} />
              <Route exact path='/artists/:artistId' component={SingleArtist} />
              <Route exact path='/artists' component={AllArtists} />
              <Route exact path='/' component={StatefulAlbums} />
          </div>
          <Player />
        </div>
      </HashRouter>
    );
  }
}

/* {
  this.state.selectedAlbum.id ?
  <SingleAlbum album={this.state.selectedAlbum} /> :
  <AllAlbums albums={this.state.albums} selectAlbum={this.selectAlbum} />
} */
