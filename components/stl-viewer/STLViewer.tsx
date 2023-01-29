import React from 'react'
import { StlViewer } from 'react-stl-viewer'

const url =
  'https://storage.googleapis.com/ucloud-v3/ccab50f18fb14c91ccca300a.stl'

const style = {
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
}

const StlCanvasViewer = () => {
  return (
    <StlViewer
      style={style}
      orbitControls
      shadows
      modelProps={{
        scale: 1.5,
        color: 'blue',
      }}
      showAxes
      url={url}
    />
  )
}

export default StlCanvasViewer
