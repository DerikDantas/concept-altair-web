import React from 'react'
import {Container} from './styles'
import ClipPath from './clipPath/index'


import imgUm from '../../assets/images/img-1.png'
import imgDois from '../../assets/images/img-2.png'
import imgTres from '../../assets/images/img-3.png'
import imgQuatro from '../../assets/images/img-4.png'

function Promo() {
    return(
        <>
        <Container>
            <div class="width">
                <h1>LIBERE SEU PODER</h1>
                <div class="row">
                    <div class="col-sm-3 col-xs-6 colunas-img"  data-aos="fade-up" data-aos-duration="1000">
                        <img src={imgUm} alt="..." />
                        <div class="bottom-left">
                            <p>so fast! up to<br/>256 gb ram</p>
                        </div>
                    </div>
                    <div  class="col-sm-3 col-xs-6 colunas-img"  data-aos="fade-up" data-aos-duration="1200">
                        <img src={imgDois} alt="..." />
                        <div class="bottom-left">
                            <p>4.0 ghz ıntel<br/>xeon cpu</p>
                        </div>
                    </div>
                    <div  class="col-sm-3 col-xs-6 colunas-img"  data-aos="fade-up" data-aos-duration="1300">
                        <img src={imgTres} alt="..." />
                        <div class="bottom-left">
                            <p>AWAKE UP<br/>TO 48 Hours*</p>
                        </div>
                    </div>
                    <div  class="col-sm-3 col-xs-6 colunas-img"  data-aos="fade-up" data-aos-duration="1400">
                        <img src={imgQuatro} alt="..." />
                        <div class="bottom-left">
                            <p>nvıdıa gtx 3090<br/>graphıcs card</p>
                        </div>
                    </div>                    
                </div>
            </div>
        </Container>

        <ClipPath />
        </>
    )
}

export default Promo;