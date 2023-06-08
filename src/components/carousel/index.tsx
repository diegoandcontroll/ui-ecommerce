/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { useEffect, useState } from 'react'

const Carousel = () => {
  const images = ['/background.jpg']
  const [currentImage, setCurrentImage] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {images.map((image: string, index: number) => (
        <img
          key={index}
          src={image}
          style={{ objectFit: 'cover' }}
          alt={`Image ${index}`}
          className={`absolute w-full h-screen transition-opacity duration-500 mix-blend-color-burn brightness-150 backdrop-brightness-200 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </>
  )
}

export default Carousel
