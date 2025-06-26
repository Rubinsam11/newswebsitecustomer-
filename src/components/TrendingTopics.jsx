import React from 'react';
import { TrendingUp, Hash } from 'lucide-react';
import './TrendingTopics.css';

const TrendingTopics = () => {
  const trends = [
    { topic: 'Climate Summit 2024', posts: '12.5K posts' },
    { topic: 'Tech Innovation', posts: '8.2K posts' },
    { topic: 'Global Markets', posts: '6.8K posts' },
    { topic: 'Space Exploration', posts: '5.1K posts' },
    { topic: 'Renewable Energy', posts: '4.3K posts' }
  ];

  return (
    <div className="trending-topics">
      <div className="trending-topics-header">
        <TrendingUp className="trending-topics-header-icon" />
        <h2 className="trending-topics-title">Trending Topics</h2>
      </div>
      
      <div className="trending-topics-list">
        {trends.map((trend, index) => (
          <div
            key={index}
            className="trending-topics-item"
          >
            <div className="trending-topics-item-main">
              <span className="trending-topics-index">
                {index + 1}
              </span>
              <div>
                <div className="trending-topics-item-topic">
                  <Hash className="trending-topics-hash-icon" />
                  <span className="trending-topics-topic">{trend.topic}</span>
                </div>
                <span className="trending-topics-posts">{trend.posts}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingTopics;