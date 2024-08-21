import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import '../styles/Search.css';

const Search = () => {
  const [query, setQuery] = useState("");
  const categories = useSelector(state => state.dashboard.categories);

  const filteredWidgets =query? categories
    .flatMap(category => category.widgets)
    .filter(widget => widget.name.toLowerCase().includes(query.toLowerCase())): [];

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search Widgets"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="search-results">
        {filteredWidgets.map(widget => (
          <div key={widget.id} className="search-item">
            <h5>{widget.name}</h5>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
