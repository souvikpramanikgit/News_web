import React, { useState, useEffect } from 'react';
import './App.css';

const API_KEY = "a954cdc367ec41089650ccfbb1e2c5bea8";
const url = "https://newsapi.org/v2/everything?q=";

function App() {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState(() => localStorage.getItem("query") || "Top news");
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetchNews(query);
  }, [query]);

  // Save the query to localStorage
  useEffect(() => {
    if (query !== "Top news") {
      localStorage.setItem("query", query);
    }
  }, [query]);

  const fetchNews = async (searchQuery) => {
    setLoading(true);
    setArticles([]);
    try {
      const res = await fetch(`${url}${searchQuery}&apiKey=${API_KEY}`);
      const data = await res.json();
      setArticles(data.articles || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (event) => {
    if (event.key === "Enter" || event.type === "click") {
      if (!searchInput.trim()) {
        return;
      }
      setQuery(searchInput);
    }
  };

  return (
    <div>
      <nav>
        <div className="main-nav container flex">
          <a href="/" className="company-logo">
            <img src="/images/news_web.png" alt="logo" />
          </a>
          <div className="search-bar flex">
            <input
              type="text"
              className="news-input"
              placeholder="e.g. Science"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyPress={handleSearch}
            />
            <button className="search-button" onClick={handleSearch}>
              <span className="search-text">Search</span>
              <i className="fa-solid fa-magnifying-glass" id="search-icon"></i>
            </button>
          </div>
        </div>
      </nav>

      <main>
        <div className="cards-container container flex">
          {loading ? (
            <div className="loading">Loading...</div>
          ) : (
            Array.isArray(articles) && articles.length > 0 ? (
              articles.map((article, index) => {
                // Defensive checks for missing properties
                if (!article.url || !article.urlToImage || !article.title || !article.description) {
                  return null;
                }

                return (
                  <a key={index}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer" className="card">
                    <div className="card-header">
                      <img src={article.urlToImage} alt="news" />
                      <span className="news-source-label">{article.source.name || "Unknown Source"}</span>
                    </div>
                    <div className="card-content">
                      <h3>{article.title.slice(0, 60)}...</h3>
                      <h6 className="news-source">
                        Published At:{" "}
                        {new Date(article.publishedAt).toLocaleDateString("en-GB", {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                        })}
                      </h6>
                      <p className="news-desc">{article.description.slice(0, 150)}...</p>
                    </div>
                  </a>
                );
              })
            ) : (
              <div>No articles found</div>
            )
          )}
        </div>
      </main>

    </div>
  );
}
export default App;
