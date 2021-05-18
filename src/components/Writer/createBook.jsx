import React, { useState } from "react";
import {FormGroup, Label, Input} from "./Forms";

const sendBookDetails = (params = {}) => {
    let response;
    let d = new Date();
    let month = d.getMonth() < 10 ? ("0" + d.getMonth()) : d.getMonth();
    let date = d.getFullYear() + "" + month + "" + d.getDate();
    fetch("http://localhost:9000/createBook", {
        method: "POST",
        mode: "cors",
        cache: "default",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify({ ...params, date: date })
    }).then(res => res.text()).then(data => { response = data });

    return (response === "success");
}

const CreateBook = ({ Author }) => {

    const [form, setForm] = useState({
        name: "",
        genre: "",
        language: "",
        author: Author
    });

    const handleChange = ({ target }) => {
        let name = target.name;
        let value = target.value;
        setForm(prevState => ({ ...prevState, [name]: value }))
    };

    return (
        <div style={{border: "3px solid #0061a8", margin: "1px auto", width: "400px", borderRadius: "5%", paddingBottom: "2.5rem"}}>
            <FormGroup><Label><h1>Create Book</h1></Label></FormGroup>
            <FormGroup>
                <Label htmlFor="name">Name</Label>
                <Input type="text" name="name" id="name" onChange={handleChange} />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="genre">Genre</Label>
                <Input type="text" name="genre" id="genre" onChange={handleChange} />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="language">Language</Label>
                <Input type="text" name="language" id="language" onChange={handleChange} />
            </FormGroup>
            <FormGroup>
                <Input type="submit" value="Create" onClick={() => sendBookDetails(form)} />
            </FormGroup>
        </div>

    );
};

export default CreateBook;
// <table>
//     {/* <tr>
//         <td><label htmlFor="cover"></label></td>
//         <td><input type="file" name="cover" id="cover" onChange={handleChange} /></td>
//     </tr> */}
//     <tr>
//         <td><Label htmlFor="name">Name</Label></td>
//         <td><Input type="text" name="name" id="name" onChange={handleChange} /></td>
//     </tr>
//     <tr>
//         <td><Label htmlFor="genre">Genre</Label></td>
//         <td><Input type="text" name="genre" id="genre" onChange={handleChange} /></td>
//     </tr>
//     <tr>
//         <td><Label htmlFor="language">Language</Label></td>
//         <td><Input type="text" name="language" id="language" onChange={handleChange} /></td>
//     </tr>
//     <tr>
//         <td><Input type="submit" value="Create" onClick={() => sendBookDetails(form)} /></td>
//     </tr>
// </table>