import { kategorie } from "./Consts";

export const PrzyciskiKategorii = ({ selectedCategory, setSelectedCategory }) => {
    return (
      <div>
        <h3>Filtruj kategorię</h3>
        {kategorie.map((category, index) => (
          <button 
            key={index} 
            className="filtr-button"
            onClick={() => setSelectedCategory(category)}
            >
              {category}
          </button>
        ))}
      </div>
    );
  };
  