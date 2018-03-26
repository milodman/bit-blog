import React from 'react'
import { Component } from 'react'
import SinglePostCard from './SinglePostCard'
import MoreSinglePosts from './MoreSinglePosts'
import { authorPosts } from '../../service/AuthorPosts'
import { singlePostService } from '../../service/SinglePostService'
import { singleAuthorService } from '../../service/SingleAuthorService'
class MainSinglePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: null,
            author: null,
            posts: []
        }
    }



    componentDidMount() {
        singlePostService.fetchSinglePost(this.props.match.params.id)
            .then(post => {
                this.setState({ post })
                return post;


            })
            .then(post => {
                singleAuthorService.fetchAuthor(post.userId)
                    .then((author) => {
                        this.setState({ author })
                        return author;
                    })
                    .then(author => {
                        authorPosts.fetchUserPosts(author.id)
                            .then(posts => {
                                this.setState({ posts })
                            })
                    })
            })


    }

    componentWillReceiveProps(nextProps) {
        singlePostService.fetchSinglePost(nextProps.match.params.id)
            .then(post => {
                this.setState({ post })
                return post;
            })
    }

    checkPostAndAuthorState = () => {
        if (this.state.post && this.state.author) {
            return <SinglePostCard data={this.state.post} data1={this.state.author} />
        }
    }

    render() {
        return (
            <div className="container">
                <a href="">back</a>
                {this.checkPostAndAuthorState()}
                <MoreSinglePosts data={this.state.posts} data1={this.state.posts} />
            </div>
        )
    }
}
export default MainSinglePost