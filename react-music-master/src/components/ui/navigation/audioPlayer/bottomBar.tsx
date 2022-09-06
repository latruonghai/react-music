import React from 'react'
import AudioPlayer from './audioPlayer'

function bottomBar() {
  return (
    <div className="h-24 bg-stone-900 w-full fixed inset-x-0 bottom-0 border-t border-white border-opacity-5 z-50 text-white">
        <AudioPlayer/>
    </div>
  )
}

export default bottomBar