"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import Loader from '../Loader'
import CocktailCard from './Card/CocktailCard'

// Returns random cocktail card.
export default function CocktailList() {
  // API URL.
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  // Default state values.
  const [cocktails, setCocktails] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch random cocktail.
    fetch(`${apiUrl}/search.php?f=a`)
      .then((response) => response.json())
      .then((data) => {
        const cocktails = data.drinks;
        // Response has been fetched sucessfully.
        // Set the cocktails & disable the loader.
        setCocktails(cocktails);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div class="grid grid-cols-4 gap-4">
        {cocktails.map((cocktail) => (
          <CocktailCard
            key={cocktail.idDrink}
            cocktail={cocktail}
          />
        ))}
        </div>
      )}
    </>
  )
}
