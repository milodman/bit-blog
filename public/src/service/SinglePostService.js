
import Post from '../entities/Post'


class SinglePostService {



    fetchSinglePost = (id) => {
        return fetch(`http://localhost:3004/posts/${id}`)
            .then((response) => {
                return response.json();
            })
            .then((post) => {
                return new Post(post);

            })
    }




}


export const singlePostService = new SinglePostService()