import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './articleList.css';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/articles')
      .then(response => {
        setArticles(response.data);
      })
      .catch(error => {
        console.error("Erro ao carregar artigos:", error);
      });
  }, []);

  return (
    <div className="article-list-container">
      <h2 className="article-list-title">Lista de Artigos</h2>
      <ul className="article-list">
        {articles.map((article) => (
          <li key={article.slug} className="article-item">
            <Link to={`/articles/${article.slug}`} className="article-link">
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleList;