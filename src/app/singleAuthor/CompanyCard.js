import React from 'react';

const CompanyCard = ({data}) => {

    return (
    <div className="col s12 ">
        <div className="card horizontal">
          <div className="card-stacked">
            <div className="card-content">
              <h2>Company</h2><br/>
              <p>name:<b>{data.comName}</b></p><br/>
              <p>slogan:<b>{data.catchPhrase}</b></p><br/>
            </div>
           </div>
        </div>
    </div>
    )
}

export default CompanyCard