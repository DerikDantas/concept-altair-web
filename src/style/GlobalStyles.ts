import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    *{
        font-family: 'Montserat', sans-serif;
        color: white!important
    }
    body{
        background-color: #02030D;
    }
    div#root {
        width: 100%;
        height: 100%;
        overflow-x: hidden;
    }
`