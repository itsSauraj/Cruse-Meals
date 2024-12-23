const sqlite3 = require('better-sqlite3')

const dummyMeals = [
    {
      id: "m1",
      title: "Sushi",
      summary: "Finest fish and veggies",
      instructions: `
      <ol>
        <li>1. Unwrap <li/>
        <li>2. Boil the noodles <li/>
        <li>3. Mix vigies <li/>
        <li>4. Cook for 5 mins <li/>
        <li>5. Enjoy <li/>
      </ol>
      `,
      creator: "user",
      creator_email: "user@deveats.com",
      image: "https://www.shutterstock.com/image-photo/sushi-platter-vibrant-fresh-restaurant-260nw-2497859739.jpg"
    },
    {
      id: "m2",
      title: "Sushi 2",
      summary: "Finest fish and veggies",
      instructions: " \
        1. Unwrap \
        2. Boil the noodles \
        3. Mix vigies \
        4. Cook for 5 mins \
        5. Enjoy \
      ",
      creator: "user",
      creator_email: "user@deveats.com",
      image: "https://www.shutterstock.com/image-photo/sushi-platter-vibrant-fresh-restaurant-260nw-2497859739.jpg"
    },
    {
      id: "m3",
      title: "Sushi 3",
      summary: "Finest fish and veggies",
      instructions: " \
        1. Unwrap \
        2. Boil the noodles \
        3. Mix vigies \
        4. Cook for 5 mins \
        5. Enjoy \
      ",
      creator: "user",
      creator_email: "user@deveats.com",
      image: "https://www.shutterstock.com/image-photo/sushi-platter-vibrant-fresh-restaurant-260nw-2497859739.jpg"
    },
    {
      id: "m4",
      title: "Sushi 4",
      summary: "Finest fish and veggies",
      instructions: " \
        1. Unwrap \
        2. Boil the noodles \
        3. Mix vigies \
        4. Cook for 5 mins \
        5. Enjoy \
      ",
      creator: "user",
      creator_email: "user@deveats.com",
      image: "https://www.shutterstock.com/image-photo/sushi-platter-vibrant-fresh-restaurant-260nw-2497859739.jpg"
    },
  ]


const db = sqlite3('cruse_eats.db')
const CREATE_TABLE = `
  CREATE TABLE IF NOT EXISTS meals (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    summary TEXT NOT NULL,
    instructions TEXT NOT NULL,
    creator TEXT NOT NULL,
    creator_email TEXT NOT NULL,
    image TEXT NOT NULL
  )
`
db.prepare(CREATE_TABLE).run()

async function init() {
  const insertMeal = db.prepare(`
    INSERT INTO meals (id, title, summary, instructions, creator, creator_email, image)
    VALUES (@id, @title, @summary, @instructions, @creator, @creator_email, @image)
  `);

  const insertMany = db.transaction((meals) => {
    for (const meal of meals) {
      insertMeal.run(meal);
    }
  });

  insertMany(dummyMeals);
}

init().catch((err) => {
  console.error('Error initializing database:', err);
});