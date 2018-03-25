import React from 'react'
import {Link} from 'react-router-dom'

 const SinglePostCard = ({postData, dataAuthor}) => {
   console.log(dataAuthor);
   
     return (
        <div className="row">
        <div className="col s12">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title center">{postData.title}</span>
              <div className="card-action center ">
              <Link to={`/author/${dataAuthor.id}`}><h6>{dataAuthor.name}</h6></Link>
            </div>
              <p>{postData.body}</p>
            </div>
          </div>
        </div>
      </div>
     )
 }
 export default SinglePostCard 