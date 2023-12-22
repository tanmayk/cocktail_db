import Layout from '@/components/Layout'
import LetterLinks from '@/components/Search/LetterLinks'
import RandomCocktailList from '@/components/Cocktail/RandomCocktailList'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <LetterLinks />
      <div className="py-5 mb-5">
        <h3 className="text-red-600 text-2xl">Let's find you something to drink for the night!!</h3>
      </div>
      <RandomCocktailList />
    </div>
  )
}
