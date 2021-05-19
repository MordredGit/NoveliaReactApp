import React, { useState } /*, { useState }*/ from 'react';
// import Landing from "./home";
import Reader from "./Reader/reader";
import { Switch, Route, Redirect } from 'react-router-dom';
import Navigation from './header';
import Landing from './home';
import CreateBook from './Writer/createBook';
import Login from './Login/login';
import CreateChapter from './Writer/createChapter';


function Main() {
    // const [res, setRes] = useState();
    // const callAPI = () => {
    //     fetch("http://localhost:9000/data")
    //     .then(res => res.text())
    //     .then(res => setRes(res));
    // }
    // callAPI();
    // const history = useHistory();

    const [isLoggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState("");
    
    return (
        <React.Fragment>
            {/* <Navigation /> */}
            <Switch>
                <Route exact path='/' component={() => (
                    <div>
                        <Landing />
                    </div>
                )} />
                <Route exact path='/reader' component={() => (
                    <div>
                        <Navigation />
                        <Reader bookName={"The King of Drugs"}/>
                    </div>
                )} />
                <Route exact path='/login' component={() => (
                    <Login />
                )} />
                    {/* {useHistory().go(0)}  */}
                {/* <Redirect exact from='/login' push to={'/login/login.html'} /> */}
                <Route exact path="/bookinfo">
                    <Redirect push to={'/book/index.html'} />
                </Route>
                <Route exact path="/createBook" component={() => (
                    <div>
                        <Navigation />
                        <CreateBook Author="Shagun" />
                    </div>
                )} />
                <Route exact path="/createChapter" component={() => (
                    <div>
                        <Navigation />
                        <CreateChapter Author="Shagun" />
                    </div>
                )} />
                {/* <Route exact path="/browse">
                    <Redirect push to={'/browse/index.html'} />
                </Route> */}
                <Redirect exact from="/browse" to={'/browse/index.html'} />
                <Redirect exact from="/cards" to={'/card-grid/index.html'} />
                <Route exact path="/success" component={() => (
                    <h1>Successful</h1>
                )} />
                <Route exact path="/fail" component={() => (
                    <h1>Failure</h1>
                )} />
            </Switch>
        </React.Fragment>
    )
}

export default Main;