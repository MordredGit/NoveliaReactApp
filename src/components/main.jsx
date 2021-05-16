import React /*, { useState }*/ from 'react';
// import Landing from "./home";
import Reader from "./Reader/reader";
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import Navigation from './header';
import Landing from './home';


function Main() {
    // const [res, setRes] = useState();
    // const callAPI = () => {
    //     fetch("http://localhost:9000/data")
    //     .then(res => res.text())
    //     .then(res => setRes(res));
    // }
    // callAPI();
    // const history = useHistory();
    return (
        <React.Fragment>
            {/* <Navigation /> */}
            <Switch>
                <Route exact path='/' component={()=>(
                    <div>
                        <Landing />
                    </div>
                )} />
                <Route exact path='/reader' component={() => (
                    <div>
                        <Navigation />
                        <Reader />
                    </div>
                )} />
                <Route exact path='/login' >
                    <Redirect push to={'/login/login.html'} />
                    {/* {useHistory().go(0)} */}
                </Route>
                <Route exact path="/bookinfo">
                    <Redirect push to={'/book/index.html'} />
                </Route>
            </Switch>
        </React.Fragment>
    )
}

export default Main;