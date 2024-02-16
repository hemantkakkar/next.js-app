import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'

export default function Home() {
  return (
    <main>
      <div><Link href='/users'>Users</Link></div>
      <Link href='/users/new'>NewUserPage</Link>
      <ProductCard></ProductCard>
    </main>
  )
}
