import React from 'react'
import { Link } from 'react-router-dom'
const SinglePostCard = ({ data, data1 }) => {
  //console.log(data1);

  return (
    <div className="row">
      <div className="col s12">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title center">{data.title}</span>
            <div className="card-action center ">
              <Link to={`/author/${data1.id}`}><h6>{data1.name}</h6></Link>
            </div>
            <p>{data.body}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SinglePostCard 