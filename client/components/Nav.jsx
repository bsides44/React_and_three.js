import React from 'react'
import { connect } from 'react-redux'
import {flipNav, closeNav} from '../actions/nav'
import {getTextByURL} from '../actions/text'


const Nav = (props)=> {
  return (
    <div>
    <a href="javascript:void(0);" className='close' onClick={props.closeNav}>&times;</a>
    <ul id='navItems'>
    {props.texts.map(text => {
      return (
	<li key={text.id}>
	  <a className='text' title={`link to ${text.url}`} href='#' onClick={() => {props.dispatch(getTextByURL(text.url))}}>
	    <span className='te-reo'>{text.short_title.tereo}</span>
	    <span className='english'>{text.short_title.english}</span>
	  </a>
	</li>
      )
    })
    }
    </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    texts: state.texts,
    navVisible: state.navVisible
  }
}

export default connect(mapStateToProps)(Nav)

