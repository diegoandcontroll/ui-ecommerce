/* eslint-disable react/no-unknown-property */
'use client'
import React, { useRef, useState } from 'react'
import { FaPause, FaPlay } from 'react-icons/fa'

interface AudioPlayerProps {
  audioUrl: string
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioUrl }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
        audioRef.current.currentTime = 0
        audioRef.current.volume = 0
      } else {
        audioRef.current.volume = 0.1
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div>
      {!isPlaying ? (
        <FaPlay onClick={togglePlay} className="w-3 h-5 hover:text-green-300" />
      ) : (
        <FaPause
          onClick={togglePlay}
          className="w-3 h-5 hover:text-green-300"
        />
      )}
      <audio ref={audioRef} src={audioUrl} />
    </div>
  )
}

export default AudioPlayer
