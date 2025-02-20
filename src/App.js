import React from 'react';
import GalleryApp from './GalleryApp';
import { GalleryProvider } from './GalleryContext';

function App(){
  return(

  <GalleryProvider>
    <GalleryApp />
  </GalleryProvider>

)
}
export default App