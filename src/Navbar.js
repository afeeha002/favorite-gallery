import React, { useContext } from 'react';
import { GalleryContext } from './GalleryContext';

const Navbar = () => {
  const { favorites, openModal} = useContext(GalleryContext);
    

    return (
        <nav class="navbar bg-body-tertiary">
            <div class="container-fluid">
                <span class="navbar-brand mb-0 h1">Gallary App</span>
                <button type="button" className="btn btn-outline-danger" onClick={openModal}>
                ❤️ Favorites <span className="badge text-bg-danger">({favorites.length})</span>
                </button>
            </div>
        </nav>
    )
}

export default Navbar
