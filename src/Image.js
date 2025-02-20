import React, { useContext } from 'react';
import { GalleryContext } from './GalleryContext';

const Image = ({ image }) => {
  const { toggleFavorite} = useContext(GalleryContext);

  return (
    <div className="image-container">
      <div className='image-div'>
        <div className='col-md-4 position-relative mb-4 w-100'>
          <img src={image.src} alt={`${image.id}`}
            className='img-fluid'
            style={{ height: "250px", objectFit: "cover", width: "100%" }} />

          <button
            onClick={() => toggleFavorite(image.id)}
            className={`position-absolute top-0 end-0 btn ${image.isFavorite ? "btn-danger" : "btn-light"}`}
            style={{ margin: "10px" }}
          >
            ❤️
          </button>
        </div>
      </div>
    
    </div>
  );
};

export default Image;