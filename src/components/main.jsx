import React /*, { useState }*/ from 'react';
// import Landing from "./home";
import Reader from "./Reader/reader";
import { Switch, Route } from 'react-router-dom';
import Navigation from './header';


function Main() {
    // const [res, setRes] = useState();
    // const callAPI = () => {
    //     fetch("http://localhost:9000/data")
    //     .then(res => res.text())
    //     .then(res => setRes(res));
    // }
    // callAPI();
    return (
        <React.Fragment>
            <Navigation />
            <Switch>
                <Route path='/reader' component={() => (
                    <Reader />
                )} />
            </Switch>
        </React.Fragment>
    )
}

export default Main;