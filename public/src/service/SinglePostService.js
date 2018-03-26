import React from 'react';
import Post from '../entities/Post'
import Author from '../entities/Author'

class SinglePostService {


   
    fetchSinglePost(id) {
        return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => {
                return response.json();
            })
            .then((post) => {
                return new Post(post);

            })
    }
    
   

    
}


export const singlePostService = new SinglePostService()