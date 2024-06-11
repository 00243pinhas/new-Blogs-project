import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'flowbite-react';

export default function BlogList({ blogs, title, onDelete }) {
  return (
    <div className="blog-list">
      <h2 className="text-3xl font-bold mb-6">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <Card className="max-w-sm" key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>
              <img src={`/images/blog/${blog.id}.jpg`} alt={blog.title} className="h-48 w-full object-cover mb-4"/>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {blog.title}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                written by: {blog.author}
              </p>
            </Link>

          </Card>
        ))}
      </div>
    </div>
  );
}
