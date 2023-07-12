import Link from 'next/link'
import { FlexContainerCol, FlexContainerRow, Glass, Profile, Emphasis, Role } from './styles'
// import Profile from '/profile.jpeg'

export default function OverlayAbout(props) {
  return (
    <>
    <FlexContainerCol>
        <div><h1>about</h1></div>
        <FlexContainerRow>
          <Glass>
            I'm a rising senior studying <br/><Emphasis>math + cs at MIT.</Emphasis> 
            <br/>
            <br/>
            Currently, I'm involved in:
            <ul>
              <li>
                <Emphasis>HMMT</Emphasis><Role>{" (Tournament Director Emeritus)"}</Role><br/> 
              a student-run organization that hosts math tournaments to high schoolers around the globe
              </li>
              <br/>
              <li>
                <Emphasis>web.lab</Emphasis><Role>{" (staff/teacher assistant)"}</Role><br/> 
                a student-taught web development class held over MIT's IAP
              </li>
              <br/>
              <li>
                <Emphasis>ADT</Emphasis><Role>{" (very mediocre dancer)"}</Role><br/> 
                asian dance team
              </li>
            </ul>
            {"Previously, I was involved in:"}
            <ul>
              <li>
                <Emphasis>borderline</Emphasis><Role>{" (publicity chair/webmaster)"}</Role><br/> 
                a unique art club that brings to life the student-painted murals in MIT's underground tunnels through augmented reality
              </li>
              <br/>
              <li>
                <Emphasis>badminton</Emphasis><Role>{" (intramural)"}</Role><br/> 
                {"for fun :) "}
              </li>
            </ul>
          </Glass>
          <Profile/>
        </FlexContainerRow>
      </FlexContainerCol>
    </>
  )
}