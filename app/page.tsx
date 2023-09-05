import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import Header from './components/Header'
import CocktailList from './components/Cocktail/CocktailList'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <CocktailList />
    </main>
  )
}
