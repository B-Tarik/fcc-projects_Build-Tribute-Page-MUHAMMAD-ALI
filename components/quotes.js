import React, {Component} from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import {revealOnScroll, quotes} from '../data';

class Quotes extends Component {
  state = {
    activeQuote: 0,
  }

  quotesLen = quotes.length
  quotesRef = React.createRef();

  componentDidMount() {
    revealOnScroll([this.quotesRef.current], '30%')
  }

  next = () => {
    this.setState(prevState => (
      {activeQuote: (prevState.activeQuote+1)%this.quotesLen}
    ))
  }
  
    
  prev = () => {
    let {activeQuote} = this.state;
    const prevQuote = activeQuote-1;
    if(prevQuote < 0) activeQuote = this.quotesLen+prevQuote
    else activeQuote = prevQuote
    this.setState({activeQuote})
  }
  
  
  handleClick = e => {
    e.persist()
    console.log(e._targetInst.key)
    this.setState({activeQuote: +e._targetInst.key})
  }
  
  
  quote = () => {
    const {activeQuote} = this.state;
    return (
      <blockquote className={'quote-'+activeQuote}>
      </blockquote>
    )
  }
  

  quotesbuttons = () => {
    const {activeQuote} = this.state;
    const buttons = Array(this.quotesLen).fill().map((_, i) => {
      const btnClass = activeQuote === i ? "quote-button quote-active" : "quote-button";
      return (
        <button
          key={i}
          className={btnClass}
          onClick={this.handleClick}
          >
        </button>
      )})
    
    return (
      <React.Fragment>{buttons}</React.Fragment>
    )
  }
  
  
  render() {
    const {activeQuote} = this.state;
    
    return (
      <section ref={this.quotesRef} id="quotes" className="quotes">
        <img className="lazyload quotes-aliImg" data-src="../images/ali_quotes.jpg" alt="muhammad ali"/>
        <h2 tabIndex="0">Muhammad Ali's Quotes</h2>
          <div className="quote">
            <button 
              className="btn btn-prev" 
              type="button" onClick={this.prev}>
              <svg viewBox="0 0 70.7 141.4" >
                <polygon fill="#FFFFFF" points="10.7,70.7 70.7,141.4 0,70.7 70.7,0 "/>
              </svg>
            </button>

            <TransitionGroup className="quote-block">
              <CSSTransition
                key={activeQuote}
                timeout={450}
                classNames="slide"
                >
                <blockquote>{quotes[activeQuote]}</blockquote>
              </CSSTransition>
            </TransitionGroup>

            <button 
              className="btn btn-next" 
              type="button" onClick={this.next}>
              <svg viewBox="0 0 70.7 141.4" >
                <polygon fill="#FFFFFF" points="59.7,70.7 -0.3,0 70.4,70.7 -0.3,141.4 "/>
              </svg>
            </button>
          </div>
          <div className="quotes-buttons">{this.quotesbuttons()}</div>
      </section>
    )
  }

}

export default Quotes;
