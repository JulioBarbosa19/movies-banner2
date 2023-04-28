import React from 'react'
import { CarouselMovies } from '../Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import { MainLayout } from './style';

const Main = () => {
  return (
    <MainLayout>
        <CarouselMovies />
    </MainLayout>
  )
}

export default Main;