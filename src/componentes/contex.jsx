import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  return (
    <BlogContext.Provider value={{ blogs, setBlogs, isPending, setIsPending, error, setError }}>
      {children}
    </BlogContext.Provider>
  );
};

BlogProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
