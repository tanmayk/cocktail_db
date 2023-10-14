import Link from 'next/link'

export default function LetterLinks() {
  const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return (
    <div className="flex w-full py-2 px-1 mb-2 text-center">
      <div className="w-full max-w-screen-xl relative">
        {alphabets.split('').map((letter) => (
          <Link key={letter} className="text-rose-600 font-bold my-1 mx-2" href={`/search/${letter.toLowerCase()}`}>{letter}</Link>
        ))}
      </div>
    </div>
  )
}
