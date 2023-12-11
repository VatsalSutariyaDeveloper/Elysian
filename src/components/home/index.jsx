import React, { useEffect, useState } from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
import phoneImg from '../../assets/images/phone-icon.png'
import emailImg from '../../assets/images/email-icon.png'
import banner1 from '../../assets/images/banner-01.jpg'
import banner2 from '../../assets/images/banner-02.jpg'
import banner3 from '../../assets/images/banner-03.jpg'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import properties_data from '../pages/PropertiesData';
import { Link,NavLink } from 'react-router-dom'

const images = [
  { img: banner1, city: "Toronto", country: "Canada", text1: `Hurry! Get the Best Villa for you` },
  { img: banner2, city: "Melbourne", country: "Australia", text1: `Be Quick! Get the best villa in town` },
  { img: banner3, city: "Miami", country: "South Florida", text1: `Act Now! Get the penthouse` },
];

const Hero = () => {
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
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

  const filteredProperties = activeCategory === 'all' ? properties_data : properties_data.filter(property => property.category === activeCategory);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

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
                <h2>Best Apartment &amp; Sea view</h2>
              </div>
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" aria-expanded="true" aria-controls="collapseOne">
                      Best useful links ?
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      Get <strong>the best villa</strong> website template in HTML CSS and Bootstrap htmlFor your business. TemplateMo provides you the <Link to="https://www.google.com/search?q=best+free+css+templates" target="_blank">best free CSS templates</Link> in the world. Please tell your friends about it.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" aria-expanded="false" aria-controls="collapseTwo">
                      How does this work ?
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      Dolor <strong>almesit amet</strong>, consectetur adipiscing elit, sed doesn't eiusmod tempor incididunt ut labore consectetur <code>adipiscing</code> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" aria-expanded="false" aria-controls="collapseThree">
                      Why is Villa Agency the best ?
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
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
                      <h2 className="timer count-title count-number font-montserrat font-bold" data-to="34" data-speed="1000">34</h2>
                      <p className="count-text font-palanquin">Buildings<br />Finished Now</p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="counter">
                      <h2 className="timer count-title count-number font-montserrat font-bold" data-to="12" data-speed="1000">12</h2>
                      <p className="count-text font-palanquin">Years<br />Experience</p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="counter">
                      <h2 className="timer count-title count-number font-montserrat font-bold" data-to="24" data-speed="1000">24</h2>
                      <p className="count-text font-palanquin">Awards<br />Won 2023</p>
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
            <div className="section properties">
              <div className="container">
                <ul className="properties-filter">
                  <li>
                    <Link className={activeCategory === 'all' ? 'is_active' : ''} onClick={() => handleCategoryChange('all')}>
                      Show All
                    </Link>
                  </li>
                  <li>
                    <Link className={activeCategory === 'Apartment' ? 'is_active' : ''} onClick={() => handleCategoryChange('Apartment')}>
                      Apartment
                    </Link>
                  </li>
                  <li>
                    <Link className={activeCategory === 'Villa House' ? 'is_active' : ''} onClick={() => handleCategoryChange('Villa House')}>
                      Villa House
                    </Link>
                  </li>
                  <li>
                    <Link className={activeCategory === 'Penthouse' ? 'is_active' : ''} onClick={() => handleCategoryChange('Penthouse')}>
                      Penthouse
                    </Link>
                  </li>
                </ul>
                <div className="row properties-box">
                  {filteredProperties.map((property, index) => (
                    <div key={index} className={`col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 ${property.category}`}>
                      <Link to={`/properties-details/${property.index}`}>
                        <div className="item">
                          <img src={property.image} alt="" />
                          <span className="category">{property.category}</span>
                          <h6>{property.price}</h6>
                          <h4>{property.address}</h4>
                          <ul>
                            <li>Bedrooms: <span>{property.bedrooms}</span></li>
                            <li>Bathrooms: <span>{property.bathrooms}</span></li>
                            <li>Area: <span>{property.area}</span></li>
                            <li>Floor: <span>{property.floor}</span></li>
                            <li>Parking: <span>{property.parking}</span></li>
                          </ul>
                          <div className="main-button">
                            <Link to={`/properties-details/${property.index}`}>View Detail</Link>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
