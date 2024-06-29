import React from 'react';
import BlogList from '../blogList';
import useFetchBlogs from '../useFetch';

export default function Home() {
  const { blogs, isPending, error } = useFetchBlogs();

  return (
    <div className="home">
      {error && <p>{error}</p>}
      {isPending && <p>Loading...</p>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
}