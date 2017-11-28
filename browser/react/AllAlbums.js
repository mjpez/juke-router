import React from 'react'

class AllAlbums extends React.Component{
  render(){
    return (
        {this.state.albums.map((album, i) => {
          return (
            <div key={i} className="col-xs-4">
              <a className="thumbnail" href="#">
                <img src={album.imageUrl} />
                <div className="caption">
                  <h5>
                    <span>{album.name}</span>
                  </h5>
                  <small> {album.songs.length} songs</small>
                </div>
              </a>
            </div>)
          })
        }
    )
  }
}

export default AllAlbums
