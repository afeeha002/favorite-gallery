import React, { useState, createContext } from 'react';
import FavoritesModal from './FavoriteModal';

export const GalleryContext = createContext();

export const GalleryProvider = ({ children }) => {
    const [images, setImages] = useState([
        { id: 1, src: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D", isFavorite: false },
        { id: 2, src: "https://media.istockphoto.com/id/2188833375/photo/twilight-background-of-sunset-over-the-tropical-ocean.jpg?s=612x612&w=0&k=20&c=G13iKLr7ubD2WrfLoNiY2XXgOvZO7YuedC5pXrF-oAw=", isFavorite: false },
        { id: 3, src: "https://media.istockphoto.com/id/2185853109/photo/twilight-background-of-sunset-over-the-tropical-ocean.jpg?s=1024x1024&w=is&k=20&c=VeZ5WuYltsw8RHeLX57h5dPyLivMn0xJ1hmyhxoFDR0=", isFavorite: false },
        { id: 4, src: "https://t3.ftcdn.net/jpg/09/46/81/06/360_F_946810623_GQAbziz1yQTSzNskJwZhdkzCxY9OrcZn.jpg", isFavorite: false },
        { id: 5, src: "https://learnandsupport.getolympus.com/sites/default/files/styles/hero_large/public/2023-05/20230331-_3310123-edit-ftsmithphotos.jpg?itok=M4h9TNHW", isFavorite: false },
        { id: 6, src: "https://media.istockphoto.com/id/1161878589/photo/bueatiful-tea-plantation-on-mountain.jpg?s=1024x1024&w=is&k=20&c=wgGafYAVLguIeeNPpU8z7K0ejO0JunU0oec2PtrPMzQ=", isFavorite: false },
        { id: 7, src: "https://media.istockphoto.com/id/1217790835/photo/father-and-son-mtb-mountain-biking-in-the-forest-rear-view.jpg?s=1024x1024&w=is&k=20&c=5rVt0aqJvC_ngflLuGojSfw8JrnbfnOWso4lQruAJuk=", isFavorite: false },
        { id: 8, src: " https://media.istockphoto.com/id/1227389939/photo/caucasian-man-and-girl-biking-through-the-forest-on-a-sunny-spring-afternoon.jpg?s=612x612&w=0&k=20&c=vITclwQu0cwfx95AC2e1JIHdRcqlFXQYR66yCdIQpj0=", isFavorite: false },
        { id: 9, src: "https://media.istockphoto.com/id/184968493/photo/classic-tropical-sunset-between-palm-silhouettes.jpg?s=1024x1024&w=is&k=20&c=JQ6VAtldjpzZTPiPl9NrcNwNvj8aWCTvW2UhVQCL-Aw=", isFavorite: false },
        { id: 10, src: "https://media.istockphoto.com/id/617766804/photo/bicycle-at-sunset.jpg?s=1024x1024&w=is&k=20&c=psmSx1alJYkwZR-SmOQgztbT3yDWiStHlsLY2f0Z2iE=", isFavorite: false },
        { id: 12, src: "https://media.istockphoto.com/id/2153740491/photo/silhouette-palm-leaves-with-sunset-on-the-tropical-beach.jpg?s=612x612&w=0&k=20&c=uf0f5g2vBTR431_W1tKWHR6-ZvTaQXHco8yoBJ33PKw=", isFavorite: false },
        { id: 13, src: "https://media.istockphoto.com/id/2153740491/photo/silhouette-palm-leaves-with-sunset-on-the-tropical-beach.jpg?s=612x612&w=0&k=20&c=uf0f5g2vBTR431_W1tKWHR6-ZvTaQXHco8yoBJ33PKw=", isFavorite: false }



    ]);

    const [favorites, setFavorites] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleFavorite = (id) => {
        setImages(images.map(image =>
            image.id === id ? { ...image, isFavorite: !image.isFavorite } : image
        ));

        const image = images.find(img => img.id === id);
        if (image.isFavorite) {
            setFavorites(favorites.filter(fav => fav.id !== id));
        } else {
            setFavorites([...favorites, image]);
        }
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <GalleryContext.Provider value={{ images, favorites, toggleFavorite, openModal, closeModal, isModalOpen }}>
            {children}
            {isModalOpen && <FavoritesModal />}
        </GalleryContext.Provider>
    );
};