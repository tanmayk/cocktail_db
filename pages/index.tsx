import Layout from '@/components/Layout'
import LetterLinks from '@/components/Search/LetterLinks'
import RandomCocktailList from '@/components/Cocktail/RandomCocktailList'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <LetterLinks />
      <RandomCocktailList />
    </div>
  )
}
