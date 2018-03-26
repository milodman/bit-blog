

import Author from '../entities/Author'

class SingleAuthorService {



    fetchAuthor(id) {
        return fetch(`http://localhost:3004/users/${id}`)
            .then((response) => {
                return response.json();
            })
            .then((author) => {

                return new Author(author)
            })



    }



}


export const singleAuthorService = new SingleAuthorService()