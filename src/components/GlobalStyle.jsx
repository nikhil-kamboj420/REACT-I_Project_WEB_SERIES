import {createGlobalStyle} from 'styled-components';
export const  GlobalStyle = createGlobalStyle`
ul{
    padding :3rem;
    width: 80vw;
    margin : auto;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    & li{
        box-shadow : 3px 4px 6px #aaa;
        & *:not(img){
            padding : .5rem;
        }
    }
}
`