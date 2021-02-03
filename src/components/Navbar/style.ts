import styled from 'styled-components';

export const Container = styled.div`
    background-color: transparent;
    padding: 10px;
    height: auto;
    width: 100%;
    z-index: 999;
    position: absolute;

    ul{
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
    
    a{
        text-decoration: none;
    }
    a:hover{
        font-weight: bold
    }
    .menu-toggle{
        display: none;
    }
    @media(max-width: 768px){
        background-color: #02030D;
        flex-direction: column;
        height: 100%;
        position: relative!important;

        
        nav{
            display: none;
            margin-top: 40px
        }
        
        .menu-toggle{
            display: block;
            width: 40px;
            height: 30px;
            margin-right: 20px;
            position: absolute;
            right: 25px;
            top: 15px;
        }

        ul{
            flex-direction: column;
            height: 100%
        }

        li > a{
            font-size: 20px;
        }
        .one,
        .two,
        .three {
            background-color: #fff;
            height: 5px;
            width: 100%;
            margin: 6px auto;

            transition-duration: 0.3s;
        }
        .menu-section.on nav {
        display: block;
    }

    .menu-section.on .menu-toggle {
        position: absolute;
        right: 25px;
        top: 15px;
    }

    .menu-section.on .menu-toggle .one {
        transform: rotate(45deg) translate(7px, 7px);
    }

    .menu-section.on .menu-toggle .two {
        opacity: 0;
    }

    .menu-section.on .menu-toggle .three {
        transform: rotate(-45deg) translate(8px, -9px);
    }

    .menu-section.on nav ul {
        text-align: center;
        display: block;
    }

    .menu-section.on nav ul a{
        transition-duration: 0.5s;
        line-height: 4rem;
        display: block;
        
    }

    }
`;
