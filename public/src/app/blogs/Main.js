import React from 'react';
import List from './List';
import { Component } from 'react'
import { postService } from "../../service/PostService"


class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        postService.fetchPosts()
            .then(PostList => {
                this.setState({ posts: PostList })
            })
    }

    render() {
        return (
            <div className="container" >
                <List data={this.state.posts} />
            </div>
        )
    }

}

export default Main