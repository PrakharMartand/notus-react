import React from "react";
import backgroundImage from "../../src/assets/img/machinesbg1.jpg";
import workshopImage from "../../src/assets/img/workshop1.jpg";
import { Link } from "react-router-dom";
import abb from "../../src/assets/img/abb.webp";
import siemens from "../../src/assets/img/Siemens.webp";
import schneider from "../../src/assets/img/schneider.webp";
import amtech from "../../src/assets/img/amtech.webp";
import cginc from "../../src/assets/img/CG.webp";
import invt from "../../src/assets/img/INVT.png";
import vechi from "../../src/assets/img/Vechi.avif";
import slanvert from "../../src/assets/img/Slanvert.webp";
import plc from "../../src/assets/img/PLC.jpg";
import vfd from "../../src/assets/img/VFD.webp";
import lv from "../../src/assets/img/LV.webp";
import profilePic from "../assets/img/gaurav.png";
// components

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import FooterSmall from "components/Footers/FooterSmall.js";

export default function Landing() {
  return (
    <>
      <Navbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                `url(${backgroundImage})`,
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                      Welcome to <br/>
                      <span className="text-blueGray-200">GTech Automation</span>
                  </h1>
                  <hr className="mx-auto mt-4"/>
                  <p className="mt-4 text-lg text-white font-bold">
                    Your Vision, Our Mission - Driving Innovation, Delivering Excellence, and Building a Better Tomorrow Together.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-award"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Awarded Agency</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Well known company in the field of automation and repair services.
                      Grows with the latest technologies and provides the best services to our clients.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                      <i className="fas fa-retweet"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Quality Services</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      We provide the best services to our clients with the latest technologies and tools.
                      We are committed to providing the best services to our clients.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                      <i className="fas fa-fingerprint"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Quality Assurance</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      We are committed to providing the best services to our clients.
                      We are committed to providing the best services to our clients.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-purple-400">
                      <i className="fas fa-flask"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Innovation</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      We are committed to providing the best services to our clients.
                      We are committed to providing the best services to our clients.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-yellow-500">
                      <i className="fas fa-thumbs-up"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Customer Satisfaction</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Write a few lines about each one. A paragraph describing a
                      feature will be enough. Keep you user engaged!
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-pink-500">
                      <i className="fas fa-calendar-alt"></i>
                    </div>
                    <h6 className="text-xl font-semibold">On Time Delivery</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                        Our team is dedicated to efficient project management, so you can always count on us to deliver on time, every time.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-user-friends text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Working with us is a pleasure
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                  Don't let your uses guess by attaching tooltips and popoves to
                  any element. Just make sure you enable them first via
                  JavaScript.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                  The kit comes with three pre-built pages to help you get
                  started faster. You can change the text and images and you're
                  good to go. Just make sure you enable them first via
                  JavaScript.
                </p>
                <Link to="/" className="font-bold text-blueGray-700 mt-8">
                  Check Notus React!
                </Link>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-lightBlue-500 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      Top Notch Services
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      The Arctic Ocean freezes every winter and much of the
                      sea-ice then thaws every summer, and that process will
                      continue whatever happens.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20">
        <div class="products-section">
        <div class="section-header">
            <h2 class="section-title">Our Products</h2>
            <p class="section-subtitle">Innovative solutions designed to transform your industrial operations with cutting-edge technology</p>
        </div>

        <div class="cards-container">
            <div class="product-card">
                <div class="card-image automation">
                    <img src={plc} alt="PLC" />
                </div>
                <div class="card-content">
                    <div class="card-tags">
                        <span class="tag">Automation</span>
                        <span class="tag">Control</span>
                        <span class="tag">Repair</span>
                        <span class="tag">PLC</span>
                    </div>
                    <h3 class="card-title">PLC Automation Systems</h3>
                    <p class="card-description">Advanced automation solutions for manufacturing processes with real-time monitoring and control capabilities.</p>
                </div>
                <div class="card-footer">
                    <a href="#" class="card-button">Learn More</a>
                </div>
            </div>

            <div class="product-card">
                <div class="card-image industrial">
                    <img src={vfd} alt="VFD" />
                </div>
                <div class="card-content">
                    <div class="card-tags">
                        <span class="tag">Repair</span>
                        <span class="tag">VFD</span>
                    </div>
                    <h3 class="card-title">Variable Frequency Drives</h3>
                    <p class="card-description">High-performance motor control solutions for energy efficiency and precise speed regulation in industrial applications.</p>
                </div>
                <div class="card-footer">
                    <a href="#" class="card-button">Learn More</a>
                </div>
            </div>

            <div class="product-card">
                <div class="card-image analytics">
                    <img src={lv} alt="LV" />
                </div>
                <div class="card-content">
                    <div class="card-tags">
                        <span class="tag">Low Voltage</span>
                        <span class="tag">Repair</span>
                        <span class="tag">LV</span>
                    </div>
                    <h3 class="card-title">Low Voltage Binding Machine</h3>
                    <p class="card-description">Services for low voltage binding machine.</p>
                </div>
                <div class="card-footer">
                    <a href="#" class="card-button">Learn More</a>
                </div>
            </div>

            {/* <div class="product-card">
                <div class="card-image iot">
                    <div class="card-icon">🌐</div>
                </div>
                <div class="card-content">
                    <div class="card-tags">
                        <span class="tag">IoT</span>
                        <span class="tag">connectivity</span>
                        <span class="tag">sensors</span>
                    </div>
                    <h3 class="card-title">IoT Connectivity Solutions</h3>
                    <p class="card-description">Seamless device connectivity and data collection for Industry 4.0 implementations with secure protocols.</p>
                </div>
                <div class="card-footer">
                    <a href="#" class="card-button">Learn More</a>
                </div>
            </div>

            <div class="product-card">
                <div class="card-image safety">
                    <div class="card-icon">🛡️</div>
                </div>
                <div class="card-content">
                    <div class="card-tags">
                        <span class="tag">safety</span>
                        <span class="tag">compliance</span>
                        <span class="tag">protection</span>
                    </div>
                    <h3 class="card-title">Safety Systems</h3>
                    <p class="card-description">Comprehensive safety solutions ensuring worker protection and regulatory compliance in hazardous environments.</p>
                </div>
                <div class="card-footer">
                    <a href="#" class="card-button">Learn More</a>
                </div>
            </div>

            <div class="product-card">
                <div class="card-image energy">
                    <div class="card-icon">⚡</div>
                </div>
                <div class="card-content">
                    <div class="card-tags">
                        <span class="tag">energy</span>
                        <span class="tag">efficiency</span>
                        <span class="tag">monitoring</span>
                    </div>
                    <h3 class="card-title">Energy Management</h3>
                    <p class="card-description">Smart energy monitoring and optimization systems for reduced consumption and cost savings.</p>
                </div>
                <div class="card-footer">
                    <a href="#" class="card-button">Learn More</a>
                </div>
            </div> */}
        </div>
    </div>
        </section>

        <section className="logo-section">

            <div class="section-header">
                <h2 class="section-title font-semibold text-black">Our Customers</h2>
                <p class="section-subtitle text-blueGray-500">Trusted by leading companies worldwide who rely on our innovative solutions</p>
            </div>

            <div className="logo-container">
              <div className="logo-track">
                {/* Do Not Touch This Section */}
                <div className="logo-item">
                  <img src={siemens} alt="Siemens" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="logo-item">
                  <img src={schneider} alt="Schneider" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="logo-item">
                  <img src={abb} alt="ABB" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="logo-item">
                  <img src={amtech} alt="Amtech" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="logo-item">
                  <img src={cginc} alt="CG Inc" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="logo-item">
                  <img src={invt} alt="INVT" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="logo-item">
                  <img src={vechi} alt="Vechi" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="logo-item">
                  <img src={slanvert} alt="Slanvert" className="max-w-full max-h-full object-contain" />
                </div>
                
                {/* Do Not Touch This Section */}
                <div className="logo-item">
                  <img src={siemens} alt="Siemens" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="logo-item">
                  <img src={schneider} alt="Schneider" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="logo-item">
                  <img src={abb} alt="ABB" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="logo-item">
                  <img src={amtech} alt="Amtech" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="logo-item">
                  <img src={cginc} alt="CG Inc" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="logo-item">
                  <img src={invt} alt="INVT" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="logo-item">
                  <img src={vechi} alt="Vechi" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="logo-item">
                  <img src={slanvert} alt="Slanvert" className="max-w-full max-h-full object-contain" />
                </div>
              </div>
            </div>
        </section>

        <section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">Our Team</h2>
                <p className="text-lg leading-relaxed m-4 text-blueGray-500">
                  Our team is dedicated to providing the best services to our clients.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={profilePic}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Gaurav Bhaiya</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      CEO & Founder
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                      <button
                        className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-dribbble"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("assets/img/team-2-800x800.jpg").default}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Romina Hadid</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Marketing Specialist
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("assets/img/team-3-800x800.jpg").default}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Alexa Smith</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      UI/UX Designer
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-blueGray-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-instagram"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("assets/img/team-4-470x470.png").default}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Jenna Kardi</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Founder and CEO
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-dribbble"></i>
                      </button>
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-blueGray-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-instagram"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="pb-20 relative block bg-blueGray-800">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-800 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white">
                  Build something
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
                  Put the potentially record low maximum sea ice extent tihs
                  year down to low ice. According to the National Oceanic and
                  Atmospheric Administration, Ted, Scambos.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap mt-12 justify-center">
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-medal text-xl"></i>
                </div>
                <h6 className="text-xl mt-5 font-semibold text-white">
                  Excelent Services
                </h6>
                <p className="mt-2 mb-4 text-blueGray-400">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-poll text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Grow your market
                </h5>
                <p className="mt-2 mb-4 text-blueGray-400">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-lightbulb text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Launch time
                </h5>
                <p className="mt-2 mb-4 text-blueGray-400">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </section> */}
        {/* <section className="relative block py-24 lg:pt-0 bg-blueGray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold">
                      Want to work with us?
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
                      Complete this form and we will get back to you in 24
                      hours.
                    </p>
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Full Name"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Email"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        rows="4"
                        cols="80"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Type a message..."
                      />
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </main>
      <FooterSmall />
    </>
  );
}
