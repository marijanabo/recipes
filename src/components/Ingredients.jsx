import React, { useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getByTitle } from '../service'

const Ingredients = ({recipes, setRecipes}) => {
    const name = useParams().title
    const recipe = recipes.find(recipe => recipe.strMeal === name)

    useEffect(() => {
        getByTitle(name).then(res => {
            setRecipes(res.data.meals)
        })
    },[name, setRecipes])

    return(
        <div className="recipe-details">
            <header></header>
            <h2>{recipe.strMeal}</h2>
            <img src={recipe.strMealThumb} alt=""></img>
            <h3>Instructions</h3>
            <p className="recipe-instructions">{recipe.strInstructions}</p>
            {/* {ingredients.map(ingredient => <p key={ingredient}>{ingredient}</p>)} */}
            <a href={recipe.strSource}><button className="link">Click here to view full recipe</button></a>
        </div>
    )
}

export default Ingredients