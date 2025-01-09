import React from 'react'
import Image from "next/image";

const PortalScreen = () => {
  return (
    <div>
      <div className="w-full h-[200px] overflow-hidden inline-block">
      <Image
        src="/Banner/iStock-2164382354.jpg"
        alt="Banner"
        layout="fill" // Ensures the image fills the container
        objectFit="cover" // Makes the image cover the container
        objectPosition="top" // Centers the image
      />
      </div>
      cccccc <br/>
    </div>
  )
}

export default PortalScreen