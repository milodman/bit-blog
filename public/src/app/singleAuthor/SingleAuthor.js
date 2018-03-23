import React from 'react';
import AuthorCard from './AuthorCard';
import AddressCard from './AddressCard';
import CompanyCard from './CompanyCard';


const SingleAuthor = ()=> {
    return (
        <div className="row">
            <AuthorCard/>
            <AddressCard/>
            <CompanyCard/>
        </div>
    )

}

export default SingleAuthor
