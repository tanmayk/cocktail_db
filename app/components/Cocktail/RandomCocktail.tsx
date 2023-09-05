"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import Loader from '../Loader'
import CocktailCard from './Card/CocktailCard'

// Returns random cocktail card.
export default function RandomCocktailCard() {
  // API URL.
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  // Default state values.
  const [cocktail, setCocktail] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch random cocktail.
    fetch(`${apiUrl}/random.php`)
      .then((response) => response.json())
      .then((data) => {
        const cocktail = data.drinks[0];
        // Response has been fetched sucessfully.
        // Set the cocktail & disable the loader.
        setCocktail(cocktail);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <CocktailCard
          cocktail={cocktail}
        />
      )}
    </>
  )
}
