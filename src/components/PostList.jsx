import React from 'react';
import PostItem from './PostItem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const PostList = ({ posts, title, remove }) => {
    if (posts.length === 0) {
        return (
            <h1 style={{ textAlign: 'center' }}>Посты не найдены!!!</h1>
        )
    }

    return (
        <div>
            <h1 className='header'>{title}</h1>
            <div className='postList'>
                <TransitionGroup>
                    {posts.map((p, index) =>
                        <CSSTransition
                        key={p.id}
                        timeout={500}
                        classNames='post'>
                            <PostItem remove={remove} number={index + 1} post={p} key={p.id}></PostItem>
                        </CSSTransition>
                    )}
                </TransitionGroup>
            </div>
        </div>
    )
}

export default PostList;
