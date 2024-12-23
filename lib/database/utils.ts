import sql from 'better-sqlite3'

const db = sql('cruse_eats.db')

export async function getMeals() {
  return db.prepare('SELECT * FROM meals').all() as AppTypes.Meal[]
}

export async function getMeal(slug: string) {
  const obj = {
    slug: slug
  }
  return db.prepare('SELECT * FROM meals WHERE id = @slug').get(obj) as AppTypes.Meal
}

export const createNewRecipe = async (data: AppTypes.Meal) => {
  const insertMeal = db.prepare(`
    INSERT INTO meals (id, title, summary, instructions, creator, creator_email, image)
    VALUES (@id, @title, @summary, @instructions, @creator, @creator_email, @image)
  `);
  insertMeal.run(data)
}