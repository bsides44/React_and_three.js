import React from 'react'
import { connect } from 'react-redux'

function WindInfo ({weather}) {
  return (
    <div>
      <div className='logo'>ATUA_AR</div>
      <div>
        <span className='info-title text'>
          <span className='english'>Wind Direction: </span>
          <span className='te-reo'>Aronga o te hau: </span>
        </span>
        {weather.wind_dir}
      </div>
      <div>
        <span className='info-title text'>
          <span className='english'>Wind Speed: </span>
          <span className='te-reo'>Tere o te hau: </span>
        </span>
        {weather.wind_kph} kph
      </div>
    </div>
  )
}

var mapStateToProps = ({weather}) => ({weather})

export default connect(mapStateToProps)(WindInfo)
