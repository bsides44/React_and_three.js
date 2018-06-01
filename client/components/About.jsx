import React from 'react'
import { connect } from 'react-redux'
import {getTextByURL} from '../actions/text'
import {Link} from 'react-router-dom'
import {clearText} from '../actions/text'
import {thanks} from './thanks'

function About ({weather
  , dispatch
}) {
  
  function findBackgroundImg(){
    if (weather) {
      var hour = (new Date(Date.parse(weather.local_time_rfc822))).getHours()
      console.log(hour)
      if (hour < 6) {
        return '/assets/images/background-evening-01.svg'
      }
      else if (hour == 6){
        return '/assets/images/background-about-sunrise-01.svg'
      }
      else if (hour >= 7 && hour <= 16) {
        return '/assets/images/background-about-daytime-01.svg'

      }
      else if (hour == 17) {
        return '/assets/images/background-about-sunrise-01.svg'
      }
      else if (hour >= 18) {return '/assets/images/background-evening-01.svg'}
      }
  }

  var divStyle = {
    backgroundImage: 'url(' + findBackgroundImg() + ')'
  }

  var vidStyle = {
    width: "640px",
    height: "300px"
  }

  console.log(typeof weather.local_time_rfc822)
  return (
      <div style={divStyle} className="about-page-row">
      <a className='text about-back' href='#' onClick={()=>dispatch(clearText())}><span className='te-reo'>Whakahoki atu ki te timatanga</span><span className='english'>Return back to Home</span></a>

        <div className="about-page-column-eight">
          <div className="aboutcontainer">
            <div className="abouttext">
            <div className="about-main-title">
                <h1 className="text"><span className="english">Atua AR</span><span className="te-reo">Atua AR</span>
                </h1>
            </div>
            <div className="text-main-section">
              <div className="about-secondary-title">
                <h2 className="text"><span className="english">Augmented Reality: The journey</span><span className="te-reo">Augmented Reality: The journey</span>
                </h2>
            </div>
              <div className="who-are-we-body">
                <p><span>The idea is to use Augmented Reality (AR) to put a 3D representation of Tāwhirimātea on top of Mount Victoria, Wellington, with behaviours that responded to weather data so users can look up at the mountain to see what the wind is doing.</span></p>
                <p><span>We started our investigation using AR markers in Unity, a game engine. A marker means the camera recognises an image and anchors your AR object to that image. So we began by putting a barbarian on a box.</span></p>
                <iframe src="https://player.vimeo.com/video/271780969?loop=1&title=0&byline=0&portrait=0" frameBorder="0" allowFullScreen></iframe>
                {/* vimeo responsive code clashes with react inline styling. removing width and height makes it too small for web. Adding fixed width and height makes it unwatchable on mobile. */}
                 {/* <iframe src="https://www.youtube-nocookie.com/embed/VpywY_JYweQ?rel=0&amp;showinfo=0" frameBorder="0" allow="encrypted-media" frameBorder="0" allowFullScreen></iframe> */}
                <p><span>We were drawn to AR's ability to reveal unseen aspects, giving the user exposure to magical and spiritual things. As our next step we looked into developing a portal to another world, using the ViroMedia platform. 
                </span></p>
                <iframe src="https://player.vimeo.com/video/271773541?loop=1&title=0&byline=0&portrait=0" frameBorder="0" allowFullScreen></iframe>
                <p><span>To make the portal we had to use occlusion, which is the ability for real world objects to hide or be hidden behind our 3D object, as though it is actually there. 
                </span></p>
                <p><span>These tests put the 3D object in place using a marker or a distance from the user's phone. We needed our Tāwhirimātea to be placed on Mount Victoria using geolocation from the phone's GPS. We also needed buildings to block out his image as the user walked through the busy streets of Wellington, so occlusion was a priority too.
                </span></p>
                <p><span>We pulled the Mapbox SDK into Unity, so we could use its mapping software to place Tāwhirimātea in the city centre by GPS coordinates. This also gave us access to maps of the buildings in the city. We applied a material in Unity to give these buildings the ability to block objects out. We painted Tāwhirimātea with an occludable material, like in the portal. This meant that parts of his body would disapper when they were rendered behind a Mapbox building. We turned the Mapbox buildings invisible, so that they would simply disappear. The idea was that these invisible buildings would map to the real world buildings around the user, so Tāwhirimātea would start to disappear when a real world building passed between him and the user.</span></p>
                <p><span> The mapping of the building is slightly off, but you can see the object's body start to disappear in response to the building. </span></p>
                <iframe src="https://player.vimeo.com/video/271771608?loop=1&title=0&byline=0&portrait=0" frameBorder="0" allowFullScreen></iframe>
                <p><span>We used this work to demo the concept of the Augmented Reality app in a tabletop map.</span></p>
                <iframe src="https://player.vimeo.com/video/272666672?loop=1&title=0&byline=0&portrait=0" frameBorder="0" allowFullScreen></iframe>
                {/* <iframe src="https://player.vimeo.com/video/271771193?loop=1&title=0&byline=0&portrait=0" frameBorder="0" allowFullScreen></iframe> */}
                <p><span> We further refined the occlusion problem by perfecting our geolocation. This tree model demonstrates the enhanced occlusion functionality. </span></p>
                <iframe src="https://player.vimeo.com/video/271781287?loop=1&title=0&byline=0&portrait=0" frameBorder="0" allowFullScreen></iframe>
                
                {/* <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/271781287?title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script> */}


                <p><span> We continue trying to get it perfect so that Tāwhirimātea can be atop Mount Victoria with accuracy. We're committed to making Atua AR as realistic as possible, so it can meet our aims of astounding and inspiring the user.</span></p>
                <br/>
              </div>
            </div>
            
            
              <div className="about-main-title">
                  <h1 className="text"><span className="english">About</span><span className="te-reo">Tō mātou kaupapa</span></h1>
              </div>
              <div className="text-main-section">
                <div className="about-secondary-title">
                  <h2 className="text"><span className="english">Who are we?</span><span className="te-reo">Kō wai mātou?</span></h2>
                </div>
                <div className="who-are-we-body">
                  <img className="about-page-image" src="/assets/images/group.jpg"/>
                  <p className="text"><span className="english">We are Ben Tairea, Laura Suzuki, Anthony Gordon, Zach Mandeville and Maddy King. Ben came up with the vision to use Augmented Reality across Aotearoa to reveal the history and stories of this land.</span><span className="te-reo">Kō Ben Tairea, Laura Suzuki, Anthony Gordon, Zach Mandeville and Maddy King. I toko ake te whakaaro i roto i a Ben  ki te whakaaara i a Augmented Reality kia whai wāhi ai ngā hītori me ngā kōrero o ngā whenua o Aotearoa ki te iwi whānui.</span>
                  </p>
                  <p className="text"><span className="english">We’re a team of developers studying at Enspiral Dev Academy, a web development school based in Wellington and Auckland that is committed to a mission of social good. We have had help and support from a large range of people, who you can read about here.</span><span className="te-reo">He roopu mātau e ako tonu ana i te wānanga o Enspiral Dev Academy, he wānanga whakatipu tukutuku i runga i te ipurangi i roto o Te Whanganui-ā-Tara me Tamaki Makaurau. E tautokohia ana mātau e te tini tangata, e taea te kitea ko wai ngā rōpu tautoko i roto i nga panui e whai ake nei.</span>
                  </p>
                  <br/>
                </div>
              </div>

                <div className="about-secondary-title">
                <h2 className="text"><span className="english">Te Reo first.</span><span className="te-reo">Ko te reo i te tuatahi.</span></h2>
                </div>
                <div className="who-are-we-body">
                  {/* <img className="about-page-image" src="/assets/images/benmaddy.jpg"/> */}
                  <p className="text"><span className="english">The connection between language and culture is inherent. Words are a method of creating and recording meaning. In this way, language serves as a means of both documentation and living cultural expression. If our aim is to inspire learning and engagement with te ao Māori, we believe that relationship should be grounded in the use of te reo Māori, the first language of Aotearoa.</span><span className="te-reo">Ka noho pūmau ki te reo me ōna tikanga, ma te kupu (Māori) e whakamana te kaupapa. Ma tēnei e mana ai te oranga tonutanga o ēnei taonga. Mena ko te whāinga ki te whakaawe i te hono mai o te tangata ki ōna mātauranga Māori, ka tika kia kawea i roto i te reo tuatahi o te whenua nei, te reo Māori.</span>
                  </p>
                  <br/>
                </div>

                <div className="about-secondary-title">
                <h2 className="text"><span className="english">Our ethos is free and open source code.</span><span className="te-reo">
                He kaupapa kore utu, he kaupapa nō te mahi tahi</span></h2>
                </div>
                <div className="who-are-we-body">
                  {/* <img className="about-page-image" src="/assets/images/ant.jpg"/> */}
                  <p className="text"><span className="english">ATUA_AR upholds a free/libre and open source ethos, which means the resources should be freely available to those interested in them, and that people can adjust and build upon the work we’ve done. We create things with the intention that they can and will be useful to others, by design. This means we write tools  that are reusable beyond this app, and code that is easy to read. It means we are committed to accessible technology. We welcome feedback and contributions.</span><span className="te-reo">He rauemi kore utu a ATUA_AR e whai wāhi ai ki te tangata e manawanui nei ki ēnei mātauranga, ki ēnei kōrero ahakoa ko wai. Ko te whāinga kia ngāwari noa te whakahaere, te pānui me te whakamahi i te rauemi nei ki te marea. Tēnā whakapā mai mena he whakaaro a koutou hei whakangāwari ake i te whakahaere o te rauemi nei,mena he pātai ranei a koutou.</span>
                  </p>

                  <br/>
                </div>

                <div className="about-secondary-title">
                {/* <img className="about-page-image" src="/assets/images/zaclaura.jpg"/> */}
                <h2 className="text"><span className="english">Thank You</span><span className="te-reo">
                He mihi</span></h2>
                </div>
                <div className="who-are-we-body">
                  <p className="text"><span className="english">ATUA_AR would like to send gratitude towards: </span><span className="te-reo">Ānei he mihi maioha ki:</span>
                  </p>
                  <ul>
                    {thanks.map(person => <li>{person}</li>)}
                  </ul>

                  <br/>
                </div>
            </div>
             <div>
              <a href='#' onClick={()=>dispatch(clearText())}><h2 className='returnbutton'><span className='te-reo'>Whakahoki atu ki te timatanga</span><span className='english'>Return back to Home</span></h2></a>
              </div>
          </div>
        </div>
      </div>
    )
}

const mapStateToProps = ({weather
  , dispatch
}) => ({weather
  , dispatch
})

export default connect(mapStateToProps)(About)
