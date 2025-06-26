
import React from 'react';
import { Clock, User, Eye } from 'lucide-react';
import './FeaturedArticle.css';

const FeaturedArticle = ({
  title,
  excerpt,
  image,
  author,
  publishTime,
  readTime,
  views,
  category
}) => {
  return (
    <article className="featured-article">
      <div className="featured-article-image-container">
        <img
          src={image}
          alt={title}
          className="featured-article-image"
        />
        <div className="featured-article-gradient"></div>
        <div className="featured-article-category">
          <span>{category}</span>
        </div>
        <div className="featured-article-content">
          <h1 className="featured-article-title">
            {title}
          </h1>
          <p className="featured-article-excerpt">
            {excerpt}
          </p>
          <div className="featured-article-meta">
            <div className="featured-article-meta-item">
              <User className="featured-article-meta-icon" />
              <span>{author}</span>
            </div>
            <div className="featured-article-meta-item">
              <Clock className="featured-article-meta-icon" />
              <span>{publishTime}</span>
            </div>
            <div className="featured-article-meta-item">
              <Eye className="featured-article-meta-icon" />
              <span>{views}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default FeaturedArticle;

