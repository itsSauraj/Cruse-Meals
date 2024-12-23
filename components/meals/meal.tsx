import Image from "next/image";
import Link from "next/link";

interface MealProps {
    meal: AppTypes.Meal;
}

const Meal: React.FC<MealProps> = ({ meal }) => {
    return (
        <div className="bg-semiblack shadow-lg rounded-lg p-4 flex flex-col gap-2
            hover:scale-[1.05] transition-all duration-300
        "
            style={{
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
            }}
        >
            <Image src={meal.image} alt={meal.title} width={300} height={200}
                className="rounded-lg w-full max-h-[210px]"
            />
            <div className="flex gap-0 flex-col">
                <h3 className="text-xl font-semibold">{meal.title}</h3>
                <em className="text-sm text-gray-400 mt-[-8px]">by {meal.creator}</em>
            </div>
            <p className="mt-2 text-white overflow-hidden text-ellipsis text-nowrap w-[100%]">{meal.summary}</p>
            <Link 
                className="w-max
                self-end
                py-2 px-4 rounded-md
                transition duration-600 ease-in
                hover:bg-gradient-to-r hover:from-yellow-500 hover:to-primary
                flex-grow bg-gradient-to-r from-primary to-yellow-500 text-white"  
                href={`/meals/${meal.id}`}
            >
                View Details
            </Link>
        </div>
    )
}

export default Meal