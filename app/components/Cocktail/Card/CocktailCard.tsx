import './CocktailCard.css'
import Image from 'next/image'

// Returns default cocktail card.
export default function CocktailCard({cocktail}) {
  // Tags associated with cocktail.
  var tags = [];
  if (cocktail.strTags) {
    tags = cocktail.strTags.split(",");
  }

  return (
    <>
      <div class="cocktail-card w-full max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Image
          className="card-image rounded-t-lg"
          src={cocktail.strDrinkThumb}
          alt={cocktail.strDrink}
          width={420}
          height={420}
          priority={false}
        />
        <div class="px-5 py-5">
          <div class="flex items-center justify-between">
            <span class="text-sm text-gray-500 dark:text-white">{cocktail.strCategory}</span>
            <span class="text-sm text-gray-500 dark:text-white">{cocktail.strAlcoholic}</span>
          </div>
          <a href="#">
            <h2 class="my-2 text-gray-900 dark:text-white">{cocktail.strDrink}</h2>
          </a>
          <div class="flex items-center justify-between">
            <div class="card-tags">
              {tags.length > 0 && (
                <div class="pt-4 pb-2">
                  {tags.map((tag) => (
                    <span className="inline-block bg-gray-100 text-gray-500 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300" key={tag.id}>{tag}</span>
                  ))}
                </div>
              )}
            </div>
            <div class="card-view-link">
              <a href="#" class="inline-flex items-center text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-100 font-medium rounded-lg text-sm px-3 py-2 text-center dark:focus:ring-red-900">
              View Recipe
                <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
