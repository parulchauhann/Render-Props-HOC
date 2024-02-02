import React from 'react'

export default function LikeImage(props) {
  return (
    <div>
        <button onClick={props.handleImageCount}>Like Image {props.LikeImageCounter}</button>
    </div>
  )
}

