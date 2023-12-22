import React from 'react';

// Returns the ingredients for cocktail.
export default function Ingredients({cocktail}) {
  const ingredientElements = [];
  for (let index = 1; index <= 15; index++) {
    const ingredientKey = `strIngredient${index}`;
    const measureKey = `strMeasure${index}`;
    const ingredientValue = cocktail[ingredientKey];
    const measureValue = cocktail[measureKey];

    if (ingredientValue && ingredientValue.trim() !== '') {
      // If ingredient is not empty, include the measurement as well.
      const ingredientText = measureValue
        ? `${ingredientValue} - ${measureValue}`
        : ingredientValue;
      ingredientElements.push(
        <li key={ingredientKey}>{ingredientText}</li>
      );
    }
  }

  return (
    <div>
      <ul>
        {ingredientElements}
      </ul>
    </div>
  );
}
