import React from 'react'
import {Link} from 'react-router-dom'
import {PostService} from './../service/PostService'

class Authors extends React.Component {

constructor(props) {
    super(props);
    this.state = {
        authors:[]
    }
}
 fetchAuthors = () => {
     PostService.fetchAuthor()
        .then(authorObj => {
            this.setState({
                authors:authorObj
            })
        })
 }

    componentDidMount(){
        this.fetchAuthors();
    }


    render(){    

    return(
        <div className="container">
            <div className="row">
            <h2 className="center">Authors ({this.state.authors.length})</h2><br/>
                <ul> {this.state.authors.map(author =>{
                    return (
                        <Link to={`/authors/${author.id}` }><li>{author.name}</li><br/><hr/></Link>
                    )
                })}
                    
                    
                 </ul>
            </div>
        </div>
    )
}
}

export  {Authors}