import React, { useContext } from "react";
import { GalleryContext } from "./GalleryContext";

const FavoritesModal = () => {
  const { favorites, toggleFavorite, closeModal } = useContext(GalleryContext);

  return (
    <div className="modal show d-block" onClick={closeModal}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Favorite Images</h5>
            <button type="button" className="btn-close" onClick={closeModal}></button>
          </div>
          <div className="modal-body">
            <div className="container">
              <div className="row">
                {favorites.length > 0 ? favorites.map((image) => (
                  <div key={image.id} className="col-md-4 position-relative mb-4">
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
                )) : <p>No favorites yet!</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoritesModal;