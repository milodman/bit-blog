import React from 'react';
import Item from './Item';


const List =() => {
       return (
        <div className="row">
        <h1 className="center"> POSTS </h1>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
        </div>
       ) 

}

export default List