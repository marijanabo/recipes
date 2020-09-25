import React from 'react'
import Recipe from './Recipe'
import Filter from './Filter'
import Categories from './Categories'

const Recipes = ({recipes, filter, setFilter, setCategories}) => {
    return (
        <>
            <header>
                <div><Filter setFilter={setFilter}/></div>
                <div><Categories setCategories={setCategories}/></div>
            </header>
            <h1>recipe ideas</h1>
            {recipes
            .filter(recipe => recipe.strMeal.toLowerCase().includes(filter.toLowerCase()))
            .map(recipe => <Recipe
                                key={recipe.idMeal}
                                title={recipe.strMeal}
                                image={recipe.strMealThumb}
                            />
            )}
        </>
    )
}

export default Recipes