import React from 'react'
import { connect } from 'react-redux'
import P5Wrapper from 'react-p5-wrapper'
import sketch from '../sketches/sketch'

const Atua = ({weather}) => {
  let wind = weather.wind_dir
  let velocity = weather.wind_kph
  return (
    <div>
      <div className='atua-animation'>
        <P5Wrapper wind={wind} velocity={velocity} sketch={sketch}/>
      </div>
    </div>
  )
}

var mapStateToProps = ({weather}) => ({weather})

export default connect(mapStateToProps)(Atua)
