import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import BreakingNews from './components/BreakingNews';
import FeaturedArticle from './components/FeaturedArticle';
import NewsCard from './components/NewsCard';
import TrendingTopics from './components/TrendingTopics';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import './App.css'; // Make sure you create and import this CSS file

const featuredArticles = [
  {
    title: "Global Climate Summit Reaches Historic Agreement on Carbon Emissions",
    excerpt: "World leaders unite in unprecedented commitment to reduce global carbon emissions by 50% within the next decade, marking a pivotal moment in the fight against climate change.",
    image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    author: "Sarah Johnson",
    publishTime: "2 hours ago",
    readTime: "5 min read",
    views: "12.5K views",
    category: "World"
  },
  {
    title: "Breakthrough in Cancer Research Offers New Hope",
    excerpt: "Scientists have developed a revolutionary treatment that shows promising results in early clinical trials, potentially transforming the landscape of cancer therapy.",
    image: "https://images.pexels.com/photos/5863392/pexels-photo-5863392.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    author: "Dr. Emily Tran",
    publishTime: "4 hours ago",
    readTime: "7 min read",
    views: "8.2K views",
    category: "Health"
  },
  {
    title: "AI Technology Reshapes the Future of Work",
    excerpt: "With AI automating tasks at a rapid pace, companies are adapting by upskilling employees and rethinking traditional job roles.",
    image: "https://images.pexels.com/photos/7394114/pexels-photo-7394114.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    author: "Michael Lee",
    publishTime: "6 hours ago",
    readTime: "6 min read",
    views: "10.1K views",
    category: "Technology"
  },
  {
    title: "Global Markets Surge After Interest Rate Cut",
    excerpt: "Stock markets around the world saw major gains following an unexpected interest rate cut aimed at spurring economic growth.",
    image: "https://images.pexels.com/photos/4386373/pexels-photo-4386373.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    author: "James Patel",
    publishTime: "1 hour ago",
    readTime: "4 min read",
    views: "9.4K views",
    category: "Finance"
  },
  {
    title: "Historic Win for Underdog Team in National Championship",
    excerpt: "In a nail-biting finish, the underdog college basketball team clinched their first national title, stunning fans and rivals alike.",
    image: "https://images.pexels.com/photos/3991875/pexels-photo-3991875.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    author: "Rachel Simmons",
    publishTime: "3 hours ago",
    readTime: "3 min read",
    views: "6.7K views",
    category: "Sports"
  }
];

function App() {

  const mainNews = [{
  title: "Breakthrough in Quantum Computing Sets New Speed Records",
  excerpt: "Scientists unveil a new quantum chip capable of solving complex problems 100 times faster than traditional supercomputers.",
  image: "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
  author: "Anita Desai",
  publishTime: "12 hours ago",
  readTime: "6 min read",
  views: "11.3K views",
  category: "Technology"
},
{
  title: "Major Earthquake Strikes Pacific Region, Relief Efforts Underway",
  excerpt: "A 7.8 magnitude earthquake has hit the Pacific region, triggering massive rescue and humanitarian efforts across multiple countries.",
  image: "https://images.pexels.com/photos/1363876/pexels-photo-1363876.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
  author: "Global News Desk",
  publishTime: "14 hours ago",
  readTime: "5 min read",
  views: "18.6K views",
  category: "World"
},
{
  title: "New Legislation Targets Data Privacy and AI Ethics",
  excerpt: "Governments propose new laws to regulate AI development and protect user privacy in the age of surveillance and automation.",
  image: "https://images.pexels.com/photos/218717/pexels-photo-218717.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
  author: "Jane Mitchell",
  publishTime: "16 hours ago",
  readTime: "8 min read",
  views: "7.9K views",
  category: "Politics"
},
{
  title: "Breakthrough in Cancer Research Offers New Hope",
  excerpt: "Researchers develop a new therapy showing promise in shrinking aggressive tumors with fewer side effects.",
  image: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
  author: "Health Weekly",
  publishTime: "18 hours ago",
  readTime: "7 min read",
  views: "10.1K views",
  category: "Health"
},
{
  title: "Wildlife Conservation Efforts Lead to Record Population Growth",
  excerpt: "Endangered species like the snow leopard and mountain gorilla show remarkable recovery thanks to conservation programs.",
  image: "https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
  author: "Environmental Watch",
  publishTime: "20 hours ago",
  readTime: "4 min read",
  views: "6.7K views",
  category: "Environment"
}
];
  const sideNews = [
  {
    title: "Olympic Games Set New Viewership Records",
    excerpt: "This year's games attract global audience of over 3 billion viewers.",
    image: "https://images.pexels.com/photos/1263348/pexels-photo-1263348.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    author: "Sports Desk",
    publishTime: "3 hours ago",
    readTime: "3 min read",
    views: "5.2K views",
    category: "Sports"
  },
  {
    title: "New Archaeological Discovery Rewrites Ancient History",
    excerpt: "Excavation reveals 5,000-year-old civilization previously unknown to science.",
    image: "https://images.pexels.com/photos/4207892/pexels-photo-4207892.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    author: "History Team",
    publishTime: "5 hours ago",
    readTime: "4 min read",
    views: "7.1K views",
    category: "Science"
  },
  {
    title: "Celebrity Chef Opens Sustainable Restaurant Chain",
    excerpt: "Famous chef launches eco-friendly dining concept across major cities.",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    author: "Food & Lifestyle",
    publishTime: "7 hours ago",
    readTime: "2 min read",
    views: "3.8K views",
    category: "Entertainment"
  },
  {
    title: "Mental Health Apps Show Promising Results in Clinical Trials",
    excerpt: "Digital therapy platforms demonstrate effectiveness comparable to traditional treatment.",
    image: "https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    author: "Health Reporter",
    publishTime: "9 hours ago",
    readTime: "4 min read",
    views: "6.4K views",
    category: "Health"
  },
  {
    title: "Electric Vehicle Sales Reach All-Time High",
    excerpt: "EV adoption accelerates with new models and improved charging infrastructure.",
    image: "https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    author: "Auto News",
    publishTime: "11 hours ago",
    readTime: "3 min read",
    views: "4.9K views",
    category: "Technology"
  },

 

  {
    title: "City Launches Free Internet Program for Low-Income Families",
    excerpt: "A new initiative provides free high-speed Wi-Fi access to underserved communities.",
    image: "https://images.pexels.com/photos/4428100/pexels-photo-4428100.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    author: "Urban Affairs",
    publishTime: "13 hours ago",
    readTime: "3 min read",
    views: "4.2K views",
    category: "Local"
  },
  {
    title: "Famous Author Announces Surprise Sequel to Bestselling Novel",
    excerpt: "Fans rejoice as unexpected continuation of the beloved book series is confirmed.",
    image: "https://images.pexels.com/photos/356362/pexels-photo-356362.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    author: "Book World",
    publishTime: "15 hours ago",
    readTime: "2 min read",
    views: "5.9K views",
    category: "Entertainment"
  },
  {
    title: "Record Heatwave Grips Multiple Continents",
    excerpt: "Scientists warn of extreme weather events as temperatures continue to rise globally.",
    image: "https://images.pexels.com/photos/19670/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    author: "Climate Watch",
    publishTime: "17 hours ago",
    readTime: "4 min read",
    views: "12.2K views",
    category: "Environment"
  },
  {
    title: "Local Tech Startups Thrive in Post-Pandemic Boom",
    excerpt: "The city's innovation sector reports record funding and rapid job growth.",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    author: "Startup Weekly",
    publishTime: "19 hours ago",
    readTime: "5 min read",
    views: "3.1K views",
    category: "Business"
  },
  {
    title: "Wildlife Photography Exhibition Opens Downtown",
    excerpt: "Stunning images from around the globe now on display at the city museum.",
    image: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    author: "Culture Today",
    publishTime: "21 hours ago",
    readTime: "2 min read",
    views: "2.7K views",
    category: "Culture"
  }
];

  // Auto-scroll logic for featured articles
  const [currentFeatured, setCurrentFeatured] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeatured((prev) => (prev + 1) % featuredArticles.length);
    }, 4000); // Change slide every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app-container">
      <Header />
      <BreakingNews />
      
      <main className="main-content">
        {/* Featured Articles Auto-scroll Section */}
        <section className="section">
          <div className="featured-carousel">
            <FeaturedArticle {...featuredArticles[currentFeatured]} />
            <div className="featured-carousel-dots">
              {featuredArticles.map((_, idx) => (
                <span
                  key={idx}
                  className={`featured-carousel-dot${idx === currentFeatured ? ' active' : ''}`}
                  onClick={() => setCurrentFeatured(idx)}
                />
              ))}
            </div>
          </div>
        </section>

        <div className="grid-layout">
          {/* Main Content */}
          <div className="main-news">
            <div className="section-header">
              <h2 className="section-title">Latest News</h2>
              <button className="view-all-button">View All</button>
            </div>
            
            <div className="news-grid">
              {mainNews.map((article, index) => (
                <NewsCard key={index} {...article} size="medium" />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="sidebar">
            {/* Trending Topics */}
            <TrendingTopics />

            {/* Side News */}
            <div className="sidebar-box">
              <h3 className="sidebar-title">More Stories</h3>
              <div className="sidebar-list">
                {sideNews.map((article, index) => (
                  <NewsCard key={index} {...article} size="small" />
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <Newsletter />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
