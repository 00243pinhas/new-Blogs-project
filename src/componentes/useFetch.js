import React, {useContext,useEffect} from 'react';
import { BlogContext } from './contex';


const useFetchBlogs = () => {
  const { blogs, setBlogs, isPending, setIsPending, error, setError } = useContext(BlogContext);

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      try {
        const url ='http://127.0.0.1:5000/blogs';
        
        setTimeout(async () => {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error('Oops ... You are Lost...');
          }
          const data = await response.json();
          setBlogs(data); 
          setIsPending(false);
          setError(null);
        }, 2000);
      } catch (error) {
        setError(error.message);
        setIsPending(false);
      }
    };

    fetchData();

    
    return () => clearTimeout(fetchData);

  }, [ setBlogs, setIsPending, setError]);

  return { blogs, isPending, error };
};

export default useFetchBlogs;
