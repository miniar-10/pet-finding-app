import React from 'react'
import mail from '../stories/assets/mail.png'
import phone from '../stories/assets/phone.png'
import mapMarker from '../stories/assets/place-marker-icon.png'
import telegram from'../stories/assets/telegram.png'
import logo from'../stories/assets/logo.png'
import facebook from '../stories/assets/facebook-icon.png'
import twitter from '../stories/assets/twitter-icon.png'
import google from '../stories/assets/google-icon.png'


import './footer.css'

export default function Footer (){
    return (<footer className="footer-section">
        <div className="container">
            <div className="footer-cta pt-5 pb-5">
                <div className="row">
                    
                        <div className="single-cta">
                            <img src={mapMarker} className="fas fa-map-marker-alt" ></img>
                            <div className="cta-text">
                                <h4>Find us</h4>
                                <span className='footer-span'>Rue Sidi AbedElhak, 5090, Bekalta, Monastir</span>
                            </div>
                    </div>
                        <div className="single-cta">
                            <img src={phone} className="fas fa-phone"></img>
                            <div className="cta-text">
                                <h4>Call us</h4>
                                <span>+216 92 338 264 </span>                                 <br></br>
                                <span>+216 23 096 549 </span>
                            </div>
                    </div>
                    
                        <div className="single-cta">
                            <img src={mail} className="far fa-envelope-open"></img>
                            <div className="cta-text">
                                <h4>Send us an email</h4>
                                <span>contact@smarty.tn</span>
                            </div>
                        </div>
                    </div>
              
            </div>
            <div className="footer-content pt-5 pb-5">
                <div className="row2">
                        <div className="footer-widget">
                            <div className="footer-logo">
                                <a href="index.html"><img src={logo} className="img-fluid" alt="logo"></img></a>
                            </div>
                            <div className="footer-text">
                                <p className='footer-text-p'>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                                elit,Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div className="footer-social-icon">
                                <span className='footer-social-icon-span'>Follow us</span>
                                <a href="#"><img src={google} className='footer-social-icon-a'></img></a>
                                <a href="#" className='footer-social-icon-a'><img src={twitter} className='footer-social-icon-a'></img></a>
                                <a href="#" className='footer-social-icon-a'><img src={facebook} className='footer-social-icon-a'></img></a>
                            </div>
                        </div>
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3 className='footer-widget-heading-h3'>useful links</h3>
                            </div>
                            <ul className="footer-list" >
                                <li className='footer-widget-li'><a href="#">Home</a></li>
                                
                                <li className='footer-widget-li'><a href="#">Our services</a></li>
                               
                                <li className='footer-widget-li'><a href="#">Our pets</a></li>
                                
                                <li className='footer-widget-li'><a href="#">Our team </a></li>
                            
                                <li className='footer-widget-li'><a href="#">Contact us</a></li>
                              
                            </ul>
                    </div>
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3 className='footer-widget-heading-h3'>Subscribe</h3>
                            </div>
                            <div className="footer-text mb-25">
                                <p className='footer-text-p'>Don’t miss to subscribe to our new pets, kindly fill the form below.</p>
                            </div>
                            <div className="subscribe-form">
                                <form action="#">
                                    <input className='subscribe-form-input' type="text" placeholder="Email Address"></input>
                                    <img src={telegram} className='subscribe-form-btn'></img>
                                </form>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        <div className="copyright-area">
            <div className="container">
                <div className="row row3">
                    <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div className="copyright-text">
                            <p>Copyright &copy; 2018, All Right Reserved <a href="https://codepen.io/anupkumar92/">petFinder</a></p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                        <div className="footer-menu">
                            <ul className="footer-list-copyrights" >
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Terms</a></li>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Policy</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    );
}