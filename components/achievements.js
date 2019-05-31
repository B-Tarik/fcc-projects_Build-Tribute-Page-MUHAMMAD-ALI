import React, {Component} from "react";

import {revealOnScroll} from '../data';

class Achievements extends Component {
  
  videoRef = React.createRef();

  componentDidMount() {
    revealOnScroll([this.videoRef.current], '85%')
  }
  
  render() {
    return (
      <section id="achievements" className="achievements">
        <div className="achievements-content">
          <h2 tabIndex="0">Muhammad Ali's Achievements</h2>
          <p>While Ali's achievements inside the ring were phenomenal:</p>
          <ul>
            <li>
              <a href='https://en.wikipedia.org/wiki/The_Ring_magazine_Fighter_of_the_Year' rel="external" target="_blank">The Ring Fighter of the Year</a>, Ali was named more times than any other fighter. He won the award six times in total.
            </li>
            <li>
              <a href='https://en.wikipedia.org/wiki/The_Ring_magazine_Fight_of_the_Year' rel="external" target="_blank">The Ring magazine Fight of the Year</a>, Ali, who engaged in more 'fight of the year' contests than any other fighter in boxing history; six spanning almost two decades.
            </li>
            <li>
              <a href='https://en.wikipedia.org/wiki/Lineal_championship' rel="external" target="_blank">The Lineal heavyweight champion</a>, Ali remains the only three-time lineal heavyweight champion in the history of boxing.
            </li>
            <li>And <a href='https://en.wikipedia.org/wiki/Boxing_career_of_Muhammad_Ali#Titles_in_boxing' rel="external" target="_blank">more</a>.</li>
          </ul>
          <p> Ali's achievements were outside
            the ring as well:
          </p>
          <iframe ref={this.videoRef} className="achievements-video lazyload" height="315" data-src="https://www.youtube.com/embed/c1gCtoxyfF8" frameBorder="0" allowFullScreen ></iframe>
        </div>
      </section>
    )
  }
}

export default Achievements;
