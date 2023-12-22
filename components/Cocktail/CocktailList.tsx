"use client"

import React, { useState, useEffect } from 'react'
import CardLoader from '@/components/CardLoader'
import CocktailCard from '@/components/Cocktail/Card/CocktailCard'

// Returns cocktail list.
export default function CocktailList({ letter }) {
  // API URL.
  const apiUrl = process.env.NEXT_PUBLIC_API_URL
  // Default state values.
  const [cocktails, setCocktails] = useState(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch cocktail list.
    fetch(`${apiUrl}/search.php?f=${letter}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const contentType = response.headers.get('content-type')
        if (contentType && contentType.includes('application/json')) {
          return response.json()
        }
        else {
          return {drinks: []}
        }
      })
      .then((data) => {
        if (data && data.drinks) {
          const cocktails = data.drinks.sort((a, b) => a.strDrink.localeCompare(b.strDrink));
          // Response has been fetched sucessfully.
          // Set the cocktails & disable the loader.
          setCocktails(cocktails)
          setLoading(false)
        }
      });
  }, [apiUrl, letter]);

  return (
    <>
      {isLoading ? (
        <div className="w-full grid grid-cols-4 gap-4">
          <CardLoader />
          <CardLoader />
          <CardLoader />
          <CardLoader />
          <CardLoader />
          <CardLoader />
          <CardLoader />
          <CardLoader />
        </div>
      ) : (
        <div className="w-full grid grid-cols-4 gap-4">
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
