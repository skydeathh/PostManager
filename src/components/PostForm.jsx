import React, { useState } from 'react';
import MainButton from './UI/button/MainButton';
import MainInput from './UI/input/MainInput';

const PostForm = ({ create }) => {
    let [post, setNewPost] = useState({ title: '', body: '' });

    let addNewPost = (event) => {
        event.preventDefault();

        const newPost = {
            ...post,
            id: Date.now(),
        };
        create(newPost);

        setNewPost({ title: '', body: '' });
    }

    return (
        <form>
            <MainInput
                value={post.title}
                onChange={e => setNewPost({ ...post, title: e.target.value })}
                type='text'
                placeholder='post title' />
            <MainInput
                value={post.body}
                onChange={e => setNewPost({ ...post, body: e.target.value })}
                type='text'
                placeholder='post description'
            />
            <MainButton onClick={addNewPost}>Create post</MainButton>
        </form>
    )
}

export default PostForm;