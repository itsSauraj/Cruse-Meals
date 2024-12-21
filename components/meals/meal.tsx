import Image from "next/image";
import Link from "next/link";

export interface Meal {
    id: string;
    title: string;
    description: string;
    price: number;
    image: string;
}

interface MealProps {
    meal: Meal;
}


const Meal: React.FC<MealProps> = ({ meal }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-4">
            <Image src={meal.image} alt={meal.title} width={300} height={200}
                className="rounded-lg w-full"
            />
            <h3 className="text-xl font-semibold">{meal.title}</h3>
            <p className="mt-2 text-gray-600">{meal.description}</p>
            <Link 
                className="mt-2 text-gray-800 hover:underline" 
                href={`/meals/${meal.id}`}
            >
                See recipe
            </Link>
        </div>
    )
}

export default Meal