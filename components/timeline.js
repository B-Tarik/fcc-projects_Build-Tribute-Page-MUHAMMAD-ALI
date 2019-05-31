import React, {Component} from "react";

import {revealOnScroll, timeline, tlData} from '../data';

class Timeline extends Component {
  
  dataRef = [];

  componentDidMount() {
    revealOnScroll(this.dataRef, '75%')
  }
  
  render() {
    const {showModal} = this.props;
    const data = timeline.map(date => {
      const {title, content, img} = tlData[date]
      const newText = content.split('\n').map((item, i) => {
        return <p key={i}>{item}</p>;
      });
      return (
        <li ref={(e) => this.dataRef.push(e)} key={date} className="timeline-data">
          <div className="data-date">{date}</div>
          <div className="data-title">{title}</div>
          <div className="data-flex">
            {img && (
              <div className="data-image">
                <img 
                  className="lazyload" 
                  src={'../images/placeholder/' + img.split('.')[0] + '.png'}
                  data-src={'../images/' + img} 
                  alt={'Muhammad ali-'+date}
                  onClick={showModal}
                  />
              </div>
            )}
            <div className="data-content">{newText}</div>
          </div>
        </li>
      )
    })
    
    return (
      <section id="timeline" className="timeline">
        <h2 tabIndex="0">Muhammad Ali's Timeline</h2>
        <ul>
          {data}
        </ul>
      </section>
    )
  }
}

export default Timeline;
