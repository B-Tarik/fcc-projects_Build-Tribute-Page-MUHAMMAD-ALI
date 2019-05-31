import React, { Component } from "react";

class Home extends Component {
  
  homeRef = React.createRef();
  navRef = React.createRef();

  componentDidMount() {
    this.createHeaderWaypoint();
    this.toggleFixedNav();
  }

  createHeaderWaypoint = () => {
    new Waypoint({
      element: this.homeRef.current,
      handler: direction => {
        if(direction === 'down') this.navRef.current.classList.add('home-nav--fixed')
        else this.navRef.current.classList.remove('home-nav--fixed')
      },
      offset: '-100%'
    });
  }
  
  toggleFixedNav = () => {
    let lastScrollTop = 0;
    
    window.addEventListener("scroll", () => { 
      let st = window.pageYOffset || document.documentElement.scrollTop; 
      
      if (st > lastScrollTop) this.navRef.current.classList.remove('home-nav--show')
      else this.navRef.current.classList.add('home-nav--show')
      
      lastScrollTop = st <= 0 ? 0 : st; 
    });
  }
  
  render() {
    return (
      <section ref={this.homeRef} id="home" className="home">
        <div className="home-infos">
          <nav className="home-nav" ref={this.navRef}>
            <ul>
              <li><a id="home-link" className="nav-link" href='#home' rel="internal">Home</a></li>
              <li><a id="timeline-link" className="nav-link" href='#timeline' rel="internal">Timeline</a></li>
              <li><a id="achievements-link" className="nav-link" href='#achievements' rel="internal">Achievements</a></li>
              <li><a id="quotes-link" className="nav-link" href='#quotes' rel="internal">Quotes</a></li>
              <li><a id="credits-link" className="nav-link" href='#credits' rel="internal">Credits</a></li>
            </ul>
          </nav>
          <div className="home-title">
            <h1 tabIndex="0">MUHAMMAD ALI</h1><span className="home-date">1942 - 2016</span>
          </div>
          <div className="home-gold-line"></div>
        </div>
        <div className="home-quote-wrapper">
          <div className="home-quote">
            <img className="lazyload blur-up home-quote-img" src="https://i.postimg.cc/MG9Lv1zQ/ali-blur.png" data-src="https://i.postimg.cc/HsNfq2k8/ali.png" alt="muhammad ali"/>
            <div className="home-quote-signature">
              <p><strong>I'm the greatest</strong><br/>
                i said that before i knew i was</p>
              <img src="https://i.postimg.cc/Kzk2kHjb/ali-signature.png" alt=""/>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Home;
