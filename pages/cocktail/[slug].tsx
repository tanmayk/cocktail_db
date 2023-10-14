import { useRouter } from 'next/router'
import { notFound } from 'next/navigation'
import Head from 'next/head';
import { useCocktail } from '@/services/api'
import Header from '@/components/Header'
import Loader from '@/components/Loader'
import Image from 'next/image'

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
        <div className="flex flex-col items-center justify-between p-24">
          <h1 className="text-red-600 text-4xl">{cocktail.strDrink}</h1>
          <div className="text-blue-950 text-lg my-1">{cocktail.strAlcoholic} - {cocktail.strCategory}</div>
        </div>
        <div className="w-full grid grid-cols-2 gap-4">
          <div className="cocktail-info-wrapper">
            Cocktail Info
          </div>
          <div className="cocktail-img">
            <Image
              className="rounded-t-lg"
              src={cocktail.strDrinkThumb}
              alt={cocktail.strDrink}
              width={420}
              height={420}
              priority={false}
            />
          </div>
        </div>
      </>
    )
  }
  else {
    notFound()
  }
}
