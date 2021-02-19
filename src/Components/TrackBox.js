import React, { useState, useEffect } from 'react'
import { Image } from 'semantic-ui-react'
import Track from './Track.js'
import TrackThumbnail from './TrackThumbnail.js'

const TrackBox = (props) => {

    const clicked = (event) => {
    event.preventDefault()
    props.clicked(event.target.id)
    }
    
  return(

    <div className="track-container-main">
        <div className="track-container-row"> 
            <Image.Group style={{ width: '900px' }}>
                {
                    props.items.map((item, index) => {
                        return <TrackThumbnail index={ index } key={ item.track.id } id={ item.track.id } name={item.track.name} clicked={ clicked } image={item.track.album.images[1].url} />
                    })
                }
            </Image.Group>  
        </div>

        <div className="track-container-row">
            {props.selectedTrack ? <Track selectedTrack={props.selectedTrack} postFavorite={props.postFavorite}/> : null }
        </div>

    </div>

    )

}

export default TrackBox