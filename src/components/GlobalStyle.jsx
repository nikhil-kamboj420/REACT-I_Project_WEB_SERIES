import {createGlobalStyle} from 'styled-components';
export const  GlobalStyle = createGlobalStyle`
h1{
    padding-top:2rem;
}
ul{
    padding :3rem;
    width: 80vw;
    margin : auto;
    & li{
        h2{
            margin-bottom:1rem;
        }
        box-shadow : 3px 4px 6px #aaa;
        & *:not(img){
            padding : .5rem;
        }
        & *:not(h2){
            font-size : 1.5em;
        }
    }
}

@media (min-width: 1024px){
    
ul{
    grid-template-columns: repeat(3, 1fr);
}}




@media (min-width: 581px) and (max-width:1023px){
    html{
        font-size: 61%
    }
    ul{
      grid-template-columns: repeat(2, 1fr);
      min-width:100vw;
    }
}
@media (max-width: 580px){
    html{
        font-size: 60%
    }
    ul{
      grid-template-columns: repeat(1, 1fr);
      min-width:100vw;
    }
}
`