import React from 'react';


interface YoutubeItemProps{
  thumbnail:string;
}
const YoutubeItem= ({thumbnail}:YoutubeItemProps) => {
  return (
    <button className="">
      <img src={thumbnail} width={410} />
    </button>

  
  )
}

export default YoutubeItem;