import React from 'react';
import './NewsCard.css';

const categoryColors = {
  World: '#2563eb',
  Technology: '#7c3aed',
  Politics: '#f59e42',
  Health: '#10b981',
  Business: '#fbbf24',
  Science: '#6366f1',
  Environment: '#059669',
  Sports: '#f43f5e',
  Entertainment: '#e11d48',
  Local: '#0ea5e9',
  Culture: '#f472b6',
  Finance: '#a21caf',
  Default: '#64748b'
};

const NewsCard = ({
  title,
  excerpt,
  image,
  author,
  publishTime,
  readTime,
  views,
  category,
  size
}) => (
  <div className={`news-card news-card-${size || 'medium'}`}>
    <div className="news-card-image-container">
      <img src={image} alt={title} className="news-card-image" />
      <span
        className="news-card-category"
        style={{ background: categoryColors[category] || categoryColors.Default }}
      >
        {category}
      </span>
    </div>
    <div className="news-card-content">
      <h3 className="news-card-title">{title}</h3>
      <p className="news-card-excerpt">{excerpt}</p>
      <div className="news-card-meta">
        <span className="news-card-author-meta">{author}</span>
        <span className="news-card-dot">•</span>
        <span className="news-card-publish-meta">{publishTime}</span>
        <span className="news-card-dot">•</span>
        <span className="news-card-read-meta">{readTime}</span>
        <span className="news-card-dot">•</span>
        <span className="news-card-views-meta">{views}</span>
      </div>
    </div>
  </div>
);

export default NewsCard;
