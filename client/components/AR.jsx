import React from 'react'
import { connect } from 'react-redux'
import {getTextByURL} from '../actions/text'
import {Link} from 'react-router-dom'
import {clearText} from '../actions/text'

function AR ({weather
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



return (
    <div style={divStyle} className="about-page-row">
    <a className='text about-back' href='#' onClick={()=>dispatch(clearText())}><span className='te-reo'>Whakahoki atu ki te timatanga</span><span className='english'>Return Home</span></a>

      <div className="about-page-column-eight">
        <div className="aboutcontainer">
          <div className="abouttext">
            <div className="about-main-title">
                <h1 className="text"><span className="english">Atur AR</span>
                {/* <span className="te-reo">Tō mātou kaupapa</span> */}
                </h1>
            </div>
            <div className="text-main-section">
              <div className="about-secondary-title">
                <h2 className="text"><span className="english">Where we began</span>
                {/* <span className="te-reo">Kō wai mātou?</span> */}
                </h2>
              </div>
              <div className="who-are-we-body">
                {/* <img className="about-page-image" alt="barbarian upngo marker" src="/https://vimeo.com/271780969"/> */}
                <iframe src="https://player.vimeo.com/video/271780969" alt="barbarian upngo marker" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                {/* <p><a href="https://vimeo.com/271780969">AR marker testing</a> from <a href="https://vimeo.com/user85454645">maddyking44</a> on <a href="https://vimeo.com">Vimeo</a>.</p> */}
                <p className="text"><span className="english">We are Ben Tairea, Laura Suzuki, Anthony Gordon, Zach Mandeville and Maddy King. Ben came up with the vision to use Augmented Reality across Aotearoa to reveal the history and stories of this land.</span><span className="te-reo">Kō Ben Tairea, Laura Suzuki, Anthony Gordon, Zach Mandeville and Maddy King. I toko ake te whakaaro i roto i a Ben  ki te whakaaara i a Augmented Reality kia whai wāhi ai ngā hītori me ngā kōrero o ngā whenua o Aotearoa ki te iwi whānui.</span>
                </p>
                <p className="text"><span className="english">We’re a team of developers studying at Enspiral Dev Academy, a web development school based in Wellington and Auckland that is committed to a mission of social good. We have had help and support from a large range of people, who you can read about here.</span><span className="te-reo">He roopu mātau e ako tonu ana i te wānanga o Enspiral Dev Academy, he wānanga whakatipu tukutuku i runga i te ipurangi i roto o Te Whanganui-ā-Tara me Tamaki Makaurau. E tautokohia ana mātau e te tini tangata, e taea te kitea ko wai ngā rōpu tautoko i roto i nga panui e whai ake nei.</span>
                </p>
                <br/>
              </div>
            </div>
            </div>
        </div>
       </div>
    </div>
)
}

// https://vimeo.com/271771193 presentation
// https://vimeo.com/271771608 occlusion laundry
// https://vimeo.com/271773541 portal
// https://vimeo.com/271780969 upngo marker
// https://vimeo.com/271781287 tree occlusion

const mapStateToProps = ({weather
  , dispatch
}) => ({weather
  , dispatch
})

export default connect(mapStateToProps)(AR)
