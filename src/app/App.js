import React, { Fragment, Component } from 'react';
import Main from './blogs/Main';
import MainSinglePost from './singlepost/MainSinglePost'
import Authors from './authors/Authors'
import MainSingleAuthor from './singleAuthor/MainSingleAuthor'
import {Switch, Route} from 'react-router-dom'
import AboutPage from './about/AboutPage';
import '../App.css';
import Header from './partials/Header'
import Footer from './partials/Footer'

class App extends Component {
  render() {
    return (
    <React.Fragment>
        <Header />
        <Switch>
        <Route exact path="/about" component={AboutPage}/>
        <Route exact path="/author" component = {Authors}/>
        <Route path="/posts/:id" component = {MainSinglePost}/>
        <Route path="/author/:id" component = {MainSingleAuthor}/>
        <Route path="/" component={Main}/>
        </Switch>
        <Footer />
    </React.Fragment>
    )
}}

export default App;
