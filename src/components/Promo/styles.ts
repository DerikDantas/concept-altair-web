import styled from 'styled-components';
import Background from '../../assets/images/background-promo.png'

export const Container = styled.div`
  background-image: url(${Background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
    height: 150vh;
    display: flex;
    align-items: center;
    padding: 50px 0;

    div.width{
        width: 100vw;
        padding: 0 50px
    }

    div > h1{
        font-size: 50px
    }
    
    div.colunas-img{
        position: relative;
    }
    div.colunas-img > img{
        width: 90%;
        display: block
    }
    div.bottom-left {
        position: absolute;
        bottom: 0px;
        padding: 0 10px
    }
    div.bottom-left > p{
        text-transform: uppercase;
        font-size: 22px
    }

    @media(max-width: 768px){
        height: auto;
        
        div > h1{
            text-align: center;
            font-size: 40px
        }
        div.width{
            width: auto;
            padding: 0 50px
        }
        div.colunas-img > img{
            width: 100%;
            margin: 20px 0
        }
    }
`;