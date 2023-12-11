import React, { useEffect, useState } from 'react';
import property1 from '../../assets/images/property-01.jpg'
import property2 from '../../assets/images/property-02.jpg'
import property3 from '../../assets/images/property-03.jpg'
import property4 from '../../assets/images/property-04.jpg'
import property5 from '../../assets/images/property-05.jpg'
import property6 from '../../assets/images/property-06.jpg'
import { Link } from 'react-router-dom';

const Properties = () => {
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
            <div className="page-heading header-text">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <span className="breadcrumb"><Link to="#">Home</Link> / Properties</span>
                            <h3>Properties</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section properties">
                <div className="container">
                    <ul className="properties-filter">
                        <li>
                            <Link className="is_active" to="#!" data-filter="*">
                                Show All
                            </Link>
                        </li>
                        <li>
                            <Link to="#!" data-filter=".adv">
                                Apartment
                            </Link>
                        </li>
                        <li>
                            <Link to="#!" data-filter=".str">
                                Villa House
                            </Link>
                        </li>
                        <li>
                            <Link to="#!" data-filter=".rac">
                                Penthouse
                            </Link>
                        </li>
                    </ul>
                    <div className="row properties-box">
                        {/* Repeat the following block for each property */}
                        <div className="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 adv">
                            <div className="item">
                                <Link to="property-details.html">
                                    <img src={property1} alt="" />
                                </Link>
                                <span className="category">Luxury Villa</span>
                                <h6>$2.264.000</h6>
                                <h4>
                                    <Link to="property-details.html">18 Old Street Miami, OR 97219</Link>
                                </h4>
                                <ul>
                                    <li>Bedrooms: <span>8</span></li>
                                    <li>Bathrooms: <span>8</span></li>
                                    <li>Area: <span>545m2</span></li>
                                    <li>Floor: <span>3</span></li>
                                    <li>Parking: <span>6 spots</span></li>
                                </ul>
                                <div className="main-button">
                                    <Link to="property-details.html">Schedule a visit</Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 str">
                            <div class="item">
                                <Link to="property-details.html"><img src={property2} alt="" /></Link>
                                <span class="category">Luxury Villa</span>
                                <h6>$1.180.000</h6>
                                <h4><Link to="property-details.html">54 New Street Florida, OR 27001</Link></h4>
                                <ul>
                                    <li>Bedrooms: <span>6</span></li>
                                    <li>Bathrooms: <span>5</span></li>
                                    <li>Area: <span>450m2</span></li>
                                    <li>Floor: <span>3</span></li>
                                    <li>Parking: <span>8 spots</span></li>
                                </ul>
                                <div class="main-button">
                                    <Link to="property-details.html">Schedule a visit</Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 adv rac">
                            <div class="item">
                                <Link to="property-details.html"><img src={property3} alt="" /></Link>
                                <span class="category">Luxury Villa</span>
                                <h6>$1.460.000</h6>
                                <h4><Link to="property-details.html">26 Mid Street Portland, OR 38540</Link></h4>
                                <ul>
                                    <li>Bedrooms: <span>5</span></li>
                                    <li>Bathrooms: <span>4</span></li>
                                    <li>Area: <span>225m2</span></li>
                                    <li>Floor: <span>3</span></li>
                                    <li>Parking: <span>10 spots</span></li>
                                </ul>
                                <div class="main-button">
                                    <Link to="property-details.html">Schedule a visit</Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 str">
                            <div class="item">
                                <Link to="property-details.html"><img src={property4} alt="" /></Link>
                                <span class="category">Apartment</span>
                                <h6>$584.500</h6>
                                <h4><Link to="property-details.html">12 Hope Street Portland, OR 12650</Link></h4>
                                <ul>
                                    <li>Bedrooms: <span>4</span></li>
                                    <li>Bathrooms: <span>3</span></li>
                                    <li>Area: <span>125m2</span></li>
                                    <li>Floor: <span>25th</span></li>
                                    <li>Parking: <span>2 cars</span></li>
                                </ul>
                                <div class="main-button">
                                    <Link to="property-details.html">Schedule a visit</Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 rac str">
                            <div class="item">
                                <Link to="property-details.html"><img src={property5} alt="" /></Link>
                                <span class="category">Penthouse</span>
                                <h6>$925.600</h6>
                                <h4><Link to="property-details.html">34 Hope Street Portland, OR 42680</Link></h4>
                                <ul>
                                    <li>Bedrooms: <span>4</span></li>
                                    <li>Bathrooms: <span>4</span></li>
                                    <li>Area: <span>180m2</span></li>
                                    <li>Floor: <span>38th</span></li>
                                    <li>Parking: <span>2 cars</span></li>
                                </ul>
                                <div class="main-button">
                                    <Link to="property-details.html">Schedule a visit</Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 rac adv">
                            <div class="item">
                                <Link to="property-details.html"><img src={property5} alt="" /></Link>
                                <span class="category">Modern Condo</span>
                                <h6>$450.000</h6>
                                <h4><Link to="property-details.html">22 Hope Street Portland, OR 16540</Link></h4>
                                <ul>
                                    <li>Bedrooms: <span>3</span></li>
                                    <li>Bathrooms: <span>2</span></li>
                                    <li>Area: <span>165m2</span></li>
                                    <li>Floor: <span>26th</span></li>
                                    <li>Parking: <span>3 cars</span></li>
                                </ul>
                                <div class="main-button">
                                    <Link to="property-details.html">Schedule a visit</Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 rac str">
                            <div class="item">
                                <Link to="property-details.html"><img src={property6} alt="" /></Link>
                                <span class="category">Luxury Villa</span>
                                <h6>$980.000</h6>
                                <h4><Link to="property-details.html">14 Mid Street Miami, OR 36450</Link></h4>
                                <ul>
                                    <li>Bedrooms: <span>8</span></li>
                                    <li>Bathrooms: <span>8</span></li>
                                    <li>Area: <span>550m2</span></li>
                                    <li>Floor: <span>3</span></li>
                                    <li>Parking: <span>12 spots</span></li>
                                </ul>
                                <div class="main-button">
                                    <Link to="property-details.html">Schedule a visit</Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 rac adv">
                            <div class="item">
                                <Link to="property-details.html"><img src={property1} alt="" /></Link>
                                <span class="category">Luxury Villa</span>
                                <h6>$1.520.000</h6>
                                <h4><Link to="property-details.html">26 Old Street Miami, OR 12870</Link></h4>
                                <ul>
                                    <li>Bedrooms: <span>12</span></li>
                                    <li>Bathrooms: <span>15</span></li>
                                    <li>Area: <span>380m2</span></li>
                                    <li>Floor: <span>3</span></li>
                                    <li>Parking: <span>14 spots</span></li>
                                </ul>
                                <div class="main-button">
                                    <Link to="property-details.html">Schedule a visit</Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 rac adv">
                            <div class="item">
                                <Link to="property-details.html"><img src={property4} alt="" /></Link>
                                <span class="category">Luxury Villa</span>
                                <h6>$3.145.000</h6>
                                <h4><Link to="property-details.html">34 New Street Miami, OR 24650</Link></h4>
                                <ul>
                                    <li>Bedrooms: <span>10</span></li>
                                    <li>Bathrooms: <span>12</span></li>
                                    <li>Area: <span>860m2</span></li>
                                    <li>Floor: <span>3</span></li>
                                    <li>Parking: <span>10 spots</span></li>
                                </ul>
                                <div class="main-button">
                                    <Link to="property-details.html">Schedule a visit</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="pagination">
                                <li>
                                    <Link to="#">1</Link>
                                </li>
                                <li>
                                    <Link className="is_active" to="#">
                                        2
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">3</Link>
                                </li>
                                <li>
                                    <Link to="#">Next</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Properties;
