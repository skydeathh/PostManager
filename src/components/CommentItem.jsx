import React from 'react';
import MainButton from './UI/button/MainButton';
import { useNavigate } from 'react-router-dom'

const CommentItem = (props)  => {
    return (
        <div style={{margin: '15px 0'}} className='post'>
            <div className='post__content'>
                <strong>{props.comment.email}</strong>
                <div>
                    {props.comment.body}
                </div>
            </div>
        </div>
    )
}

export default CommentItem;