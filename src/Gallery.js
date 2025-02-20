import React, { useContext } from 'react';
import { GalleryContext } from './GalleryContext';
import Image from './Image';

const Gallery = () => {
  const { images } = useContext(GalleryContext);


  return (
    <div className="gallery d-flex flex-wrap" style={{gap:"30px", padding:"40px", justifyContent: "space-evenly"}}>
      {images.map(image => (
        <Image key={image.id} image={image} />
      ))}
    </div>
  );
};

export default Gallery;