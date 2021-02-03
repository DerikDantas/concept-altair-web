import styled from 'styled-components';

export const Container = styled.div`
  height: 130vh;

  img.logo-fundo{
    position: absolute;
    top: 0;
    z-index: 10;
    width: 80%;
  }

  img.pc-img{
      position: absolute;
      z-index: 50;
      width: 60%;
      top: 160px;
  }

  div.banner-text{
      position: absolute;
      right: 100px;
      top: 150px;
      z-index: 99
  }
  div.banner-text > h1{
      font-size: 110px;
      font-weight: bold;
  }
  div.banner-text > h3{
    font-size: 33px;
    text-transform: uppercase;
    font-weight: 100;
  }

  div.banner-text > a{
    background: #05DBF2;
    padding: 12px 45px;
    text-decoration: none;
    color: #02030D;
    }
    div.banner-text > a:hover{
    color: #05DBF2;
    border: 1px solid #05DBF2;
    background: transparent
    }

    @media(max-width: 768px){
      height: 150vh;

      img.logo-fundo, img.pc-img{
        width: 100%
      }
      
      .banner-text{
        padding: 20px;
        left: 0;
        bottom: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        height: 100%;
        width: 100%;
        padding: 0 20px;
        margin-top: 100px
      }
      
      div.banner-text > h1{
        font-size: 43px;
        width: 100%
      }
      div.banner-text > h3{
        font-size: 25px;
      }
    }
`;
