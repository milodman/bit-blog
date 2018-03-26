import React from 'react'
import Authors from './Authors'
import {Fragment} from 'react'
import {Link} from 'react-router-dom'
const AuthorsList = ({data,key}) => {
console.log(data);


    return(
        <React.Fragment>
        <Link to={`/author/${data.id}`}><li>{data.name}</li></Link><br/><hr/>
        </React.Fragment>
    )
}
export default AuthorsList