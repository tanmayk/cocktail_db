"use client"

import React, { useState, useEffect } from 'react'
import Loader from '@/components/Loader'
import RandomCocktailCard from '@/components/Cocktail/RandomCocktail'

// Returns random cocktail list.
export default function RandomCocktailList() {
  return (
    <div className="w-full grid grid-cols-4 gap-4">
      <RandomCocktailCard />
      <RandomCocktailCard />
      <RandomCocktailCard />
      <RandomCocktailCard />
      <RandomCocktailCard />
      <RandomCocktailCard />
      <RandomCocktailCard />
      <RandomCocktailCard />
      <RandomCocktailCard />
      <RandomCocktailCard />
      <RandomCocktailCard />
      <RandomCocktailCard />
    </div>
  )
}
