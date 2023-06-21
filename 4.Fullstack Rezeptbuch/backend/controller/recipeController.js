import db from '../lowdbConfig.js'
import { v4 as uuid } from 'uuid'

// Get all recipes
export async function getAllRecipes(req,res) {
  await db.read()
  res.send(db.data)
}

// Add new recipe

export async function addNewRecipe(req,res) {
  await db.read()
  const newRecipe = req.body;
  newRecipe.id === uuid()
  db.data.push(newRecipe)
  db.write()
  res.send(newRecipe)
}