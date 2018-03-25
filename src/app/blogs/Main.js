import React from 'react';
import List from './List';


const Main = ({data}) => {

    return (
        <div className="container">
            <List data={data}/>
        </div>
    )


}

export default Main