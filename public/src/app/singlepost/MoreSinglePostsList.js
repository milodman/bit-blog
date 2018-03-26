import React from 'react'
import { Link } from 'react-router-dom'

const MoreSinglePostsList = ({ data }) => {
    //console.log(data);

    return (
        <Link to={`/posts/${data.id}`}>
            <div className="col s12">
                <h6>{data.title}</h6><hr />
            </div>
        </Link>
    )
}

export default MoreSinglePostsList