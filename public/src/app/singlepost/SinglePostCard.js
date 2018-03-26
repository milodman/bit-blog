import React from 'react'
import { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

class SinglePostCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: props.data,
      data1: props.data1,

    }

  }

  deletePosts = (event) => {

    event.preventDefault()
    const { id } = this.props.data;
    fetch(`http://localhost:3004/posts/${id}`, {
      method: 'DELETE'
    })
      .then((response) => {
        this.props.history.push('/')
      })

  }



  render() {
    return (
      <div className="row" >
        <div className="col s12">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title center">{this.props.data.title}</span>
              <div className="card-action center ">
                <Link to={`/author/${this.props.data1.id}`}><h6>{this.props.data1.name}</h6></Link>
              </div>
              <p>{this.props.data.body}</p>
            </div>
          </div>
          <Link to="/posts/new"><button className=" btn-large right #0288d1 light-blue darken-2">Create new Post</button></Link>
          <button onClick={this.deletePosts} className="btn-large right #0288d1 light-blue darken-2">Delete Post</button>
          <button onClick={this.deletePosts} className="btn-large right #0288d1 light-blue darken-2">Edit Post</button>
        </div>
      </div>
    )
  }
}
export default withRouter(SinglePostCard) 