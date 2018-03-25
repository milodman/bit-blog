import React from 'react'
import SinglePostCard from './SinglePostCard'
import MoreSinglePosts from './MoreSinglePosts'
import {postService} from './../service/PostService'


class MainSinglePost extends React.Component  {
    
    constructor (props){
        super(props);
        this.state={
            post:{},
            author:{}
        }
    }
    componentDidMount() {
        postService.fetchSinglePost(this.props.match.params.id)
            .then(post => {
                this.setState({post})
            })
        
        postService.fetchSingleAuthor(this.props.match.params.id)
            .then(author => {
                this.setState({author})
            })
    }
        render (){
    return (

        <div className="container">
         <a href="#">back</a>
        <SinglePostCard postData={this.state.post} dataAuthor={this.state.author}/>
        <MoreSinglePosts />
        </div>
    )
}
}
export default MainSinglePost