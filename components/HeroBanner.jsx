import React from 'react';
import Link from 'next/link';

import Image from '../public/images/img-11.JPG';

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo"></p>
        <h3>prints, gifts, clothes...</h3>
        <h1>Gallery Good</h1>
        <image src='../public/images/img-11.JPG' />
        <div>
          <Link href={`/tutorials`}>
            <button type="button">Jetzt loslegen</button>
          </Link>
          <div className="desc">
            <h5></h5>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner