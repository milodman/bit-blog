import React from 'react'
import { Component } from 'react'
import SinglePostCard from './SinglePostCard'
import MoreSinglePosts from './MoreSinglePosts'
import { postService } from '../../service/PostService'
import { authorPosts } from '../../service/AuthorPosts'
import { singlePostService } from '../../service/SinglePostService'
import { singleAuthorService } from '../../service/SingleAuthorService'
class MainSinglePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {},
            author: {},
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
    render() {
        return (
            <div className="container">
                <a href="#">back</a>
                <SinglePostCard data={this.state.post} data1={this.state.author} />
                <MoreSinglePosts data={this.state.posts} data1={this.state.posts} />
            </div>
        )
    }
}
export default MainSinglePost