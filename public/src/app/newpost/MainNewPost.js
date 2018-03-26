import { Component } from 'react'
import React from 'react'
import Post from '../../entities/Post'

class MainNewPost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      body: ""
    }
  }

  handleTitleChange = (event) => {
    this.setState({ title: event.target.value })
    console.log(this.state.title);


  }
  handleContentChange = (event) => {
    this.setState({ content: event.target.value })
    console.log(this.state.content);

  }

  fetchNewPosts = (e) => {
    e.preventDefault()
    fetch(`http://localhost:3004/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title: this.state.title,
        body: this.state.content,
        userId: 9
      }),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then((response) => {
      window.location.href = "/#/"
    })


  }






  render() {
    return (
      <div className="container">
        <div className="row">
          <h2 className="center">NEW POST</h2>
          <h4>Title</h4>
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <input type="text" onChange={this.handleTitleChange} value={this.state.title} id="textarea1" className="materialize-textarea" placeholder="title"></input>

              </div>
            </div>




            <div className="row">
              <h4>Content</h4>
              <div className="input-field col s12">
                <textarea id="textarea1" onChange={this.handleContentChange} value={this.state.content} className="materialize-textarea" placeholder="content"></textarea>

              </div>
            </div>
            <button className="btn-large right #0288d1 light-blue darken-2">Cancel</button>
            <button onClick={this.fetchNewPosts} className="btn-large right #0288d1 light-blue darken-2">Save</button>
          </form>
        </div>
      </div>

    )
  }
}

export default MainNewPost