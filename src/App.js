import LogoPng from './assets/images/logo.png';
import FacebookIconSvg from './assets/images/icon-facebook.svg';
import TwitterIconSvg from './assets/images/icon-twitter.svg';
import InstagramIconSvg from './assets/images/icon-instagram.svg';
import YoutubeIconSvg from './assets/images/icon-youtube.svg';
import Banner1Jpg from './assets/images/banner_1.jpg';
import Banner2Jpg from './assets/images/banner_2.jpg';
import Logo2Svg from './assets/images/logo2.svg';
import BtnPlaySvg from './assets/images/btn-play.svg';
import BtnMoonSvg from './assets/images/btn-moon.svg';
import BtnSunSvg from './assets/images/btn-sun.svg';
import Bg2Png from './assets/images/bg2.png';
import Bg3Jpg from './assets/images/bg3.jpg';

import { useState } from 'react';
import { KANE_ITEMS, PROTOCOL_ITEMS } from './contants';
import ProtocolItem from './components/SharedComponents/ProtocolItem';

const App = () => {
  const [bannerImg, setBannerImg] = useState(0);
  const [selectedKane, setKane] = useState(0);

  return (
    <>
      <nav id='gaman-navbar' className='navbar navbar-expand-lg navbar-dark'>
        <div className='container'>
          <a className='navbar-brand' href='#'>
            <img src={LogoPng} alt='logo' />
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  The Tarnished
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Souls
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Manifesto
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Spirit Guide
                </a>
              </li>
            </ul>
            <ul className='navbar-nav social-nav'>
              <li className='nav-item'>
                <a className='nav-link'>
                  <img src={FacebookIconSvg} alt='facebook' />
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link'>
                  <img src={TwitterIconSvg} alt='twitter' />
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link'>
                  <img src={InstagramIconSvg} alt='instagram' />
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link'>
                  <img src={YoutubeIconSvg} alt='youtube' />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section
        id='section-one'
        style={{
          backgroundImage: `URL(${bannerImg === 0 ? Banner1Jpg : Banner2Jpg})`,
        }}
      >
        <img className='logo' src={Logo2Svg} alt='logo' />
        <div className='btn-play'>
          <img src={BtnPlaySvg} alt='play' />
        </div>
        <div className='day-count-selector'>
          <div
            className={`btn-select ${bannerImg === 1 ? 'active' : ''}`}
            onClick={() => {
              setBannerImg(1);
            }}
          >
            <img src={BtnMoonSvg} alt='moon' />
          </div>
          <div
            className={`btn-select ${bannerImg === 0 ? 'active' : ''}`}
            onClick={() => {
              setBannerImg(0);
            }}
          >
            <img src={BtnSunSvg} alt='sun' />
          </div>
        </div>
      </section>

      <section id='section-two'>
        <img className='img-back' src='./assets/images/bg1.png' alt='bg 1' />
        <div className='book-div'>
          <h3 className='title'>PROLOGUE</h3>
          “In the Age of the Forgotten, the earth was unformed, covered by an
          eerie mist. A land molded for a humanity left fragmented.
          <br />
          <br />
          Destruction and ruin brought by its inhabitants, Stone Giants and
          Elemental Dragons crush those beneath them.
          <br />
          <br />A world shrouded by darkness and evil, the shadows consume the
          light which once brought hope.
          <br />
          <br />
          Ebalees, a spirit forged from fire, banished from the heavens, the
          Dark Sorceress Baezil, and her Witches of Chaos, Phantos the King of
          the undead, harvesting the dead.
          <br />
          <br />
          Their mission to extinguish the flame of Souls
          <br />
          But then there was light, a rekindled flame, from darkness came light,
          from death came life,
        </div>
        <div className='book-div'>
          God’s light shared within the Souls, providing strength in their
          crusades,
          <br />
          <br />
          The Paladin’s lightning spears pierced through the fog, shimmers of
          hope.The Witches obeyed Ebalees, accumulating souls through black
          magic.
          <br />
          <br />
          As he feasted, his power grew and his army spread. Thus began the Age
          of Darkness, but soon the flames will grow, and only light will
          remain.
          <br />
          <br />
          Yet now, we see not light, but only endless nights, veiled in evil.
          <br />
          <br />
          On the brink of annihilation, we turn to the forgotten, the ones with
          purified Souls, For even in dark times, we cannot relinquish the
          things that make us human.
          <br />
          <br />
          Although broken & unspoken, God’s light guides you, within you, <br />
          … you are the Tarnished, this is your destiny.”
        </div>
      </section>

      <div id='section-three'>
        <img className='img-back' src={Bg2Png} alt='bg 2' />
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'></div>
            <div className='col-md-6'>
              <h1 className='title'>MEET KANE</h1>
              <p className='description'>
                Lorem Ipsum is simply dummy text of the printing and type
                setting industry. Lorem Ipsum has been the industry's.
              </p>
              <p className='description'>
                Lorem Ipsum is simply dummy text of the printing and type
                setting industry. Lorem Ipsum has been the industry's.
              </p>
              <div id='item-select-wrapper'>
                {KANE_ITEMS.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className={`btn-item-selector ${
                        item.id === selectedKane ? 'active' : ''
                      }`}
                      onClick={() => {
                        setKane(item.id);
                      }}
                    >
                      <img src={item.imgSrc} alt='select one' />
                      {item.title}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id='section-four'>
        <img className='img-back' src={Bg3Jpg} alt='bg 3' />
        <div className='container'>
          <h1 className='title'>SOULS PROTOCOL</h1>
          <div className='protocol-wrapper'>
            {PROTOCOL_ITEMS.map((item) => {
              return <ProtocolItem key={item.id} protocolItem={item} />;
            })}
          </div>
        </div>
      </section>

      <section id='gaman-footer'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'></div>
            <div className='col-md-6 footer-text'>
              A PVP battle arena where players.
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
