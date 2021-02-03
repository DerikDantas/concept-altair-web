import React from 'react';

 import { Container } from './styles';

 import vector from '../../assets/images/Vector.png'
 import player from '../../assets/images/player.png'


function Depoimentos() {
  return (
        <Container>
            <div class="container hg-100">
                <div class="row hg-100">
                    <div class="col-sm-6 col-xs-6 coluna-depoimento" data-aos="fade-right" data-aos-once="true" data-aos-duration="1200">
                        <h1>I was very aware of 'League of Legends' because my brother plays it a lot, but I hadn't gotten the chance to play it before.</h1>
                        <p>Marcin “JANKOS” Jankowski</p>
                    </div>
                    <div class="col-sm-6 col-xs-6 coluna-player" data-aos="fade-left" data-aos-duration="1200">
                        <img src={player}/>
                    </div>
                </div>
            </div>
            <img src={vector} />
        </Container>
    );
}

export default Depoimentos;