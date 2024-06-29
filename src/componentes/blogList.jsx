import React from 'react';
// import Card from './Card';

export default function BlogList({ blogs}) {
  return (
    <div className="blog-list">
      {/* <h2 className="text-3xl font-bold mb-6">{title}</h2> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {
      blogs.map((blog) => (
          <div className="card" key={blog.id}>
            <span>{blog.title}</span>
            <span>{blog.body}</span>
          </div>
        ))  

        }

        {console.log(blogs)}
      </div>
    </div>
  );
}
