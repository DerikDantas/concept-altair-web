import styled from 'styled-components';

export const Container = styled.div`
    
    .order-now{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 150px 0;
    }

    h1{
        font-size: 24px
    }

    a{
        color: #05DBF2!important;
        border: 1px solid #05DBF2;
        background: transparent;
        padding: 12px 45px;
        text-decoration: none;
    }
    a:hover{
        background: #05DBF2;
        text-decoration: none;
        color: #02030D!important;
    }


    .footer-container{
        padding: 70px 0;
    }
    .footer-links > h1{
        font-size: 14px;
        font-weight: bold;
    }
    .footer-links > p{
        font-size: 14px;
        margin: 0
    }

    .copyright{
        background: #16161C;
        text-align: center;
        padding: 20px
    }
    .copyright > p{
        margin: 0
    }

    @media(max-width: 768px){
        .footer-container {
            padding: 0;
            text-align: center;
        }
        .footer-links{
            margin: 20px 0;
        }
    }
`;
