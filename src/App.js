import React, { useState } from 'react';
import './index.css';
import jenckeBall from './img/pattern/jencke-ball.png';
import jenckeSkate from './img/pattern/jencke-skate.png';
import jenckeShorts from './img/pattern/jencke-shorts.png';
import jenckeFoot from './img/pattern/jencke-foot.png';
import welcome from './img/welcome.png';
import fire from './img/fire.png';
import lempeng from './img/lempeng.png';
import jenckeHand from './img/jencke-tangan.png';
import jenckeHand1 from './img/jencke-hand.png';
import mogoMe from './img/mogo-me.png';
import establishArt from './img/establish-art.png';
import settArt from './img/sett-art.png';
import settMarketing from './img/sett-marketing.png';
import koin from './img/koin.png';
import marletingIcon from './img/marleting-icon.png';
import dadu from './img/dadu.png';
import gallery from './img/galery.png';
import redacted from './img/redacted.png';
import rocket from './img/rocket.png';
import bogem from './img/bogem.png';
import ikiAva from './img/Mas-Iki-Ava.png';
import andreAva from './img/mas-andre-ava.png';
import delaAva from './img/Mas-Dela-Ava.png';
import derryAva from './img/Mas-Derry-Ava.png';
import ondeAva from './img/onde-Ava1.png';
import acepAva from './img/mas-acep-ava.png';
import logoTwitter from './img/logo-twitter.png';
import bgLanding from './img/background/bg-landing.jpg';
import bgAbout from './img/background/bg-about.png';
import bgRoadMap from './img/background/bg-roadmap.png';
import HTMLFlipBook from "react-pageflip";

function App(props:any) {
  const [shake, setShake] = useState(false);

  const animate = () => {

      // Button begins to shake
      setShake(true);

      // Buttons stops to shake after 2 seconds
      setTimeout(() => setShake(false), 2000);

  }
  return (
    <div>
      <div className="jencke-bg-landing" style={{ backgroundImage: `url(${bgLanding})`}}>
        <div className="jencke-basketball">
          <img src={jenckeBall} alt="img-pattern" />
        </div>
        <div className="jencke-skate">
          <img src={jenckeSkate} alt="img-pattern" />
        </div>
        <div className="jencke-shorts">
          <img src={jenckeShorts} alt="img-pattern" />
        </div>
        <div className="jencke-foot">
          <img src={jenckeFoot} alt="img-pattern" />
        </div>
        <div className="jencke-container">
          <div className="jencke-header">
            <ul>
              <li><a href="#about">ABOUT</a></li>
              <li className="d-none-mobile"><a href="#roadmapdesktop">ROADMAP</a></li>
              <li className="d-none-desktop"><a href="#roadmapmobile">ROADMAP</a></li>
              <li><a href="#theteam">TEAM</a></li>
              <li><a className="disabled">STAKING<span className="badge">Coming Soon</span></a></li>
              <li><a className="disabled">ART GALLERY<span className="badge">Coming Soon</span></a></li>
            </ul>
          </div>
          <div className="jencke-wrpr-welcome">
            <img src={welcome} alt="img-welcome"/>
          </div>
        </div>
      </div>
      <div id="about">
        <div className="jencke-bg">
          <div className="jencke-wrpr-bg" style={{ backgroundImage: `url(${bgAbout})`}}>
            <div className="lempeng-wrapper">
              <div className="container content-wrapper">
                <span className="fire-ptrn"><img src={fire} alt="fire"/></span>
                <h2>ABOUT US</h2>
                <p>The Jencke Club was created by a community who loves art, urban culture and NFT in 2021. Over the past year we are developing and teamed up with our visual artist ONDE and avid cryptocurrency and NFT enthuasiast, who helped grow the idea and put together a dedicated team to create a world and community surrounding the character, we made a series of this creature called Jencke to rock the world of NFT Community.</p>
                <p>Jencke was inpired from Onde’s childhood sketch of a Cheetah, Fox and Fire hybrid to form this unique character, not only the art was great but we put a lot of meaning and spirit into it such as power, badass that represent “I don’t give a fuck” mentality and attitude. We don’t give a fuck as long as our goals to create a strong community completed. </p>
                <p><span className="bold-text">6,666</span> unique art of Jencke on the Solana- based blockcahin will serve as membership passes which grant access to our exclusive community.</p>
              </div>
            </div>
            <div className="lempeng-wrapper-img">
              <img src={lempeng} alt="lempeng"/>
            </div>
            <span className="jnckehandzmbi-ptrn"><img src={jenckeHand} alt="jencke-hand"/></span>
            <span className="jnckehand-ptrn"><img src={jenckeHand1} alt="jencke-hand1"/></span>
          </div>
        </div>
      </div>
      <div id="roadmapdesktop" className="roadmapdesktop">
        <div className="jencke-bg">
          <div className="jencke-wrpr-bg" style={{ backgroundImage: `url(${bgRoadMap})`}}>
        <HTMLFlipBook width={550}
            height={733}
            size="stretch"
            minWidth={315}
            maxWidth={1000}
            minHeight={400}
            maxHeight={1533}
            maxShadowOpacity={0.5}
            showCover={true} {...props}>

            <div className="roadmap-wrapper page" id="first">
              <div className="roadmap-inner back">
                <div className="click-to-nextpage">
                  <p>Click to next page</p>
                </div>
                <div className="row-one">
                  <h3>PHASE 1:</h3>
                  <div className="wrapper-roadmap-content-right">
                    <p>Developing assets for 6666 Jencke NFTs (132 traits)</p>
                    <img src={mogoMe} alt="mogo"/>
                  </div>
                  <div className="wrapper-roadmap-content-left">
                    <img src={establishArt} alt="establish"/>
                    <p>Developing website and mint page</p>
                  </div>
                  <div className="wrapper-roadmap-content-right">
                    <p>Developing staking page</p>
                    <img src={settArt} alt="sett"/>
                  </div>
                  <div className="wrapper-roadmap-content-left">
                    <img src={establishArt} alt="establish"/>
                    <p>Release $KREA token for staking rewards</p>
                  </div>
                  <div className="wrapper-roadmap-content-right">
                    <p>Applying for listing at Magic Eden</p>
                    <img src={settMarketing} alt="sett"/>
                  </div>
                  <div className="wrapper-roadmap-content-left">
                    <img src={koin} alt="establish"/>
                    <p>Setting up Art DAO wallet</p>
                  </div>
                  <div className="wrapper-roadmap-content-right">
                    <p>Setting up Marketing wallet</p>
                    <img src={marletingIcon} alt="sett"/>
                  </div>
                </div>
              </div>
            </div>

            <div className="roadmap-wrapper page" id="fourth">
              <div className="roadmap-inner front">
                <div className="click-to-backpage">
                  <p>Click to back page</p>
                </div>
                <div className="row-one">
                  <h3>PHASE 2:</h3>
                  <div className="wrapper-roadmap-content-right">
                    <p>Creating 1/1 Jencke's for Solana NFTs key opinion leaders</p>
                    <img src={dadu} alt="dadu"/>
                  </div>
                  <div className="wrapper-roadmap-content-left">
                    <img src={gallery} alt="galery"/>
                    <p>WL collaboration with multiple projects (curated by our artists based on the art)</p>
                  </div>
                  <div className="wrapper-roadmap-content-right">
                    <p>Possible Jencke-fied collaboration with other project</p>
                    <img src={dadu} alt="dadu"/>
                  </div>
                  <div className="wrapper-roadmap-content-left">
                    <img src={gallery} alt="galery"/>
                    <p>Developing raffle system platform ($KREA token will be used for raffles)</p>
                  </div>
                  <div className="wrapper-roadmap-content-right">
                    <p>Developing Art Gallery platform to buy exclusive 1/1 of our artists using $KREA token</p>
                    <img src={dadu} alt="dadu"/>
                  </div>
                  <div className="wrapper-roadmap-content-left punch-content">
                    <span className="redacted1"><img src={redacted} alt="redacted"/></span>
                    <p><span className="bold-text">The Jencke Club holders</span></p>
                    <div className="wrpr-punch">
                      <img src={bogem}/>
                      <span className="redacted2"><img src={redacted} alt="redacted"/></span>
                      <p><span className="bold-text">The Jencke Club</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="roadmap-wrapper page" id="fourth">
              <div className="roadmap-inner front">
                <div className="row-one">
                  <div className="wrapper-roadmap-content-right">
                    <div>
                      <h3 className="phase3">PHASE 3 to infinity:</h3>
                      <div className="wrapper-roadmap-content-right">
                        <p>Scouting for the next potential artist to start a new collection</p>
                        <img src={dadu} alt="dadu"/>
                      </div>
                      <div className="wrapper-roadmap-content-left">
                        <img src={rocket} alt="rocket"/>
                        <p>Establish Art DAO as the go to community for NFT Art</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </HTMLFlipBook>
          </div>
        </div>
      </div>

      <div id="roadmapmobile" className="roadmapmobile">
        <div className="jencke-bg">
          <div className="jencke-wrpr-bg" style={{backgroundColor: '#e2e3df'}}>
            <div className="roadmap-wrapper">
              <span className="shape-ptrn"><img src="../img/shape.png" alt="shape"/></span>
              <div className="roadmap-inner">
                <h2>ROADMAP</h2>
                <div className="row-one">
                  <h3>PHASE 1:</h3>
                  <div className="wrapper-roadmap-content-right">
                    <p>Developing assets for 6666 Jencke NFTs (132 traits)</p>
                    <img src={mogoMe} alt="mogo"/>
                  </div>
                  <div className="wrapper-roadmap-content-left">
                    <img src={establishArt} alt="establish"/>
                    <p>Developing website and mint page</p>
                  </div>
                  <div className="wrapper-roadmap-content-right">
                    <p>Developing staking page</p>
                    <img src={settArt} alt="sett"/>
                  </div>
                  <div className="wrapper-roadmap-content-left">
                    <img src={establishArt} alt="establish"/>
                    <p>Release $KREA token for staking rewards</p>
                  </div>
                  <div className="wrapper-roadmap-content-right">
                    <p>Applying for listing at Magic Eden</p>
                    <img src={settMarketing} alt="sett"/>
                  </div>
                  <div className="wrapper-roadmap-content-left">
                    <img src={koin} alt="establish"/>
                    <p>Setting up Art DAO wallet</p>
                  </div>
                  <div className="wrapper-roadmap-content-right">
                    <p>Setting up Marketing wallet</p>
                    <img src={marletingIcon} alt="sett"/>
                  </div>
                </div>
              </div>
              <div className="roadmap-inner phase2">
                <div className="row-one">
                  <h3>PHASE 2:</h3>
                  <div className="wrapper-roadmap-content-right">
                    <p>Creating 1/1 Jencke's for Solana NFTs key opinion leaders</p>
                    <img src={dadu} alt="dadu"/>
                  </div>
                  <div className="wrapper-roadmap-content-left">
                    <img src={gallery} alt="galery"/>
                    <p>WL collaboration with multiple projects (curated by our artists based on the art)</p>
                  </div>
                  <div className="wrapper-roadmap-content-right">
                    <p>Possible Jencke-fied collaboration with other project</p>
                    <img src={dadu} alt="dadu"/>
                  </div>
                  <div className="wrapper-roadmap-content-left">
                    <img src={gallery} alt="galery"/>
                    <p>Developing raffle system platform ($KREA token will be used for raffles)</p>
                  </div>
                  <div className="wrapper-roadmap-content-right">
                    <p>Developing Art Gallery platform to buy exclusive 1/1 of our artists using $KREA token</p>
                    <img src={dadu} alt="dadu"/>
                  </div>
                  <div className="wrapper-roadmap-content-left punch-content">
                    <span className="redacted1"><img src={redacted} alt="redacted"/></span>
                    <p><span className="bold-text">The Jencke Club holders</span></p>
                    <div className="wrpr-punch">
                      <img src={bogem}/>
                      <span className="redacted2"><img src={redacted} alt="redacted"/></span>
                      <p><span className="bold-text">The Jencke Club</span></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="roadmap-inner" id="phase3">
                <div className="row-one">
                  <div className="wrapper-roadmap-content-right" style={{marginTop: '50px'}}>
                    <div>
                      <h3 className="phase3">PHASE 3 to infinity:</h3>
                      <div className="wrapper-roadmap-content-right">
                        <p>Scouting for the next potential artist to start a new collection</p>
                        <img src={dadu} alt="dadu"/>
                      </div>
                      <div className="wrapper-roadmap-content-left">
                        <img src={rocket} alt="rocket"/>
                        <p>Establish Art DAO as the go to community for NFT Art</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="theteam">
        <div className="jencke-bg">
          <div className="jencke-wrpr-bg" style={{backgroundColor: '#1c1d1f'}}>
            <div className="theteam-wrapper">
              <div className="container team-wrapper">
                <h2>THE TEAM</h2>
                <div className="row row-one wrpr-theteam">
                  <div className="col-md-4">
                    <img src={ikiAva} alt="ava"/>
                    <div className="wrpr-theteam-text">
                      <p>xxxxxxx <span>xxx</span></p>
                      <span>xxxxxxx</span>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <img src={ikiAva} alt="ava"/>
                    <div className="wrpr-theteam-text">
                      <p>xxxxxxx<span>xxxxxxx</span></p>
                      <span>xxxxxxx</span>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <img src={ikiAva} alt="ava"/>
                    <div className="wrpr-theteam-text">
                      <p>xxxxxxx <span>xxxxxxx</span></p>
                      <span>xxxxxxx</span>
                    </div>
                  </div>
                </div>
                <div className="row row-two wrpr-theteam">
                  <div className="col-md-4">
                    <img src={ikiAva} alt="ava"/>
                    <div className="wrpr-theteam-text">
                      <p>xxxxxxx<span>xxxxxxx</span></p>
                      <span>xxxxxxx</span>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <img src={ikiAva} alt="ava"/>
                    <div className="wrpr-theteam-text">
                      <p>xxxxxxx <span>xxxxxxx</span></p>
                      <span>xxxxxxx</span>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <img src={ikiAva} alt="ava"/>
                    <div className="wrpr-theteam-text">
                      <p>thunderKing</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="cntr-footer">
          <a href="https://twitter.com/TheJenckeNFT" target="_blank">
            <div className="wrpr-footer-img">
                <img src={logoTwitter} alt="logo-img"/>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
