import React, { useEffect, useState } from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Isotope from 'isotope-layout';
import videoFrame from '../../assets/images/video-frame.jpg'
import featuredIcon from '../../assets/images/featured-icon.png'
import featured from '../../assets/images/featured.jpg'
import deal1 from '../../assets/images/deal-01.jpg'
import deal2 from '../../assets/images/deal-02.jpg'
import deal3 from '../../assets/images/deal-03.jpg'
import infoIcon1 from '../../assets/images/info-icon-01.png'
import infoIcon2 from '../../assets/images/info-icon-02.png'
import infoIcon3 from '../../assets/images/info-icon-03.png'
import infoIcon4 from '../../assets/images/info-icon-04.png'
import property1 from '../../assets/images/property-01.jpg'
import property2 from '../../assets/images/property-02.jpg'
import property3 from '../../assets/images/property-03.jpg'
import property4 from '../../assets/images/property-04.jpg'
import property5 from '../../assets/images/property-05.jpg'
import property6 from '../../assets/images/property-06.jpg'
import phoneImg from '../../assets/images/phone-icon.png'
import emailImg from '../../assets/images/email-icon.png'
import banner1 from '../../assets/images/banner-01.jpg'
import banner2 from '../../assets/images/banner-02.jpg'
import banner3 from '../../assets/images/banner-03.jpg'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Link,NavLink } from 'react-router-dom'

const images = [
  { img: banner1, city: "Toronto", country: "Canada", text1: `Hurry! Get the Best Villa for you` },
  { img: banner2, city: "Melbourne", country: "Australia", text1: `Be Quick! Get the best villa in town` },
  { img: banner3, city: "Miami", country: "South Florida", text1: `Act Now! Get the penthouse` },
];

const Hero = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return <div id="js-preloader" class="js-preloader">
      <div class="preloader-inner">
        <span class="dot"></span>
        <div class="dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>;
  }
  return (
    <>
      <div className="relative">
        <div className="carousel-container">
          <Carousel
            showIndicators={true}
            showThumbs={false}
            showStatus={false}
            autoPlay
            infiniteLoop
            renderArrowNext={(clickHandler, hasNext) => {
              return (
                hasNext && (
                  <button className="nav_btn nav_btn_right" onClick={clickHandler}>
                    <FontAwesomeIcon icon={faAngleRight} />
                  </button>
                )
              );
            }}
            renderArrowPrev={(clickHandler, hasNext) => {
              return (
                hasNext && (
                  <button onClick={clickHandler} className="nav_btn nav_btn_left">
                    <FontAwesomeIcon icon={faAngleLeft} />
                  </button>
                )
              );
            }}
            renderIndicator={(clickHandler, isSelected, index) => {
              return (
                <li
                  onClick={clickHandler}
                  className={`ind ${isSelected ? "active" : ""}`}
                  key={index}
                  role="button"
                />
              );
            }}
          >
            {images.map(({ img, text1, city, country }, index) => (
              <div className="slide relative" key={index}>
                <img alt={`sample_file_${index}`} src={img} />
                <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                  <div className="text-white text-4xl font-bold bg-center bg-no-repeat bg-cover md:pr-20 lg:pb-320 md:pl-20 mt-0">
                    <span className="bg-white text-[#1e1e1e] text-base font-semibold capitalize p-2 inline-block mb-30">
                      <span className='text-black'>{city},</span> <em className="text-[#f35525]"> {country}</em>
                    </span>
                    <p className="text-sm md:text-[60px] font-extrabold uppercase text-white mt-9">
                      {text1}
                    </p>
                  </div>
                </div>
              </div>
            ))}

          </Carousel>
        </div >
      </div >


      <div className="featured section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="left-image">
                <img src={featured} alt="" />
                <Link to="property-details">
                  <img src={featuredIcon} alt="" style={{ marginLeft: '30px', marginTop: "22px", maxWidth: '60px', padding: '0px' }} />
                </Link>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="section-heading">
                <h6>| Featured</h6>
                <h2>Best Appartment &amp; Sea view</h2>
              </div>
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Best useful links ?
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      Get <strong>the best villa</strong> website template in HTML CSS and Bootstrap htmlFor your business. TemplateMo provides you the <Link to="https://www.google.com/search?q=best+free+css+templates" target="_blank">best free CSS templates</Link> in the world. Please tell your friends about it.</div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      How does this work ?
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      Dolor <strong>almesit amet</strong>, consectetur adipiscing elit, sed doesn't eiusmod tempor incididunt ut labore consectetur <code>adipiscing</code> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Why is Villa Agency the best ?
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      Dolor <strong>almesit amet</strong>, consectetur adipiscing elit, sed doesn't eiusmod tempor incididunt ut labore consectetur <code>adipiscing</code> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="info-table">
                <ul>
                  <li>
                    <img src={infoIcon1} alt="" style={{ maxWidth: '52px' }} />
                    <h4>250 m2<br /><span>Total Flat Space</span></h4>
                  </li>
                  <li>
                    <img src={infoIcon2} alt="" style={{ maxWidth: '52px' }} />
                    <h4>Contract<br /><span>Contract Ready</span></h4>
                  </li>
                  <li>
                    <img src={infoIcon3} alt="" style={{ maxWidth: '52px' }} />
                    <h4>Payment<br /><span>Payment Process</span></h4>
                  </li>
                  <li>
                    <img src={infoIcon4} alt="" style={{ maxWidth: '52px' }} />
                    <h4>Safety<br /><span>24/7 Under Control</span></h4>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="video section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 offset-lg-4">
              <div className="section-heading text-center">
                <h6>| Video View</h6>
                <h2>Get Closer View & Different Feeling</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="video-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="video-frame">
                <img src={videoFrame} alt="" />
                <Link to="https://youtu.be/OzUkvzyBttA?si=RjEVsa6MkX1IwCs1" target="_blank"><i><FontAwesomeIcon icon={faPlay} /></i></Link>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="fun-facts">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="wrapper">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="counter">
                      <h2 className="timer count-title count-number" data-to="34" data-speed="1000"></h2>
                      <p className="count-text ">Buildings<br />Finished Now</p>
                    </div>
                  </div>  
                  <div className="col-lg-4">
                    <div className="counter">
                      <h2 className="timer count-title count-number" data-to="12" data-speed="1000"></h2>
                      <p className="count-text ">Years<br />Experience</p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="counter">
                      <h2 className="timer count-title count-number" data-to="24" data-speed="1000"></h2>
                      <p className="count-text ">Awwards<br />Won 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="section best-deal">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="section-heading">
                <h6>| Best Deal</h6>
                <h2>Find Your Best Deal Right Now!</h2>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="tabs-content">
                <div className="row">
                  <div className="nav-wrapper">
                    <ul className="nav nav-tabs" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="appartment-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#appartment"
                          type="button"
                          role="tab"
                          aria-controls="appartment"
                          aria-selected="true"
                        >
                          Appartment
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="villa-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#villa"
                          type="button"
                          role="tab"
                          aria-controls="villa"
                          aria-selected="false"
                        >
                          Villa House
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="penthouse-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#penthouse"
                          type="button"
                          role="tab"
                          aria-controls="penthouse"
                          aria-selected="false"
                        >
                          Penthouse
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-content" id="myTabContent">
                    {/* Appartment Tab */}
                    <div
                      className="tab-pane fade show active"
                      id="appartment"
                      role="tabpanel"
                      aria-labelledby="appartment-tab"
                    >
                      <div className="row">
                        <div className="col-lg-3">
                          <div className="info-table">
                            <ul>
                              <li>Total Flat Space <span>185 m2</span></li>
                              <li>Floor number <span>26th</span></li>
                              <li>Number of rooms <span>4</span></li>
                              <li>Parking Available <span>Yes</span></li>
                              <li>Payment Process <span>Bank</span></li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <img src={deal1} alt="" />
                        </div>
                        <div className="col-lg-3">
                          <h4>Extra Info About Property</h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, do eiusmod tempor pack incididunt ut labore et
                            dolore magna aliqua quised ipsum suspendisse.
                            <br />
                            <br />
                            When you need free CSS templates, you can simply
                            type TemplateMo in any search engine website. In
                            addition, you can type TemplateMo Portfolio,
                            TemplateMo One Page Layouts, etc.
                          </p>
                          <div className="icon-button">
                            <NavLink to="/properties">
                              <i><FontAwesomeIcon icon={faCalendar} /></i> Schedule a visit
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Villa Tab */}
                    <div
                      className="tab-pane fade"
                      id="villa"
                      role="tabpanel"
                      aria-labelledby="villa-tab"
                    >
                      <div className="row">
                        <div className="col-lg-3">
                          <div className="info-table">
                            <ul>
                              <li>Total Flat Space <span>250 m2</span></li>
                              <li>Floor number <span>26th</span></li>
                              <li>Number of rooms <span>5</span></li>
                              <li>Parking Available <span>Yes</span></li>
                              <li>Payment Process <span>Bank</span></li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <img src={deal2} alt="" />
                        </div>
                        <div className="col-lg-3">
                          <h4>Detail Info About Villa</h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, do eiusmod tempor pack incididunt ut labore et
                            dolore magna aliqua quised ipsum suspendisse.
                            <br />
                            <br />
                            Swag fanny pack lyft blog twee. JOMO ethical copper
                            mug, succulents typewriter shaman DIY kitsch twee
                            taiyaki fixie hella venmo after messenger poutine
                            next level humblebrag swag franzen.
                          </p>
                          <div className="icon-button">
                          <NavLink to="/properties">
                              <i><FontAwesomeIcon icon={faCalendar} /></i> Schedule a visit
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Penthouse Tab */}
                    <div
                      className="tab-pane fade"
                      id="penthouse"
                      role="tabpanel"
                      aria-labelledby="penthouse-tab"
                    >
                      <div className="row">
                        <div className="col-lg-3">
                          <div className="info-table">
                            <ul>
                              <li>Total Flat Space <span>320 m2</span></li>
                              <li>Floor number <span>34th</span></li>
                              <li>Number of rooms <span>6</span></li>
                              <li>Parking Available <span>Yes</span></li>
                              <li>Payment Process <span>Bank</span></li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <img src={deal3} alt="" />
                        </div>
                        <div className="col-lg-3">
                          <h4>Extra Info About Penthouse</h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, do eiusmod tempor pack incididunt ut labore et
                            dolore magna aliqua quised ipsum suspendisse.
                            <br />
                            <br />
                            Swag fanny pack lyft blog twee. JOMO ethical copper
                            mug, succulents typewriter shaman DIY kitsch twee
                            taiyaki fixie hella venmo after messenger poutine
                            next level humblebrag swag franzen.
                          </p>
                          <div className="icon-button">
                          <NavLink to="/properties">
                            <i><FontAwesomeIcon icon={faCalendar} /></i> Schedule a visit
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="properties section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 offset-lg-4">
              <div className="section-heading text-center">
                <h6>| Properties</h6>
                <h2>We Provide The Best Property You Like</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="item">
                <Link to="property-details">
                  <img src={property1} alt="" /></Link>
                <span className="category">Luxury Villa</span>
                <h6>$2.264.000</h6>
                <h4><Link to="property-details">18 New Street Miami, OR 97219</Link></h4>
                <ul>
                  <li>Bedrooms: <span>8</span></li>
                  <li>Bathrooms: <span>8</span></li>
                  <li>Area: <span>545m2</span></li>
                  <li>Floor: <span>3</span></li>
                  <li>Parking: <span>6 spots</span></li>
                </ul>
                <div className="main-button">
                  <Link to="property-details">Schedule a visit</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="item">
                <Link to="property-details"><img src={property2} alt="" /></Link>
                <span className="category">Luxury Villa</span>
                <h6>$1.180.000</h6>
                <h4><Link to="property-details">54 Mid Street Florida, OR 27001</Link></h4>
                <ul>
                  <li>Bedrooms: <span>6</span></li>
                  <li>Bathrooms: <span>5</span></li>
                  <li>Area: <span>450m2</span></li>
                  <li>Floor: <span>3</span></li>
                  <li>Parking: <span>8 spots</span></li>
                </ul>
                <div className="main-button">
                  <Link to="property-details">Schedule a visit</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="item">
                <Link to="property-details"><img src={property3} alt="" /></Link>
                <span className="category">Luxury Villa</span>
                <h6>$1.460.000</h6>
                <h4><Link to="property-details">26 Old Street Miami, OR 38540</Link></h4>
                <ul>
                  <li>Bedrooms: <span>5</span></li>
                  <li>Bathrooms: <span>4</span></li>
                  <li>Area: <span>225m2</span></li>
                  <li>Floor: <span>3</span></li>
                  <li>Parking: <span>10 spots</span></li>
                </ul>
                <div className="main-button">
                  <Link to="property-details">Schedule a visit</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="item">
                <Link to="property-details"><img src={property4} alt="" /></Link>
                <span className="category">Apartment</span>
                <h6>$584.500</h6>
                <h4><Link to="property-details">12 New Street Miami, OR 12650</Link></h4>
                <ul>
                  <li>Bedrooms: <span>4</span></li>
                  <li>Bathrooms: <span>3</span></li>
                  <li>Area: <span>125m2</span></li>
                  <li>Floor: <span>25th</span></li>
                  <li>Parking: <span>2 cars</span></li>
                </ul>
                <div className="main-button">
                  <Link to="property-details">Schedule a visit</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="item">
                <Link to="property-details"><img src={property5} alt="" /></Link>
                <span className="category">Penthouse</span>
                <h6>$925.600</h6>
                <h4><Link to="property-details">34 Beach Street Miami, OR 42680</Link></h4>
                <ul>
                  <li>Bedrooms: <span>4</span></li>
                  <li>Bathrooms: <span>4</span></li>
                  <li>Area: <span>180m2</span></li>
                  <li>Floor: <span>38th</span></li>
                  <li>Parking: <span>2 cars</span></li>
                </ul>
                <div className="main-button">
                  <Link to="property-details">Schedule a visit</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="item">
                <Link to="property-details"><img src={property6} alt="" /></Link>
                <span className="category">Modern Condo</span>
                <h6>$450.000</h6>
                <h4><Link to="property-details">22 New Street Portland, OR 16540</Link></h4>
                <ul>
                  <li>Bedrooms: <span>3</span></li>
                  <li>Bathrooms: <span>2</span></li>
                  <li>Area: <span>165m2</span></li>
                  <li>Floor: <span>26th</span></li>
                  <li>Parking: <span>3 cars</span></li>
                </ul>
                <div className="main-button">
                  <Link to="property-details">Schedule a visit</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* <div className="contact section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 offset-lg-4">
              <div className="section-heading text-center">
                <h6>| Contact Us</h6>
                <h2>Get In Touch With Our Agents</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div id="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12469.776493332698!2d-80.14036379941481!3d25.907788681148624!2m3!1f357.26927939317244!2f20.870722720054623!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x88d9add4b4ac788f%3A0xe77469d09480fcdb!2sSunny%20Isles%20Beach!5e1!3m2!1sen!2sth!4v1642869952544!5m2!1sen!2sth" width="100%" height="500px" frameBorder="0" style={{
                  border: '0',
                  borderRadius: '10px',
                  boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.15)',
                }}
                  allowFullScreen=""></iframe>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="item phone">
                    <img src={phoneImg} alt="" style={{ maxWidth: '52px' }} />
                    <h6>010-020-0340<br /><span>Phone Number</span></h6>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="item email">
                    <img src={emailImg} alt="" style={{ maxWidth: '52px' }} />
                    <h6>info@villa.co<br /><span>Business Email</span></h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <form id="contact-form" action="" method="post">
                <div className="row">
                  <div className="col-lg-12">
                    <fieldset>
                      <label htmlFor="name">Full Name</label>
                      <input type="name" name="name" id="name" placeholder="Your Name..." autoComplete="on" required />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <label htmlFor="email">Email Address</label>
                      <input type="text" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your E-mail..." required="" />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <label htmlFor="subject">Subject</label>
                      <input type="subject" name="subject" id="subject" placeholder="Subject..." autoComplete="on" />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <label htmlFor="message">Message</label>
                      <textarea name="message" id="message" placeholder="Your Message"></textarea>
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <button type="submit" id="form-submit" className="orange-button">Send Message</button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default Hero
