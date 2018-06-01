import React from 'react'
import { connect } from 'react-redux'
import { CSSTransitionGroup } from 'react-transition-group'
import {navigate} from '../actions/opening'
import Stagger from 'react-css-stagger'

class Opening extends React.Component {
    constructor(props) {
      super(props)
        this.state = {
            isVisible: ['enter'],
            unified: false
            }
            this.makeVisible = this.makeVisible.bind(this)
            this.revealAll = this.revealAll.bind(this)
  }

// componentDidMount() {
//   this.setState({
//     isVisible: [text],
//     unified: false
//   })
// }
makeVisible(text) {
  this.setState({
    isVisible: [text],
    unified: false
  })
}

revealAll() {
    this.setState({
      isVisible: [],
      unified:true
    })
}


render(){
  return (
    <div className='opening'>
      <div className='veil'>
          {/* {this.makeVisible('enter')}/>} */}
          {/* {this.state.isVisible.find(text => text=='culture' || text=='technology') && <div className='left-things text' onClick={()=>this.makeVisible('technology')}><span className='english'>CULTURE</span><span className='te-reo'>TE AHUREA</span></div>}
          {this.state.isVisible.find(text => text =='technology') && <div className='right-things text' onClick={()=>this.makeVisible('past')}><span className='english'>TECHNOLOGY</span><span className='te-reo'>TE HANGARAU</span></div>}
          {this.state.isVisible.find(text => text== 'past' || text == 'future') && <div className='left-things text'onClick={()=>this.makeVisible('future')}><span className='english'>PAST</span><span className='te-reo'>NGA RĀ O MUA</span></div>}
          {this.state.isVisible.find(text => text == 'future') && <div className='right-things text' onClick={()=>this.makeVisible('wairua')}><span className='english'>FUTURE</span><span className='te-reo'>NGA RĀ O MURI</span></div>}
          {this.state.isVisible.find(text => text == 'wairua' ||text == 'marama') && <div className='left-things text' onClick={()=>this.makeVisible('marama')}><span className='english'>PHYSICAL WORLD</span><span className='te-reo'>TE AO MĀRAMA</span></div>}
          {this.state.isVisible.find(text => text == 'marama') && <div className='right-things text' onClick={this.revealAll}><span className='english'>SPIRITUAL WORLD</span><span className='te-reo'>TE AO WAIRUA</span></div>} */}
            {this.state.isVisible.find(text => text == 'enter') && <a className='enter-site text' onClick={()=>this.props.dispatch(navigate('home'))}><span className='english'>ENTER</span><span className='te-reo'>HAERE MAI</span></a>}

        {this.state.unified && <div className='together' onClick={()=>this.makeVisible('enter')}>
        {/* <Stagger transition="fadeIn" delay={200}>
        <div className='tog-thin text'><span className='english'>CULTURE</span><span className='te-reo'>TE AHUREA</span></div>
        <div className='tog-fat text'><span className='english'>TECHNOLOGY</span><span className='te-reo'>TE HANGARAU</span></div>
        <div className='tog-thin text'><span className='english'>PAST</span><span className='te-reo'>NGA RĀ O MUA</span></div>
        <div className='tog-fat text'><span className='english'>FUTURE</span><span className='te-reo'>NGA RĀ O MURI</span></div>
        <div className='tog-thin text'><span className='english'>PHYSICAL WORLD</span><span className='te-reo'>TE AO MĀRAMA</span></div>
        <div className='tog-fat text'><span className='english'>SPIRITUAL WORLD</span><span className='te-reo'>TE AO WAIRUA</span></div>
        </Stagger> */}
        </div>}
      </div>
    </div>

  )
}

}

const mapStateToProps = (state) => {
  return {
    destination: state.destination
  }
}


export default connect(mapStateToProps)(Opening)
