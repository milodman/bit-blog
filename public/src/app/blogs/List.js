import React from 'react';
import Item from './Item';


const List =({data}) => {
       return (
        <div className="row">
        <h1 className="center"> POSTS </h1>
          {data.map((post,index) =>  <Item key={index} data={post}/>)}     
        </div>
       ) 

}

export default List