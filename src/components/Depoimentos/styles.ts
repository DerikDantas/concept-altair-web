import styled from 'styled-components';

export const Container = styled.div`
    background: #16161C;
    height: 650px;
    display: flex;
    align-items: center;
    
    .hg-100{
        height: 100%;
        position: relative;
        z-index: 10
    }

    div.coluna-depoimento{
        display: flex;
        flex-direction: column;
        justify-content: center
    }
    div.coluna-player{
        display: flex;
        justify-content: center;
        align-items: flex-end;
    }

    div.coluna-depoimento > h1{
        font-size: 28px;
        text-transform: uppercase
    }
    div.coluna-depoimento > p{
        font-size: 24px;
        text-transform: uppercase;
        color: #05DBF2!important;
    }

    img{
        position: absolute;
        z-index: 1;
        right: 0
    }

    @media(max-width: 768px){
        max-height: 100%;
        width: 100vw;
        padding: 0;

        .hg-100{
            width: 100vw;
        }

        div.coluna-depoimento > h1{
            font-size: 24px;
            text-transform: uppercase
        }
        div.coluna-depoimento > p{
            font-size: 20px;
            text-transform: uppercase;
            color: #05DBF2!important;
        }
        div.coluna-player{
            justify-content: center;
        }
        div.coluna-player > img{
            width: 50%;
            text-align: center
        }
    }
`;
