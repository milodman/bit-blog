import React from 'react';

const AuthorCard = () => {

    return (
        <div className="col s12 ">
        <div className="card horizontal">
          <div className="card-image">
            <img src="https://lorempixel.com/100/190/nature/6"/>
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <h2>Name Surname</h2>
              <p>username:<b>my_cool_username</b></p>
              <p>email:<b>my_cool@email.com</b></p>
              <p>phone:<b>1-770-736-8031</b></p>

            </div>
            
          </div>
        </div>
      </div>
    )
}

export default AuthorCard