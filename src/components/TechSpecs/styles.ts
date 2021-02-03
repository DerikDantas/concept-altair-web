import styled from 'styled-components';

export const Container = styled.div`
    background: radial-gradient(83.75% 95.4% at 29.32% 0%, #242424 0%, rgba(36, 36, 36, 0) 100%), #000000;
    width: 100vw;
    height: 950px;
    clip-path: polygon(0 11%, 100% 2%, 100% 100%, 0 100%);
    position: relative;
    margin-top: -250px;
    display: flex;
    align-items: center;

    img{
        position: absolute;
        right:0;
        top: -190px
    }

    div{
        padding: 0 30px
    }
    div > h1{ 
        font-size: 40px
    }

    table{
        margin-top: 20px
    }
    tr {
        height: 60px;
    }
    td{
        text-transform: uppercase;
        font-size: 18px;
        margin: 10px 0
    }
    td:nth-child(odd){
        padding-right: 55px
    }
    td > span > p{
        color: #7E7E7E!important;
    }

    @media(max-width: 768px){
        height: 100%;
        padding: 100px 0;

        div > h1{ 
            font-size: 40px;
            text-align: center;
        }
        img{
            width: 100%;
            
        }

        tr{
            height: auto;
        }
        td{
            font-size: 15px;
        }
    }
`;
