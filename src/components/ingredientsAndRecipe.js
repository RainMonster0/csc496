import * as React from 'react'
import { recipeGridContainer, recipeIngredientsContainer, recipeInstructionsContainer } from './layout.module.css'

const ListOfIngredients = ({ data }) => {
    let ingredients = ""
    function stringOfIngredients(item) {
        ingredients += '<p>' + item + '</p>'
    }

    data.nodeFood?.ingredients.forEach(stringOfIngredients)

    return (
        <>
        <div className={recipeGridContainer}>
            
            <div className={recipeIngredientsContainer}>
                <h4>Ingredients</h4>
                <div dangerouslySetInnerHTML={{ __html: ingredients }} />
            </div>     
        
            <div className={recipeInstructionsContainer}>
                <h3>Recipe Instructions</h3>
                <div dangerouslySetInnerHTML={{ __html: data.nodeFood?.recipeInstruction.processed }}/>
            </div>
        </div>
        </>
        
    )
}
export default ListOfIngredients