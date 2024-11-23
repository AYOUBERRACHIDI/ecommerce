import React from 'react';

const CategoryNavbar = ({ categories, onSelectCategory }) => {
  return (
    
    
    <div className="category-navbar">
      <button onClick={() => onSelectCategory('all')}>Tous</button>
      {categories.map((category) => (
        <button key={category} onClick={() => onSelectCategory(category)}>
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryNavbar;
