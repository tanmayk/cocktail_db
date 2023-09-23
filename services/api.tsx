import { useQuery } from 'react-query';
import Cocktail from '@/types/Cocktail';

export function useCocktail(id: string) {
  // API URL.
  const apiUrl = process.env.NEXT_PUBLIC_API_URL
  return useQuery<Cocktail, Error>(['cocktail', id], async () => {
    const response = await fetch(`${apiUrl}/lookup.php?i=${id}`)
    if (!response.ok) {
      throw new Error('Network response was not ok.')
    }
    let data = await response.json()
    if (!data || !data.drinks || data.drinks.length === 0) {
      throw new Error('Invalid or empty data received.')
    }
    const cocktailData = data.drinks[0]
    return cocktailData
  });
}
