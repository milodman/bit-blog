import React from 'react';
import Post from '../entities/Post'
import Author from '../entities/Author'

class SingleAuthorService {



    fetchAuthor(id) {
        return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) => {
                return response.json();
            })
            .then((author) => {

                return new Author(author)
            })



    }



}


export const singleAuthorService = new SingleAuthorService()