import React from 'react';
import Post from '../entities/Post'
import Author from '../entities/Author'

class AuthorsService {


   

    fetchAuthors() {
        return fetch(`https://jsonplaceholder.typicode.com/users`)
            .then((response) => {
                return response.json();    
            })
            .then((data) => {
                const authorData = data
                return authorData.map((author) => {
                    return new Author(author)
                })
                })
               

            
    }
}


export const authorsService = new AuthorsService()