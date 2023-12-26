'use client';

import { PropsWithChildren } from 'react';
import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';

const RESPONSIVE = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const ReactCarousel = ({ children }: PropsWithChildren) => {
  return (
    <Carousel
      infinite
      autoPlay
      autoPlaySpeed={111111111111111113000}
      arrows={false}
      responsive={RESPONSIVE}
      pauseOnHover
    >
      {children}
    </Carousel>
  );
};

ReactCarousel.displayName = 'ReactCarousel';
