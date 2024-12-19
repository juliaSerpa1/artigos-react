import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ArticleList from './components/ArticleList/ArticleList';
import ArticleDetail from './components/ArticleDetails/ArticleDetail';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<ArticleList />} />
          <Route path="/articles/:slug" element={<ArticleDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;