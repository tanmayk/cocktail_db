import styles from './CocktailCard.module.css'
import Image from 'next/image'
import Link from 'next/link'

// Returns default cocktail card.
export default function CocktailCard({cocktail}) {
  const cocktailName = cocktail.strDrink
  const cocktailUrlName = cocktailName.toLowerCase().replace(/ /g, '-')
  const encodedName = encodeURIComponent(cocktailUrlName)
  const cocktailSlug = `${encodedName}-${cocktail.idDrink}`
  const cocktailHref = `/cocktail/${cocktailSlug}`
  return (
    <>
      <div className="cocktail-card w-full max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Image
          className="card-image rounded-t-lg"
          src={cocktail.strDrinkThumb}
          alt={cocktail.strDrink}
          width={420}
          height={420}
          priority={false}
        />
        <div className="px-5 py-5">
          <Link href={cocktailHref}>
            <h2 className="my-2 text-gray-900 dark:text-white">{cocktailName}</h2>
          </Link>
        </div>
      </div>
    </>
  )
}
