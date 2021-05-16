import React, { useState } from "react";

const sendBookDetails = (params = {}) => {
    let response;
    fetch("http://localhost:9000/data", {
        method: "POST",
        mode: "cors",
        cache: "default",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify({ ...params, date: Date().now() })
    }).then(res => res.text()).then(data => { response = data });

    return (response === "success");
}

const CreateBook = ({ Author }) => {

    const [form, setForm] = useState({
        name: "",
        genre: "",
        language: ""
    });

    const handleChange = ({ target }) => {
        let name = target.name;
        let value = target.value;
        setForm(prevState => ({ ...prevState, [name]: value }))
    };

    return (
        <table>
            {/* <tr>
                <td><label htmlFor="cover"></label></td>
                <td><input type="file" name="cover" id="cover" onChange={handleChange} /></td>
            </tr> */}
            <tr>
                <td><label htmlFor="name">Name</label></td>
                <td><input type="file" name="name" id="name" onChange={handleChange} /></td>
            </tr>
            <tr>
                <td><label htmlFor="genre">Genre</label></td>
                <td><input type="text" name="genre" id="genre" onChange={handleChange} /></td>
            </tr>
            <tr>
                <td><label htmlFor="language">Language</label></td>
                <td><input type="text" name="language" id="language" onChange={handleChange} /></td>
            </tr>
            <tr>
                <td><input type="submit" value="Create" onClick={() => sendBookDetails(form)} /></td>
            </tr>
        </table>
    );
};

export default CreateBook;