import React from 'react';
import Post from '../entities/Post'
import Author from '../entities/Author'

class AuthorPosts {


    fetchUserPosts(id) {
        return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then((response) => {
                return response.json()


            })
            .then((data) => {
                const userPostData = data
                return userPostData.map((post) => {
                    return new Post(post)
                })

            })
    }

    
}


export const authorPosts = new AuthorPosts()