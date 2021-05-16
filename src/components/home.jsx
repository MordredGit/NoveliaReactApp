import React from "react";
import Navigation from "./header";
import Central from "./central";
import { Col, Row } from "reactstrap";
import Carousel from 'react-bootstrap/Carousel';
import "./stylesAnish.css";
import "./styles.css";
// import "./index";

function Top() {
  const backImage = {
    backgroundImage: "url(/assets/images/bp.jpg)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    paddingBottom: "10%"
  };

  // const fullScreen = {
  //     height: "100%"
  // };

  return (
    <div className="container" style={backImage}>
      <Navigation />
      <Central />
    </div>
  );
}

function Interest() {

  return (
    <div className="container next">
      <Row>
        <Col lg="4" className="weekly">
          <h3>Weekly Updates</h3>
          <Carousel>
            <Carousel.Item>
              <a href="/bookinfo"><img src="/assets/images/book.jpeg" className="d-block w-100" alt="First slide" /></a>
            </Carousel.Item>
            <Carousel.Item>
              <a href="/bookinfo"><img src="/assets/images/book2.jpeg" className="d-block w-100" alt="Second slide" /></a>
            </Carousel.Item>
            <Carousel.Item>
              <a href="/bookinfo"><img src="/assets/images/book4.jpeg" className="d-block w-100" alt="Third slide" /></a>
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col lg="4" id="popular">
          <h2>Popular Right Now</h2>
          <div className="item">
            <a href="/bookinfo"><p>Book 1 Info</p></a>
          </div>
          <div className="item">
            <a href="/bookinfo"><p>Book 2 Info</p></a>
          </div>
          <div className="item">
            <a href="/bookinfo"><p>Book 3 Info</p></a>
          </div>
        </Col>
      </Row>
    </div>
  );
}

function Book(params) {
  return (
    <section className="py-6 flix-parents">
      <div className="flickfeed video-list-slider pl-5">
        <article className="card" style={{ backgroundImage: params.img }}>
          {/* "url('/assets/images/cover1.jpg')" */}
          <div className="back p-4 d-flex flex-column justify-content-end">
            <h1 className="h4">{params.name}</h1>
            <p className="Episode">{params.episode}</p>
            <button className="more" />
          </div>
        </article>
      </div>
    </section>
  );
}

function BookPan() {
  return (
    <React.Fragment>
      <Book img="url('/assets/images/cover1.jpg')" name="Sword Art Online" episode="Chapter 1 'Getting Started'" />
      <Book img="url('/assets/images/cover2.jpg')" name="Sword Art Online" episode="Chapter 1 'Getting Started'" />
      <Book img="url('/assets/images/cover3.jpg')" name="Sword Art Online" episode="Chapter 1 'Getting Started'" />
      <Book img="url('/assets/images/cover4.jpg')" name="Sword Art Online" episode="Chapter 1 'Getting Started'" />
    </React.Fragment>

  );
}

/*
<section class="">
    <div class="flickfeed video-list-slider pl-5">
      <article class="card" style="
            /* background-image: url('https://images.unsplash.com/photo-1593488239201-b6932a52f60b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ');
            background-image: url('media/cover1.jpg');
          ">
        <div class="back p-4 back p-4 d-flex flex-column justify-content-end">
          <h1 class="h4">Sword Art Online</h1>
          <p class="Episode">Chapter 1 "Getting Started"</p>
          <button class="more"></button>
        </div>
      </article>

      <article class="card" style="
            background-image: url('https://images.unsplash.com/photo-1593462414355-1adfd9d3a65a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ');
            background-image: url('media/cover2.jpg');
          ">
        <div class="back p-4 back p-4 d-flex flex-column justify-content-end">
          <h1 class="h4">Accel World</h1>
          <p class="Episode">Chapter 1 "Getting Started"</p>
          <button class="more"></button>
        </div>
      </article>

      <article class="card" style="
            background-image: url('https://images.unsplash.com/photo-1593811167573-aec47a12a91b?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ');
            background-image: url('media/cover3.jpg')
          ">
        <div class="back p-4 back p-4 d-flex flex-column justify-content-end">
          <h1 class="h4">Fantastic Beasts and Where to Find them</h1>
          <p class="Episode">E1 "Getting Started"</p>
          <button class="more"></button>
        </div>
      </article>

      <article class="card" style="
            background-image: url('media/cover4.jpg');
            /* background-image: url('https://images.unsplash.com/photo-1593203859719-437110bd5d91?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ');
          ">
        <div class="back p-4 back p-4 d-flex flex-column justify-content-end">
          <h1 class="h4">The Ultimate Evolution</h1>
          <p class="Episode">Chapter 1 "Getting Started"</p>
          <button class="more"></button>
        </div>
      </article>

      <article class="card" style="
            background-image: url('https://images.unsplash.com/photo-1592727995117-4cdc7ee6fcb4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ');
          ">
        <div class="back p-4 back p-4 d-flex flex-column justify-content-end">
          <h1 class="h4">Learn to code a website</h1>
          <p class="Episode">E1 "Getting Started"</p>
          <button class="more"></button>
        </div>
      </article>

      <article class="card" style="
            background-image: url('https://images.unsplash.com/photo-1592981669578-022a13f5c0a2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ');
          ">
        <div class="back p-4 back p-4 d-flex flex-column justify-content-end">
          <h1 class="h4">Learn to code a website</h1>
          <p class="Episode">E1 "Getting Started"</p>
          <button class="more"></button>
        </div>
      </article>

      <article class="card" style="
            background-image: url('https://images.unsplash.com/photo-1594038658121-219eda06322c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ');
          ">
        <div class="back p-4 back p-4 d-flex flex-column justify-content-end">
          <h1 class="h4">Learn to code a website</h1>
          <p class="Episode">E1 "Getting Started"</p>
          <button class="more"></button>
        </div>
      </article>

      <article class="card" style="
            background-image: url('https://images.unsplash.com/photo-1591971997606-690b401a6f12?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ');
          ">
        <div class="back p-4 back p-4 d-flex flex-column justify-content-end">
          <h1 class="h4">Learn to code a website</h1>
          <p class="Episode">E1 "Getting Started"</p>
          <button class="more"></button>
        </div>
      </article>

      <article class="card" style="
            background-image: url('https://images.unsplash.com/photo-1593874105671-d745ff7ce8ba?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ');
          ">
        <div class="back p-4 back p-4 d-flex flex-column justify-content-end">
          <h1 class="h4">Learn to code a website</h1>
          <p class="Episode">E1 "Getting Started"</p>
          <button class="more"></button>
        </div>
      </article>

      <article class="card" style="
            background-image: url('https://images.unsplash.com/photo-1592312986148-0286379c890d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ');
          ">
        <div class="back p-4 back p-4 d-flex flex-column justify-content-end">
          <h1 class="h4">Learn to code a website</h1>
          <p class="Episode">E1 "Getting Started"</p>
          <button class="more"></button>
        </div>
      </article>
    </div>
  </section> 
*/
function Landing() {


  return (
    <React.Fragment>
      <Top />
      <Interest />
      {/* <BookPan /> */}
    </React.Fragment>
  );
}

export default Landing;

