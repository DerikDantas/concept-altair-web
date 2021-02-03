import styled from 'styled-components';

export const Container = styled.div`
    padding: 50px;

    div.colunas-promo {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-end;
    }
    div.colunas-promo > img{
        margin: 10px 0
    }
  
    p.icon-1{
        color: #FE6D5F!important;
        font-weight: bold
    }
    p.icon-2{
        color: #FE61F7!important;
        font-weight: bold
    }
    p.icon-3{
        color: #717DFE!important;
        font-weight: bold
    }
    p.icon-4{
        color: #01FCC4!important;
        font-weight: bold
    }

`;
