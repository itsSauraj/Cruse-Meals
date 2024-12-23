
declare global {
    declare namespace AppTypes{
        interface Meal {
            id: string;
            title: string;
            summary: string;
            instructions: string;
            image: string;
            creator: string;
            creator_email: string;
        }

        interface MealFormData {
            id: string;
            title: string;
            summary: string;
            instructions: string;
            creator: string;
            creator_email: string;
            image: File 

        }
    
    }
}

export {};