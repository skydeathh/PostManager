import { useMemo } from 'react';

export const useFilteredPosts = (posts, query) => {
    const filteredPosts = useMemo(() => {
        return posts.filter(p => p.title.toLowerCase().includes(query.toLowerCase()));
    }, [posts, query]);

    return filteredPosts;
}

export const useFilteredAndSortedAndPosts = (posts, sort, query) => {
    const filteredPosts = useFilteredPosts(posts, query);

    const sortedPosts = useMemo(() => {
       return [...filteredPosts].sort((a, b) => a[sort]?.localeCompare(b[sort] || '') || 0);
     }, [filteredPosts, sort]);

    return sortedPosts ;
}