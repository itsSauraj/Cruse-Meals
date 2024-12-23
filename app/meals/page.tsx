import Link from 'next/link'

import Loading from './loading-out'
import MealsGrid from '@/components/meals/grid'
import { Suspense } from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "All meals",
  description: "Share and browse meals from all the other cooks from the globe",
  keywords: "browse meals, share meals"
}


const Meals = async () => {
  return (
    <div className="m-10 flex flex-col text-white gap-3">
      <h1 className="text-5xl font-bold">Delecious meals, Created <span className="text-transparent bg-gradient-to-r from-primary to-yellow-500 bg-clip-text">by you</span></h1>
      <p className="text-2xl font-light">
        Choose your favorite meal and cook it yourself! Is is easy and fun.
      </p>
      <Link className="
        w-max
        py-2 px-4 rounded-md
        transition duration-600 ease-in
        hover:bg-gradient-to-r hover:from-yellow-500 hover:to-primary
        flex-grow bg-gradient-to-r from-primary to-yellow-500 text-white" 
        href={'/meals/share'}>Share your favourite Recipe</Link>
      <Suspense fallback={<Loading />}>
        <MealsGrid/>
      </Suspense>
    </div>
  )
}

export default Meals