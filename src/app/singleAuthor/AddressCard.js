import React from 'react';

const AddressCard = ({ data }) => {

  console.log(data);

  return (
    <div className="col s12 ">
      <div className="card horizontal">
        <div className="card-stacked">
          <div className="card-content">
            <div className="card-image">
              <iframe src={`https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d11324.559502851118!2d${data.lng}!3d${data.lat}!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ssr!2srs!4v1522000048757`} width={300} height={300} style={{ border: 0 }} ></iframe>
            </div>
            <h2>Address</h2>
            <p>street:<b>{data.street}</b></p>
            <p>city:<b>{data.city}</b></p>
            <p>zipcode:<b>{data.zipcode}</b></p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AddressCard