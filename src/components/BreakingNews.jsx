import React from 'react';
import { AlertCircle } from 'lucide-react';
import './BreakingNews.css'; // Import your CSS file

// News data with title, image, video, and content
const breakingNews = [
  {
    title: "Global climate summit reaches historic agreement on carbon emissions",
    image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    content: "World leaders unite in unprecedented commitment to reduce global carbon emissions by 50% within the next decade, marking a pivotal moment in the fight against climate change."
  },
  {
    title: "Tech giant announces breakthrough in quantum computing technology",
    image: "https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg?auto=compress&cs=tinysrgb&w=600",
    video: "https://www.w3schools.com/html/movie.mp4",
    content: "A major tech company has announced a significant breakthrough in quantum computing, potentially revolutionizing the industry."
  },
  {
    title: "International markets surge following economic recovery indicators",
    image: "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=600",
    video: "",
    content: "Stock markets worldwide experience significant gains as new economic data suggests stronger than expected recovery from recent challenges."
  }
];

const BreakingNews = ({ onSelectNews }) => {
  return (
    <div className="breaking-news-container">
      <div className="breaking-news-inner">
        <div className="breaking-news-row">
          <div className="breaking-news-label">
            <AlertCircle className="breaking-news-icon" />
            <span className="breaking-news-title">Breaking</span>
          </div>
          <div className="breaking-news-list">
            {breakingNews.map((news, index) => (
              <span
                key={index}
                className="breaking-news-item"
                onClick={() => onSelectNews && onSelectNews(news)}
                tabIndex={0}
                role="button"
              >
                {news.title}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakingNews;
