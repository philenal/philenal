"use client"; // This is a client component

import React, { useRef } from 'react'
import { Canvas } from "@react-three/fiber";
import Background from '../app/background';
import OverlayHome from '../components/OverlayHome';
import OverlayProjects from '../components/OverlayProjects';
import OverlayAbout from '@/components/OverlayAbout';
import OverlayArt from '@/components/OverlayArt';
import { Container, AboutContainer, ProjectsContainer, SiteContainer, ArtContainer, HomeContainer } from '../components/styles'
import NavBar from '../components/NavBar';
import { GlobalStyle } from '../components/styles'
// camera position for eggberry: [0, 0, 7]
export default function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const artRef = useRef(null);
  const homeRef = useRef(null);

  return (
    <>

<NavBar homeRef={homeRef} aboutRef={aboutRef} projectsRef={projectsRef} artRef={artRef}/>
    <SiteContainer>
      <GlobalStyle/>
      <HomeContainer >
      <div ref={homeRef}>
      <Canvas style={{ position: 'absolute', top: 0, left: 0, height: "100vh", width: "100vw", pointerEvents: 'none' }} 
            // @ts-ignore
            camera={{ position: [0, -1.7, 3], rotation: [Math.PI/4,0,0] }}>
        <Background/>
        </Canvas>
        </div>
        <OverlayHome/>
      </HomeContainer>
      <AboutContainer>
        <div ref={aboutRef}>
        <OverlayAbout/>
        </div>
      </AboutContainer>
      <ProjectsContainer>
        <div ref={projectsRef}>
        <OverlayProjects/>
        </div>
      </ProjectsContainer>
      <ArtContainer>
        <div ref={artRef}>
        <OverlayArt/>
        </div>
      </ArtContainer>
      </SiteContainer>
    </>
  );
}