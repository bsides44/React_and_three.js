import React from 'react'
import { connect } from 'react-redux'

import { clearText, increaseIndex, decreaseIndex } from '../actions/text'

class Text extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    }
    this.next = this.next.bind(this)
    this.prev = this.prev.bind(this)
  }
  next() {
    this.props.dispatch(increaseIndex())
  }
  prev() {
    this.props.dispatch(decreaseIndex())
  }

  render(){
    return (
      <div className='text-box'>
	<div className='text-box_content'>
	  <p className='text-box_close' onClick={()=> this.props.dispatch(clearText())}>&times;</p>
	  <h1 className='text'><span className='te-reo'>{this.props.text.title.tereo}</span><span className='english'>{this.props.text.title.english}</span></h1>
	  <p className='text'><span className='te-reo'>{this.props.text.paragraphs[this.props.index].tereo}</span><span className='english'>{this.props.text.paragraphs[this.props.index].english}</span></p>
	  <div>
	    <div className='par-nav'>
	      {(this.props.index > 0) && <p onClick={()=>this.prev()}>&#60;</p>}
	      {(this.props.index < (this.props.text.paragraphs.length - 1)) && <p onClick={()=>this.next()}>&#62;</p>}
	    </div>
	  </div>
	</div>
      </div>
    )
  }
}

export default Text
