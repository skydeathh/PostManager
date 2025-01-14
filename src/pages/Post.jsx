import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import '../styles/App.css'
import PostService from '../API/PostService';
import { useFetching } from '../hooks/useFetching';
import Loader from '../components/UI/Loader/Loader'
import CommentItem from '../components/CommentItem'

const Post = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    const [fetchPostBtId, isPostLoading, postError] = useFetching(async () => {
        const response = await PostService.getPostById(params.id);
        setPost(response.data);
    });

    const [fetchCommentsByPostId, isCommentsLoading, commentsError] = useFetching(async () => {
        const response = await PostService.getCommentsPostById(params.id);
        setComments(response.data);
    });

    useEffect(() => {
        fetchPostBtId();
        fetchCommentsByPostId();
    }, []);

    return (
        <div>
            {isPostLoading
                ? <div style={{ display: 'flex', justifyContent: 'center' }}><Loader /></div>
                :
                <div>
                    <h1 style={{ display: 'flex', justifyContent: 'center' }}>{post.title}</h1>
                    <div>{post.body}</div>
                </div>
            }
            <h1 style={{margin: '15px 15px', justifyContent: 'center', display: 'flex'}}>Комментарии</h1>
                    { isCommentsLoading
                    ? <div style={{ display: 'flex', justifyContent: 'center' }}><Loader /></div>
                    : comments.map((c, index) => <CommentItem key={index} comment={c}/>
                    )}
        </div>
    )
}

export default Post;