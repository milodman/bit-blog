import React from 'react'
import {Link} from 'react-router-dom'
import {authorsService} from '../../service/AuthorsService'
import {Component} from 'react'
import AuthorsList from './AuthorsList'

class Authors extends Component{
    constructor(props){
        super(props)
        this.state = { 
            authors: [], 
        }
    }


    componentDidMount(){
        authorsService.fetchAuthors()
        .then(authors => {
            this.setState({authors})
        })
    }
    render(){
        return(
        <div className="container">
            <div className="row">
            <h1 className="center">Authors ({this.state.authors.length})</h1><br/>
                <ul> 
                   {this.state.authors.map((author,index) =>  <AuthorsList key={index} data={author}/>)}
                 </ul>
            </div>
        </div>
    )
}
}

export default Authors