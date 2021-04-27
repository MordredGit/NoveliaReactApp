import React, { useState } from 'react';
// import { Switch, Route, Redirect } from 'react-router-dom';


function Main() {
    const [res, setRes] = useState();
    const callAPI = () => {
        fetch("http://localhost:9000/data")
        .then(res => res.text())
        .then(res => setRes(res));
    }
    callAPI();
    return (
        <div>
            <p>{res}</p>
        </div>
    )
}

export default Main;