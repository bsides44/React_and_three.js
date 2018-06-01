//Our starting component that sprouts inside the index.html div and which all other branches of
//components form.

import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import { connect } from 'react-redux'

import Home from './Home'
import Translation from './Translation'
import {getTexts} from '../actions/texts'
import {getWeather} from '../actions/weather'
import About from './About'
import Opening from './Opening'
// import AR from './AR'

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(getWeather())
    this.props.dispatch(getTexts())
  }

  render() {
    return (

      <Router>
      <div className='app-container section'>
      {this.props.destination == 'opening' && <Route exact path="/" component={Opening}/>}
      {this.props.destination == 'home' ? this.props.text.url == 'about' ? <About /> : <Route exact path='/' component={Home} /> : null}
      <Route exact path="/translation" component={Translation} />
      </div>
      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    destination: state.destination,
    text: state.current_text
  }
}


export default connect(mapStateToProps)(App)
