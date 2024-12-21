import { JSX } from "react";

interface Params {
    mealsId: string;
}

interface Props {
    params: Params;
}

const Page: React.FC<Props> = async ({ params }) => {

    const { mealsId } = await params;

    return (
        <div className="bg-black text-white">
            This is a slug received: {mealsId}
        </div>
    );
};

export default Page;
