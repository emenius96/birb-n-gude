import { useState } from 'react';
import styles from '../../styles/Recipe.module.css';

export default function Recipes() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const recipes = [
    { id: 1, name: 'Spaghetti Bolognese', imgSrc: '/images/spaghetti bolognese.png', ingredients: ['Pasta', 'Minced Meat', 'Tomato Sauce'], story: 'A classic Italian dish that is loved worldwide.' },
    { id: 2, name: 'Roast Chicken', imgSrc: '/images/roast chicken.jpg', ingredients: ['Whole Chicken', 'Herbs', 'Garlic'], story: 'Perfectly roasted chicken with crispy skin.' },
    { id: 3, name: 'Vegetable Stir Fry', imgSrc: '/images/vegetable stir fry.png', ingredients: ['Mixed Vegetables', 'Soy Sauce', 'Ginger'], story: 'A quick and healthy meal option.' },
    { id: 4, name: 'Spaghetti Bolognese', imgSrc: '/images/spaghetti-bolognese.jpg', ingredients: ['Pasta', 'Minced Meat', 'Tomato Sauce'], story: 'A classic Italian dish that is loved worldwide.' },
    { id: 5, name: 'Roast Chicken', imgSrc: '/images/roast-chicken.jpg', ingredients: ['Whole Chicken', 'Herbs', 'Garlic'], story: 'Perfectly roasted chicken with crispy skin.' },
    { id: 6, name: 'Vegetable Stir Fry', imgSrc: '/images/vegetable-stir-fry.jpg', ingredients: ['Mixed Vegetables', 'Soy Sauce', 'Ginger'], story: 'A quick and healthy meal option.' },
    { id: 7, name: 'Spaghetti Bolognese', imgSrc: '/images/spaghetti-bolognese.jpg', ingredients: ['Pasta', 'Minced Meat', 'Tomato Sauce'], story: 'A classic Italian dish that is loved worldwide.' },
    { id: 8, name: 'Roast Chicken', imgSrc: '/images/roast-chicken.jpg', ingredients: ['Whole Chicken', 'Herbs', 'Garlic'], story: 'Perfectly roasted chicken with crispy skin.' },
    { id: 9, name: 'Vegetable Stir Fry', imgSrc: '/images/vegetable-stir-fry.jpg', ingredients: ['Mixed Vegetables', 'Soy Sauce', 'Ginger'], story: 'A quick and healthy meal option.' },
  ];

  const handlePopup = (recipe) => {
    setSelectedRecipe(recipe);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedRecipe(null);
  };

  return (
    <div className={styles.container}>
      <h1 className="text-4xl font-bold mb-4 text-black">Recipes</h1>
      <div className={styles.recipeGrid}>
        {recipes.map((recipe) => (
          <div key={recipe.id} className={styles.recipeCard} onClick={() => handlePopup(recipe)}>
            <img src={recipe.imgSrc} alt={recipe.name} />
            <h2>{recipe.name}</h2>
          </div>
        ))}
      </div>
      
      {showPopup && selectedRecipe && (
        <div className={styles.popup}>
          <div className={styles.popupBackground} onClick={handleClosePopup} />
          <div className={styles.popupContent}>
            <h2>{selectedRecipe.name}</h2>
            <img src={selectedRecipe.imgSrc} alt={selectedRecipe.name} className={styles.popupImage} />
            <h3>Ingredients:</h3>
            <ul>
              {selectedRecipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <p>{selectedRecipe.story}</p>
            <button onClick={handleClosePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
