import { createGlobalStyle } from "styled-components";
import Media from "styled-media-query";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato:400,700|Montserrat:400,500,600,700&display=swap');
  html{
    overflow-x: hidden;
  }
  body{
    margin: 0;
    font-family:${props => props.theme.font.family.body};
    color:${props => props.theme.color.type};
    background-color: ${props => props.theme.color.bg};
  }

  h1,h2,h3,h4,h5,h6{
    font-family:${props => props.theme.font.family.header};
    color:${props => props.theme.color.main};
    margin:0;
  }

  h1{
    font-size:1.625em;
    font-weight:900;
  }

  h2{
    font-size:3em;
    font-weight: ${({ theme }) => theme.font.weight.medium};
    color:${props => props.theme.color.white};
    ${Media.greaterThan("medium")`
      font-size: 4em;
    `}
  }


  h3{
    font-size:3.125em;
    line-height:1.6em;
    font-weight: ${({ theme }) => theme.font.weight.medium};
    color:${props => props.theme.color.main};
  }

  h4{
    font-size:2.5em;
    font-weight: ${({ theme }) => theme.font.weight.semibold};
    color:${props => props.theme.color.gold};
  }

  h5{
    font-size:1.25em;
    font-weight: ${({ theme }) => theme.font.weight.semibold};
    color:${props => props.theme.color.gold};
  }

  h6{
    font-size:1em;
    font-weight: ${({ theme }) => theme.font.weight.semibold};
    color:${props => props.theme.color.type};
  }

  small{
    font-size:0.75em;
    font-weight:700;
    color:${props => props.theme.color.type};
  }

  p{
    font-size:0.875em;
    font-family:${({ theme }) => theme.font.family.body};
    color:${props => props.theme.color.type};
    line-height:2em;
  }

  a{
    text-decoration:none;
    color:inherit;
    color:${props => props.theme.color.type};
  }

  li{
    font-size:0.875em;
    font-family:${({ theme }) => theme.font.family.body};
    color:${props => props.theme.color.type};
    line-height:1.5em;
  }


  .ReactModal__Overlay{
    display:grid;
    background-color: rgba(0,0,0,0.8)!important;
    z-index: 300;
  }

  .ReactModal__Body--open{
    overflow-y: hidden;
  }

`;

export default GlobalStyle;
