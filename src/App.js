import React, {Component} from 'react';
import {Route, Link, Switch, Redirect, NavLink, withRouter} from 'react-router-dom';
import './App.css';

import history from './history';

const Home = () => (
    <div>
        <h2> Home </h2>
    </div>
);

const AppStore = ({match, history, location}) => {
    console.log(history);
    console.log(location);
    return (
    <div>
        <ul>
            {/*<li><Link to="/appstore/iphone">iPhone</Link></li>*/}
            {/*<li><Link to="/appstore/ipad">iPad</Link></li>*/}

            <li><Link to={`${match.url}/iphone`}>iPhone</Link></li>
            <li><Link to={`${match.url}/ipad`}>iPad</Link></li>
        </ul>

        <Route path="/appstore/iphone" component={() => (<div> Only $1.99 for iPhone </div>)}/>
        <Route path="/appstore/ipad" component={() => (<div> Evolved iPad Experience for $4.99 </div>)}/>

        {/*<Route path={`${match.path}/:device`} render={({match}) => (<div> We don't support {match.params.device} yet! </div>)}/>*/}
    </div>
)};

const macOS = () => (
    <div>
        <ul>
            <li>macOS Mojave</li>
            <li>Tech Specs</li>
            <li>How to Install</li>
        </ul>
    </div>
);

class App extends Component {
    render() {
        return (
            <div>
                <h1>Navigation</h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/appstore">App Store</Link></li>
                    {/*<li><NavLink to="/appstore" activeStyle={{*/}
                        {/*fontWeight: 'bold',*/}
                        {/*color: 'red'*/}
                    {/*}}>App Store</NavLink></li>*/}
                    <li><Link to="/macos">macOS</Link></li>
                    <li><Link to="/macos/tos">macOS ToS</Link></li>
                </ul>

                <hr/>
                <h1>Content</h1>
                <h2>Just Route</h2>
                <Route path="/" exact component={Home}/>
                <Route path="/appstore" component={AppStore}/>
                <Route path="/macos" component={macOS}/>
                <Route path="/macos/tos" component={() => (<div> Terms of Service </div>)}/>

                <h2>Combined with Switch</h2>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/appstore" component={AppStore}/>
                    <Route path="/macos" component={macOS}/>
                    <Route path="/macos/tos" component={() => (<div> Terms of Service </div>)}/>
                    <Route component={()=>(<h1>404! 404!</h1>)} />
                </Switch>

                <hr/>
                <h1>Control</h1>
                <button onClick={() => {
                    this.props.history.push('/appstore')
                }}>App Store
                </button>
                <button onClick={() => {
                    this.props.history.push('/macos')
                }}>macOS
                </button>
                <button onClick={() => {
                    this.props.history.push('/macos/tos')
                }}>macOS ToS
                </button>

                <hr/>

                <button onClick={() => {
                    history.push('/appstore')
                }}>App Store (Plain Router)
                </button>
                <button onClick={() => {
                    history.push('/macos')
                }}>macOS (Plain Router)
                </button>
                <button onClick={() => {
                    history.push('/macos/tos')
                }}>macOS ToS (Plain Router)
                </button>
            </div>
        );
    }
}

export default withRouter(App);
