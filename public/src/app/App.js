import { Component } from 'react';
import React from 'react'
import Main from './blogs/Main';
import MainSinglePost from './singlepost/MainSinglePost'
import Authors from './authors/Authors'
import MainSingleAuthor from './singleAuthor/MainSingleAuthor'
import MainNewPost from './newpost/MainNewPost'
import { Switch, Route } from 'react-router-dom'
import AboutPage from './about/AboutPage';
import '../App.css';
import Header from './partials/Header'
import Footer from './partials/Footer'
import { postService } from '../service/PostService'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = { posts: [] }
    }

    componentDidMount() {
        postService.fetchPosts()
            .then(PostList => {
                this.setState({ posts: PostList })
            })
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <Switch>

                    <Route exact path="/about" component={AboutPage} />
                    <Route exact path="/author" component={Authors} />
                    <Route exact path="/posts/new" component={MainNewPost} />
                    <Route path={`/posts/:id`} component={MainSinglePost} />
                    <Route path={`/author/:id`} component={MainSingleAuthor} />
                    <Main data={this.state.posts} />
                </Switch>
                <Footer />
            </React.Fragment>
        )
    }
}

export default App;
