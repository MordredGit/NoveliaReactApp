import { Row } from "react-bootstrap";

export default function Chapter({ bookName, content, chapterNo }) {
    return (
        <div style={{ padding: "1.5rem", boxShadow: " 0 10px 10px 0 grey, 0 5px 15px 0 grey" }} >
            <Row>
                <span style={{ float: "right" }}>Book Name: {bookName}</span>
            </Row>
            <Row>
                <h1  style={{ display: "block" }}>{content.InBook && content.InBook[chapterNo]["Chapter"]} </h1>
            </Row>
            <Row >
                <p style={{ whiteSpace: "pre-wrap" }}>{content.InBook && content.InBook[chapterNo]["Content"]}</p>
            </Row>
        </div>
    );
}