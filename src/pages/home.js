import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsItem from '../components/news-items';

const NewsList = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
          params: {
            country: 'id',
            apiKey: '11845822847b405f89e930005dbc79b0' // Ganti dengan API key dari https://newsapi.org/
          }
        });
        setArticles(response.data.articles);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching the news', error);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <p>Loading news...</p>;
  }

  return (
    <>
    <div className="news-list">
      {articles.map((article, index) => (
        <NewsItem key={index} article={article} />
      ))}
    </div>
    </>
  );
};

export default NewsList;
