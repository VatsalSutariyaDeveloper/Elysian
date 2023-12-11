import React from 'react';
import { useParams } from 'react-router-dom';
import properties_data from './PropertiesData';
import icon1 from '../../assets/images/info-icon-01.png';
import icon2 from '../../assets/images/info-icon-02.png';
import icon3 from '../../assets/images/info-icon-03.png';
import icon4 from '../../assets/images/info-icon-04.png';

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import deal1 from '../../assets/images/deal-01.jpg'
import deal2 from '../../assets/images/deal-02.jpg'
import deal3 from '../../assets/images/deal-03.jpg'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'

const PropertyDetails = () => {
    const { id } = useParams();

    if (!id) {
        return <p>Property not found</p>;
    }

    const propertyIndex = properties_data.findIndex(property => property.index === parseInt(id, 10));

    if (propertyIndex === -1) {
        return <p>Property not found</p>;
    }

    const property = properties_data[propertyIndex];

    return (
        <>
            <div className="page-heading header-text">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <span className="breadcrumb">
                                <a href="#">Home</a> / Single Property
                            </span>
                            <h3>Single Property</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="single-property section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="main-image">
                                <img src={property.image} alt="" />
                            </div>
                            <div className="main-content">
                                <span className="category">{property.category}</span>
                                <h4>{property.address}</h4>
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Best useful links ?
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                Dolor <strong>almesit amet</strong>, consectetur adipiscing elit, sed doesn't eiusmod tempor kinfolk tonx seitan crucifix 3 wolf moon bicycle rights keffiyeh snackwave wolf same vice, chillwave vexillologist incididunt ut labore consectetur <code>adipiscing</code> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            </div>
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
                                                Dolor <strong>almesit amet</strong>, consectetur adipiscing elit, sed doesn't eiusmod tempor kinfolk tonx seitan crucifix 3 wolf moon bicycle rights keffiyeh snackwave wolf same vice, chillwave vexillologist incididunt ut labore consectetur <code>adipiscing</code> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                Why is Villa the best ?
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                Dolor <strong>almesit amet</strong>, consectetur adipiscing elit, sed doesn't eiusmod tempor kinfolk tonx seitan crucifix 3 wolf moon bicycle rights keffiyeh snackwave wolf same vice, chillwave vexillologist incididunt ut labore consectetur <code>adipiscing</code> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="info-table">
                                <ul>
                                    <li>
                                        <img src={icon1} alt="" style={{ maxWidth: '52px' }} />
                                        <h4>
                                            {property.area}
                                            <br />
                                            <span>Total Flat Space</span>
                                        </h4>
                                    </li>
                                    <li>
                                        <img src={icon2} alt="" style={{ maxWidth: '52px' }} />
                                        <h4>
                                            Contract
                                            <br />
                                            <span>Contract Ready</span>
                                        </h4>
                                    </li>
                                    <li>
                                        <img src={icon3} alt="" style={{ maxWidth: '52px' }} />
                                        <h4>
                                            {property.price}
                                            <br />
                                            <span>Price</span>
                                        </h4>
                                    </li>
                                    <li>
                                        <img src={icon4} alt="" style={{ maxWidth: '52px' }} />
                                        <h4>
                                            {property.floor}
                                            <br />
                                            <span>Floor</span>
                                        </h4>
                                    </li>
                                </ul>
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
                                                        <Link to="property-details">
                                                            <i><FontAwesomeIcon icon={faCalendar} /></i> Schedule a visit
                                                        </Link>
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
                                                        <Link to="property-details">
                                                            <i><FontAwesomeIcon icon={faCalendar} /></i> Schedule a visit
                                                        </Link>
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
                                                        <Link to="property-details">
                                                            <i><FontAwesomeIcon icon={faCalendar} /></i> Schedule a visit
                                                        </Link>
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
        </>
    );
};

export default PropertyDetails;