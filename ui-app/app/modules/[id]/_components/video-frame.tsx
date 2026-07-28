"use client"

import React from "react"

interface VideoFrameProps {
  videoUrl: string
}

function VideoFrame({ videoUrl }: VideoFrameProps) {
  return (
    <div className="relative aspect-video w-full overflow-hidden">
      {/* <iframe
        className="absolute top-0 left-0 h-full w-full border-0"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1"
        title="Lesson Video Player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      /> */}
      <iframe
        className="absolute top-0 left-0 h-full w-full border-0"
        src="https://www.youtube.com/embed/NisW6Re4DTw?list=PLpARMGb2OWAfUm6w34J0qxG6GV4UeZKHb"
        title="Emet ERP for LGA | Waripanam additional debit and credit changes with authorization"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  )
}

export default VideoFrame
