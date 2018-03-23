import React from 'react';

const AddressCard = () => {

    return (
        <div className="col s12 ">
        <div className="card horizontal">
          <div className="card-stacked">
            <div className="card-content">
              <h2>Address</h2>
              <p>street:<b>Bla bla st</b></p>
              <p>city:<b>Gwenborough</b></p>
              <p>zipcode:<b>77068</b></p>
            </div>
          <div className="card-image">
            <img src="https://lorempixel.com/100/190/nature/6"/>
          </div>

          </div>
        </div>
      </div>
    )
}

export default AddressCard