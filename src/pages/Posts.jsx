import React, { useState, useEffect } from 'react';
import '../styles/App.css'
import PostList from '../components/PostList';
import PostForm from '../components/PostForm';
import PostFilter from '../components/PostFilter';
import MainModal from '../components/UI/MainModal/MainModal'
import MainButton from '../components/UI/button/MainButton';
import { useFilteredAndSortedAndPosts } from '../hooks/usePosts';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
import { useFetching } from '../hooks/useFetching';
import { getPagesCount } from '../components/utils/page';
import Pagination from '../components/UI/pagination/Pagination';

function Posts() {
  let [posts, setPost] = useState([]);

  let [filter, setFilter] = useState({ sort: '', query: '' });
  let [modal, setModal] = useState(false);
  let [totalPages, setTotalPages] = useState(0);
  let [limit, setLimit] = useState(5);
  let [page, setPage] = useState(1);

  const sortedPosts = useFilteredAndSortedAndPosts(posts, filter.sort, filter.query);

  const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page);
    const totalCount = (response.headers['x-total-count']);
    console.log(response)
    setTotalPages(getPagesCount(totalCount, limit));
    setPost(response.data)
  });

  useEffect(() => {
    fetchPosts(limit, page);
  }, []);


  const createNewPost = (newPost) => {
    setPost([...posts, newPost]);
    setModal(false);
  }

  const removePost = (post) => {
    setPost(posts.filter(p => p.id !== post.id));
  }

  const changePage = (page) => {
    setPage(page);
    fetchPosts(limit, page);
  }

  return (
    <div className="App">
      <MainButton onClick={() => setModal(true)}>
        Создать пост
      </MainButton>
      <MainModal visible={modal} setVisible={setModal}>
        <PostForm create={createNewPost} />
      </MainModal>

      <hr style={{ margin: '15px' }}></hr>
      <PostFilter filter={filter} setFilter={setFilter} />
      {
        isPostsLoading
          ? <div style={{ display: 'flex', justifyContent: 'center' }}><Loader /></div>
          : <PostList remove={removePost} posts={sortedPosts} title={'Посты'} />
      }
      <Pagination
        page={page}
        changePage={changePage}
        totalPages={totalPages} />
    </div >
  );
}

export default Posts;
