import express from 'express'
import cors from 'cors'
import { getAllRecipes, addNewRecipe } from './controller/recipeController.js'

const PORT = 3005

const app = express()

app.use(express.json()) //Damit wir in unserem request/response cycle mit JSOn arbeiten können

app.use(cors()); // Damit wir von unserem Frontend auf das Backend zugreifen können

app.get('/recipes', getAllRecipes)
app.post('/recipes',  addNewRecipe)


app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
})