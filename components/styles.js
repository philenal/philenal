
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`  
  @font-face {
    font-family: 'aqua';
    src: url('/fonts/aqua.ttf');
    font-weight: 600;
    font-style: normal;
    }
`;

export const SiteContainer = styled.div`
  position:absolute;
  top: 0;
  left: 0;
  & h1 {
    background: #ddd6f3;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #faaca8, #ddd6f3);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #faaca8, #ddd6f3); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-width: 1em;
    font-size: 14em;
    @media (max-width: 1564px) {
      font-size: 10em;
    }
    @media (max-width: 1245px) {
      font-size: 150px;
    }
    @media (max-width: 400px) {
      font-size: 50px;
    }
  }
  & p {
    @media (max-width: 400px) {
      font-size: 12px;
    }
  }

`

export const Container = styled.div`
  font-family: 'aqua';
  height: fit-content;
  width: 100vw;
  height: 100vh;
  color: white;
  & h1 {
    padding: 0;
    font-weight: 600;
  }
`
export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  font-family: 'aqua';
  height: fit-content;
  width: 100vw;
  & p {
    color: #e1d0e9;
  }
  & h1 {
    padding: 0;
    font-weight: 600;
    @media (max-width: 400px) {
      position: relative;
      top: 20vh;
    }
  }
`

export const AboutContainer = styled.div`
  font-family: 'aqua';
  height: 100vh;
  width: 100vw;
  color: #b5b5c8;
  & h1 {
    padding: 0;
    margin: 0 0 0.05em 0;
    font-weight: 600;
  }
  & li {
    font-size: 14px;
  }
`

export const ProjectsContainer = styled.div`
  font-family: 'aqua';
  height: fit-content;
  width: 100vw;
  color: white;
  & h1 {
    padding: 0;
    margin: 0 0 0.25em 0;
    font-weight: 600;
  }
`
export const ArtContainer = styled.div`
  font-family: 'aqua';
  height: fit-content;
  width: 100vw;
  color: white;
  & h1 {
    padding: 0;
    margin: 0 0 0.05em 0;
    font-weight: 600;
  }
`

export const Center = styled.div`
text-align: center;
`

export const Profile = styled.div`
  margin-left: 20px;
  background-image: url('/profile.jpeg');
  background-size: contain;
  width: 600px;
  height: inherit;
  border-radius: 10px;
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 5px );
  -webkit-backdrop-filter: blur( 5px );
`

export const Emphasis = styled.span`
  color: #eebdc7;
  font-size:20px;
`
export const Role = styled.span`
  color: #eebdc7;
  font-size:12px;
`

export const View = styled.a`
  text-decoration: none;
  cursor: pointer;
  pointer-events: all;
  color: #eebdc7;
  font-size:14px;
  transition: font-size 0.3s ease-in-out, color 0.3s ease-in-out;
  :hover {
    color: #ddd6f3;
    font-size: 15px;
  }
`
export const Navbar = styled.div`
  z-index: 100;
  font-family: 'aqua';
  text-decoration: none;
  font-size: 20px;
  position: fixed;
  width: fit-content;
  top: 20vh;
  left: 5vw;
  line-height: 2em;
  text-align: left;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  @media (max-width: 400px) {
    flex-direction: row;
    top: 5vh;
    left: 15vw;
    width: 70vw;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-radius: 10px;
    background: rgba( 255, 255, 255, 0.2 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 8px );
    -webkit-backdrop-filter: blur( 8px );
  }
  & p {
    cursor: pointer;
    color: #eebdc7;
    transition: transform, color 0.5s ease-in-out;
    @media (max-width: 400px) {
      line-height: 1em;
      font-size:10px;
      margin: 10px;
    }
  }
  & p:hover {
    transform: translateY(-4px);
    color: #ddd6f3;
  }
  
`

export const RightMiddle = styled.div`
  position: absolute;
  font-family: 'aqua';
  top: 37vh;
  right: 5vw;
  font-weight: 300;
  font-size: 20px;
  width: 35ch;
  text-align: right;
`

export const Glass = styled.div`
  padding: 40px 40px;
  nargin: auto;
  width: 350px;
  background: rgba( 255, 255, 255, 0.2 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 8px );
  -webkit-backdrop-filter: blur( 8px );
  border-radius: 10px;
`

export const GlassCard = styled.div`
  pointer-events: none;
  position: relative;
  top: -300px;
  left: 0px;
  padding: 20px 40px;
  width: 300px;
  background: rgba( 255, 255, 255, 0.2 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 20px );
  -webkit-backdrop-filter: blur( 20px );
  border-radius: 10px;
  margin: 30px;
  & p {
    color: #b5b5c8;
  }
`

export const ArtGlassCard = styled.div`
  pointer-events: none;
  padding: 20px 20px;
  width: 300px;
  background: rgba( 255, 255, 255, 0.2 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 12px );
  -webkit-backdrop-filter: blur( 12px );
  border-radius: 10px;
  margin: 30px;
  color: #8c8ba2;
  & img {
    border-radius: 10px;
  }
`

export const CardBody = styled.div`
  height: 270px;
  margin-top: 30px;
  & p {
    font-size: 16px;
  }
  & h1 {
    background: #faaca8; 
    
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    font-size: 24px;
  }
`

export const CardImage = styled.div`
& div {
  width: 300px;
}
& img {
  border-radius: 10px;
  position: relative;
  top: 0;
  left: 70px;
  opacity: .3;
  transition: top ease 0.7s, opacity ease .7s;
}

& div:hover {
  img {
    opacity: 1;
    top:-200px;
  }
}
`

export const FlexContainerCol = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  top: 0vh;
  left: 0vw;
  width: 80vw;
  margin: auto;
  height: fit-content;
`
export const CardContainer = styled.div`
  display: block;
  height: 450px;
`

export const FlexContainerRow = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
  top: 0;
  left: 0;
  width: 80vw;
`