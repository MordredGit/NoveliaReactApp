import { Container, Row } from "react-bootstrap";
import React, { useState } from 'react';
import Comment from "./comment";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../global";
import { theme } from "../../theme";
import { Burger, Menu } from "./Hamburger";


function Reader() {
    const [open, setOpen] = useState(false);
    const [res, setRes] = useState({});

    function callAPI() {
        fetch("http://localhost:9000/data")
        .then(res => res.json())
        .then(res => setRes(res))
        // .then(res => console.log(res));
        // console.log(res);
    }
    callAPI();
    return (
        <React.Fragment>

            <Container style={{ width: "75%" }}>
                <Row className="justify-content-center" style={{ padding: "10px", boxShadow: " 0 10px 10px 0 grey, 0 5px 15px 0 grey" }}>
                    <h1>Book Name: {res.Name}</h1>
                    <h1>Chapter 1: An Old Man Lived in the Village</h1>
                    <p>
                        An old man lived in the village. He was one of the most unfortunate people in the world. The whole village was tired of him; he was always gloomy, he constantly complained and was always in a bad mood. The longer he lived, the more bile he was becoming and the more poisonous were his words. People avoided him, because his misfortune became contagious. It was even unnatural and insulting to be happy next to him. He created the feeling of unhappiness in others. But one day, when he turned eighty years old, an incredible thing happened.
                    </p>
                    <p>
                        An old man lived in the village. He was one of the most unfortunate people in the world. The whole village was tired of him; he was always gloomy, he constantly complained and was always in a bad mood. The longer he lived, the more bile he was becoming and the more poisonous were his words. People avoided him, because his misfortune became contagious. It was even unnatural and insulting to be happy next to him. He created the feeling of unhappiness in others. But one day, when he turned eighty years old, an incredible thing happened.
                    </p>
                    <p>
                        An old man lived in the village. He was one of the most unfortunate people in the world. The whole village was tired of him; he was always gloomy, he constantly complained and was always in a bad mood. The longer he lived, the more bile he was becoming and the more poisonous were his words. People avoided him, because his misfortune became contagious. It was even unnatural and insulting to be happy next to him. He created the feeling of unhappiness in others. But one day, when he turned eighty years old, an incredible thing happened.
                    </p>
                    <p>
                        An old man lived in the village. He was one of the most unfortunate people in the world. The whole village was tired of him; he was always gloomy, he constantly complained and was always in a bad mood. The longer he lived, the more bile he was becoming and the more poisonous were his words. People avoided him, because his misfortune became contagious. It was even unnatural and insulting to be happy next to him. He created the feeling of unhappiness in others. But one day, when he turned eighty years old, an incredible thing happened.
                    </p>
                    <p>
                        An old man lived in the village. He was one of the most unfortunate people in the world. The whole village was tired of him; he was always gloomy, he constantly complained and was always in a bad mood. The longer he lived, the more bile he was becoming and the more poisonous were his words. People avoided him, because his misfortune became contagious. It was even unnatural and insulting to be happy next to him. He created the feeling of unhappiness in others. But one day, when he turned eighty years old, an incredible thing happened.
                    </p>
                    <p>
                        An old man lived in the village. He was one of the most unfortunate people in the world. The whole village was tired of him; he was always gloomy, he constantly complained and was always in a bad mood. The longer he lived, the more bile he was becoming and the more poisonous were his words. People avoided him, because his misfortune became contagious. It was even unnatural and insulting to be happy next to him. He created the feeling of unhappiness in others. But one day, when he turned eighty years old, an incredible thing happened.
                    </p>
                    <p>
                        An old man lived in the village. He was one of the most unfortunate people in the world. The whole village was tired of him; he was always gloomy, he constantly complained and was always in a bad mood. The longer he lived, the more bile he was becoming and the more poisonous were his words. People avoided him, because his misfortune became contagious. It was even unnatural and insulting to be happy next to him. He created the feeling of unhappiness in others. But one day, when he turned eighty years old, an incredible thing happened.
                    </p>
                    <p>
                        An old man lived in the village. He was one of the most unfortunate people in the world. The whole village was tired of him; he was always gloomy, he constantly complained and was always in a bad mood. The longer he lived, the more bile he was becoming and the more poisonous were his words. People avoided him, because his misfortune became contagious. It was even unnatural and insulting to be happy next to him. He created the feeling of unhappiness in others. But one day, when he turned eighty years old, an incredible thing happened.
                    </p>
                    <p>
                        An old man lived in the village. He was one of the most unfortunate people in the world. The whole village was tired of him; he was always gloomy, he constantly complained and was always in a bad mood. The longer he lived, the more bile he was becoming and the more poisonous were his words. People avoided him, because his misfortune became contagious. It was even unnatural and insulting to be happy next to him. He created the feeling of unhappiness in others. But one day, when he turned eighty years old, an incredible thing happened.
                    </p>
                    <p>
                        An old man lived in the village. He was one of the most unfortunate people in the world. The whole village was tired of him; he was always gloomy, he constantly complained and was always in a bad mood. The longer he lived, the more bile he was becoming and the more poisonous were his words. People avoided him, because his misfortune became contagious. It was even unnatural and insulting to be happy next to him. He created the feeling of unhappiness in others. But one day, when he turned eighty years old, an incredible thing happened.
                    </p>
                    <p>
                        An old man lived in the village. He was one of the most unfortunate people in the world. The whole village was tired of him; he was always gloomy, he constantly complained and was always in a bad mood. The longer he lived, the more bile he was becoming and the more poisonous were his words. People avoided him, because his misfortune became contagious. It was even unnatural and insulting to be happy next to him. He created the feeling of unhappiness in others. But one day, when he turned eighty years old, an incredible thing happened.
                    </p>

                </Row>
                <Row>
                    <div className="comments">
                        <div className="container mt-5">
                            <div className="row d-flex justify-content-center">
                                <div className="col-md-12">
                                    <div className="headings d-flex justify-content-between align-items-center mb-3">
                                        <h5>Comments(6)</h5>
                                        <div className="buttons"> <span className="badge bg-white d-flex flex-row align-items-center"> <span
                                            className="text-primary">Comments "ON"</span>
                                            <div className="form-check form-switch"> <input className="form-check-input" type="checkbox"
                                                id="flexSwitchCheckChecked" checked /> </div>
                                        </span> </div>
                                    </div>
                                    <Comment image="https://i.imgur.com/hczKIze.jpg" userName="james_olesenn" content="Hmm, This poster looks cool" dateOfComment="2 days ago" />
                                    <Comment image="https://i.imgur.com/C4egmYM.jpg" userName="olan_sams" content="Loving your work and profile!" dateOfComment="3 days ago" />
                                    <Comment image="https://i.imgur.com/0LKZQYM.jpg" userName="rashida_jones" content="Really cool Which filter are you using?" dateOfComment="3 days ago" />
                                    <Comment image="https://i.imgur.com/ZSkeqnd.jpg" userName="simona_rnasi" content="Bla bla bla!" dateOfComment="4 days ago" />

                                    {/* <div className="card p-3 mt-2">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="user d-flex flex-row align-items-center"> <img
                                            src= width="30"
                                            className="user-img rounded-circle mr-2" alt="ImageOrPic" /> <span><small
                                                className="font-weight-bold text-primary"></small> <small
                                                    className="font-weight-bold"> </small></span> </div>
                                        <small></small>
                                    </div>
                                    <div className="action d-flex justify-content-between mt-2 align-items-center">
                                        <div className="reply px-4"> <small>Remove</small> <span className="dots"></span>
                                            <small>Reply</small> <span className="dots"></span> <small>Translate</small> </div>
                                        <div className="icons align-items-center"> <i
                                            className="fa fa-check-circle-o check-icon text-primary"></i> </div>
                                    </div>
                                </div>
                                <div className="card p-3 mt-2">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="user d-flex flex-row align-items-center"> <img
                                            src= width="30"
                                            className="user-img rounded-circle mr-2" alt="ImageOrPic" /> <span><small
                                                className="font-weight-bold text-primary"></small> <small
                                                    className="font-weight-bold"> </small></span>
                                        </div> <small></small>
                                    </div>
                                    <div className="action d-flex justify-content-between mt-2 align-items-center">
                                        <div className="reply px-4"> <small>Remove</small> <span className="dots"></span>
                                            <small>Reply</small> <span className="dots"></span> <small>Translate</small> </div>
                                        <div className="icons align-items-center"> <i className="fa fa-user-plus text-muted"></i> <i
                                            className="fa fa-star-o text-muted"></i> <i
                                                className="fa fa-check-circle-o check-icon text-primary"></i> </div>
                                    </div>
                                </div>
                                <div className="card p-3 mt-2">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="user d-flex flex-row align-items-center"> <img
                                            src= width="30"
                                            className="user-img rounded-circle mr-2" alt="ImageOrPic" /> <span><small
                                                className="font-weight-bold text-primary"></small> <small
                                                    className="font-weight-bold text-primary">@macky_lones</small> <small
                                                        className="font-weight-bold text-primary">@rashida_jones</small> <small
                                                            className="font-weight-bold">Thanks </small></span> </div> <small>3 days ago</small>
                                    </div>
                                    <div className="action d-flex justify-content-between mt-2 align-items-center">
                                        <div className="reply px-4"> <small>Remove</small> <span className="dots"></span>
                                            <small>Reply</small> <span className="dots"></span> <small>Translate</small> </div>
                                        <div className="icons align-items-center"> <i
                                            className="fa fa-check-circle-o check-icon text-primary"></i> </div>
                                    </div>
                                </div> */}
                                </div>
                            </div>
                        </div>
                    </div >
                </Row >
            </Container >
            {/* <ThemeProvider theme={theme}> */}
            <>
                {/* <GlobalStyles /> */}
                <div>
                    <Burger open={open} setOpen={setOpen} />
                    <Menu open={open} setOpen={setOpen} />
                </div>
            </>
            {/* </ThemeProvider> */}
        </React.Fragment>
    );
}

export default Reader;