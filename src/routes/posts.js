import express from 'express'
const router = express.Router();

 let posts =[
  {id:1 , post: "one"},
  {id:2 , post: "two"},
  {id:3 , post: "three"},
  {id:4 , post: "four"},
 ] 



 //get all posts
router.get("/", (req, res) => {
//   const limit= parseInt(req.query.limit);
//   if(!isNaN(limit) && limit > 0){
//     res.json(posts.slice(0,limit));
//   }else{
//     res.json(post);
//   }
  
 res.json(posts)
});

// get 1 posts
router.get("/:id",(req,res) =>{
  const id = parseInt(req.params.id);
  res.json(posts.filter((post)=> post.id === id));
});

//create new post

router.post("/",(req , res) =>{

    const newPost = {
        id: posts.length + 1,
        post: req.body.post 
    };
    if (!newPost.post){
        return res.status(400).json({msg:"please include a post"})
    }
     posts.push(newPost);
    res.status(201).json(posts)
    
})

//update post

router.put("/:id",(req, res) =>{

    const id = parseInt(req.params.id);
    const post = posts.find((post)=> post.id === id);

    if(!post){
        return res.status(404).json({msg: `Post with the id of ${id} does not exists`})
    }
    post.post = req.body.post;
    res.status(200).json(posts);

})
//delete post

router.delete("/:id",(req, res) =>{

    const id = parseInt(req.params.id);
    const post = posts.find((post)=> post.id === id);

    if(!post){
        return res.status(404).json({msg: `Post with the id of ${id} does not exists`})
    }
    posts = posts.filter((post) => post.id !== id)
    res.status(200).json(posts);

})


export default router;