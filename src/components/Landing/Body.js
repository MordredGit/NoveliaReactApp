import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Feature from "./Feature";
import Footer from "./Footer";
import "./styles.css";


function Body() {
  return (
    <div style={{backgroundColor: "black"}}>
      <section id="section-0">
        <Navbar />
        <Header />
      </section>
      <section id="section-1" className="text-center">
        <h2
          class="mb-5 font-weight-bold text-white popular-text"
          data-aos="fade-up"
        >
          POPULAR RIGHT NOW
        </h2>

        <div class="row mt-5 ml-3 mr-3" data-aos="fade-right">
          <div class="col-md-4 main-page-card " href="#">
            <div class="view overlay z-depth-1-half">
              <img
                src="https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
                class="img-fluid"
                alt=""
              />
              <div class="mask rgba-white-slight"></div>
            </div>

            <h4 class="my-4 font-weight-bold text-white">Book Title</h4>
            <p class="text-white">Book ke bare thoda short me.....</p>
          </div>

          <div class="col-md-4 main-page-card " href="#">
            <div class="view overlay z-depth-1-half">
              <img
                src="https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
                class="img-fluid"
                alt=""
              />
              <div class="mask rgba-white-slight"></div>
            </div>

            <h4 class="my-4 font-weight-bold text-white">Book Title</h4>
            <p class="text-white">Book ke bare thoda short me.....</p>
          </div>

          <div class="col-md-4 main-page-card " href="#">
            <div class="view overlay z-depth-1-half">
              <img
                src="https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
                class="img-fluid"
                alt=""
              />
              <div class="mask rgba-white-slight"></div>
            </div>

            <h4 class="my-4 font-weight-bold text-white">Book Title</h4>
            <p class="text-white">Book ke bare thoda short me.....</p>
          </div>
        </div>

        <div class="row mt-5 ml-3 mr-3" data-aos="fade-left">
          <div class="col-md-4 main-page-card " href="#">
            <div class="view overlay z-depth-1-half">
              <img
                src="https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
                class="img-fluid"
                alt=""
              />
              <div class="mask rgba-white-slight"></div>
            </div>

            <h4 class="my-4 font-weight-bold text-white">Book Title</h4>
            <p class="text-white">Book ke bare thoda short me.....</p>
          </div>

          <div class="col-md-4 main-page-card " href="#">
            <div class="view overlay z-depth-1-half">
              <img
                src="https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
                class="img-fluid"
                alt=""
              />
              <div class="mask rgba-white-slight"></div>
            </div>

            <h4 class="my-4 font-weight-bold text-white">Book Title</h4>
            <p class="text-white">Book ke bare thoda short me.....</p>
          </div>

          <div class="col-md-4 main-page-card " href="#">
            <div class="view overlay z-depth-1-half">
              <img
                src="https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
                class="img-fluid"
                alt=""
              />
              <div class="mask rgba-white-slight"></div>
            </div>

            <h4 class="my-4 font-weight-bold text-white">Book Title</h4>
            <p class="text-white">Book ke bare thoda short me.....</p>
          </div>
        </div>
      </section>
      <section id="section-2">
        <Feature />
      </section>
      {/* <svg class="wave-top" width="100" viewBox="0 0 1200 250">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 108.306L50 114.323C100 120.34 200 132.374 300 168.476C400 204.578 500 264.749 600 246.698C700 228.647 800 132.374 900 108.306C1000 84.2382 1100 132.374 1150 156.442L1200 180.51V-8.5451e-06H1150C1100 -8.5451e-06 1000 -8.5451e-06 900 -8.5451e-06C800 -8.5451e-06 700 -8.5451e-06 600 -8.5451e-06C500 -8.5451e-06 400 -8.5451e-06 300 -8.5451e-06C200 -8.5451e-06 100 -8.5451e-06 50 -8.5451e-06H0V108.306Z"
          fill="#0099FF"
        /> */}
      {/* </svg> */}
    </div>
  );
}

export default Body;
