import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {

  //para renombrar data --> data:image
  const { data:images, loading } = useFetchGifs(category); //desestructuracion

  return (
    <>
      <h3 className='animate__animated animate__fadeIn'> { category } </h3>
      { loading && <p>Loading</p> }

      <div className='card-grid'>
        {
          images.map( img => (
            <GifGridItem
              key = { img.id }
              { ...img }
            />
          ))
        }
      </div>
    </>
  )
}