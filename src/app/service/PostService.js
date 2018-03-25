import React from 'react';
import Post from '../entities/Post'
import Author from './..entities/Author'

class PostService {
 
        fetchPosts(){
            return fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then ((response) =>{
               return response.json()

            })
                .then((data) => {
                    const postData = data
                     return postData.map((post) =>{
                        return new Post(post)
                     })
            })

        }

//         fetchSinglePost (){
//             return fetch (`https://jsonplaceholder.typicode.com/posts/${id}`)
//                 .then((response) => {
//                     return response.json()
//                 })
//                     .then((post)=>{
//                          return new Post(post)
//                     })
//         }
    
// }

        fetchAuthor (){
            return fetch(`https://jsonplaceholder.typicode.com/posts/`)
            .then(response => response.json())
            .then(authors => {
                return authors.map(author =>{
                return new Author(author.id, author.name, author.username, author.email, author.address, author.phone, author.website, author.company)
            });
        });
    }
}

export const postService = new PostService