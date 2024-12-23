'use server';

import fs from 'node:fs'

import { redirect } from 'next/navigation';

import { v4 as uuid4 } from 'uuid'
import xss from 'xss'

import { createNewRecipe } from '@/lib/database/utils'
import { revalidatePath } from 'next/cache';

export const handleFormSubmit = async (formData: FormData) => {
    const newMeal = {
      id: uuid4(),
      creator: formData.get('creator') as string,
      creator_email: formData.get('creator_email') as string,
      title: formData.get('title') as string,
      summary: formData.get('summary') as string,
      instructions: formData.get('instructions') as string,
      image: formData.get('image') as File
    }
    const cleanedData = cleanData(newMeal)
    const extension = cleanedData.image.type.split('/').pop();
    const filePath: string = `/images/${uuid4()}.${extension}`

    const dbData: AppTypes.Meal = {
      ...cleanedData,
      image: filePath
    }

    await uploadImage(cleanedData.image, filePath)
    await createNewRecipe(dbData)
    revalidatePath("/meals", 'layout')
    redirect('/meals')
  }


const cleanData = (data: Omit<AppTypes.MealFormData, 'image'>): AppTypes.MealFormData => {
  
  for (const key in data) {
    if (typeof data[key as keyof Omit<AppTypes.MealFormData, 'image'>] === 'string') {
      data[key as keyof Omit<AppTypes.MealFormData, 'image'>] = xss(data[key as keyof Omit<AppTypes.MealFormData, 'image'>] as string);
    }
  }

  return data as AppTypes.MealFormData;
}


const uploadImage = async (image: File, filepath: string) => {
  const stream = fs.createWriteStream(`public${filepath}`)
  const bufferImage = await image.arrayBuffer();
  stream.write(Buffer.from(bufferImage), (error) => {
    throw new Error("Error uploading new recipie")
  })
}