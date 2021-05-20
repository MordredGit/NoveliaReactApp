import React, { useState } /*, { useState }*/ from 'react';
// import Landing from "./home";
import Reader from "./Reader/reader";
import { Switch, Route, Redirect } from 'react-router-dom';
import Navigation from './header';
import Landing from './home';
import CreateBook from './Writer/createBook';
import Login from './Login/login';
import CreateChapter from './Writer/createChapter';
import Footer from './footer';
// import Navigation from './Navigation';


function Main() {

    const [isLoggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState("");
    const [bookname, setBookName] = useState("The King of Drugs");

    const handleChange = (username) => {
        setLoggedIn(true);
        setUser(username);
    }

    // debugger;

    return (
        <React.Fragment>
            {/* <Navigation isLoggedIn={isLoggedIn} user={user} /> */}
            <Switch>
                <Route exact path='/' component={() => (
                    <div>
                        {/* {console.log(isLoggedIn, user)} */}
                        <Landing  isLoggedIn={isLoggedIn} user={user}/>
                    </div>
                )} />
                <Route path='/reader' component={() => (
                    <div>
                        <Navigation isLoggedIn={isLoggedIn} user={user} />
                        <Reader bookName={bookname}/>
                    </div>
                )} />
                <Route exact path='/login' component={() => (
                    <Login handleChangeInLogin={handleChange} />
                )} />
                    {/* {useHistory().go(0)}  */}
                {/* <Redirect exact from='/login' push to={'/login/login.html'} /> */}
                <Route exact path="/bookinfo">
                    <Redirect push to={'/reader'} />
                </Route>
                <Route exact path="/createBook" component={() => (
                    <div>
                        <Navigation isLoggedIn={isLoggedIn} user={user} />
                        <CreateBook Author="Shagun" />
                    </div>
                )} />
                <Route exact path="/createChapter" component={() => (
                    <div>
                        <Navigation isLoggedIn={isLoggedIn} user={user} />
                        <CreateChapter Author="Shagun" />
                    </div>
                )} />
                {/* <Route exact path="/browse">
                    <Redirect push to={'/browse/index.html'} />
                </Route> */}
                {/* <Redirect exact from="/browse" to={'/browse/index.html'} /> */}
                <Redirect exact from="/browse" to={'/reader'} />
                {/* <Redirect exact from="/cards" to={'/card-grid/index.html'} /> */}
                {/* <Route exact path="/cards" component={() => (
                    <Cards setBookName={handlebookname} />
                )} /> */}
                <Route exact path="/success" component={() => (
                    <h1>Successful</h1>
                )} />
                <Route exact path="/fail" component={() => (
                    <h1>Failure</h1>
                )} />
            </Switch>
            <Footer />
        </React.Fragment>
    )
    
}

export default Main;