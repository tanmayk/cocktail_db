import { useRouter } from 'next/router'
import Head from 'next/head';
import LetterLinks from '@/components/Search/LetterLinks'
import CocktailList from '@/components/Cocktail/CocktailList'

export default function CocktailListPage() {
  const router = useRouter()
  const { slug } = router.query
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <LetterLinks />
      <CocktailList letter={slug} />
    </div>
  )
}
