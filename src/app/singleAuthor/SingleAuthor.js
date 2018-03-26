import React from 'react';
import AuthorCard from './AuthorCard';
import AddressCard from './AddressCard';
import CompanyCard from './CompanyCard';



const SingleAuthor = ({ data }) => {
    return (
        <div className="row">
            <AuthorCard data={data} />
            <AddressCard data={data} />
            <CompanyCard data={data} />
        </div>
    )

}

export default SingleAuthor
