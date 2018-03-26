import React from 'react'
import { Component } from 'react'
import SingleAuthor from './SingleAuthor';
import { singleAuthorService } from '../../service/SingleAuthorService'

class MainSingleAuthor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            author: {}
        }
    }

    componentDidMount() {
        singleAuthorService.fetchAuthor(this.props.match.params.id)
            .then(author => {
                console.log(this.props.match.params);
                this.setState({ author });

            })
    }

    render() {
        return (
            <div className="container">
                <a href="">back</a>
                <SingleAuthor data={this.state.author} />
            </div>
        )
    }
}

export default MainSingleAuthor