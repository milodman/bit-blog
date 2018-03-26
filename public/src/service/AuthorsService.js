

import Author from '../entities/Author'

class AuthorsService {




    fetchAuthors = () => {
        return fetch(`http://localhost:3004/users`)
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