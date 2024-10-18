/* eslint-disable react/prop-types */
import 'bootstrap/dist/css/bootstrap.min.css';

const Category = ({ selectedCategory, setCategory }) => {
  const categories = ['All', 'Pop', 'Rock', 'Hip-Hop', 'Jazz'];

  return (
    <div className="category-list text-center">
      <h5 className="mb-3">Categories</h5>
      <div className="d-flex justify-content-center">
        <ul className="list-group list-group-horizontal mb-5">
          {categories.map((category, index) => (
            <li 
              key={index} 
              className={`list-group-item ${category === selectedCategory ? 'active' : ''}`}
              onClick={() => setCategory(category)}
              style={{ cursor: 'pointer' }}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Category;
