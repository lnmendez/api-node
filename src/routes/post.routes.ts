import { Router } from "express";
const router = Router();

import { createPost, getPost, getPosts, deletePost, updatePost } from "../controllers/post.controller";

router.route('/')
    .get(getPosts)
    .post(createPost);

router.route('/:postId')
    .get(getPost)
    .delete(deletePost)
    .put(updatePost);

export default router;