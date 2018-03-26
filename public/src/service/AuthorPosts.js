
import Post from '../entities/Post'


class AuthorPosts {


    fetchUserPosts = (id) => {
        return fetch(`http://localhost:3004/posts?userId=${id}`)
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