import React from 'react';
import MainSingleAuthor from './MainSingleAuthor'

const AuthorCard = ({ data }) => {
  console.log(data);

  return (
    <div className="col s12 ">
      <div className="card horizontal">
        <div className="card-image">

        </div>
        <div className="card-stacked">
          <div className="card-content">
            <h2>{data.name}</h2>
            <p>username:<b>{data.username}</b></p>
            <p>email:<b>{data.email}</b></p>
            <p>phone:<b>{data.phone}</b></p>

          </div>

        </div>
      </div>
    </div>
  )
}

export default AuthorCard