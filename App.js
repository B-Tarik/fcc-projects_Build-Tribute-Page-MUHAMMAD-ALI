import React, { Component } from "react";

import Home from "./components/home";
import Timeline from "./components/timeline";
import Achievements from "./components/achievements";
import Quotes from "./components/quotes";
import Credits from "./components/credits";
import Modal from "./components/modal";

import './app.scss';

class App extends Component {
  state = {
    modal: false,
    modalImg: ""
  }

  componentDidMount() {
    this.createSectionsWaypoints()
  }

  createSectionsWaypoints = () => {
    const sections = Array.from(document.getElementsByTagName('section'));
    const navLinks = Array.from(document.getElementsByClassName('nav-link'));

    sections.map((section, i) => {
      
      // scroll down
      new Waypoint({
        element: section,
        handler: direction => {
          if(direction !== 'down') return
          navLinks.map(navLink => navLink.classList.remove('is-current-link'))
          navLinks[i].classList.add('is-current-link')
        },
        offset: '18%'
      });
      
      // scroll up
      new Waypoint({
        element: section,
        handler: direction => {
          if(direction !== 'up') return
          navLinks.map(navLink => navLink.classList.remove('is-current-link'))
          navLinks[i-1].classList.add('is-current-link')
        },
        offset: '50%'
      });
      
    })
    
  }

  showModal = e => {
    this.setState({modal: true, modalImg: e.currentTarget.getAttribute('data-src')})
  }
  
  hideModal = () => {
    this.setState({modal: false});
  }

  render() {
    const {modal, modalImg} = this.state;

    return (
      <React.Fragment>
        
        <Home />
        <Timeline showModal={this.showModal} /> 
        <Achievements /> 
        <Quotes /> 
        <Credits />
        <Modal modal={modal} modalImg={modalImg} hideModal={this.hideModal} />
        
      </React.Fragment>
    )
    
  }
}


export default App;
