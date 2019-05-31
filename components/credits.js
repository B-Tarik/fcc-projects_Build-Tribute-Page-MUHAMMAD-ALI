import React, {Component} from "react";

import {revealOnScroll} from '../data';

class Credits extends Component {
  
  creditsRef = React.createRef();

  componentDidMount() {
    revealOnScroll([this.creditsRef.current], '50%')
  }
  
  render() {
    return (
      <section ref={this.creditsRef} id="credits" className="credits">
        <img className="lazyload credits-aliImg" data-src="../images/ali_credits.jpg" alt="muhammad ali"/>
        <h2 tabIndex="0">Credits</h2>
        <div className="credits-rip">
          <p>Rest in peace&nbsp;</p>
          <strong>Muhammad Ali</strong>, 
          <p>The World Miss You!</p>
        </div>
        <div className="credits-infos">
          sources:
          <div className="credits-sources">
            <a href='https://en.wikipedia.org/wiki/Muhammad_Ali' rel="external" target="_blank">wikipedia</a>
            <a href='https://www.voanews.com/a/muhammad-ali-timeline-boxing-legend/3361565.html' rel="external" target="_blank">voanews</a>
            <a href='https://www.facebook.com/MuhammadAliVerified/' rel="external" target="_blank">facebook</a>
            <a href='https://www.youtube.com/watch?v=c1gCtoxyfF8' rel="external" target="_blank">youtube</a>
            <a href='https://www.geckoandfly.com/14765/16-winning-quotes-muhammad-ali/' rel="external" target="_blank">geckoandfly</a> 
          </div>
          <p className="credits-made">made by B_Tarik</p>
        </div>
      </section>
    )
  }
}

export default Credits;
