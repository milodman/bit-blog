import React from 'react';
import { Link } from 'react-router-dom'
const Item = ({ data }) => {
    console.log(data);

    return (
        <div>
            <div className="col s12">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <Link to={`/posts/${data.id}`}><h4> <span className="card-title">{data.title}</span></h4></Link>
                        <p>{data.body}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Item