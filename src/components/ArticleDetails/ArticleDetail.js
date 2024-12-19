import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './articleDetails.css';

const ArticleDetail = () => {
  const { slug } = useParams(); // Pegando o slug da URL
  const [article, setArticle] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/articles/${slug}`)
      .then(response => {
        setArticle(response.data); // Supondo que a resposta seja o artigo
      })
      .catch(error => {
        console.error("Erro ao carregar artigo:", error);
      });
  }, [slug]); // Recarrega o artigo sempre que o slug mudar

  if (!article) return <div className="loading">Carregando...</div>;

  return (
    <div className="article-detail-container">
      <h2 className="article-detail-title">{article.title}</h2>
      <p className="article-detail-resume">{article.resume}</p>
      <div className="article-detail-content">
        <p>{article.article}</p>
      </div>
    </div>
  );
};

export default ArticleDetail;