import { useRouter } from 'next/router'
import { notFound } from 'next/navigation'
import Head from 'next/head';
import { useCocktail } from '@/services/api'
import Header from '@/components/Header'
import Loader from '@/components/Loader'

export default function CocktailPage() {
  const router = useRouter()
  const { slug } = router.query
  const regex = /(\d+)$/
  const match = slug ? slug.toString().match(regex) : null

  const isLoading = !match
  const isError = false

  if (isLoading) {
    return <Loader />
  }

  if (match) {
    const id = parseInt(match[0], 10)
    const { data: cocktail } = useCocktail(id)

    if (!cocktail) {
      return <div>Cocktail not found</div>
    }

    return (
      <>
        <Head>
          <title>{cocktail.strDrink}</title>
        </Head>
        <div className="min-h-screen p-24">
          <h1>{cocktail.strDrink}</h1>
        </div>
      </>
    )
  }
  else {
    notFound()
  }
}
