import Link from 'next/link'

import MealsGrid from '@/components/meals/grid'

const meals = [
  {
    id: "m1",
    title: "Sushi",
    description: "Finest fish and veggies",
    price: 22.91,
    image: "https://www.shutterstock.com/image-photo/sushi-platter-vibrant-fresh-restaurant-260nw-2497859739.jpg"
  },
  {
    id: "m2",
    title: "Sushi 2",
    description: "Finest fish and veggies",
    price: 22.92,
    image: "https://www.shutterstock.com/image-photo/sushi-platter-vibrant-fresh-restaurant-260nw-2497859739.jpg"
  },
  {
    id: "m3",
    title: "Sushi 3",
    description: "Finest fish and veggies",
    price: 22.93,
    image: "https://www.shutterstock.com/image-photo/sushi-platter-vibrant-fresh-restaurant-260nw-2497859739.jpg"
  },
  {
    id: "m4",
    title: "Sushi 4",
    description: "Finest fish and veggies",
    price: 22.94,
    image: "https://www.shutterstock.com/image-photo/sushi-platter-vibrant-fresh-restaurant-260nw-2497859739.jpg"
  },
] 

const Meals = () => {
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
      <MealsGrid meals={meals}/>
    </div>
  )
}

export default Meals