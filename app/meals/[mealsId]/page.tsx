import { getMeal } from "@/lib/database/utils" 
import Image from 'next/image'

import Instructions from "@/components/meals/instructions";
import { notFound } from "next/navigation";



interface Params {
    mealsId: string;
}

interface Props {
    params: Params;
}
export async function generateMetadata({ params }: Props){
    const { mealsId } = await params;
    const meal = await getMeal(mealsId)

    if (!meal) {
        notFound();
    }

    return {
        title: meal.title,
        description: meal.summary,
        keywords: meal.summary.split(' ')
    }
}

const Page: React.FC<Props> = async ({ params }) => {

    const { mealsId } = await params;
    const meal = await getMeal(mealsId)

    if (!meal) {
        notFound();
    }

    return (
        <div className="m-10 flex flex-col text-white gap-3 items-center">
            <div className="flex gap-20 flex-col lg:flex-row">
                <div className="w-[100%] lg:w-[512px] max-h-[300px] rounded-md overflow-hidden">
                    <Image src={meal.image} alt={meal.title} width={1024} height={800}
                        className="scale-110 hover:scale-125 hover:rotate-[-5deg] 
                        transition-all ease-linear duration-300"
                    />
                </div>
                <div className="flex flex-col gap-3 max-w-[100%] lg:max-w-[50%]">
                    <div>
                        <h1 className="text-5xl font-bold">{meal.title}</h1>
                        <em>by <a href={`mailto:${meal.creator_email}`} target="blank" className="text-lg bg-gradient-to-r text-transparent bg-clip-text from-primary to-yellow-400">{meal.creator}</a></em>
                    </div>

                    <p className="font-light text-sm text-justify">
                        {meal.summary}
                    </p>
                </div>
            </div>
            <Instructions instructions={meal.instructions} />
        </div>
    );
};

export default Page;
