import React from 'react';
import MainButton from './UI/button/MainButton';
import { useNavigate } from 'react-router-dom'

const PostItem = (props)  => {
    const navigate = useNavigate();

    return (
        <div style={{margin: '15px 0'}} className='post'>
            <div className='post__content'>
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className='post__button'>
                <MainButton onClick={() => navigate(`/posts/${props.post.id}`)}>Открыть</MainButton>
                <MainButton onClick={() => props.remove(props.post)}>Delete</MainButton>
            </div>
        </div>
    )
}

export default PostItem;