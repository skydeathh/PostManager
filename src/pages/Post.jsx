import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import '../styles/App.css'
import PostService from '../API/PostService';
import { useFetching } from '../hooks/useFetching';
import Loader from '../components/UI/Loader/Loader'

const Post = () => {
    const params = useParams();
    const [post, setPost] = useState({});

    const [fetchPostBtId, isPostLoading, postError] = useFetching(async () => {
        const response = await PostService.getPostById(params.id);
        setPost(response.data);
    });

    // const [fetchComments, isPostLoading, postError] = useFetching(async () => {
    //     const response = await PostService.getPostById(params.id);
    //     setPost(response.data);
    // });

    useEffect(() => {
        fetchPostBtId();
    }, []);

    return (
        <div>
            {
                isPostLoading
                    ? <div style={{ display: 'flex', justifyContent: 'center' }}><Loader /></div>
                    :
                    <div>
                        <h1>{post.title}</h1>
                        <div>{post.body}</div>
                    </div>
            }

        </div>
    )
}

export default Post;