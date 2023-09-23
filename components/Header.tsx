import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <div className="flex bg-white border-b border-gray-200 fixed top-0 inset-x-0 z-100 h-16 items-center">
      <div className="w-full max-w-screen-xl relative px-6">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Cocktail DB Logo"
            className="dark:invert block"
            width={64}
            height={64}
            priority
          />
        </Link>
      </div>
    </div>
  )
}
