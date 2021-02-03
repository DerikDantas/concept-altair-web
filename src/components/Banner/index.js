import React from 'react';
import { Container } from './styles';

import logoBanner from '../../assets/images/Union-banner.png'
import pcBanner from '../../assets/images/computer-banner.png'

function Banner() {
  return(
      <Container>
            <img src={logoBanner} class="logo-fundo"/>
            <img src={pcBanner} class="pc-img" />

            <div class="banner-text">
                <h1>F#!%ING <br/> FAST!</h1>

                <h3>wıth altaır, GO BEYOND POWER!</h3>

                <a href="#">DISCOVER</a>
            </div>
      </Container>
  );
}

export default Banner;