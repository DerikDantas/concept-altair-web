import React from 'react'
import { Container } from "./styles";

import iconUM from '../../assets/images/setting-config.png'
import iconDois from '../../assets/images/Vector (Stroke).png'
import iconTres from '../../assets/images/box.png'
import iconQuatro from '../../assets/images/speed-one.png'


function PromoDois() {
    return(
        <Container>
            <div class="container">
                <div class="row">
                    <div class="col-sm-3 col-xs-6 colunas-promo" data-aos="fade-down-right" data-aos-duration="1000" data-aos-once="true">
                        <img src={iconUM} alt="..." />
                        <p class="icon-1" >CUSTOMIZABLE <br/>AS F#!%</p>
                        <p>Praesent vulputate nisi sapien, ac lacinia nulla posuere sit.</p>
                    </div>
                    <div class="col-sm-3 col-xs-6 colunas-promo" data-aos="fade-down" data-aos-duration="1000" data-aos-once="true">
                        <img src={iconDois} alt="..." />
                        <p class="icon-2">UP TO 12 <br/>INSTALLMENTS</p>
                        <p>Praesent vulputate nisi sapien, ac lacinia nulla posuere sit.</p>
                    </div>
                    <div class="col-sm-3 col-xs-6 colunas-promo" data-aos="fade-down" data-aos-duration="1000" data-aos-once="true">
                        <img src={iconTres} alt="..." />
                        <p class="icon-3">SHIPMENTS ARE <br/>SO FAST!</p>
                        <p>Praesent vulputate nisi sapien, ac lacinia nulla posuere sit.</p>
                    </div>
                    <div class="col-sm-3 col-xs-6 colunas-promo" data-aos="fade-down-left" data-aos-duration="1000" data-aos-once="true">
                        <img src={iconQuatro} alt="..." />
                        <p class="icon-4">FAST & RELIABLE <br/>TECH SERVICE</p>
                        <p>Praesent vulputate nisi sapien, ac lacinia nulla posuere sit.</p>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default PromoDois;