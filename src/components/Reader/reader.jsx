import { Container, Row } from "react-bootstrap";
import React, { useState, useEffect } from 'react';
import Comment from "./comment";
import { Burger, Menu } from "./Hamburger";
import { InfoIcon, Info } from "./InfoBox";

function CommentBox() {
    return (
        <Row>
            <div className="comments">
                <div className="container mt-5">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-12">
                            <div className="headings d-flex justify-content-between align-items-center mb-3">
                                <h5>Comments(6)</h5>
                                <div className="buttons">
                                    <span className="badge bg-white d-flex flex-row align-items-center">
                                        <span className="text-primary">Comments "ON"</span>
                                        <div className="form-check form-switch">
                                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
                                        </div>
                                    </span>
                                </div>
                            </div>
                            <Comment image="https://i.imgur.com/hczKIze.jpg" userName="james_olesenn" content="Hmm, This Story looks cool" dateOfComment="2 days ago" />
                            <Comment image="https://i.imgur.com/C4egmYM.jpg" userName="olan_sams" content="Loving your work and profile!" dateOfComment="3 days ago" />
                            <Comment image="https://i.imgur.com/0LKZQYM.jpg" userName="rashida_jones" content="Really cool" dateOfComment="3 days ago" />
                            <Comment image="https://i.imgur.com/ZSkeqnd.jpg" userName="simona_rnasi" content="Waste of time!" dateOfComment="4 days ago" />
                        </div>
                    </div>
                </div>
            </div >
        </Row >
    );
}

function Reader({ bookName }) {
    const [openBurger, setOpenBurger] = useState(false);
    const [openInfo, setOpenInfo] = useState(false);
    const [res, setRes] = useState({});
    const [content, setContent] = useState({});

    useEffect(() => {
        fetch("http://localhost:9000/data")
            .then(res => res.json())
            .then(res => setRes(res))
    }, []);

    useEffect(() => {
        let newBookName = "";
        for (let index = 0; index < bookName.length; index++) {
            const element = bookName[index] === " " ? "%20" : bookName[index];
            newBookName += element;
        }
        console.log(newBookName);
        let url = "http://localhost:9000/content/" + newBookName /* "The%20King%20of%20Drugs"; */
        fetch(url, {
            method: "GET",
            mode: "cors",
            cache: "default",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
        })
            .then(res => res.json())
            .then(con => setContent(con))
    }, [bookName]);

    return (
        <React.Fragment>
            <Container style={{ width: "75%" }}>
                <div style={{ padding: "1.5rem", boxShadow: " 0 10px 10px 0 grey, 0 5px 15px 0 grey" }} >
                    <Row>
                        <span style={{ float: "right" }}>Book Name: {res.Name}</span>
                    </Row>
                    <Row className="justify-content-center">
                        <h1 style={{ display: "block" }}>{content.InBook && content.InBook[3]["Chapter"]} </h1>
                    </Row>
                    <Row className="justify-content-center" >
                        <p style={{whiteSpace: "pre-wrap"}}>{content.InBook && content.InBook[3]["Content"]}</p>
                    </Row>
                </div>
                <CommentBox />
            </Container >
            <>
                <div>
                    <Burger open={openBurger} setOpen={setOpenBurger} />
                    <Menu open={openBurger} setOpen={setOpenBurger} />
                </div>
            </>
            <>
                <InfoIcon open={openInfo} setOpen={setOpenInfo} />
                <Info open={openInfo} name={res.Name} author={res.Author} date={res.DateOfCreation} number={res.NoOfChapter} />
            </>
        </React.Fragment>
    );
}

export default Reader;