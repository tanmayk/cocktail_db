import Layout from '@/components/Layout'
import CocktailList from '@/components/Cocktail/CocktailList'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <CocktailList />
    </div>
  )
}
