import { PostService } from './05-dependency-b';
import { JsonDataBaseService, LocalDataBaseService, WebApiPostService, ApiServie } from './05-dependency-c';


// Main
(async () => {

    // const provider = new JsonDataBaseService()
    // const provider = new LocalDataBaseService()
    const http = new ApiServie()
    const provider = new WebApiPostService(http)
    

    const postService = new PostService(provider);

    const posts = await postService.getPosts();

    console.log({ posts })


})();