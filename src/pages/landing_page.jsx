import React, { Component } from "react";
import {
  FaTh,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
} from "react-icons/fa";

class LandingPage extends Component {
  render() {
    return (
      <React.Fragment>
        <html className="no-js" lang="en">
          <head>
            <meta charSet="utf-8" />
            <title>Dazzle</title>
            <meta name="description" content="" />
            <meta name="author" content="" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="stylesheet" href="/css/base.css" />
            <link rel="stylesheet" href="/css/vendor.css" />
            <link rel="stylesheet" href="/css/main.css" />
            <script href="/js/js/modernizr.js"></script>
            <script src="/js/js/pace.min.js"></script>
            <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
            <link rel="icon" href="favicon.ico" type="image/x-icon" />
          </head>
          <body id="top">
            <header id="header" className="row">
              <div className="header-logo">
                <a href="index.html">Dazzle</a>
              </div>

              <nav id="header-nav-wrap">
                <ul className="header-main-nav">
                  <li className="current">
                    <a className="smoothscroll" href="#home" title="home">
                      Home
                    </a>
                  </li>
                  <li>
                    <a className="smoothscroll" href="#about" title="about">
                      About
                    </a>
                  </li>
                  <li>
                    <a className="smoothscroll" href="#pricing" title="pricing">
                      Pricing
                    </a>
                  </li>
                </ul>

                <a
                  href="#"
                  title="sign-up"
                  className="button button-primary cta"
                >
                  Sign Up
                </a>
              </nav>

              <a className="header-menu-toggle" href="#">
                <span>Menu</span>
              </a>
            </header>

            <section
              id="home"
              data-parallax="scroll"
              data-image-src="images/hero-bg.jpg"
              data-natural-width="3000"
              data-natural-height="2000"
            >
              <div className="overlay"></div>
              <div className="home-content">
                <div className="row contents">
                  <div className="home-content-left">
                    <h3 data-aos="fade-up">Welcome to Dazzle</h3>

                    <h1 data-aos="fade-up">
                      Creative Landing Page to Showcase Your Amazing App.
                    </h1>

                    <div className="buttons" data-aos="fade-up">
                      <a
                        href="#download"
                        className="smoothscroll button stroke"
                      >
                        <span
                          className="icon-circle-down"
                          aria-hidden="true"
                        ></span>
                        Download App
                      </a>
                      <a
                        href="http://player.vimeo.com/video/14592941?title=0&amp;byline=0&amp;portrait=0&amp;color=39b54a"
                        data-lity
                        className="button stroke"
                      >
                        <span className="icon-play" aria-hidden="true"></span>
                        Watch Video
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <ul className="home-social-list">
                <li>
                  <a href="#">
                    <i className="fa fa-facebook-square"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-youtube-play"></i>
                  </a>
                </li>
              </ul>

              <div className="home-scrolldown">
                <a href="#about" className="scroll-icon smoothscroll">
                  <span>Scroll Down</span>
                  <i className="icon-arrow-right" aria-hidden="true"></i>
                </a>
              </div>
            </section>

            <section id="about">
              <div className="row about-intro">
                <div className="col-four">
                  <h1 className="intro-header" data-aos="fade-up">
                    About Our App
                  </h1>
                </div>
                <div className="col-eight">
                  <p className="lead" data-aos="fade-up">
                    Excepteur enim magna veniam labore veniam sint. Ex aliqua
                    esse proident ullamco voluptate. Nisi nisi nisi aliqua
                    eiusmod dolor dolor proident deserunt occaecat elit Lorem
                    reprehenderit. Id culpa veniam ex aliqua magna elit pariatur
                    do nulla. Excepteur enim magna veniam labore veniam sint.
                  </p>
                </div>
              </div>

              <div className="row about-features">
                <div className="features-list block-1-3 block-m-1-2 block-mob-full group">
                  <div className="bgrid feature" data-aos="fade-up">
                    <span className="icon">
                      <i className="icon-window"></i>
                    </span>

                    <div className="service-content">
                      <h3>Fully Resposive</h3>

                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut
                        odit aut fugit.
                      </p>
                    </div>
                  </div>

                  <div className="bgrid feature" data-aos="fade-up">
                    <span className="icon">
                      <i className="icon-image"></i>
                    </span>

                    <div className="service-content">
                      <h3>Retina Ready</h3>

                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut
                        odit aut fugit.
                      </p>
                    </div>
                  </div>

                  <div className="bgrid feature" data-aos="fade-up">
                    <span className="icon">
                      <i className="icon-paint-brush"></i>
                    </span>

                    <div className="service-content">
                      <h3>Stylish Design</h3>

                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut
                        odit aut fugit.
                      </p>
                    </div>
                  </div>

                  <div className="bgrid feature" data-aos="fade-up">
                    <span className="icon">
                      <i className="icon-file"></i>
                    </span>

                    <div className="service-content">
                      <h3>Clean Code</h3>

                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut
                        odit aut fugit.
                      </p>
                    </div>
                  </div>

                  <div className="bgrid feature" data-aos="fade-up">
                    <span className="icon">
                      <i className="icon-sliders"></i>
                    </span>

                    <div className="service-content">
                      <h3>Easy To Customize</h3>

                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut
                        odit aut fugit.
                      </p>
                    </div>
                  </div>

                  <div className="bgrid feature" data-aos="fade-up">
                    <span className="icon">
                      <i className="icon-gift"></i>
                    </span>

                    <div className="service-content">
                      <h3>Free of Charge</h3>

                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut
                        odit aut fugit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row about-how">
                <h1 className="intro-header" data-aos="fade-up">
                  How The App Works?
                </h1>

                <div className="about-how-content" data-aos="fade-up">
                  <div className="about-how-steps block-1-2 block-tab-full group">
                    <div className="bgrid step" data-item="1">
                      <h3>Sign-Up</h3>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                      </p>
                    </div>

                    <div className="bgrid step" data-item="2">
                      <h3>Upload</h3>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                      </p>
                    </div>

                    <div className="bgrid step" data-item="3">
                      <h3>Create</h3>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                      </p>
                    </div>

                    <div className="bgrid step" data-item="4">
                      <h3>Publish</h3>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row about-bottom-image">
                <img
                  src="images/app-screens-1200.png"
                  srcSet="
            images/app-screens-600.png   600w,
            images/app-screens-1200.png 1200w,
            images/app-screens-2800.png 2800w
          "
                  sizes="(max-width: 2800px) 100vw, 2800px"
                  alt="App Screenshots"
                  data-aos="fade-up"
                />
              </div>
            </section>

            <section id="pricing">
              <div className="row pricing-content">
                <div className="col-four pricing-intro">
                  <h1 className="intro-header" data-aos="fade-up">
                    Our Pricing Options
                  </h1>

                  <p data-aos="fade-up">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Sed ut
                    perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium.
                  </p>
                </div>

                <div className="col-eight pricing-table">
                  <div className="row">
                    <div className="col-six plan-wrap">
                      <div className="plan-block" data-aos="fade-up">
                        <div className="plan-top-part">
                          <h3 className="plan-block-title">Lite Plan</h3>
                          <p className="plan-block-price">
                            <sup>$</sup>25
                          </p>
                          <p className="plan-block-per">Per Month</p>
                        </div>

                        <div className="plan-bottom-part">
                          <ul className="plan-block-features">
                            <li>
                              <span>3GB</span> Storage
                            </li>
                            <li>
                              <span>10GB</span> Bandwidth
                            </li>
                            <li>
                              <span>5</span> Databases
                            </li>
                            <li>
                              <span>30</span> Email Accounts
                            </li>
                          </ul>

                          <a className="button button-primary large" href="">
                            Get Started
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="col-six plan-wrap">
                      <div className="plan-block primary" data-aos="fade-up">
                        <div className="plan-top-part">
                          <h3 className="plan-block-title">Pro Plan</h3>
                          <p className="plan-block-price">
                            <sup>$</sup>50
                          </p>
                          <p className="plan-block-per">Per Month</p>
                        </div>

                        <div className="plan-bottom-part">
                          <ul className="plan-block-features">
                            <li>
                              <span>5GB</span> Storage
                            </li>
                            <li>
                              <span>20GB</span> Bandwidth
                            </li>
                            <li>
                              <span>15</span> Databases
                            </li>
                            <li>
                              <span>70</span> Email Accounts
                            </li>
                          </ul>

                          <a className="button button-primary large" href="">
                            Get Started
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <footer>
                <div className="footer-main">
                  <div className="row">
                    <div className="col-three md-1-3 tab-full footer-info">
                      <div className="footer-logo"></div>

                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pellentesque in ipsum id orci porta dapibus. Vivamus
                        magna justo, lacinia eget consectetur sed, convallis at
                        tellus.
                      </p>

                      <ul className="footer-social-list">
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook-square"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-behance"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-dribbble"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="col-three md-1-3 tab-1-2 mob-full footer-contact">
                      <h4>Contact</h4>

                      <p>
                        1600 Amphitheatre Parkway
                        <br />
                        Mountain View, CA <br />
                        94043 US
                        <br />
                      </p>

                      <p>
                        someone@dazzlesite.com <br />
                        Phone: (+63) 555 1212 <br />
                        Fax: (+63) 555 0100
                      </p>
                    </div>

                    <div className="col-two md-1-3 tab-1-2 mob-full footer-site-links">
                      <h4>Site Links</h4>

                      <ul className="list-links">
                        <li>
                          <a href="#">Home</a>
                        </li>
                        <li>
                          <a href="#">About Us</a>
                        </li>
                        <li>
                          <a href="#">Blog</a>
                        </li>
                        <li>
                          <a href="#">FAQ</a>
                        </li>
                        <li>
                          <a href="#">Terms</a>
                        </li>
                        <li>
                          <a href="#">Privacy Policy</a>
                        </li>
                      </ul>
                    </div>

                    <div className="col-four md-1-2 tab-full footer-subscribe">
                      <h4>Our Newsletter</h4>

                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      </p>

                      <div className="subscribe-form">
                        <form id="mc-form" className="group">
                          <label
                            htmlFor="mc-email"
                            className="subscribe-message"
                          ></label>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="footer-bottom">
                  <div className="row">
                    <div className="col-twelve">
                      <div className="copyright">
                        <span>© Copyright Dazzle 2018.</span>
                        <span>
                          Design by
                          <a href="http://www.styleshout.com/">styleshout</a>
                        </span>
                      </div>

                      <div id="go-top">
                        <a
                          className="smoothscroll"
                          title="Back to Top"
                          href="#top"
                        >
                          <i className="icon-arrow-up"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </footer>
            </section>

            <div id="preloader">
              <div id="loader"></div>
            </div>

            <script src="js/jquery-2.1.3.min.js"></script>
            <script src="js/plugins.js"></script>
            <script src="js/main.js"></script>
          </body>
        </html>
      </React.Fragment>
    );
  }
}

export default LandingPage;
