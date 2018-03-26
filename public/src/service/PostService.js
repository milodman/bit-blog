
import Post from '../entities/Post'


class PostService {


    fetchPosts = () => {
        return fetch("http://localhost:3004/posts")
            .then((response) => {
                return response.json()


            })
            .then((data) => {
                const postData = data
                return postData.reverse().map((post) => {
                    return new Post(post)
                })

            })
    }

}


export const postService = new PostService()